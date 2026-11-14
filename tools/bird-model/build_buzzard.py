#!/usr/bin/env python3
"""
Original Carrion Buzzard — 100% authored in this file.

Professional pipeline (headless Blender):
  blockout -> high-poly sculpt detail -> clean retopo (joint loops) ->
  efficient UVs -> bake normal/AO/curvature -> layered PBR textures ->
  layered alpha feather cards -> weight painting -> flight actions ->
  compressed GLB (hi + lo LOD).

No third-party bird meshes are imported. Concept-01 is the visual target.

Run:
  blender --background --python tools/bird-model/build_buzzard.py -- --mode blockout
  blender --background --python tools/bird-model/build_buzzard.py -- --mode all
"""
from __future__ import annotations

import argparse
import math
import os
import subprocess
import sys
import traceback
from pathlib import Path

import bpy
import bmesh
from mathutils import Vector, Matrix, Euler, noise as mu_noise

try:
    sys.stdout.reconfigure(line_buffering=True)
    sys.stderr.reconfigure(line_buffering=True)
except Exception:
    pass

# ---------------------------------------------------------------------------
# Paths / constants
# ---------------------------------------------------------------------------
HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUT_RENDER = HERE / "renders"
OUT_BAKE = HERE / "bakes"
OUT_TEX = HERE / "textures"
OUT_BLEND = HERE / "work"
OUT_GLB = ROOT / "assets" / "hd" / "birds"
CONCEPT = ROOT.parent / "zz-birds-concept" / "concept-01-carrion-buzzard.jpg"
if not CONCEPT.exists():
    CONCEPT = ROOT / "tools" / "bird-preview" / "concept" / "concept-01-carrion-buzzard.jpg"
HDRI = ROOT / "assets" / "hd" / "env" / "env_256.hdr"
SYS_PY = "/usr/bin/python3"
BLENDER = Path(bpy.app.binary_path)

# Meters. Wingspan tip-to-tip ~2.50, head well forward of the wing leading edge.
SPAN = 2.50
# Bind pose is a glide: shallow V dihedral, wings open, jaw slightly parted.

QUICK = False
STILL_RES = (1920, 1080)

# ---------------------------------------------------------------------------
# Math
# ---------------------------------------------------------------------------
def lerp(a, b, t):
    return a + (b - a) * t

def clamp(x, a=0.0, b=1.0):
    return a if x < a else b if x > b else x

def smoothstep(e0, e1, x):
    t = clamp((x - e0) / (e1 - e0) if e1 != e0 else 0.0)
    return t * t * (3.0 - 2.0 * t)

def argv_after_dd():
    return sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []

def ensure_dirs():
    for p in (OUT_RENDER, OUT_BAKE, OUT_TEX, OUT_BLEND, OUT_GLB):
        p.mkdir(parents=True, exist_ok=True)
    for m in ("m1-blockout", "m2-sculpt", "m3-retopo", "m4-uv", "m5-bake",
              "m6-texture", "m7-feathers", "m8-rig", "m9-anim", "compares"):
        (OUT_RENDER / m).mkdir(parents=True, exist_ok=True)

# ---------------------------------------------------------------------------
# Scene helpers
# ---------------------------------------------------------------------------
def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    # After factory, a default cube/light/camera may be gone with use_empty=True
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    for b in list(bpy.data.meshes):
        bpy.data.meshes.remove(b)
    for b in list(bpy.data.armatures):
        bpy.data.armatures.remove(b)
    for b in list(bpy.data.materials):
        bpy.data.materials.remove(b)
    for b in list(bpy.data.images):
        bpy.data.images.remove(b)
    for b in list(bpy.data.actions):
        bpy.data.actions.remove(b)
    scene = bpy.context.scene
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    scene.frame_start = 1
    scene.frame_end = 48
    scene.render.fps = 24

def collection(name):
    c = bpy.data.collections.get(name)
    if not c:
        c = bpy.data.collections.new(name)
        bpy.context.scene.collection.children.link(c)
    return c

def link(obj, coll):
    for c in list(obj.users_collection):
        c.objects.unlink(obj)
    coll.objects.link(obj)
    return obj


def hide_work_colls():
    """Keep sculpt/bake/LOD work meshes out of beauty renders and exports."""
    for name in ("BIRD_HIGH", "BAKE", "BIRD_LO", "EXPORT"):
        c = bpy.data.collections.get(name)
        if not c:
            continue
        c.hide_render = True
        try:
            c.hide_viewport = True
        except Exception:
            pass
        for o in c.objects:
            o.hide_render = True
            o.hide_set(True)

def new_obj(name, mesh, coll):
    obj = bpy.data.objects.new(name, mesh)
    return link(obj, coll)

def mesh_from_bmesh(name, bm, smooth=True):
    if smooth:
        for f in bm.faces:
            f.smooth = True
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    me.update()
    return me

def shade_auto(obj, angle=35):
    try:
        obj.data.use_auto_smooth = True
        obj.data.auto_smooth_angle = math.radians(angle)
    except Exception:
        pass
    try:
        bpy.ops.object.shade_smooth()
    except Exception:
        if obj.data:
            for p in obj.data.polygons:
                p.use_smooth = True

def apply_modifiers(obj, skip_types=("ARMATURE",)):
    """Apply modifiers, but never collapse an Armature (that bakes the bind pose and drops skins)."""
    bpy.context.view_layer.objects.active = obj
    obj.select_set(True)
    for m in list(obj.modifiers):
        if m.type in skip_types:
            continue
        try:
            bpy.ops.object.modifier_apply(modifier=m.name)
        except Exception as e:
            print("modifier_apply failed", obj.name, m.name, e)
    obj.select_set(False)

def add_subsurf(obj, levels=2, render=2):
    m = obj.modifiers.new("Subsurf", "SUBSURF")
    m.levels = levels
    m.render_levels = render
    m.quality = 3
    m.uv_smooth = "PRESERVE_CORNERS"
    m.boundary_smooth = "PRESERVE_CORNERS"
    return m

def add_mirror(obj):
    m = obj.modifiers.new("Mirror", "MIRROR")
    m.use_axis[0] = True
    m.merge_threshold = 0.0008
    m.use_clip = True
    return m

def set_active(obj):
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj

def join_objs(objs, name, coll):
    objs = [o for o in objs if o is not None]
    if not objs:
        return None
    set_active(objs[0])
    for o in objs[1:]:
        o.select_set(True)
    bpy.ops.object.join()
    obj = bpy.context.view_layer.objects.active
    obj.name = name
    link(obj, coll)
    return obj

# ---------------------------------------------------------------------------
# Materials (clay for form, then PBR after texturing)
# ---------------------------------------------------------------------------
def _principled(mat):
    mat.use_nodes = True
    nt = mat.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.location = (-300, 0)
    out.location = (200, 0)
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return bsdf

def mat_clay(name, color, rough=0.55):
    mat = bpy.data.materials.new(name)
    bsdf = _principled(mat)
    bsdf.inputs["Base Color"].default_value = (*color, 1)
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Specular IOR Level"].default_value = 0.35
    try:
        mat.use_backface_culling = False
    except Exception:
        pass
    return mat

def mat_emit(name, color, strength=2.4):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    em = nt.nodes.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = (*color, 1)
    em.inputs["Strength"].default_value = strength
    nt.links.new(em.outputs["Emission"], out.inputs["Surface"])
    return mat

def mat_pbr(name, albedo=None, normal=None, rough_tex=None, emit=None,
            color=(0.5, 0.5, 0.5), rough=0.7, metal=0.0, alpha_clip=None,
            clearcoat=0.0, coat_rough=0.12):
    mat = bpy.data.materials.new(name)
    bsdf = _principled(mat)
    nt = mat.node_tree
    bsdf.inputs["Base Color"].default_value = (*color, 1)
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Metallic"].default_value = metal
    if "Coat Weight" in bsdf.inputs:
        bsdf.inputs["Coat Weight"].default_value = clearcoat
        bsdf.inputs["Coat Roughness"].default_value = coat_rough
    def img_node(path, noncolor=False):
        n = nt.nodes.new("ShaderNodeTexImage")
        n.image = bpy.data.images.load(str(path))
        if noncolor:
            n.image.colorspace_settings.name = "Non-Color"
        return n
    if albedo and Path(albedo).exists():
        n = img_node(albedo, False)
        nt.links.new(n.outputs["Color"], bsdf.inputs["Base Color"])
        if alpha_clip is not None and "Alpha" in n.outputs:
            nt.links.new(n.outputs["Alpha"], bsdf.inputs["Alpha"])
    if rough_tex and Path(rough_tex).exists():
        n = img_node(rough_tex, True)
        nt.links.new(n.outputs["Color"], bsdf.inputs["Roughness"])
    if normal and Path(normal).exists():
        n = img_node(normal, True)
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nm.inputs["Strength"].default_value = 1.0
        nt.links.new(n.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], bsdf.inputs["Normal"])
    if emit and Path(emit).exists():
        n = img_node(emit, False)
        # leave principled emission
        if "Emission Color" in bsdf.inputs:
            nt.links.new(n.outputs["Color"], bsdf.inputs["Emission Color"])
            bsdf.inputs["Emission Strength"].default_value = 2.2
    if alpha_clip is not None:
        mat.blend_method = "CLIP"
        try:
            mat.alpha_threshold = alpha_clip
        except Exception:
            pass
        try:
            mat.surface_render_method = "DITHERED"
        except Exception:
            pass
        try:
            mat.use_backface_culling = False
        except Exception:
            pass
    try:
        mat.use_backface_culling = False
    except Exception:
        pass
    return mat

def assign(obj, mat, slot=0):
    if obj.data.materials:
        if slot < len(obj.data.materials):
            obj.data.materials[slot] = mat
        else:
            obj.data.materials.append(mat)
    else:
        obj.data.materials.append(mat)

# Clay palette — readable form, concept-adjacent hues for early compares
CLAY = {
    "flesh":  (0.38, 0.44, 0.36),
    "beak":   (0.28, 0.18, 0.12),
    "bone":   (0.78, 0.74, 0.62),
    "gore":   (0.28, 0.04, 0.04),
    "ruff":   (0.86, 0.82, 0.70),
    "feather":(0.18, 0.13, 0.10),
    "feather_pale": (0.62, 0.55, 0.44),
    "talon":  (0.04, 0.03, 0.03),
    "eye":    (0.55, 1.0, 0.12),
    "iris":   (0.72, 1.0, 0.16),
    "pupil":  (0.02, 0.02, 0.02),
    "socket": (0.14, 0.15, 0.11),
    "under":  (0.48, 0.40, 0.30),
    "leg":    (0.36, 0.26, 0.22),
}

# ---------------------------------------------------------------------------
# Bmesh primitives
# ---------------------------------------------------------------------------
def _ensure_looks(bm):
    if not bm.loops.layers.uv:
        bm.loops.layers.uv.new("UVMap")
    return bm.loops.layers.uv[0]

def add_box(bm, loc, size, rot=None):
    ev = bmesh.ops.create_cube(bm, size=1.0)["verts"]
    T = Matrix.Translation(Vector(loc))
    S = Matrix.Diagonal((*size, 1.0))
    R = rot.to_matrix().to_4x4() if rot is not None else Matrix.Identity(4)
    bmesh.ops.transform(bm, verts=ev, matrix=T @ R @ S)
    return ev

def add_uvsphere(bm, loc, radius, u=16, v=10, scale=None):
    ev = bmesh.ops.create_uvsphere(bm, u_segments=u, v_segments=v, radius=radius)["verts"]
    M = Matrix.Translation(Vector(loc))
    if scale is not None:
        M = M @ Matrix.Diagonal((*scale, 1.0))
    bmesh.ops.transform(bm, verts=ev, matrix=M)
    return ev

def add_cone(bm, loc, r1, depth, segs=8, rot=None, r2=0.0):
    ev = bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False,
                               segments=segs, radius1=r1, radius2=r2, depth=depth)["verts"]
    T = Matrix.Translation(Vector(loc))
    R = rot.to_matrix().to_4x4() if rot is not None else Matrix.Identity(4)
    bmesh.ops.transform(bm, verts=ev, matrix=T @ R)
    return ev

def add_cylinder(bm, loc, r, depth, segs=8, rot=None, r2=None):
    return add_cone(bm, loc, r, depth, segs, rot, r2 if r2 is not None else r)

def loft_rings(bm, rings, cap_start=False, cap_end=False, loop=False):
    """rings: list of equal-length lists of BMVert (or Vectors, which are created)."""
    if not rings:
        return []
    prepared = []
    for ring in rings:
        if ring and isinstance(ring[0], Vector):
            prepared.append([bm.verts.new(p) for p in ring])
        else:
            prepared.append(ring)
    rings = prepared
    bm.verts.ensure_lookup_table()
    faces = []
    n = len(rings[0])
    for i in range(len(rings) - 1):
        a, b = rings[i], rings[i + 1]
        count = n if loop else n - 1
        for j in range(count):
            j2 = (j + 1) % n if loop else j + 1
            try:
                faces.append(bm.faces.new([a[j], a[j2], b[j2], b[j]]))
            except ValueError:
                pass
    if cap_start and loop:
        try:
            faces.append(bm.faces.new(list(reversed(rings[0]))))
        except ValueError:
            pass
    if cap_end and loop:
        try:
            faces.append(bm.faces.new(list(rings[-1])))
        except ValueError:
            pass
    return faces

def ellipse_ring(center, rx, rz, n, y_axis="Y", start=0.0, end=math.tau, z_up=True):
    """Ring in XZ at given Y (forward). center is a Vector."""
    pts = []
    for i in range(n):
        t = i / n
        a = lerp(start, end, t) if end != start + math.tau else start + math.tau * t
        # When end-start != tau and we want inclusive, use n points over open range
        x = rx * math.cos(a)
        z = rz * math.sin(a)
        pts.append(center + Vector((x, 0, z)))
    return pts

def dorsal_ring(center, rx, rz, n=14, opening=0.55):
    """U-shaped ring around the back (+Z), leaving a belly gap of `opening` radians * 2? 
    opening is the half-gap around -Z (belly), in radians. ~0.7 leaves a wide chest cavity.
    """
    # a = 0 at +X, pi/2 at +Z (back), pi at -X, 3pi/2 at -Z (belly)
    # Travel from (pi + opening) down? We want from right-belly lip around the back to left-belly lip.
    # Start at a = -pi/2 + opening (right side, slightly below equator if opening small)
    # Wait: -Z is belly = 3pi/2 or -pi/2.
    # Lip right: a = -pi/2 + opening  (from belly toward +X)
    # Go the long way: increasing a, through 0 (+X), pi/2 (+Z back), pi (-X), to 3pi/2 - opening.
    a0 = -math.pi / 2 + opening
    a1 = math.pi + math.pi / 2 - opening  # 3pi/2 - opening
    pts = []
    for i in range(n):
        a = lerp(a0, a1, i / (n - 1))
        pts.append(center + Vector((rx * math.cos(a), 0.0, rz * math.sin(a))))
    return pts

# ---------------------------------------------------------------------------
# BLOCKOUT
# ---------------------------------------------------------------------------


def _tube(bm, pts, radius, segs=6, tip=None):
    rings = []
    for i, pnt in enumerate(pts):
        r = radius
        if tip is not None:
            r = lerp(radius, tip, i / (len(pts) - 1))
        if i == 0:
            tang = (pts[1] - pts[0]).normalized()
        elif i == len(pts) - 1:
            tang = (pts[-1] - pts[-2]).normalized()
        else:
            tang = (pts[i + 1] - pts[i - 1]).normalized()
        up = Vector((0, 0, 1))
        if abs(tang.dot(up)) > 0.9:
            up = Vector((0, 1, 0))
        x = tang.cross(up).normalized()
        z = x.cross(tang).normalized()
        rings.append([pnt + (x * math.cos(a) + z * math.sin(a)) * r
                      for a in [math.tau * k / segs for k in range(segs)]])
    loft_rings(bm, rings, cap_start=True, cap_end=True, loop=True)



WING_RAISE_DEG = 44

def raise_wing_bmesh(bm, side, raise_deg=WING_RAISE_DEG, droop=18, forward=12):
    """Mantle pose: wings 35–50° above horizontal, wrists up/forward, tips drooping."""
    shoulder = Vector((side * 0.12, 0.06, 0.20))
    ang = math.radians(-raise_deg if side > 0 else raise_deg)
    R = Matrix.Rotation(ang, 3, "Y")
    # wrist in rest, then raised, used as droop pivot
    wrist_rest = Vector((side * 0.78, 0.04, 0.23))
    wrist = shoulder + R @ (wrist_rest - shoulder)
    dang = math.radians(-droop if side > 0 else droop)
    Rd = Matrix.Rotation(dang, 3, "Y")
    fang = math.radians(forward * (1 if side > 0 else -1))
    Rf = Matrix.Rotation(fang, 3, "Z")
    for v in bm.verts:
        p = v.co
        p = shoulder + R @ (p - shoulder)
        # droop and sweep anything outboard of the mid-wing
        if (p - shoulder).length > 0.55:
            p = wrist + Rd @ (p - wrist)
            p = wrist + Rf @ (p - wrist)
        v.co = p
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)


def raise_pt(p, side, raise_deg=WING_RAISE_DEG):
    shoulder = Vector((side * 0.12, 0.06, 0.20))
    ang = math.radians(-raise_deg if side > 0 else raise_deg)
    return shoulder + Matrix.Rotation(ang, 3, "Y") @ (Vector(p) - shoulder)



def build_body_block(coll, mats):
    """Barrel-chested hunched egg with a torn chest/flank window and shaggy back clumps."""
    bm = bmesh.new()
    spine = [
        (-0.28, 0.12, 0.06, 0.07, 1.05),
        (-0.18, 0.16, 0.12, 0.12, 0.95),
        (-0.06, 0.20, 0.16, 0.16, 0.90),
        (0.06, 0.17, 0.15, 0.15, 0.85),
        (0.16, 0.14, 0.13, 0.13, 0.75),
        (0.22, 0.13, 0.08, 0.08, 0.80),
    ]
    def inset(ring, amt=0.018):
        inner, cz = [], sum(p.z for p in ring) / len(ring)
        for pt in ring:
            d = Vector((pt.x, 0, pt.z - cz))
            inner.append(pt if d.length < 1e-6 else pt - d.normalized() * amt)
        return inner
    rings = [dorsal_ring(Vector((0, y, z)), rx, rz, n=17, opening=op) for y, z, rx, rz, op in spine]
    inn = [inset(r) for r in rings]
    outer_v = [[bm.verts.new(pt) for pt in r] for r in rings]
    inner_v = [[bm.verts.new(pt) for pt in r] for r in inn]
    loft_rings(bm, outer_v, loop=False)
    loft_rings(bm, [list(reversed(r)) for r in inner_v], loop=False)
    loft_rings(bm, [outer_v[0], inner_v[0]], loop=False)
    loft_rings(bm, [list(reversed(outer_v[-1])), list(reversed(inner_v[-1]))], loop=False)
    loft_rings(bm, [[r[0] for r in outer_v], [r[0] for r in inner_v]], loop=False)
    loft_rings(bm, [list(reversed([r[-1] for r in outer_v])), list(reversed([r[-1] for r in inner_v]))], loop=False)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0004)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = mesh_from_bmesh("Body", bm); bm.free()
    obj = new_obj("Body", me, coll); assign(obj, mats["flesh"])

    # Low, overlapping back feathers — break the smooth shell without boxy clumps.
    bm = bmesh.new()
    for i in range(10):
        y = lerp(-0.16, 0.12, i / 9)
        x = (0.035 if i % 2 == 0 else -0.035) * (1.0 + (i % 3) * 0.2)
        z = 0.24 + 0.015 * math.sin(i * 1.7)
        d = Vector((x * 0.2, -0.55, 0.25)).normalized()
        nrm = Vector((0, 0.35, 1)).normalized()
        _add_tapered(bm, Vector((x, y, z)), d, 0.10 + (i % 3) * 0.02, 0.055, 0.018, curl=0.015, thick=0.003, segs=2, normal=nrm)
    me = mesh_from_bmesh("Mantle", bm); bm.free()
    mant = new_obj("Mantle", me, coll); assign(mant, mats["feather"])
    return obj


def build_ribs_and_gore(coll, mats):
    """Vertical C-arcs (spine → sternum) seen through a ragged torn-flesh window."""
    bm = bmesh.new()
    # 5 ribs: each is a C from the back-spine around the side and down to the sternum.
    # These must read as curved bones wrapping the barrel, NOT horizontal blinds.
    rib_ys = [-0.02, 0.04, 0.09, 0.13, 0.17]
    for i, y in enumerate(rib_ys):
        rad = 0.145 + 0.012 * math.sin(i / 4 * math.pi)
        cx, cz = 0.0, 0.16
        pts = []
        n = 14
        # From near the spine (+Z, back/top) around the RIGHT and LEFT as two tubes? 
        # One C on each side would double. A single hoop from left spine path...
        # Do a full under-arc: left-spine-ish, down under, up to right-spine-ish,
        # starting at the dorsal-lateral and ending at the other, passing the sternum.
        # Angle 0 = +X, pi/2 = +Z (spine), 3pi/2 = -Z (belly/sternum).
        # Start just off the spine on the left, go the long way through the belly to the right spine.
        a0 = math.pi / 2 + 0.55   # left of spine
        a1 = math.pi / 2 + math.tau - 0.55  # right of spine, going around belly (increasing a through pi, 3pi/2, 2pi, ...)
        # a from 0.55 past pi/2 ... let's go from 2.1 (left lateral) through 4.71 (belly) to 5.8? 
        # left flank ~ pi, belly 3pi/2, right flank 0/2pi, spine pi/2.
        # Window is front-ventral + sides, so show the visible part: left lateral → belly → right lateral,
        # and a bit up toward the spine so the C is clearly vertical in side view.
        a0 = math.pi - 0.55          # left, slightly toward belly? pi is -X (left)
        # From a bit above left (toward spine): pi - 0.9 ~ 2.24 (left-dorsal)
        # through pi (left), 3pi/2 (belly), 2pi (right), to 2pi+0.9 (right-dorsal)
        a0 = math.pi - 0.95
        a1 = math.tau + 0.95
        for k in range(n):
            a = lerp(a0, a1, k / (n - 1))
            pts.append(Vector((cx + rad * math.cos(a), y + 0.004 * math.sin(k), cz + rad * math.sin(a))))
        _tube(bm, pts, 0.011, segs=7)
    # sternum bar (short, stays inside the window)
    _tube(bm, [Vector((0, 0.16, 0.05)), Vector((0, 0.08, 0.035)), Vector((0, 0.00, 0.04))], 0.008, segs=5)
    me = mesh_from_bmesh("Ribs", bm); bm.free()
    ribs = new_obj("Ribs", me, coll); assign(ribs, mats["bone"])

    # Dark wet cavity fill
    bm = bmesh.new()
    add_uvsphere(bm, (0.0, 0.08, 0.08), 0.075, u=10, v=7, scale=(1.15, 1.35, 0.75))
    # Two short wet drips — thin, stay close to the cavity, never read as cage bars.
    for sx, sy in ((0.012, 0.10), (-0.010, 0.05)):
        _tube(bm, [Vector((sx, sy, 0.03)), Vector((sx * 1.2, sy + 0.01, -0.02)), Vector((sx * 0.8, sy + 0.02, -0.07))], 0.0032, segs=4, tip=0.0012)
    me = mesh_from_bmesh("Gore", bm); bm.free()
    gore = new_obj("Gore", me, coll); assign(gore, mats["gore"])

    # Torn flesh lip + ragged feather fringe around the window
    bm = bmesh.new()
    # Lip: a flattened ring in front-ventral, slightly extruded
    for i in range(16):
        t = i / 16
        a = lerp(math.pi - 0.7, math.tau + 0.7, t)
        y = lerp(0.16, -0.04, 0.5 + 0.5 * math.sin(i * 1.9))
        rad = 0.155 + 0.012 * math.sin(i * 2.4)
        root = Vector((rad * math.cos(a) * 0.95, y, 0.16 + rad * math.sin(a) * 0.55))
        outward = Vector((math.cos(a), 0.1, math.sin(a) * 0.5)).normalized()
        add_box(bm, root + outward * 0.015, (0.04, 0.035, 0.012 + (i % 3) * 0.006),
                rot=outward.to_track_quat("Y", "Z"))
    me = mesh_from_bmesh("WoundLip", bm); bm.free()
    lip = new_obj("WoundLip", me, coll); assign(lip, mats["flesh"])

    bm = bmesh.new()
    for i in range(10):
        t = i / 9
        y = lerp(0.15, -0.02, t)
        side = 1 if i % 2 == 0 else -1
        root = Vector((side * 0.13, y, 0.10))
        d = Vector((side * 0.2, -0.3, -0.4)).normalized()
        add_box(bm, root + d * 0.04, (0.03, 0.08, 0.008), rot=d.to_track_quat("Y", "Z"))
    me = mesh_from_bmesh("WoundFringe", bm); bm.free()
    fringe = new_obj("WoundFringe", me, coll); assign(fringe, mats["feather"])
    return ribs, gore


def build_neck_and_head(coll, mats):
    """Skull-like head, heavy brow, sunken sockets with lids, short hooked beak, attached jaw."""
    bm = bmesh.new()
    neck_cl = [
        (Vector((0, 0.22, 0.13)), 0.085, 0.078),
        (Vector((0, 0.26, 0.16)), 0.072, 0.066),
        (Vector((0, 0.31, 0.13)), 0.062, 0.058),
        (Vector((0, 0.35, 0.09)), 0.058, 0.054),
    ]
    loft_rings(bm, [ellipse_ring(c, rx, rz, 14) for c, rx, rz in neck_cl], loop=True)
    # wrinkle rings as slight collar folds
    for y, z, r in ((0.24, 0.145, 0.088), (0.28, 0.15, 0.078), (0.32, 0.12, 0.068)):
        add_uvsphere(bm, (0, y, z), r, u=12, v=6, scale=(1.0, 0.35, 0.85))
    me = mesh_from_bmesh("Neck", bm); bm.free()
    neck = new_obj("Neck", me, coll); assign(neck, mats["flesh"])

    # Head length ~0.16 (y 0.34–0.50). Beak target 0.75× = 0.12, deep hook.
    bm = bmesh.new()
    skull = [
        (Vector((0, 0.34, 0.09)), 0.062, 0.055),
        (Vector((0, 0.38, 0.105)), 0.088, 0.078),
        (Vector((0, 0.43, 0.088)), 0.082, 0.070),
        (Vector((0, 0.47, 0.062)), 0.052, 0.048),
        (Vector((0, 0.500, 0.046)), 0.034, 0.032),  # cere
    ]
    loft_rings(bm, [ellipse_ring(c, rx, rz, 16) for c, rx, rz in skull], cap_start=True, loop=True)
    # Carve real eye sockets (pull surface inward under the brow)
    bm.verts.ensure_lookup_table()
    bm.normal_update()
    for v in bm.verts:
        for sx in (-1, 1):
            c = Vector((sx * 0.048, 0.452, 0.086))
            d = (v.co - c).length
            if d < 0.030:
                inward = Vector((-sx * 0.75, -0.15, -0.35)).normalized()
                v.co = v.co + inward * (0.030 - d) * 1.05
    # Sagittal ridge — low and blended, not a plank on the crown
    add_box(bm, (0, 0.41, 0.148), (0.010, 0.09, 0.010))
    # Heavy overhanging brow shelf (casts a shadow on the sockets)
    for sx in (-1, 1):
        add_uvsphere(bm, (sx * 0.034, 0.446, 0.118), 0.018, u=8, v=6, scale=(1.45, 0.85, 0.38))
    # Subtle nape fold only — large crown spheres read as floating scabs in close-ups.
    add_uvsphere(bm, (0, 0.36, 0.12), 0.055, u=10, v=5, scale=(1.0, 0.22, 0.40))
    # Small wattles under the jaw hinge (not eye-sized lumps on the cheek)
    for sx in (-1, 1):
        add_uvsphere(bm, (sx * 0.028, 0.478, 0.010), 0.011, u=7, v=5, scale=(0.7, 0.85, 1.15))
    me = mesh_from_bmesh("Head", bm); bm.free()
    head = new_obj("Head", me, coll); assign(head, mats["flesh"])

    # Dark socket bowls, recessed
    bm = bmesh.new()
    for sx in (-1, 1):
        add_uvsphere(bm, (sx * 0.046, 0.454, 0.080), 0.016, u=10, v=7, scale=(1.05, 0.72, 0.58))
    me = mesh_from_bmesh("Sockets", bm); bm.free()
    sock = new_obj("Sockets", me, coll)
    assign(sock, mats.get("socket") or mats["flesh"])

    # Lids — thin rims under the brow, wrapping the socket
    bm = bmesh.new()
    for sx in (-1, 1):
        add_uvsphere(bm, (sx * 0.046, 0.452, 0.096), 0.013, u=8, v=5, scale=(1.25, 0.55, 0.28))
        add_uvsphere(bm, (sx * 0.046, 0.452, 0.066), 0.010, u=8, v=5, scale=(1.15, 0.50, 0.24))
    me = mesh_from_bmesh("Lids", bm); bm.free()
    lids = new_obj("Lids", me, coll); assign(lids, mats["flesh"])

    # Upper beak: fleshy cere then short keratin hook (not a banana)
    bm = bmesh.new()
    beak_cl = [
        (Vector((0, 0.500, 0.048)), 0.036, 0.032),   # deep cere / base
        (Vector((0, 0.542, 0.028)), 0.022, 0.020),
        (Vector((0, 0.572, 0.002)), 0.012, 0.013),   # start of hook
        (Vector((0, 0.574, -0.030)), 0.007, 0.008),  # hook drops vertically
        (Vector((0, 0.558, -0.062)), 0.0024, 0.0024), # tip points down
    ]
    loft_rings(bm, [ellipse_ring(c, rx, rz, 12) for c, rx, rz in beak_cl], cap_start=True, cap_end=True, loop=True)
    me = mesh_from_bmesh("BeakUpper", bm); bm.free()
    beak = new_obj("BeakUpper", me, coll); assign(beak, mats["beak"])

    # Lower jaw attached at the gape (y~0.50), dropped ~28°, thick not a stick
    bm = bmesh.new()
    jaw_cl = [
        (Vector((0, 0.498, 0.020)), 0.028, 0.015),  # attached at gape
        (Vector((0, 0.542, -0.010)), 0.018, 0.010),
        (Vector((0, 0.566, -0.036)), 0.008, 0.0055),
        (Vector((0, 0.568, -0.052)), 0.003, 0.0022),
    ]
    loft_rings(bm, [ellipse_ring(c, rx, rz, 12) for c, rx, rz in jaw_cl], cap_start=True, cap_end=True, loop=True)
    me = mesh_from_bmesh("Jaw", bm); bm.free()
    jaw = new_obj("Jaw", me, coll); assign(jaw, mats["beak"])

    bm = bmesh.new()
    add_box(bm, (0, 0.535, 0.000), (0.018, 0.032, 0.010))
    # Two thin blood strands from the gape (red, short — not black rods)
    _tube(bm, [Vector((0.004, 0.555, -0.020)), Vector((0.006, 0.558, -0.045)), Vector((0.005, 0.552, -0.072))], 0.0022, segs=4, tip=0.0008)
    _tube(bm, [Vector((-0.003, 0.548, -0.018)), Vector((-0.004, 0.550, -0.040)), Vector((-0.003, 0.546, -0.060))], 0.0018, segs=4, tip=0.0007)
    me = mesh_from_bmesh("MouthGore", bm); bm.free()
    mouth = new_obj("MouthGore", me, coll); assign(mouth, mats["gore"])

    # Eyes: small spheres sunk in the sockets, iris #b8ff2a, dark pupil, emissive
    # Face the hero camera (+Y, slightly out and up) so the glow reads in dive.
    eyes = []
    for i, sx in enumerate((-1, 1)):
        c = Vector((sx * 0.044, 0.460, 0.084))
        fwd = Vector((sx * 0.12, 0.96, 0.18)).normalized()
        bm = bmesh.new()
        add_uvsphere(bm, c, 0.0072, u=10, v=8)  # small globe, fully emissive green
        me = mesh_from_bmesh(f"Eye_{i}", bm); bm.free()
        e = new_obj(f"Eye_{i}", me, coll); assign(e, mats["eye"]); eyes.append(e)
        bm = bmesh.new()
        add_uvsphere(bm, c + fwd * 0.0032, 0.0054, u=8, v=6, scale=(1.05, 0.75, 0.75))
        me = mesh_from_bmesh(f"Iris_{i}", bm); bm.free()
        ir = new_obj(f"Iris_{i}", me, coll)
        assign(ir, mats.get("iris") or mats["eye"]); eyes.append(ir)
        bm = bmesh.new()
        add_uvsphere(bm, c + fwd * 0.0058, 0.0022, u=8, v=6)
        me = mesh_from_bmesh(f"Pupil_{i}", bm); bm.free()
        pu = new_obj(f"Pupil_{i}", me, coll)
        assign(pu, mats.get("pupil") or mats["eye"]); eyes.append(pu)
    return neck, head, jaw, beak, mouth, eyes


def build_ruff_block(coll, mats, hi=True):
    """Shaggy cream vulture collar: cards hang back and down, denser at the sides."""
    bm = bmesh.new()
    n = 28 if hi else 16
    origin = Vector((0, 0.22, 0.12))
    rows = (
        (0, 0.00, 0.090, 0.10),
        (1, 0.018, 0.108, 0.13),
        (2, 0.034, 0.120, 0.11),
    )
    for row, yoff, rad, length0 in rows:
        if (not hi) and row == 2:
            continue
        for i in range(n):
            a = math.tau * (i + row * 0.33) / n
            # Favor the sides and nape; keep a thinner band under the chin.
            belly = 0.55 + 0.45 * abs(math.sin(a))
            root = origin + Vector((math.cos(a) * rad, yoff, math.sin(a) * 0.065))
            length = (length0 + (i % 3) * 0.016) * belly
            # Hang back and slightly down, like a turkey-vulture ruff — not a radial sunburst.
            direc = Vector((math.cos(a) * 0.55, -0.70 - 0.12 * row, math.sin(a) * 0.25 - 0.15)).normalized()
            # Face the card outward (radial) so front/side see area, not a comb of edges.
            nrm = Vector((math.cos(a), 0.15, math.sin(a) * 0.8)).normalized()
            _add_tapered(bm, root, direc, length, 0.036 + (i % 2) * 0.010, 0.010, curl=0.025, thick=0.003, segs=2, normal=nrm)
    me = mesh_from_bmesh("Ruff", bm); bm.free()
    obj = new_obj("Ruff", me, coll); assign(obj, mats["ruff"])
    return obj


def _wing_grid(side=1, ns=11, nc=7):
    rows = []
    def notch(s, c):
        if c < 0.70:
            return 0.0
        # Irregular missing feathers, not an even saw-comb
        bites = ((0.18, 0.26, 0.11), (0.33, 0.36, 0.05), (0.44, 0.55, 0.13),
                 (0.61, 0.66, 0.07), (0.74, 0.80, 0.09))
        bite = 0.0
        for a, b, d in bites:
            if a < s < b:
                bite = d
                break
        # add uneven jitter
        bite *= 0.7 + 0.6 * math.sin(s * 23.0 + side)
        return bite * ((c - 0.70) / 0.30)

    for i in range(ns + 1):
        s = i / ns
        row = []
        for j in range(nc + 1):
            c = j / nc
            if s <= 0.62:
                t = s / 0.62
                x = lerp(0.12, 0.78, t)
                y_le = lerp(0.18, 0.16, t) + 0.04 * math.sin(t * math.pi)
                y_te = lerp(-0.16, -0.30, t)
                z0 = lerp(0.20, 0.24, t)
            else:
                t = (s - 0.62) / 0.38
                x = lerp(0.78, 1.12, t)
                y_le = lerp(0.16, 0.04, t)
                y_te = lerp(-0.30, -0.10, t)
                z0 = lerp(0.24, 0.28, t)
            y = lerp(y_le, y_te, c) - notch(s, c)
            camber = 0.035 * math.sin(c * math.pi) * math.sin(min(1, s / 0.8) * math.pi)
            z = z0 + camber
            row.append(Vector((side * x, y, z)))
        rows.append(row)
    return rows


def _fan_primaries(side=1, hi=True):
    # Fingered vulture primaries: long slotted tips, pale trailing patches mid-fan.
    n = 9 if hi else 6
    wrist = Vector((side * 0.92, 0.02, 0.26))
    out = []
    for i in range(n):
        t = i / (n - 1)
        ang = lerp(0.34, -0.82, t)
        dip = lerp(0.10, -0.08, t)
        d = Vector((side * math.cos(ang), math.sin(ang), dip)).normalized()
        length = lerp(0.38, 0.58, t) * (1.0 + 0.05 * math.sin(i * 2.1))
        if t < 0.25:
            length = lerp(0.34, 0.46, t / 0.25)
        w0 = lerp(0.070, 0.038, t)
        w1 = w0 * 0.16
        broken = (i == n - 2)
        if broken:
            length *= 0.62
            d = (d + Vector((0, -0.08, -0.28))).normalized()
        pale = 0.25 < t < 0.85
        origin = wrist + Vector((side * -0.04, lerp(0.05, -0.08, t), (i % 2) * 0.004))
        out.append((origin, d, length, w0, w1, pale, broken))
    return out


def _add_tapered(bm, origin, d, length, w0, w1, curl=0.04, thick=0.004, segs=3, normal=None):
    """Thin solid vane (both sides) with a slight camber so cards don't vanish when back-face culled.
    `normal` is the card's thin axis (face normal). Default is world +Z (horizontal vane)."""
    d = Vector(d).normalized()
    if normal is None:
        normal = Vector((0, 0, 1))
    else:
        normal = Vector(normal)
    side_ax = d.cross(normal)
    if side_ax.length < 1e-6:
        side_ax = d.cross(Vector((0, 1, 0)))
    if side_ax.length < 1e-6:
        side_ax = Vector((1, 0, 0))
    side_ax.normalize()
    up = d.cross(side_ax).normalized()
    rows = []
    for i in range(segs + 1):
        t = i / segs
        pos = origin + d * (length * t) + up * (curl * math.sin(t * math.pi) * length)
        w = lerp(w0, w1, t ** 1.15)
        th = thick * (1.0 - 0.45 * t)
        rows.append((
            pos + side_ax * (w * 0.5) + up * th,
            pos - side_ax * (w * 0.5) + up * th,
            pos - side_ax * (w * 0.5) - up * th,
            pos + side_ax * (w * 0.5) - up * th,
        ))
    vrows = [[bm.verts.new(q) for q in row] for row in rows]
    def face(*vs):
        try:
            bm.faces.new(vs)
        except ValueError:
            pass
    for i in range(segs):
        a, b = vrows[i], vrows[i + 1]
        face(a[0], a[1], b[1], b[0])  # top
        face(a[3], b[3], b[2], a[2])  # bottom
        face(a[0], b[0], b[3], a[3])  # +side
        face(a[1], a[2], b[2], b[1])  # -side
    face(*vrows[0])
    face(*list(reversed(vrows[-1])))


def build_wings_block(coll, mats, hi=True):
    built = []
    under_mat = mats.get("under") or mats["feather_pale"]
    for side, name_s in ((1, "R"), (-1, "L")):
        bm = bmesh.new()
        rows = _wing_grid(side, ns=12 if hi else 8, nc=7 if hi else 5)
        vrows = [[bm.verts.new(pt) for pt in row] for row in rows]
        for i in range(len(vrows) - 1):
            for j in range(len(vrows[0]) - 1):
                try:
                    bm.faces.new((vrows[i][j], vrows[i][j + 1], vrows[i + 1][j + 1], vrows[i + 1][j]))
                except ValueError:
                    pass
        # under-coverts: slightly offset toward the underside, paler, so player-up shows layering
        bm_u = bmesh.new()
        off = Vector((0, 0, -0.014))
        urows = [[bm_u.verts.new(v.co + off) for v in row] for row in vrows]
        ns, nc = len(urows) - 2, max(2, int((len(urows[0]) - 1) * 0.75))
        for i in range(ns):
            for j in range(nc):
                try:
                    # flip winding so the underside faces down
                    bm_u.faces.new((urows[i][j], urows[i + 1][j], urows[i + 1][j + 1], urows[i][j + 1]))
                except ValueError:
                    pass
        raise_wing_bmesh(bm, side)
        raise_wing_bmesh(bm_u, side)
        me = mesh_from_bmesh(f"WingMem_{name_s}", bm); bm.free()
        mem = new_obj(f"WingMem_{name_s}", me, coll); assign(mem, mats["feather"]); built.append(mem)
        me = mesh_from_bmesh(f"WingUnder_{name_s}", bm_u); bm_u.free()
        und = new_obj(f"WingUnder_{name_s}", me, coll); assign(und, under_mat); built.append(und)

        # Covert sheet on top
        if hi:
            bm = bmesh.new()
            rows2 = _wing_grid(side, ns=8, nc=5)
            v2 = [[bm.verts.new(pt + Vector((0, 0, 0.012))) for pt in row] for row in rows2]
            for i in range(len(v2) - 2):
                for j in range(int((len(v2[0]) - 1) * 0.65)):
                    try:
                        bm.faces.new((v2[i][j], v2[i][j + 1], v2[i + 1][j + 1], v2[i + 1][j]))
                    except ValueError:
                        pass
            raise_wing_bmesh(bm, side)
            me = mesh_from_bmesh(f"Coverts_{name_s}", bm); bm.free()
            cv = new_obj(f"Coverts_{name_s}", me, coll); assign(cv, mats["feather"]); built.append(cv)

        bm_p, bm_d = bmesh.new(), bmesh.new()
        for origin, d, length, w0, w1, pale, broken in _fan_primaries(side, hi):
            _add_tapered(bm_p if pale else bm_d, origin, d, length, w0, w1, curl=0.05 if not broken else -0.03)
        raise_wing_bmesh(bm_p, side); raise_wing_bmesh(bm_d, side)
        me = mesh_from_bmesh(f"PrimariesPale_{name_s}", bm_p); bm_p.free()
        pp = new_obj(f"PrimariesPale_{name_s}", me, coll); assign(pp, mats["feather_pale"]); built.append(pp)
        me = mesh_from_bmesh(f"PrimariesDark_{name_s}", bm_d); bm_d.free()
        pd = new_obj(f"PrimariesDark_{name_s}", me, coll); assign(pd, mats["feather"]); built.append(pd)

        # Irregular secondaries (varying length, a couple missing)
        bm = bmesh.new()
        nsec = 7 if hi else 4
        for i in range(nsec):
            if i == 2:
                continue  # a gap — missing secondary
            t = i / max(1, nsec - 1)
            o = Vector((side * lerp(0.28, 0.74, t), lerp(-0.08, -0.20, t), lerp(0.20, 0.23, t)))
            d = Vector((side * 0.15, -0.95, 0.04)).normalized()
            length = 0.13 + 0.08 * math.sin(i * 1.9)
            _add_tapered(bm, o, d, max(0.08, length), 0.05, 0.014, curl=0.01)
        raise_wing_bmesh(bm, side)
        me = mesh_from_bmesh(f"Secondaries_{name_s}", bm); bm.free()
        sc = new_obj(f"Secondaries_{name_s}", me, coll); assign(sc, mats["feather"]); built.append(sc)
    return built


def build_tail_block(coll, mats, hi=True):
    """Layered fan of overlapping tapered feathers, slightly drooped and spread."""
    bm = bmesh.new()
    n = 11 if hi else 7
    root = Vector((0, -0.26, 0.12))
    for layer, zoff, spread in ((0, 0.00, 0.48), (1, 0.012, 0.36)):
        if (not hi) and layer == 1:
            continue
        count = n if layer == 0 else max(5, n - 3)
        for i in range(count):
            t = i / max(1, count - 1)
            a = lerp(-spread, spread, t)
            length = 0.28 + 0.08 * math.sin(t * math.pi) + 0.02 * math.sin(i * 2.3 + layer)
            drop = -0.06 - abs(t - 0.5) * 0.04
            d = Vector((math.sin(a), -math.cos(a), drop)).normalized()
            origin = root + Vector(((i % 3 - 1) * 0.006, 0, zoff))
            # Slight roll so the fan has thickness from the side (not a single edge-on plane).
            nrm = Vector((0.35 if layer == 0 else -0.35, 0.05, 1.0)).normalized()
            _add_tapered(bm, origin, d, length, 0.055, 0.016, curl=0.03, thick=0.0045, segs=3, normal=nrm)
    # Solid undertail pad so the rump doesn't end in a point from the side.
    add_uvsphere(bm, (0, -0.30, 0.10), 0.04, u=8, v=6, scale=(1.1, 1.6, 0.55))
    me = mesh_from_bmesh("Tail", bm); bm.free()
    obj = new_obj("Tail", me, coll); assign(obj, mats["feather"])
    return obj


def build_legs_block(coll, mats, hi=True):
    """Thick scaly tarsus, feathered thigh trousers, knuckled toes, big black hooked talons."""
    built = []
    for side, nm in ((1, "R"), (-1, "L")):
        bm = bmesh.new()
        hip = Vector((side * 0.06, 0.06, 0.05))
        knee = Vector((side * 0.075, 0.15, -0.05))
        ankle = Vector((side * 0.065, 0.24, -0.11))
        _tube(bm, [hip, knee], 0.028, segs=8, tip=0.020)  # thick thigh
        _tube(bm, [knee, ankle], 0.018, segs=8, tip=0.014)  # scaly tarsus
        # knuckle bumps
        add_uvsphere(bm, knee, 0.016, u=6, v=5)
        add_uvsphere(bm, ankle, 0.013, u=6, v=5)
        me = mesh_from_bmesh(f"Leg_{nm}", bm); bm.free()
        obj = new_obj(f"Leg_{nm}", me, coll); assign(obj, mats["leg"]); built.append(obj)

        # Feathered trouser
        bm = bmesh.new()
        for i in range(8 if hi else 4):
            a = math.tau * i / (8 if hi else 4)
            root = hip + Vector((math.cos(a) * 0.025, math.sin(a) * 0.01, -0.01))
            d = Vector((math.cos(a) * 0.2, 0.15, -0.9)).normalized()
            add_box(bm, root + d * 0.05, (0.03, 0.10, 0.01), rot=d.to_track_quat("Y", "Z"))
        me = mesh_from_bmesh(f"Trouser_{nm}", bm); bm.free()
        tr = new_obj(f"Trouser_{nm}", me, coll); assign(tr, mats["feather"]); built.append(tr)

        # Toes + big black hooks
        bm = bmesh.new()
        toes = [
            (side * 0.05, 0.11, 0.0),
            (0.0, 0.13, 0.0),
            (-side * 0.05, 0.11, 0.0),
            (0.0, -0.07, math.pi),
        ]
        for ox, oy, yaw in toes:
            start = ankle + Vector((ox, 0.01 if oy > 0 else -0.01, -0.01))
            fwd = Vector((ox * 1.05, oy * 0.85 if oy > 0 else -0.06, -0.03))
            mid = start + fwd * 0.45
            tip = start + fwd * 0.85
            hook = tip + Vector((0, 0.008, -0.038))
            add_uvsphere(bm, mid, 0.009, u=5, v=4)  # knuckle
            _tube(bm, [start, mid, tip], 0.011, segs=5, tip=0.0065)
            _tube(bm, [tip, hook], 0.0060, segs=5, tip=0.0020)
        me = mesh_from_bmesh(f"Talon_{nm}", bm); bm.free()
        ta = new_obj(f"Talon_{nm}", me, coll)
        assign(ta, mats.get("talon") or mats["bone"]); built.append(ta)
    return built


def build_blockout():
    bird = collection("BIRD")
    mats = {
        "flesh": mat_clay("ClayFlesh", CLAY["flesh"], 0.78),
        "beak": mat_clay("ClayBeak", CLAY["beak"], 0.62),
        "bone": mat_clay("ClayBone", CLAY["bone"], 0.72),
        "gore": mat_clay("ClayGore", CLAY["gore"], 0.45),
        "ruff": mat_clay("ClayRuff", CLAY["ruff"], 0.85),
        "feather": mat_clay("ClayFeather", CLAY["feather"], 0.88),
        "feather_pale": mat_clay("ClayFeatherPale", CLAY["feather_pale"], 0.86),
        "talon": mat_clay("ClayTalon", CLAY["talon"], 0.55),
        "eye": mat_emit("ClayEye", CLAY["eye"], 3.0),
        "iris": mat_emit("ClayIris", CLAY["iris"], 3.6),
        "pupil": mat_clay("ClayPupil", CLAY["pupil"], 0.25),
        "socket": mat_clay("ClaySocket", CLAY["socket"], 0.7),
        "under": mat_clay("ClayUnder", CLAY["under"], 0.86),
        "leg": mat_clay("ClayLeg", CLAY["leg"], 0.7),
    }
    # gore a bit wetter
    try:
        bsdf = mats["gore"].node_tree.nodes.get("Principled BSDF")
        if bsdf and "Coat Weight" in bsdf.inputs:
            bsdf.inputs["Coat Weight"].default_value = 0.18
            bsdf.inputs["Coat Roughness"].default_value = 0.28
    except Exception:
        pass
    body = build_body_block(bird, mats)
    ribs, gore = build_ribs_and_gore(bird, mats)
    neck, head, jaw, beak, mouth, eyes = build_neck_and_head(bird, mats)
    ruff = build_ruff_block(bird, mats, True)
    wings = build_wings_block(bird, mats, True)
    tail = build_tail_block(bird, mats, True)
    legs = build_legs_block(bird, mats, True)
    for o in bird.objects:
        shade_auto(o, 40)
    return {
        "coll": bird, "mats": mats,
        "body": body, "ribs": ribs, "gore": gore,
        "neck": neck, "head": head, "jaw": jaw, "beak": beak, "mouth": mouth,
        "eyes": eyes, "ruff": ruff, "wings": wings, "tail": tail, "legs": legs,
    }

# ---------------------------------------------------------------------------
# Studio / cameras / render
# ---------------------------------------------------------------------------
def setup_studio():
    studio = collection("STUDIO")
    # Ground
    bpy.ops.mesh.primitive_plane_add(size=18, location=(0, 0, -0.7))
    ground = bpy.context.object
    ground.name = "Ground"
    link(ground, studio)
    gmat = mat_clay("Ground", (0.07, 0.06, 0.045), 0.92)
    assign(ground, gmat)
    # Backdrop cyclorama
    bpy.ops.mesh.primitive_plane_add(size=24, location=(0, 14, 6))
    bg = bpy.context.object
    bg.name = "Backdrop"
    bg.rotation_euler = (math.radians(80), 0, 0)
    link(bg, studio)
    assign(bg, mat_clay("Backdrop", (0.035, 0.04, 0.055), 1.0))

    world = bpy.context.scene.world or bpy.data.worlds.new("World")
    bpy.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    bg.inputs["Color"].default_value = (0.018, 0.022, 0.04, 1)
    bg.inputs["Strength"].default_value = 0.35
    nt.links.new(bg.outputs["Background"], out.inputs["Surface"])
    if HDRI.exists():
        env = nt.nodes.new("ShaderNodeTexEnvironment")
        env.image = bpy.data.images.load(str(HDRI))
        bg.inputs["Strength"].default_value = 0.45
        nt.links.new(env.outputs["Color"], bg.inputs["Color"])

    def lamp(name, typ, loc, color, energy, size=0.4, rot=(0, 0, 0)):
        data = bpy.data.lights.new(name, typ)
        data.color = color
        data.energy = energy
        if typ == "AREA":
            data.size = size
        if typ == "SPOT":
            data.spot_size = math.radians(50)
            data.shadow_soft_size = 0.4
        ob = bpy.data.objects.new(name, data)
        ob.location = loc
        ob.rotation_euler = rot
        link(ob, studio)
        return ob

    # Concept-like: warm amber key (left), cool cyan fill (right), soft rim
    lamp("KeyAmber", "AREA", (-3.2, -2.4, 2.4), (1.0, 0.62, 0.32), 250, size=1.8,
         rot=(math.radians(55), 0, math.radians(-50)))
    lamp("FillCyan", "AREA", (3.6, -1.6, 2.0), (0.35, 0.7, 1.0), 90, size=2.2,
         rot=(math.radians(60), 0, math.radians(50)))
    lamp("Rim", "AREA", (0.4, 3.6, 2.8), (0.7, 0.8, 1.0), 80, size=1.4,
         rot=(math.radians(70), 0, math.radians(180)))
    lamp("GroundBounce", "AREA", (0, -0.5, -0.2), (0.5, 0.35, 0.2), 20, size=4,
         rot=(0, 0, 0))

    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGB"
    scene.render.film_transparent = False
    try:
        scene.eevee.taa_render_samples = 8 if QUICK else 16
        scene.eevee.use_shadows = True
        scene.eevee.use_raytracing = True
    except Exception:
        pass
    # AgX default is fine

    try:
        scene.view_settings.view_transform = "AgX"
        scene.view_settings.look = "AgX - Medium High Contrast"
    except Exception:
        pass
    return studio


def look_at(obj, target, up=Vector((0, 0, 1))):
    direction = (Vector(target) - Vector(obj.location)).normalized()
    if direction.length < 1e-8:
        return
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def add_camera(name, loc, target, lens=50, ortho=False, ortho_scale=2.2):
    cam = bpy.data.cameras.new(name)
    cam.lens = lens
    cam.clip_start = 0.02
    cam.clip_end = 40
    if ortho:
        cam.type = "ORTHO"
        cam.ortho_scale = ortho_scale
    ob = bpy.data.objects.new(name, cam)
    ob.location = loc
    bpy.context.scene.collection.objects.link(ob)
    look_at(ob, target)
    return ob


def cameras_for_bird():
    # Bird faces +Y. Hero is a front 3/4 matching concept-01 (coming at the camera).
    aim = Vector((0.0, 0.12, 0.12))
    head = Vector((0.0, 0.38, 0.08))
    cams = {
        "hero": add_camera("CamHero", (-1.55, 2.55, 0.28), (0.0, 0.08, 0.12), lens=50),
        "hero_close": add_camera("CamHeroClose", (-0.42, 1.08, 0.14), Vector((0.0, 0.46, 0.04)), lens=70),
        "front": add_camera("CamFront", (0, 2.6, 0.14), aim, ortho=True, ortho_scale=2.3),
        "side": add_camera("CamSide", (2.2, 0.10, 0.14), aim, ortho=True, ortho_scale=1.9),
        "top": add_camera("CamTop", (0.0, 0.10, 2.5), aim, ortho=True, ortho_scale=2.5),
        "threeq": add_camera("Cam3Q", (-1.55, 1.85, 0.75), aim, lens=50),
        "player_up": add_camera("CamPlayerUp", (-0.15, 1.35, -0.35), (0.0, 0.12, 0.10), lens=48),
    }
    cams["top"].rotation_euler = (0, 0, 0)
    return cams


def render_still(cam, path, res=None):
    if res is None:
        res = STILL_RES
    scene = bpy.context.scene
    scene.camera = cam
    scene.render.resolution_x, scene.render.resolution_y = res
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    scene.render.filepath = str(path.with_suffix(""))
    scene.render.image_settings.file_format = "PNG"
    bpy.ops.render.render(write_still=True)
    print("RENDER", path)


def render_turnaround(cams, outdir, tag, full=False):
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    names = ("hero", "hero_close", "front", "side", "threeq", "player_up") if QUICK else ("hero", "hero_close", "front", "side", "top", "threeq", "player_up")
    for name in names:
        if name in cams:
            render_still(cams[name], outdir / f"{tag}_{name}.png")
    if full and not QUICK:
        aim = Vector((0.0, 0.12, 0.12))
        radius, height = 2.3, 0.4
        cam = cams.get("turn") or add_camera("CamTurn", (0, radius, height), aim, lens=55)
        cams["turn"] = cam
        for i in range(8):
            a = i / 8 * math.tau
            cam.location = Vector((math.sin(a) * radius, math.cos(a) * radius, height))
            look_at(cam, aim)
            render_still(cam, outdir / f"{tag}_turn_{i:02d}.png", (1600, 900))
    return outdir


def save_blend(name):
    path = OUT_BLEND / name
    path.parent.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(path))
    print("BLEND", path)


# ---------------------------------------------------------------------------
# SCULPT — subdivided high-poly with wrinkle / keratin / lumpy gore displace
# ---------------------------------------------------------------------------
def _disp_noise(p, scale=8.0):
    return mu_noise.noise(Vector(p) * scale)


def sculpt_object(obj, kind, subdiv=2):
    high_coll = collection("BIRD_HIGH")
    set_active(obj)
    bpy.ops.object.duplicate()
    hi = bpy.context.object
    hi.name = obj.name + "_High"
    link(hi, high_coll)
    add_subsurf(hi, levels=subdiv, render=subdiv)
    apply_modifiers(hi)
    me = hi.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.verts.ensure_lookup_table()
    bm.normal_update()
    for v in bm.verts:
        p, n = v.co, v.normal
        amp = 0.0
        if kind in ("head", "neck", "flesh"):
            ring = math.sin(p.y * 55.0 + _disp_noise(p, 4) * 0.8)
            wrinkle = ring * (0.0018 if kind != "head" else 0.0012)
            pores = _disp_noise(p, 28.0) * 0.0007
            amp = wrinkle + pores + _disp_noise(p, 9) * 0.0012
            if kind == "head":
                for sx in (-1, 1):
                    d = (p - Vector((sx * 0.048, 0.452, 0.086))).length
                    if d < 0.028:
                        amp -= (0.028 - d) * 0.35
        elif kind == "beak":
            amp = math.sin(p.x * 80.0) * 0.0008 + _disp_noise(p, 16) * 0.0005
        elif kind == "bone":
            amp = _disp_noise(p, 14) * 0.001
        elif kind == "gore":
            amp = _disp_noise(p, 10) * 0.004
        elif kind == "leg":
            amp = abs(math.sin(p.z * 60) * math.sin(p.y * 40)) * 0.0015 + _disp_noise(p, 20) * 0.0006
        else:
            amp = _disp_noise(p, 10) * 0.0008
        v.co = p + n * amp
    bm.to_mesh(me)
    bm.free()
    me.update()
    return hi


def build_sculpt(parts):
    collection("BIRD_HIGH")
    mapping = [
        (parts["body"], "flesh"),
        (parts["neck"], "neck"),
        (parts["head"], "head"),
        (parts["beak"], "beak"),
        (parts["jaw"], "beak"),
        (parts["ribs"], "bone"),
        (parts["gore"], "gore"),
        (parts["mouth"], "gore"),
    ]
    for leg in parts["legs"]:
        mapping.append((leg, "leg"))
    highs = [sculpt_object(obj, kind, subdiv=2 if kind in ("head", "neck", "flesh") else 1) for obj, kind in mapping]
    parts["highs"] = highs
    return highs


# ---------------------------------------------------------------------------
# RETOPO — blockout cage already carries joint rings; emit a decimated lo LOD
# ---------------------------------------------------------------------------
def build_retopo(parts):
    bird_lo = collection("BIRD_LO")
    lo_objs = []
    for obj in list(parts["coll"].objects):
        if obj.name.endswith("_High") or obj.type != "MESH":
            continue
        set_active(obj)
        bpy.ops.object.duplicate()
        lo = bpy.context.object
        lo.name = obj.name + "_LO"
        link(lo, bird_lo)
        d = lo.modifiers.new("Dec", "DECIMATE")
        n = obj.name
        if any(k in n for k in ("Primary", "Secondary", "Coverts", "Ruff", "Eye")):
            d.ratio = 1.0
        elif n in ("Head", "BeakUpper", "Jaw", "Neck"):
            d.ratio = 0.55
        else:
            d.ratio = 0.4
        apply_modifiers(lo)
        lo_objs.append(lo)
    parts["lo_coll"] = bird_lo
    parts["lo_objs"] = lo_objs
    return lo_objs


# ---------------------------------------------------------------------------
# UVs
# ---------------------------------------------------------------------------
def unwrap_object(obj, margin=0.02):
    if obj.type != "MESH":
        return
    set_active(obj)
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    try:
        bpy.ops.uv.smart_project(angle_limit=math.radians(66), island_margin=margin,
                                 correct_aspect=True, scale_to_bounds=False)
    except Exception as e:
        print("smart_project failed, angle unwrap", e)
        bpy.ops.uv.unwrap(method="ANGLE_BASED", margin=margin)
    bpy.ops.object.mode_set(mode="OBJECT")


def build_uvs(parts):
    n = 0
    for obj in list(parts["coll"].objects) + list(parts.get("lo_objs") or []):
        if obj.type != "MESH":
            continue
        unwrap_object(obj, margin=0.012)
        n += 1
    print("UVs unwrapped for", n, "meshes")


# ---------------------------------------------------------------------------
# BAKE
# ---------------------------------------------------------------------------
def _make_img(name, size, alpha=False):
    return bpy.data.images.new(name, width=size, height=size, alpha=alpha, float_buffer=False)


def _ensure_bake_nodes(obj, img):
    if not obj.data.materials:
        return None
    mat = obj.data.materials[0]
    if not mat or not mat.use_nodes:
        return None
    nt = mat.node_tree
    node = nt.nodes.get("BakeTarget") or nt.nodes.new("ShaderNodeTexImage")
    node.name = "BakeTarget"
    node.image = img
    node.select = True
    nt.nodes.active = node
    return node


def bake_maps(parts, size=512):
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = 8 if QUICK else 24
    try:
        scene.cycles.use_denoising = False
    except Exception:
        pass
    OUT_BAKE.mkdir(parents=True, exist_ok=True)
    body_names = {"Body", "Neck", "Head", "Jaw", "BeakUpper", "Ribs", "Gore", "MouthGore", "Leg_L", "Leg_R", "WoundLip", "Lids", "Sockets", "Talon_L", "Talon_R"}
    lows = [o for o in parts["coll"].objects if o.name in body_names]
    highs = [o for o in collection("BIRD_HIGH").objects if o.name.replace("_High", "") in body_names]
    if not lows:
        print("no lows to bake")
        return {}

    def dup_join(objs, name, coll):
        dups = []
        for o in objs:
            set_active(o)
            bpy.ops.object.duplicate()
            d = bpy.context.object
            d.name = name + "_" + o.name + "_tmp"
            dups.append(d)
        return join_objs(dups, name, coll)

    bake_coll = collection("BAKE")
    low_j = dup_join(lows, "BakeLow", bake_coll)
    high_j = dup_join(highs, "BakeHigh", bake_coll) if highs else None
    unwrap_object(low_j, margin=0.01)

    maps = {}

    def _prep_bake_obj(obj, img):
        obj.hide_set(False)
        obj.hide_render = False
        # Image node must be active in EVERY material slot or Cycles skips the bake.
        if obj.data.materials:
            for i, mat in enumerate(list(obj.data.materials)):
                if mat is None:
                    continue
                if i == 0:
                    _ensure_bake_nodes(obj, img)
                else:
                    # share slot 0's material for baking so one target image is used
                    obj.data.materials[i] = obj.data.materials[0]
        else:
            _ensure_bake_nodes(obj, img)

    def do_bake(kind, filename, selected_to_active=True):
        img = _make_img(f"Bake_{kind}", size, alpha=False)
        _prep_bake_obj(low_j, img)
        if high_j:
            high_j.hide_set(False)
            high_j.hide_render = False
        bpy.ops.object.select_all(action="DESELECT")
        if selected_to_active and high_j:
            high_j.select_set(True)
            low_j.select_set(True)
            bpy.context.view_layer.objects.active = low_j
            bpy.ops.object.bake(type=kind, use_selected_to_active=True, cage_extrusion=0.04,
                                margin=4, normal_space="TANGENT")
        else:
            low_j.select_set(True)
            bpy.context.view_layer.objects.active = low_j
            bpy.ops.object.bake(type=kind, use_selected_to_active=False, margin=4)
        dest = OUT_BAKE / filename
        img.filepath_raw = str(dest)
        img.file_format = "PNG"
        img.save()
        maps[kind] = dest
        print("BAKE", kind, dest)
        return dest

    try:
        do_bake("NORMAL", "body_normal.png")
    except Exception:
        traceback.print_exc()
    try:
        do_bake("AO", "body_ao.png")
    except Exception:
        traceback.print_exc()
    try:
        mat = low_j.data.materials[0]
        tmp = bpy.data.materials.new("CurvBake")
        tmp.use_nodes = True
        nt = tmp.node_tree
        for n in list(nt.nodes):
            nt.nodes.remove(n)
        out = nt.nodes.new("ShaderNodeOutputMaterial")
        em = nt.nodes.new("ShaderNodeEmission")
        geom = nt.nodes.new("ShaderNodeNewGeometry")
        ramp = nt.nodes.new("ShaderNodeValToRGB")
        ramp.color_ramp.elements[0].position = 0.4
        ramp.color_ramp.elements[1].position = 0.6
        nt.links.new(geom.outputs["Pointiness"], ramp.inputs["Fac"])
        nt.links.new(ramp.outputs["Color"], em.inputs["Color"])
        em.inputs["Strength"].default_value = 1
        nt.links.new(em.outputs["Emission"], out.inputs["Surface"])
        low_j.data.materials[0] = tmp
        _ensure_bake_nodes(low_j, _make_img("Bake_CURV", size))
        do_bake("EMIT", "body_curv.png", selected_to_active=False)
        low_j.data.materials[0] = mat
    except Exception:
        traceback.print_exc()
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    parts["bakes"] = maps
    return maps


# ---------------------------------------------------------------------------
# TEXTURES
# ---------------------------------------------------------------------------
def compose_and_apply_textures(parts):
    composer = HERE / "compose_textures.py"
    if composer.exists():
        cmd = [SYS_PY, str(composer), "--bakes", str(OUT_BAKE), "--out", str(OUT_TEX), "--size", "512"]
        print("COMPOSE", " ".join(cmd))
        try:
            subprocess.check_call(cmd)
        except Exception as e:
            print("compose failed", e)
    body_a, body_n, body_r = OUT_TEX / "body_albedo.png", OUT_TEX / "body_normal.png", OUT_TEX / "body_roughness.png"
    feat_a, feat_n, feat_r = OUT_TEX / "feather_albedo.png", OUT_TEX / "feather_normal.png", OUT_TEX / "feather_roughness.png"
    ruff_a = OUT_TEX / "ruff_albedo.png"
    bake_n = OUT_BAKE / "body_normal.png"
    body_n_path = body_n if body_n.exists() else (bake_n if bake_n.exists() else None)
    body_mat = mat_pbr("BodyPBR", albedo=body_a if body_a.exists() else None,
                       normal=body_n_path,
                       rough_tex=body_r if body_r.exists() else None,
                       color=(0.38, 0.44, 0.36), rough=0.80)
    # Head does not use the shared body atlas — smart-project UVs would pick random blood/wet patches.
    # Never share the body normal atlas with the head — smart-project UVs turn it into craters.
    head_mat = mat_pbr("HeadPBR", albedo=None, normal=None,
                       color=(0.38, 0.44, 0.36), rough=0.80)
    beak_mat = mat_pbr("BeakPBR", albedo=None, color=(0.28, 0.18, 0.12), rough=0.48)
    bone_mat = mat_pbr("BonePBR", albedo=None, color=(0.78, 0.74, 0.62), rough=0.74)
    leg_mat = mat_pbr("LegPBR", albedo=None, color=(0.42, 0.32, 0.30), rough=0.78)
    socket_mat = mat_pbr("SocketPBR", albedo=None, color=(0.12, 0.13, 0.10), rough=0.82)
    gore_mat = mat_pbr("GorePBR", albedo=None,
                       color=(0.28, 0.04, 0.04), rough=0.42, clearcoat=0.22, coat_rough=0.28)
    feather_mat = mat_pbr("FeatherPBR", albedo=feat_a if feat_a.exists() else None,
                          normal=feat_n if feat_n.exists() else None,
                          rough_tex=feat_r if feat_r.exists() else None,
                          color=(0.28, 0.20, 0.14), rough=0.88, alpha_clip=0.4)
    pale_mat = mat_pbr("FeatherPalePBR", albedo=feat_a if feat_a.exists() else None,
                       color=(0.55, 0.48, 0.38), rough=0.86, alpha_clip=0.4)
    ruff_mat = mat_pbr("RuffPBR", albedo=ruff_a if ruff_a.exists() else None,
                       color=(0.82, 0.78, 0.68), rough=0.92, alpha_clip=0.35)
    eye_mat = parts["mats"]["eye"]
    iris_mat = parts["mats"].get("iris") or eye_mat
    pupil_mat = parts["mats"].get("pupil") or body_mat
    talon_mat = mat_pbr("TalonPBR", color=(0.04, 0.03, 0.03), rough=0.35)
    under_mat = mat_pbr("UnderPBR", albedo=feat_a if feat_a.exists() else None,
                        color=(0.55, 0.46, 0.36), rough=0.86, alpha_clip=0.4)

    def apply_named(obj):
        n = obj.name
        if n.startswith("Iris"):
            assign(obj, iris_mat)
        elif n.startswith("Pupil"):
            assign(obj, pupil_mat)
        elif n.startswith("Eye"):
            assign(obj, eye_mat)
        elif n.startswith("Talon"):
            assign(obj, talon_mat)
        elif "Gore" in n:
            assign(obj, gore_mat)
        elif n.startswith("Socket"):
            assign(obj, socket_mat)
        elif n in ("Head", "Neck", "Lids", "WoundLip") or n.startswith("Lid"):
            assign(obj, head_mat)
        elif n in ("BeakUpper", "Jaw") or n.startswith("Beak"):
            assign(obj, beak_mat)
        elif n.startswith("Rib"):
            assign(obj, bone_mat)
        elif n.startswith("Leg"):
            assign(obj, leg_mat)
        elif n.startswith("Ruff"):
            assign(obj, ruff_mat)
        elif "Under" in n or "Pale" in n:
            assign(obj, under_mat if "Under" in n else pale_mat)
        elif n.startswith(("Wing", "Primary", "Secondary", "Coverts", "Tail", "Mantle", "Trouser", "WoundFringe")):
            assign(obj, feather_mat)
        else:
            assign(obj, body_mat)

    for obj in list(parts["coll"].objects) + list(parts.get("lo_objs") or []):
        if obj.type == "MESH":
            apply_named(obj)
    parts["pbr"] = {"body": body_mat, "gore": gore_mat, "feather": feather_mat,
                    "pale": pale_mat, "ruff": ruff_mat, "eye": eye_mat}
    return parts["pbr"]


# ---------------------------------------------------------------------------
# FEATHERS — extra covert rows; atlas UVs on all cards (alpha clip sorts)
# ---------------------------------------------------------------------------
def build_feather_cards(parts):
    bird = parts["coll"]
    mats = parts.get("pbr") or parts["mats"]
    feather = mats["feather"] if "feather" in mats else parts["mats"]["feather"]
    for side, nm in ((1, "R"), (-1, "L")):
        if any(o.name == f"Coverts_{nm}" for o in bird.objects):
            continue
        bm = bmesh.new()
        n = 8
        for i in range(n):
            t = i / (n - 1)
            o = Vector((side * lerp(0.18, 0.70, t), lerp(0.04, -0.02, t), 0.14))
            d = Vector((side * 0.2, -0.95, 0.05)).normalized()
            quat = d.to_track_quat("Y", "Z")
            add_box(bm, o + d * 0.07, (lerp(0.06, 0.045, t), 0.14, 0.005), rot=quat)
        me = mesh_from_bmesh(f"Coverts_{nm}", bm)
        bm.free()
        obj = new_obj(f"Coverts_{nm}", me, bird)
        assign(obj, feather)
        shade_auto(obj)
        unwrap_object(obj)
    for obj in bird.objects:
        if any(obj.name.startswith(p) for p in ("Primary", "Secondary", "Coverts", "Tail", "Ruff", "WingMem")):
            unwrap_object(obj)
    return True


# ---------------------------------------------------------------------------
# RIG + WEIGHTS
# ---------------------------------------------------------------------------
BONES = [
    # 16 bones, art-bible swarm_creature cap
    ("root",   Vector((0, 0.00, 0.00)), Vector((0, 0.00, 0.06)), None),
    ("chest",  Vector((0, -0.08, 0.14)), Vector((0, 0.20, 0.16)), "root"),
    ("neck",   Vector((0, 0.22, 0.13)), Vector((0, 0.35, 0.09)), "chest"),
    ("head",   Vector((0, 0.35, 0.09)), Vector((0, 0.46, 0.08)), "neck"),
    ("jaw",    Vector((0, 0.492, 0.028)), Vector((0, 0.555, -0.018)), "head"),
    ("tail",   Vector((0, -0.18, 0.13)), Vector((0, -0.48, 0.08)), "root"),
    ("wingL",  raise_pt(Vector((-0.12, 0.06, 0.20)), -1), raise_pt(Vector((-0.48, 0.08, 0.13)), -1), "chest"),
    ("elbowL", raise_pt(Vector((-0.48, 0.08, 0.13)), -1), raise_pt(Vector((-0.78, 0.04, 0.23)), -1), "wingL"),
    ("wristL", raise_pt(Vector((-0.78, 0.04, 0.23)), -1), raise_pt(Vector((-1.10, 0.00, 0.28)), -1), "elbowL"),
    ("wingR",  raise_pt(Vector((0.12, 0.06, 0.20)), 1), raise_pt(Vector((0.48, 0.08, 0.13)), 1), "chest"),
    ("elbowR", raise_pt(Vector((0.48, 0.08, 0.13)), 1), raise_pt(Vector((0.78, 0.04, 0.23)), 1), "wingR"),
    ("wristR", raise_pt(Vector((0.78, 0.04, 0.23)), 1), raise_pt(Vector((1.10, 0.00, 0.28)), 1), "elbowR"),
    ("thighL", Vector((-0.06, 0.06, 0.05)), Vector((-0.07, 0.15, -0.05)), "root"),
    ("footL",  Vector((-0.07, 0.15, -0.05)), Vector((-0.05, 0.28, -0.14)), "thighL"),
    ("thighR", Vector((0.06, 0.06, 0.05)), Vector((0.07, 0.15, -0.05)), "root"),
    ("footR",  Vector((0.07, 0.15, -0.05)), Vector((0.05, 0.28, -0.14)), "thighR"),
]


def build_armature(parts):
    arm_data = bpy.data.armatures.new("BuzzardArmature")
    arm_data.display_type = "OCTAHEDRAL"
    arm_obj = bpy.data.objects.new("BuzzardArmature", arm_data)
    link(arm_obj, parts["coll"])
    set_active(arm_obj)
    bpy.ops.object.mode_set(mode="EDIT")
    eb = {}
    for name, head, tail, parent in BONES:
        b = arm_data.edit_bones.new(name)
        b.head, b.tail = head, tail
        eb[name] = b
    for name, head, tail, parent in BONES:
        if parent:
            eb[name].parent = eb[parent]
            eb[name].use_connect = (eb[name].head - eb[parent].tail).length < 0.002
    bpy.ops.object.mode_set(mode="OBJECT")
    parts["arm"] = arm_obj
    return arm_obj


def _bone_capsule_dist(p, head, tail, radius):
    d = tail - head
    l2 = d.length_squared
    if l2 < 1e-10:
        return (p - head).length / max(radius, 1e-6)
    t = clamp((p - head).dot(d) / l2)
    return (p - (head + d * t)).length / max(radius, 1e-6)


def _hard_bone(obj_name):
    """Exclusive bone for cards / small parts. None = blend by proximity."""
    n = obj_name.lower()
    if n.startswith(("eye", "iris", "pupil")) or n in ("head", "beakupper", "lids", "sockets"):
        return "head"
    if n in ("jaw", "mouthgore"):
        return "jaw"
    if n == "ruff" or n.startswith("ruff"):
        return "neck"
    if n == "neck":
        return "neck"
    if n == "tail":
        return "tail"
    if n in ("ribs", "gore", "woundlip", "woundfringe"):
        return "chest"
    # Body/mantle blend across chest/root/tail so the rump follows the tail.
    if n.startswith("talon_l") or n == "talon_l":
        return "footL"
    if n.startswith("talon_r") or n == "talon_r":
        return "footR"
    if n.startswith("trouser_l") or n.startswith("leg_l"):
        return None  # blend thigh/foot
    if n.startswith("trouser_r") or n.startswith("leg_r"):
        return None
    return None


def _weight_hint(obj_name, bname):
    n = obj_name.lower()
    hard = _hard_bone(obj_name)
    if hard:
        return 12.0 if bname == hard else 0.0
    side_l = n.endswith("_l") or "_l_" in n or n.endswith("_l")
    side_r = n.endswith("_r") or "_r_" in n or n.endswith("_r")
    if any(k in n for k in ("wing", "primary", "secondary", "covert")):
        bones_l = ("wingL", "elbowL", "wristL")
        bones_r = ("wingR", "elbowR", "wristR")
        if side_l:
            return 3.0 if bname in bones_l else 0.0
        if side_r:
            return 3.0 if bname in bones_r else 0.0
        return 0.0
    if n.startswith("leg_l") or n.startswith("trouser_l"):
        return 3.5 if bname in ("thighL", "footL") else 0.0
    if n.startswith("leg_r") or n.startswith("trouser_r"):
        return 3.5 if bname in ("thighR", "footR") else 0.0
    if n in ("neck", "ruff"):
        return 4.0 if bname in ("neck", "head", "chest") else 0.0
    if n in ("body", "mantle"):
        return 3.0 if bname in ("chest", "root") else (1.6 if bname in ("tail", "neck") else 0.0)
    return 0.2 if bname in ("chest", "root") else 0.0


def paint_weights(parts):
    arm = parts["arm"]
    arm.hide_render = True
    radii = {
        "root": 0.12, "chest": 0.16, "neck": 0.08,
        "head": 0.09, "jaw": 0.06, "tail": 0.10,
        "wingL": 0.14, "elbowL": 0.12, "wristL": 0.20,
        "wingR": 0.14, "elbowR": 0.12, "wristR": 0.20,
        "thighL": 0.10, "footL": 0.12,
        "thighR": 0.10, "footR": 0.12,
    }
    bone_rest = {b.name: (arm.matrix_world @ b.head_local, arm.matrix_world @ b.tail_local) for b in arm.data.bones}
    targets = [o for o in parts["coll"].objects if o.type == "MESH" and not o.name.endswith("_High") and "Bake" not in o.name]
    # Apply rotation/scale so armature deform doesn't stretch unapplied transforms.
    for obj in targets:
        set_active(obj)
        try:
            bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        except Exception as e:
            print("apply transform failed", obj.name, e)
    for obj in targets:
        set_active(obj)
        # Drop any existing armature mods / leftover groups
        for m in list(obj.modifiers):
            if m.type == "ARMATURE":
                obj.modifiers.remove(m)
        mod = obj.modifiers.new("Armature", "ARMATURE")
        mod.object = arm
        mod.use_vertex_groups = True
        obj.parent = arm
        obj.parent_type = "OBJECT"
        groups = {name: (obj.vertex_groups.get(name) or obj.vertex_groups.new(name=name)) for name, *_ in BONES}
        me = obj.data
        hard = _hard_bone(obj.name)
        for v in me.vertices:
            for vg in obj.vertex_groups:
                try:
                    vg.remove([v.index])
                except Exception:
                    pass
            if hard:
                groups[hard].add([v.index], 1.0, "REPLACE")
                continue
            p = obj.matrix_world @ v.co
            weights = []
            for bname, (head, tail) in bone_rest.items():
                hint = _weight_hint(obj.name, bname)
                if hint <= 0.0:
                    continue
                d = _bone_capsule_dist(p, head, tail, radii.get(bname, 0.08))
                w = math.exp(-d * d * 2.2) * hint
                if w > 0.02:
                    weights.append((bname, w))
            weights.sort(key=lambda x: -x[1])
            weights = weights[:2]  # at most two bones — cards must not shear
            s = sum(w for _, w in weights) or 1.0
            if not weights and "chest" in groups:
                groups["chest"].add([v.index], 1.0, "REPLACE")
                continue
            for bname, w in weights:
                groups[bname].add([v.index], w / s, "REPLACE")
    print("WEIGHTS painted on", len(targets), "meshes (hard binds + 2-bone blend)", flush=True)
    return True


# ---------------------------------------------------------------------------
# ANIMATIONS
# ---------------------------------------------------------------------------
def _pb(arm, name):
    return arm.pose.bones[name]


def _key_rot(pb, frame, euler):
    pb.rotation_mode = "XYZ"
    pb.rotation_euler = euler
    pb.keyframe_insert(data_path="rotation_euler", frame=frame)


def _action(arm, name, frames, fn):
    if arm.animation_data is None:
        arm.animation_data_create()
    act = bpy.data.actions.new(name)
    arm.animation_data.action = act
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="POSE")
    bpy.ops.pose.select_all(action="SELECT")
    bpy.ops.pose.rot_clear()
    bpy.ops.pose.loc_clear()
    fn(arm, frames)
    for fc in act.fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = "BEZIER"
            kp.handle_left_type = "AUTO_CLAMPED"
            kp.handle_right_type = "AUTO_CLAMPED"
    bpy.ops.object.mode_set(mode="OBJECT")
    arm.animation_data.action = act
    return act


def build_animations(parts):
    arm = parts["arm"]
    set_active(arm)

    def glide(arm, n):
        for f, t in ((1, 0.0), (13, 0.5), (25, 1.0), (37, 0.5), (n, 0.0)):
            s = math.sin(t * math.tau)
            _key_rot(_pb(arm, "wingL"), f, Euler((0.0, 0.0, math.radians(12 + s * 4))))
            _key_rot(_pb(arm, "wingR"), f, Euler((0.0, 0.0, math.radians(-12 - s * 4))))
            _key_rot(_pb(arm, "elbowL"), f, Euler((0, 0, math.radians(4 + s * 3))))
            _key_rot(_pb(arm, "elbowR"), f, Euler((0, 0, math.radians(-4 - s * 3))))
            _key_rot(_pb(arm, "wristL"), f, Euler((0, math.radians(s * 6), 0)))
            _key_rot(_pb(arm, "wristR"), f, Euler((0, math.radians(-s * 6), 0)))
            _key_rot(_pb(arm, "head"), f, Euler((math.radians(s * 4), math.radians(s * 8), 0)))
            _key_rot(_pb(arm, "tail"), f, Euler((math.radians(s * 3), 0, 0)))
            _key_rot(_pb(arm, "jaw"), f, Euler((math.radians(8), 0, 0)))

    def flap(arm, n):
        for f, p in ((1, 0.0), (5, -0.9), (8, 0.15), (12, 1.0), (n, 0.0)):
            _key_rot(_pb(arm, "wingL"), f, Euler((0, 0, math.radians(12 - p * 38))))
            _key_rot(_pb(arm, "wingR"), f, Euler((0, 0, math.radians(-12 + p * 38))))
            _key_rot(_pb(arm, "elbowL"), f, Euler((0, 0, math.radians(6 - p * 20))))
            _key_rot(_pb(arm, "elbowR"), f, Euler((0, 0, math.radians(-6 + p * 20))))
            _key_rot(_pb(arm, "wristL"), f, Euler((0, math.radians(p * 18), 0)))
            _key_rot(_pb(arm, "wristR"), f, Euler((0, math.radians(-p * 18), 0)))
            _key_rot(_pb(arm, "chest"), f, Euler((math.radians(-p * 4), 0, 0)))
            _key_rot(_pb(arm, "tail"), f, Euler((math.radians(-p * 8), 0, 0)))

    def bank(arm, n):
        for f, roll in ((1, 0), (8, 0.55), (16, 0), (24, -0.55), (n, 0)):
            _key_rot(_pb(arm, "root"), f, Euler((0, math.radians(roll * 25), 0)))
            _key_rot(_pb(arm, "wingL"), f, Euler((0, 0, math.radians(12 + roll * 14))))
            _key_rot(_pb(arm, "wingR"), f, Euler((0, 0, math.radians(-12 + roll * 14))))
            _key_rot(_pb(arm, "head"), f, Euler((0, 0, math.radians(-roll * 8))))

    def dive_tuck(arm, n):
        for f, t in ((1, 0.0), (8, 0.55), (n, 1.0)):
            _key_rot(_pb(arm, "wingL"), f, Euler((math.radians(t * 25), math.radians(t * 55), math.radians(12 - t * 20))))
            _key_rot(_pb(arm, "wingR"), f, Euler((math.radians(t * 25), math.radians(-t * 55), math.radians(-12 + t * 20))))
            _key_rot(_pb(arm, "elbowL"), f, Euler((0, math.radians(t * 40), math.radians(t * 30))))
            _key_rot(_pb(arm, "elbowR"), f, Euler((0, math.radians(-t * 40), math.radians(-t * 30))))
            _key_rot(_pb(arm, "wristL"), f, Euler((0, math.radians(t * 20), 0)))
            _key_rot(_pb(arm, "wristR"), f, Euler((0, math.radians(-t * 20), 0)))
            _key_rot(_pb(arm, "thighL"), f, Euler((math.radians(-t * 25), 0, 0)))
            _key_rot(_pb(arm, "thighR"), f, Euler((math.radians(-t * 25), 0, 0)))
            _key_rot(_pb(arm, "head"), f, Euler((math.radians(-t * 10), 0, 0)))
            _key_rot(_pb(arm, "neck"), f, Euler((math.radians(-t * 8), 0, 0)))
            _key_rot(_pb(arm, "tail"), f, Euler((math.radians(-t * 15), 0, 0)))
            _key_rot(_pb(arm, "jaw"), f, Euler((math.radians(8 + t * 6), 0, 0)))

    def strike(arm, n):
        for f, t in ((1, 0.0), (5, 0.7), (10, 1.0), (n, 0.85)):
            _key_rot(_pb(arm, "wingL"), f, Euler((math.radians(-t * 8), math.radians(-t * 10), math.radians(18 + t * 16))))
            _key_rot(_pb(arm, "wingR"), f, Euler((math.radians(-t * 8), math.radians(t * 10), math.radians(-18 - t * 16))))
            _key_rot(_pb(arm, "elbowL"), f, Euler((0, 0, math.radians(-t * 6))))
            _key_rot(_pb(arm, "elbowR"), f, Euler((0, 0, math.radians(t * 6))))
            _key_rot(_pb(arm, "thighL"), f, Euler((math.radians(t * 55), 0, math.radians(t * 8))))
            _key_rot(_pb(arm, "thighR"), f, Euler((math.radians(t * 55), 0, math.radians(-t * 8))))
            _key_rot(_pb(arm, "footL"), f, Euler((math.radians(t * 20), 0, 0)))
            _key_rot(_pb(arm, "footR"), f, Euler((math.radians(t * 20), 0, 0)))
            _key_rot(_pb(arm, "head"), f, Euler((math.radians(t * 18), 0, 0)))
            _key_rot(_pb(arm, "jaw"), f, Euler((math.radians(8 + t * 22), 0, 0)))
            _key_rot(_pb(arm, "tail"), f, Euler((math.radians(t * 18), 0, 0)))
            _key_rot(_pb(arm, "chest"), f, Euler((math.radians(t * 8), 0, 0)))

    def death(arm, n):
        for f, t in ((1, 0.0), (10, 0.35), (24, 0.7), (n, 1.0)):
            _key_rot(_pb(arm, "wingL"), f, Euler((math.radians(t * 40), math.radians(t * 20), math.radians(12 - t * 50))))
            _key_rot(_pb(arm, "wingR"), f, Euler((math.radians(t * 15), math.radians(-t * 8), math.radians(-12 - t * 20))))
            _key_rot(_pb(arm, "elbowL"), f, Euler((0, 0, math.radians(-t * 25))))
            _key_rot(_pb(arm, "neck"), f, Euler((math.radians(t * 25), math.radians(t * 15), 0)))
            _key_rot(_pb(arm, "head"), f, Euler((math.radians(t * 30), math.radians(t * 20), 0)))
            _key_rot(_pb(arm, "jaw"), f, Euler((math.radians(8 + t * 18), 0, 0)))
            _key_rot(_pb(arm, "thighL"), f, Euler((math.radians(-t * 10), 0, 0)))
            _key_rot(_pb(arm, "thighR"), f, Euler((math.radians(-t * 4), 0, 0)))
            _key_rot(_pb(arm, "root"), f, Euler((math.radians(t * 15), math.radians(t * 40), math.radians(t * 20))))

    parts["actions"] = {
        "glide": _action(arm, "glide", 48, glide),
        "flap": _action(arm, "flap", 16, flap),
        "bank": _action(arm, "bank", 32, bank),
        "dive_tuck": _action(arm, "dive_tuck", 20, dive_tuck),
        "strike": _action(arm, "strike", 16, strike),
        "death": _action(arm, "death", 48, death),
    }
    arm.animation_data.action = parts["actions"]["glide"]
    bpy.context.scene.frame_set(1)
    print("ACTIONS", list(parts["actions"]))
    return parts["actions"]


def pose_for_render(parts, action_name, frame):
    arm = parts.get("arm")
    if not arm:
        return
    set_active(arm)
    bpy.ops.object.mode_set(mode="POSE")
    bpy.ops.pose.select_all(action="SELECT")
    bpy.ops.pose.rot_clear()
    bpy.ops.pose.loc_clear()
    try:
        bpy.ops.pose.scale_clear()
    except Exception:
        pass
    bpy.ops.object.mode_set(mode="OBJECT")
    if arm.animation_data is None:
        arm.animation_data_create()
    if action_name in parts.get("actions", {}):
        arm.animation_data.action = parts["actions"][action_name]
    else:
        arm.animation_data.action = None
    bpy.context.scene.frame_set(frame)
    bpy.context.view_layer.update()


# ---------------------------------------------------------------------------
# EXPORT
# ---------------------------------------------------------------------------
def _ensure_skin(obj, arm):
    """Re-attach an Armature modifier after join/decimate so skins survive export."""
    if not obj or not arm:
        return
    for m in list(obj.modifiers):
        if m.type == "ARMATURE":
            obj.modifiers.remove(m)
    mod = obj.modifiers.new("Armature", "ARMATURE")
    mod.object = arm
    mod.use_vertex_groups = True
    obj.parent = arm
    obj.parent_type = "OBJECT"
    assigned = 0
    for vg in obj.vertex_groups:
        try:
            assigned += sum(1 for v in obj.data.vertices if vg.weight(v.index) > 0.0)
        except RuntimeError:
            pass
    if assigned == 0:
        # Join/decimate dropped groups — paint by world proximity (name-based hints won't work on LOD_* meshes).
        radii = {
            "root": 0.12, "chest": 0.16, "neck": 0.08,
            "head": 0.09, "jaw": 0.06, "tail": 0.10,
            "wingL": 0.16, "elbowL": 0.14, "wristL": 0.22,
            "wingR": 0.16, "elbowR": 0.14, "wristR": 0.22,
            "thighL": 0.10, "footL": 0.12,
            "thighR": 0.10, "footR": 0.12,
        }
        bone_rest = {b.name: (arm.matrix_world @ b.head_local, arm.matrix_world @ b.tail_local) for b in arm.data.bones}
        groups = {name: (obj.vertex_groups.get(name) or obj.vertex_groups.new(name=name)) for name, *_ in BONES}
        n = obj.name.lower()
        is_eye = "eye" in n
        is_feather = "feather" in n
        for v in obj.data.vertices:
            if is_eye:
                groups["head"].add([v.index], 1.0, "REPLACE")
                continue
            pnt = obj.matrix_world @ v.co
            weights = []
            for bname, (head, tail) in bone_rest.items():
                if is_feather:
                    if pnt.x < -0.12 and bname not in ("wingL", "elbowL", "wristL", "tail", "chest", "neck"):
                        continue
                    if pnt.x > 0.12 and bname not in ("wingR", "elbowR", "wristR", "tail", "chest", "neck"):
                        continue
                    if abs(pnt.x) <= 0.12 and pnt.y < -0.12 and bname not in ("tail", "chest", "root"):
                        continue
                d = _bone_capsule_dist(pnt, head, tail, radii.get(bname, 0.08))
                w = math.exp(-d * d * 2.2)
                if w > 0.02:
                    weights.append((bname, w))
            weights.sort(key=lambda x: -x[1])
            weights = weights[:2]
            ssum = sum(w for _, w in weights) or 1.0
            if not weights:
                groups["chest"].add([v.index], 1.0, "REPLACE")
                continue
            for bname, w in weights:
                groups[bname].add([v.index], w / ssum, "REPLACE")
        print(f"    re-painted weights on {obj.name}", flush=True)
    else:
        print(f"    kept {assigned} weight assignments on {obj.name}", flush=True)


def _select_for_export(objs, arm=None):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        if o and o.name in bpy.data.objects:
            o.select_set(True)
    if arm:
        arm.select_set(True)
        bpy.context.view_layer.objects.active = arm



def _mesh_tris(obj):
    if not obj or obj.type != "MESH":
        return 0
    obj.data.calc_loop_triangles()
    return len(obj.data.loop_triangles)


def _decimate_to(obj, target):
    t0 = _mesh_tris(obj)
    if t0 <= target or target <= 0:
        return t0
    d = obj.modifiers.new("DecBudget", "DECIMATE")
    d.ratio = max(0.04, min(1.0, target / t0 * 0.85))
    apply_modifiers(obj)
    t1 = _mesh_tris(obj)
    if t1 > target * 1.05:
        d = obj.modifiers.new("DecBudget2", "DECIMATE")
        d.ratio = max(0.04, min(1.0, target / max(t1, 1) * 0.9))
        apply_modifiers(obj)
        t1 = _mesh_tris(obj)
    print(f"    decimate {obj.name}: {t0} -> {t1} (target {target})", flush=True)
    return t1


def export_glb(parts):
    """Export skinned hi/lo GLBs under the swarm_creature budget (2.5k/900/300 tris, ~300 KB, 16 bones)."""
    OUT_GLB.mkdir(parents=True, exist_ok=True)
    hi_path = OUT_GLB / "carrion-buzzard-hi.glb"
    lo_path = OUT_GLB / "carrion-buzzard-lo.glb"
    arm = parts.get("arm")
    if arm:
        arm.hide_render = True
        pose_for_render(parts, "glide", 1)
    hide_work_colls()
    src = [o for o in parts["coll"].objects
           if o.type == "MESH" and not o.name.endswith("_High") and "Bake" not in o.name]
    pack = collection("EXPORT")
    pack.hide_render = False

    def is_feather(n):
        return any(k in n for k in ("Wing", "Primary", "Secondary", "Coverts", "Tail", "Ruff", "Mantle", "Trouser", "WoundFringe"))

    def is_eye(n):
        return n.startswith(("Eye", "Iris", "Pupil"))

    def dup(o, suffix):
        set_active(o)
        bpy.ops.object.duplicate()
        d = bpy.context.object
        d.name = o.name + suffix
        d.hide_set(False)
        d.hide_render = False
        link(d, pack)
        return d

    def build_lod(tag, skip, body_cap, feather_cap):
        dups = []
        for o in src:
            if any(s in o.name for s in skip):
                continue
            dups.append(dup(o, "_" + tag))
        bodies = [o for o in dups if not is_feather(o.name) and not is_eye(o.name)]
        feathers = [o for o in dups if is_feather(o.name)]
        eyes = [o for o in dups if is_eye(o.name)]
        body = join_objs(bodies, tag + "_Body", pack) if bodies else None
        feather = join_objs(feathers, tag + "_Feathers", pack) if feathers else None
        eye = join_objs(eyes, tag + "_Eyes", pack) if eyes else None
        if body:
            print(f"  {tag} body before decimate: {_mesh_tris(body)} -> cap {body_cap}")
            _decimate_to(body, body_cap)
        if feather:
            print(f"  {tag} feather before decimate: {_mesh_tris(feather)} -> cap {feather_cap}")
            _decimate_to(feather, feather_cap)
        for o in (body, feather, eye):
            if o:
                print(f"  {o.name}: {_mesh_tris(o)} tris", flush=True)
        total = sum(_mesh_tris(o) for o in (body, feather, eye) if o)
        print(f"  {tag} TOTAL {total} tris (cap {body_cap + feather_cap})", flush=True)
        if arm:
            for o in (body, feather, eye):
                if o:
                    _ensure_skin(o, arm)
        return [o for o in (body, feather, eye) if o], total

    print("=== LOD BUILD ===", flush=True)
    lod0, t0 = build_lod("LOD0", skip=[], body_cap=1400, feather_cap=1100)
    lod1, t1 = build_lod("LOD1", skip=("Coverts", "WoundFringe", "Trouser", "WingUnder"), body_cap=500, feather_cap=350)
    lod2, t2 = build_lod("LOD2", skip=("Coverts", "WoundFringe", "Trouser", "Mantle", "Secondaries",
                                       "PrimariesDark", "PrimariesPale", "Iris", "Pupil", "Lids",
                                       "WingUnder", "WoundLip", "Sockets"),
                        body_cap=200, feather_cap=80)

    def isolate(objs):
        keep = set(objs + ([arm] if arm else []))
        for o in bpy.data.objects:
            vis = o in keep
            o.hide_set(not vis)
            o.hide_render = not vis
            o.select_set(vis)
        if arm:
            bpy.context.view_layer.objects.active = arm

    def exp(path, objs, image_format="WEBP", quality=70, draco=False):
        # CSP forbids WASM, so never ship Draco / meshopt / KTX2. WebP/JPEG only.
        isolate(objs)
        kw = dict(
            filepath=str(path),
            export_format="GLB",
            use_selection=True,
            use_visible=True,
            use_active_collection=False,
            export_apply=False,
            export_animations=True,
            export_anim_single_armature=True,
            export_skins=True,
            export_draco_mesh_compression_enable=False,
            export_image_quality=quality,
            export_jpeg_quality=quality,
            export_yup=True,
            export_cameras=False,
            export_lights=False,
            export_extras=False,
            export_unused_images=False,
        )
        # Drop keys the installed exporter may not know.
        try:
            bpy.ops.export_scene.gltf(export_image_format=image_format, **kw)
        except TypeError:
            for drop in ("use_visible", "export_unused_images", "export_jpeg_quality", "use_active_collection"):
                kw.pop(drop, None)
            try:
                bpy.ops.export_scene.gltf(export_image_format=image_format, **kw)
            except TypeError:
                bpy.ops.export_scene.gltf(export_image_format="AUTO", filepath=str(path),
                                          export_format="GLB", use_selection=True,
                                          export_animations=True, export_skins=True, export_yup=True)
        kb = path.stat().st_size / 1024 if path.exists() else 0
        print("GLB", path, f"{kb:.1f} KB", flush=True)
        return kb

    # Ship LOD0 in the hi file and LOD2 in the lo file only (LOD1 was unused bytes).
    kb_hi = exp(hi_path, lod0, quality=70)
    kb_lo = exp(lo_path, lod2, quality=55)
    if kb_hi + kb_lo > 300 and lo_path.exists():
        print("OVER BUDGET, re-exporting lo at lower quality", flush=True)
        kb_lo = exp(lo_path, lod2, image_format="JPEG", quality=45, draco=False)
    if kb_hi + kb_lo > 300 and hi_path.exists():
        print("STILL OVER, re-exporting hi at quality 50", flush=True)
        kb_hi = exp(hi_path, lod0, image_format="WEBP", quality=50, draco=False)
    if kb_hi + kb_lo > 300:
        print("STILL OVER, re-exporting both as JPEG 40", flush=True)
        kb_hi = exp(hi_path, lod0, image_format="JPEG", quality=40, draco=False)
        kb_lo = exp(lo_path, lod2, image_format="JPEG", quality=40, draco=False)
    print(f"BUDGET shipped {kb_hi+kb_lo:.1f} KB (cap 300), tris {t0}/{t1}/{t2} (cap 2500/900/300), bones 16", flush=True)
    parts["glb"] = {"hi": hi_path, "lo": lo_path, "tris": (t0, t1, t2), "kb": kb_hi + kb_lo}
    return parts["glb"]


def run_compare(tag, images, title):
    script = HERE / "compare_milestone.py"
    if not script.exists():
        print("no compare script")
        return
    out = OUT_RENDER / "compares" / f"{tag}.png"
    cmd = [SYS_PY, str(script), str(out), title] + [str(p) for p in images if Path(p).exists()]
    print("COMPARE", cmd)
    try:
        subprocess.check_call(cmd)
    except Exception as e:
        print("compare failed", e)


def milestone_renders(parts, tag, folder, also_strike=False):
    hide_work_colls()
    cams = parts.get("cams")
    if not cams:
        parts["cams"] = cameras_for_bird()
        cams = parts["cams"]
    if also_strike and parts.get("actions"):
        pose_for_render(parts, "strike", 10)
        render_still(cams["hero"], OUT_RENDER / folder / f"{tag}_hero_strike.png")
        render_still(cams["hero_close"], OUT_RENDER / folder / f"{tag}_close_strike.png")
        pose_for_render(parts, "dive_tuck", 20)
        render_still(cams["hero"], OUT_RENDER / folder / f"{tag}_hero_dive.png")
        pose_for_render(parts, "death", 24)
        render_still(cams["hero"], OUT_RENDER / folder / f"{tag}_hero_death.png")
        pose_for_render(parts, "glide", 1)
    render_turnaround(cams, OUT_RENDER / folder, tag, full=False)
    hero = OUT_RENDER / folder / f"{tag}_hero.png"
    close = OUT_RENDER / folder / f"{tag}_hero_close.png"
    side = OUT_RENDER / folder / f"{tag}_side.png"
    front = OUT_RENDER / folder / f"{tag}_front.png"
    run_compare(tag, [hero, close, side, front], f"{tag} vs concept-01")
    save_blend(f"buzzard_{tag}.blend")



def run_pipeline(mode):
    ship = mode == "ship"
    ensure_dirs()
    clear_scene()
    setup_studio()
    print("=== M1 BLOCKOUT ===")
    parts = build_blockout()
    parts["cams"] = cameras_for_bird()
    if mode in ("blockout", "m1"):
        milestone_renders(parts, "m1", "m1-blockout")
        return parts
    if mode == "all":
        milestone_renders(parts, "m1", "m1-blockout")
    print("=== M2 SCULPT ===", flush=True)
    build_sculpt(parts)
    if mode in ("sculpt", "m2"):
        milestone_renders(parts, "m2", "m2-sculpt")
        return parts
    if mode not in ("ship", "export", "anim", "m9", "rig", "m8"):
        if mode in ("retopo", "m3", "all"):
            print("=== M3 RETOPO ===")
            build_retopo(parts)
            if mode in ("retopo", "m3"):
                milestone_renders(parts, "m3", "m3-retopo")
                return parts
    print("=== M4 UV ===")
    build_uvs(parts)
    if mode in ("uv", "m4"):
        milestone_renders(parts, "m4", "m4-uv")
        return parts
    print("=== M5 BAKE ===")
    if mode in ("bake", "m5", "texture", "m6", "all", "ship"):
        try:
            bake_maps(parts)
        except Exception:
            traceback.print_exc()
        hide_work_colls()
        if mode in ("bake", "m5"):
            milestone_renders(parts, "m5", "m5-bake")
            return parts
    print("=== M6 TEXTURE ===")
    if mode in ("texture", "m6", "all", "feathers", "m7", "ship"):
        compose_and_apply_textures(parts)
        if mode in ("texture", "m6"):
            milestone_renders(parts, "m6", "m6-texture")
            return parts
    if mode in ("feathers", "m7", "all"):
        print("=== M7 FEATHERS ===")
        build_feather_cards(parts)
        if mode in ("feathers", "m7"):
            milestone_renders(parts, "m7", "m7-feathers")
            return parts
    print("=== M8 RIG ===")
    if mode in ("rig", "m8", "anim", "m9", "export", "all", "ship"):
        build_armature(parts)
        paint_weights(parts)
        if mode in ("rig", "m8"):
            milestone_renders(parts, "m8", "m8-rig")
            return parts
    print("=== M9 ANIM ===")
    if mode in ("anim", "m9", "export", "all", "ship"):
        build_animations(parts)
        if mode in ("anim", "m9", "all", "ship"):
            folder = "m9-anim" if not ship else "m-final2"
            tag = "m9" if not ship else "final"
            milestone_renders(parts, tag, folder, also_strike=True)
            # textured turntable (8 frames) on the ship/final pass
            if ship or mode == "all":
                render_turnaround(parts["cams"], OUT_RENDER / folder, tag, full=not QUICK)
                # include player_up in the compare
                run_compare(tag + "-gameview",
                            [OUT_RENDER / folder / f"{tag}_hero.png",
                             OUT_RENDER / folder / f"{tag}_player_up.png",
                             OUT_RENDER / folder / f"{tag}_hero_close.png",
                             OUT_RENDER / folder / f"{tag}_side.png"],
                            f"{tag} hero/player-up/close/side vs concept-01")
            if mode in ("anim", "m9"):
                return parts
    print("=== EXPORT ===")
    if mode in ("export", "all", "ship"):
        export_glb(parts)
    return parts


def main():
    global QUICK, STILL_RES
    ap = argparse.ArgumentParser()
    ap.add_argument("--mode", default="blockout")
    ap.add_argument("--quick", action="store_true", help="Lower-res, fewer samples, skip 8-frame turntable")
    args = ap.parse_args(argv_after_dd())
    QUICK = bool(args.quick)
    if QUICK:
        STILL_RES = (1280, 720)
    print("Buzzard pipeline mode=", args.mode, "quick=", QUICK, "res=", STILL_RES)
    run_pipeline(args.mode.lower())
    print("DONE", args.mode)


if __name__ == "__main__":
    try:
        main()
    except Exception:
        traceback.print_exc()
        sys.exit(1)
