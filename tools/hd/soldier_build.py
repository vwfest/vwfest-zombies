#!/usr/bin/env python3
"""
DUST & DEAD co-op soldier — original Blender pipeline.

Bind pose is arms-down low-ready with both hands on the rifle (not A-pose).
Gear is rigid-weighted to the nearest bone; body uses automatic weights.
UVs are averaged + packed with 12 px gutter; bakes are per-part so pouches
do not occlude each other. Game ships glTF (no embedded images) + WebP maps
(1024 / 512) to stay under the hero_character 900 KB class cap. CSP forbids
WASM, so no Draco / meshopt / KTX2.

  blender --background --python tools/hd/soldier_build.py -- --mode all
"""
from __future__ import annotations

import argparse, math, subprocess, sys
from pathlib import Path

import bpy
import bmesh
from mathutils import Vector, Matrix, Euler

ROOT = Path('/workspace/zz-soldier')
ASSETS = ROOT / 'assets' / 'hd' / 'soldier'
SHOTS = Path('/workspace/zz-soldier-shots/blender')
WORK = SHOTS / 'work'

CAMO_A = (0x9C / 255, 0x8A / 255, 0x6B / 255, 1)
CAMO_B = (0x7A / 255, 0x6A / 255, 0x4F / 255, 1)
CAMO_C = (0x5E / 255, 0x5A / 255, 0x3E / 255, 1)
CAMO_D = (0xB8 / 255, 0xA8 / 255, 0x87 / 255, 1)
GEAR = (0x6E / 255, 0x5B / 255, 0x40 / 255, 1)
HELM = (0x8A / 255, 0x76 / 255, 0x56 / 255, 1)
DARK = (0x2B / 255, 0x2A / 255, 0x27 / 255, 1)
GLOVE = (0x5C / 255, 0x5A / 255, 0x3C / 255, 1)
BOOT = (0xA5 / 255, 0x8C / 255, 0x66 / 255, 1)
SOLE = (0x3A / 255, 0x31 / 255, 0x28 / 255, 1)
GAITER = (0x4F / 255, 0x50 / 255, 0x38 / 255, 1)
SKIN = (0xB9 / 255, 0x8B / 255, 0x6A / 255, 1)
GLASS = (0x1A / 255, 0x1B / 255, 0x1E / 255, 1)
RIFLE = (0x1A / 255, 0x1A / 255, 0x1A / 255, 1)

# Bind / grip pose (Z-up, character faces -Y). Hands sit on the rifle.
# Low-ready: muzzle down-forward ~36°, crossing the body to the soldier's left.
RIFLE_LOC = (0.10, -0.20, 1.16)
RIFLE_ROT = (math.radians(36), math.radians(5), math.radians(-22))

def rifle_xform():
    return Matrix.Translation(Vector(RIFLE_LOC)) @ Euler(RIFLE_ROT, 'XYZ').to_matrix().to_4x4()

def rifle_world(local):
    v = rifle_xform() @ Vector(local)
    return (v.x, v.y, v.z)

# Local rifle points (barrel along -Y).
L_GRIP = (0.0, 0.05, -0.055)
L_GUARD = (0.0, -0.26, 0.015)
HAND_R = rifle_world(L_GRIP)
HAND_L = rifle_world(L_GUARD)

JOINTS = {
    'root': (0, 0, 0),
    'hips': (0, 0.02, 0.94),
    'spine': (0, 0.03, 1.12),
    'chest': (0, 0.025, 1.34),
    'neck': (0, 0.04, 1.50),
    'head': (0, 0.05, 1.58),
    'clavL': (-0.08, 0.02, 1.47), 'clavR': (0.08, 0.02, 1.47),
    'upperL': (-0.20, 0.03, 1.43), 'upperR': (0.20, 0.03, 1.43),
    'lowerL': (-0.18, -0.10, 1.22), 'lowerR': (0.22, -0.02, 1.24),
    'handL': HAND_L, 'handR': HAND_R,
    'thighL': (-0.11, 0.02, 0.94), 'thighR': (0.11, 0.02, 0.94),
    'calfL': (-0.12, 0.04, 0.51), 'calfR': (0.12, 0.04, 0.51),
    'footL': (-0.12, 0.04, 0.09), 'footR': (0.12, 0.04, 0.09),
    'toeL': (-0.12, -0.14, 0.03), 'toeR': (0.12, -0.14, 0.03),
    'weapon': RIFLE_LOC,
}

PARENT = {
    'hips': 'root', 'spine': 'hips', 'chest': 'spine', 'neck': 'chest', 'head': 'neck',
    'clavL': 'chest', 'upperL': 'clavL', 'lowerL': 'upperL', 'handL': 'lowerL',
    'clavR': 'chest', 'upperR': 'clavR', 'lowerR': 'upperR', 'handR': 'lowerR',
    'thighL': 'hips', 'calfL': 'thighL', 'footL': 'calfL', 'toeL': 'footL',
    'thighR': 'hips', 'calfR': 'thighR', 'footR': 'calfR', 'toeR': 'footR',
    'weapon': 'chest',
}
ORDER = ['root', 'hips', 'spine', 'chest', 'neck', 'head',
         'clavL', 'upperL', 'lowerL', 'handL', 'clavR', 'upperR', 'lowerR', 'handR',
         'thighL', 'calfL', 'footL', 'toeL', 'thighR', 'calfR', 'footR', 'toeR', 'weapon']

# Rigid gear → bone. Body (fatigues + head) uses automatic weights.
GEAR_BONE = {
    'HelmetDome': 'head', 'HelmetGear': 'head', 'Glasses': 'head', 'Gaiter': 'neck',
    'Carrier': 'chest',
    'BootL': 'footL', 'BootR': 'footR',
    'KneeL': 'calfL', 'KneeR': 'calfR',
    'CargoL': 'thighL', 'CargoR': 'thighR', 'Holster': 'thighR',
    'GloveL': 'handL', 'GloveR': 'handR',
    'Rifle': 'weapon',
}

VIEWS = {
    'front': ((0, -5.2, 1.15), (0, 0, 0.95)),
    'threequarter': ((3.3, -3.8, 1.25), (0, 0, 0.95)),
    'side': ((5.0, 0.0, 1.20), (0, 0, 0.95)),
    'back': ((0, 5.2, 1.20), (0, 0, 0.95)),
    'close': ((0.42, -1.25, 1.64), (0, 0.02, 1.58)),
}


def argv_after_dd():
    return sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []


def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    for block in (bpy.data.meshes, bpy.data.objects, bpy.data.materials, bpy.data.images,
                  bpy.data.armatures, bpy.data.actions, bpy.data.cameras, bpy.data.lights,
                  bpy.data.collections, bpy.data.curves, bpy.data.textures):
        for x in list(block):
            block.remove(x)


def link(obj, col_name='Soldier'):
    col = bpy.data.collections.get(col_name) or bpy.data.collections.new(col_name)
    if col.name not in bpy.context.scene.collection.children:
        bpy.context.scene.collection.children.link(col)
    if obj.name not in col.objects:
        col.objects.link(obj)
    return obj


def new_mesh_obj(name, bm=None, mesh=None):
    me = mesh or bpy.data.meshes.new(name)
    if bm is not None:
        bm.to_mesh(me)
        bm.free()
    ob = bpy.data.objects.new(name, me)
    link(ob)
    return ob


def shade_smooth(ob, angle=40):
    for p in ob.data.polygons:
        p.use_smooth = True
    try:
        bpy.context.view_layer.objects.active = ob
        ob.select_set(True)
        bpy.ops.object.shade_smooth_by_angle(angle=math.radians(angle))
        ob.select_set(False)
    except Exception:
        pass


def apply_mod(ob, typ, **kwargs):
    m = ob.modifiers.new(typ.title(), typ)
    for k, v in kwargs.items():
        setattr(m, k, v)
    bpy.context.view_layer.objects.active = ob
    try:
        bpy.ops.object.modifier_apply(modifier=m.name)
    except Exception:
        pass
    return ob


def bevel(ob, width=0.005, segs=3, angle=40):
    return apply_mod(ob, 'BEVEL', width=width, segments=segs, limit_method='ANGLE',
                     angle_limit=math.radians(angle), affect='EDGES', harden_normals=True)


def _mat(loc, scale=(1, 1, 1), rot=(0, 0, 0)):
    S = Matrix.Diagonal((scale[0], scale[1], scale[2], 1.0))
    R = Euler(rot, 'XYZ').to_matrix().to_4x4()
    return Matrix.Translation(Vector(loc)) @ R @ S


def add_box(bm, loc, size, rot=(0, 0, 0)):
    verts = bmesh.ops.create_cube(bm, size=1.0)['verts']
    bmesh.ops.transform(bm, verts=verts, matrix=_mat(loc, size, rot))
    return verts


def add_cyl(bm, loc, r_top, r_bot, depth, rot=(0, 0, 0), seg=12, cap=True):
    verts = bmesh.ops.create_cone(
        bm, cap_ends=cap, cap_tris=False, segments=seg,
        radius1=r_bot, radius2=r_top, depth=depth)['verts']
    bmesh.ops.transform(bm, verts=verts, matrix=_mat(loc, (1, 1, 1), rot))
    return verts


def add_ico(bm, loc, r, subdiv=2):
    verts = bmesh.ops.create_icosphere(bm, subdivisions=subdiv, radius=r)['verts']
    bmesh.ops.transform(bm, verts=verts, matrix=_mat(loc))
    return verts


def add_uvsphere(bm, loc, r, seg=16, rings=10, scale=(1, 1, 1)):
    verts = bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=rings, radius=r)['verts']
    bmesh.ops.transform(bm, verts=verts, matrix=_mat(loc, scale))
    return verts


def frame_axis(axis, up_hint=Vector((0, 0, 1))):
    axis = Vector(axis).normalized()
    hint = Vector(up_hint)
    if abs(axis.dot(hint)) > 0.9:
        hint = Vector((1, 0, 0))
    x = axis.cross(hint).normalized()
    y = axis.cross(x).normalized()
    return x, y, axis


def ring_pts(origin, axis, rx, ry, n, up_hint=Vector((0, 0, 1))):
    x, y, _ = frame_axis(axis, up_hint)
    return [Vector(origin) + x * (math.cos(i / n * math.tau) * rx) + y * (math.sin(i / n * math.tau) * ry)
            for i in range(n)]


def loft_rings(bm, rings, close_caps=False):
    n = len(rings[0])
    rows = [[bm.verts.new(Vector(p)) for p in ring] for ring in rings]
    bm.verts.ensure_lookup_table()
    for r in range(len(rows) - 1):
        a, b = rows[r], rows[r + 1]
        for i in range(n):
            j = (i + 1) % n
            try:
                bm.faces.new((a[i], a[j], b[j], b[i]))
            except ValueError:
                pass
    if close_caps:
        try:
            bm.faces.new(list(reversed(rows[0])))
        except ValueError:
            pass
        try:
            bm.faces.new(rows[-1])
        except ValueError:
            pass
    return rows


def tube(bm, path, radii, n=10, close_caps=True, oval=0.9):
    if isinstance(radii, (int, float)):
        radii = [radii] * len(path)
    rings = []
    for i, (p, r) in enumerate(zip(path, radii)):
        axis = Vector(path[i + 1]) - Vector(p) if i < len(path) - 1 else Vector(p) - Vector(path[i - 1])
        if axis.length < 1e-6:
            axis = Vector((0, 0, 1))
        rings.append(ring_pts(p, axis, r, r * oval, n))
    return loft_rings(bm, rings, close_caps=close_caps)


def oval_ring(z, rx, ry, y_off=0.0, n=12):
    return ring_pts((0, y_off, z), Vector((0, 0, 1)), rx, ry, n)


def cleanup_mesh(ob):
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    try:
        bpy.ops.mesh.remove_doubles(threshold=0.0005)
    except TypeError:
        bpy.ops.mesh.remove_doubles()
    bpy.ops.mesh.normals_make_consistent(inside=False)
    bpy.ops.mesh.delete_loose()
    bpy.ops.object.mode_set(mode='OBJECT')
    for v in ob.data.vertices:
        if v.co.length > 4.0 or v.co.z > 2.4 or v.co.z < -0.25:
            print('WARN runaway', ob.name, tuple(round(c, 3) for c in v.co))


def triangulate(ob):
    apply_mod(ob, 'TRIANGULATE', quad_method='BEAUTY', ngon_method='BEAUTY')
    try:
        if ob.data.uv_layers:
            ob.data.calc_tangents()
    except Exception as e:
        print('tangent warn', ob.name, e)


def bm_to_obj(name, bm):
    bmesh.ops.remove_doubles(bm, verts=list(bm.verts), dist=0.0005)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    degenerates = [f for f in bm.faces if f.calc_area() < 1e-10]
    if degenerates:
        bmesh.ops.delete(bm, geom=degenerates, context='FACES')
    ob = new_mesh_obj(name, bm)
    cleanup_mesh(ob)
    shade_smooth(ob)
    return ob


def tris(ob):
    return sum(len(p.vertices) - 2 for p in ob.data.polygons)


def build_armature():
    arm_data = bpy.data.armatures.new('SoldierRig')
    arm_data.display_type = 'OCTAHEDRAL'
    ob = bpy.data.objects.new('SoldierArmature', arm_data)
    link(ob)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.mode_set(mode='EDIT')
    eb = arm_data.edit_bones
    bones = {}
    for name in ORDER:
        b = eb.new(name)
        p = Vector(JOINTS[name])
        bones[name] = b
        b.head = p
        b.tail = p + Vector((0, 0, 0.08))
    for name, par in PARENT.items():
        bones[name].parent = bones[par]
        bones[name].use_connect = False

    def aim(a, b, fallback):
        bones[a].tail = Vector(JOINTS[b])
        if (bones[a].tail - bones[a].head).length < 0.03:
            bones[a].tail = bones[a].head + Vector(fallback)
    aim('root', 'hips', (0, 0, 0.1))
    aim('hips', 'spine', (0, 0, 0.12))
    aim('spine', 'chest', (0, 0, 0.14))
    aim('chest', 'neck', (0, 0, 0.12))
    aim('neck', 'head', (0, 0, 0.08))
    bones['head'].tail = Vector(JOINTS['head']) + Vector((0, 0, 0.16))
    aim('clavL', 'upperL', (-0.08, 0, 0))
    aim('clavR', 'upperR', (0.08, 0, 0))
    aim('upperL', 'lowerL', (0, -0.1, -0.15))
    aim('upperR', 'lowerR', (0, -0.1, -0.15))
    aim('lowerL', 'handL', (0, -0.15, -0.1))
    aim('lowerR', 'handR', (0, -0.1, -0.1))
    bones['handL'].tail = Vector(JOINTS['handL']) + Vector((0.04, -0.06, 0))
    bones['handR'].tail = Vector(JOINTS['handR']) + Vector((0.05, -0.02, 0))
    aim('thighL', 'calfL', (0, 0, -0.4))
    aim('thighR', 'calfR', (0, 0, -0.4))
    aim('calfL', 'footL', (0, 0, -0.4))
    aim('calfR', 'footR', (0, 0, -0.4))
    aim('footL', 'toeL', (0, -0.12, 0))
    aim('footR', 'toeR', (0, -0.12, 0))
    bones['toeL'].tail = Vector(JOINTS['toeL']) + Vector((0, -0.05, 0))
    bones['toeR'].tail = Vector(JOINTS['toeR']) + Vector((0, -0.05, 0))
    bones['weapon'].tail = Vector(JOINTS['weapon']) + Vector((0, -0.22, -0.08))

    for side, hand, foot in (('L', 'handL', 'footL'), ('R', 'handR', 'footR')):
        t = eb.new(f'ik_{foot}')
        t.head = bones[foot].head.copy(); t.tail = bones[foot].tail.copy()
        t.parent = bones['root']
        p = eb.new(f'pole_{side.lower()}_leg')
        p.head = bones['calf' + side].head + Vector((0, 0.22, 0))
        p.tail = p.head + Vector((0, 0.08, 0))
        p.parent = bones['root']
        th = eb.new(f'ik_{hand}')
        th.head = bones[hand].head.copy(); th.tail = bones[hand].tail.copy()
        th.parent = bones['weapon']
        pp = eb.new(f'pole_{side.lower()}_arm')
        sign = -1 if side == 'L' else 1
        pp.head = bones['lower' + side].head + Vector((sign * 0.18, 0.12, 0))
        pp.tail = pp.head + Vector((0, 0.08, 0))
        pp.parent = bones['chest']
    bpy.ops.object.mode_set(mode='POSE')
    for b in ob.pose.bones:
        if b.name.startswith('ik_') or b.name.startswith('pole_'):
            arm_data.bones[b.name].use_deform = False

    def ik(bone, target, pole, chain, pole_angle=180):
        c = ob.pose.bones[bone].constraints.new('IK')
        c.target = ob; c.subtarget = target
        c.pole_target = ob; c.pole_subtarget = pole
        c.chain_count = chain
        c.pole_angle = math.radians(pole_angle)
        c.use_tail = True
    ik('calfL', 'ik_footL', 'pole_l_leg', 2, 180)
    ik('calfR', 'ik_footR', 'pole_r_leg', 2, 180)
    ik('lowerL', 'ik_handL', 'pole_l_arm', 2, 180)
    ik('lowerR', 'ik_handR', 'pole_r_arm', 2, 0)
    # Hands stay glued to the rifle (IK targets are children of the weapon bone).
    bpy.ops.object.mode_set(mode='OBJECT')
    ob.show_in_front = True
    return ob


# ---- helper: transform a bmesh by a 4x4 ----
def xform_bm(bm, matrix):
    bmesh.ops.transform(bm, verts=bm.verts, matrix=matrix)


def add_capsule(bm, p0, p1, r0, r1, seg=10):
    tube(bm, [p0, p1], [r0, r1], n=seg, close_caps=True, oval=0.95)


# ---- ID colours for a reliable albedo compose (not luma clustering) ----
ID_COLORS = {
    'Body':      (1, 0, 0, 1),
    'CargoL':    (1, 0, 0, 1),
    'CargoR':    (1, 0, 0, 1),
    'Carrier':   (0, 1, 0, 1),
    'KneeL':     (0, 1, 0, 1),
    'KneeR':     (0, 1, 0, 1),
    'Holster':   (0, 1, 0, 1),
    'HelmetDome':(0, 0, 1, 1),
    'HelmetGear':(1, 1, 0, 1),
    'Gaiter':    (1, 0, 1, 1),
    'Skin':      (0, 1, 1, 1),
    'GloveL':    (1, 0.5, 0, 1),
    'GloveR':    (1, 0.5, 0, 1),
    'BootL':     (0.5, 0.25, 1, 1),
    'BootR':     (0.5, 0.25, 1, 1),
    'Glasses':   (0.15, 0.15, 0.15, 1),
    'Rifle':     (0.05, 0.05, 0.05, 1),
}


def build_body():
    """Fatigues + head in the grip pose. Deltoid caps, baggy thighs, sleeve bunch."""
    bm = bmesh.new()
    n = 12
    torso = [
        oval_ring(0.90, 0.16, 0.15, 0.02, n),
        oval_ring(1.00, 0.15, 0.155, 0.03, n),
        oval_ring(1.10, 0.15, 0.15, 0.03, n),
        oval_ring(1.22, 0.18, 0.17, 0.03, n),
        oval_ring(1.34, 0.21, 0.19, 0.03, n),  # chest
        oval_ring(1.44, 0.19, 0.16, 0.035, n),
        oval_ring(1.50, 0.10, 0.10, 0.04, n),
        oval_ring(1.56, 0.065, 0.07, 0.05, n),
    ]
    loft_rings(bm, torso)
    for side in (-1, 1):
        x = side * 0.11
        path = [
            (x * 0.95, 0.02, 0.94),
            (x, 0.02, 0.80),
            (x, 0.04, 0.66),          # baggy thigh
            (x * 1.04, 0.05, 0.52),   # knee
            (x * 1.06, 0.04, 0.36),
            (x * 1.05, 0.05, 0.28),
            (x * 1.04, 0.05, 0.22),   # pant hem sits on the boot collar
        ]
        radii = [0.11, 0.125, 0.122, 0.092, 0.080, 0.072, 0.066]
        tube(bm, path, radii, n=10, close_caps=False, oval=0.88)
    # Arms follow the grip-pose joint chain. Deltoid is a wide first ring, not a sphere.
    arm_l = [
        (-0.12, 0.03, 1.46),
        (-0.20, 0.03, 1.43),
        (-0.20, -0.02, 1.33),
        (-0.18, -0.10, 1.22),
        ((HAND_L[0] + -0.18) * 0.5, (HAND_L[1] - 0.10) * 0.5, (HAND_L[2] + 1.22) * 0.5),
        HAND_L,
    ]
    arm_r = [
        (0.12, 0.03, 1.46),
        (0.20, 0.03, 1.43),
        (0.22, 0.01, 1.34),
        (0.22, -0.02, 1.24),
        ((HAND_R[0] + 0.22) * 0.5, (HAND_R[1] - 0.02) * 0.5, (HAND_R[2] + 1.24) * 0.5),
        HAND_R,
    ]
    for path in (arm_l, arm_r):
        # deltoid, bicep, elbow, forearm, sleeve bunch, wrist
        radii = [0.095, 0.092, 0.072, 0.058, 0.052, 0.046]
        tube(bm, path, radii, n=10, close_caps=True, oval=0.88)
    # Head: slightly narrower jaw, desaturated later; nose; ears hidden by cups
    add_uvsphere(bm, (0, 0.05, 1.655), 0.100, 16, 10, (0.90, 0.98, 1.05))
    add_uvsphere(bm, (0, 0.03, 1.60), 0.085, 12, 8, (0.95, 0.90, 0.70))  # jaw
    add_uvsphere(bm, (0, -0.042, 1.668), 0.022, 8, 6, (1.25, 0.70, 0.50))  # nose
    return bm_to_obj('Body', bm)


def build_gaiter():
    bm = bmesh.new()
    rings = [
        oval_ring(1.49, 0.09, 0.10, 0.04, 12),
        oval_ring(1.55, 0.105, 0.125, 0.055, 12),
        oval_ring(1.60, 0.110, 0.135, 0.075, 12),
        oval_ring(1.645, 0.100, 0.125, 0.085, 12),
        oval_ring(1.668, 0.085, 0.095, 0.055, 12),
    ]
    loft_rings(bm, rings)
    return bm_to_obj('Gaiter', bm)


def build_boots():
    objs = []
    for side in (-1, 1):
        bm = bmesh.new()
        x = side * 0.12
        # shaft: taper from ankle into a mid-calf blouse
        shaft = [
            (x, 0.040, 0.08),
            (x, 0.035, 0.14),
            (x, 0.030, 0.20),
            (x, 0.028, 0.255),
        ]
        tube(bm, shaft, [0.062, 0.068, 0.074, 0.078], n=8, close_caps=True, oval=0.86)
        # foot volume with toe spring (front of sole slightly lifted)
        foot = [
            ring_pts((x, 0.090, 0.055), (0, 1, 0), 0.055, 0.048, 8),
            ring_pts((x, 0.015, 0.062), (0, 1, 0), 0.062, 0.055, 8),
            ring_pts((x, -0.065, 0.062), (0, 1, 0), 0.058, 0.050, 8),
            ring_pts((x, -0.130, 0.055), (0, 1, 0), 0.046, 0.040, 8),
            ring_pts((x, -0.160, 0.062), (0, 1, 0), 0.022, 0.020, 8),
        ]
        loft_rings(bm, foot, close_caps=True)
        # sole, slightly wider, toe spring
        sole = [
            ring_pts((x, 0.100, 0.014), (0, 1, 0), 0.056, 0.016, 8),
            ring_pts((x, 0.000, 0.010), (0, 1, 0), 0.066, 0.016, 8),
            ring_pts((x, -0.090, 0.012), (0, 1, 0), 0.058, 0.014, 8),
            ring_pts((x, -0.160, 0.024), (0, 1, 0), 0.040, 0.012, 8),
        ]
        loft_rings(bm, sole, close_caps=True)
        add_box(bm, (x, 0.100, 0.028), (0.10, 0.07, 0.04))  # heel counter
        add_box(bm, (x, -0.02, 0.095), (0.040, 0.10, 0.018))  # laces ridge
        ob = bm_to_obj(f'Boot{"L" if side < 0 else "R"}', bm)
        bevel(ob, 0.005, 3, 50)
        objs.append(ob)
    return objs


def build_gloves():
    """Mitten + thumb, built in rifle space so they wrap the grip and handguard."""
    objs = []
    X = rifle_xform()
    # Right: pistol-grip mitt, thumb wrapping the grip
    bm = bmesh.new()
    tube(bm, [(0.0, 0.10, -0.050), (0.0, 0.05, -0.055), (0.0, -0.01, -0.050)],
         [0.028, 0.034, 0.028], n=8, close_caps=True, oval=0.78)
    tube(bm, [(0.012, 0.05, -0.050), (0.035, 0.01, -0.028), (0.042, -0.03, -0.008)],
         [0.015, 0.014, 0.011], n=6, close_caps=True, oval=0.85)
    xform_bm(bm, X)
    ob = bm_to_obj('GloveR', bm)
    bevel(ob, 0.004, 3, 50)
    objs.append(ob)
    # Left: handguard mitt, thumb over the rail
    bm = bmesh.new()
    tube(bm, [(0.0, -0.20, 0.015), (0.0, -0.26, 0.015), (0.0, -0.32, 0.015)],
         [0.026, 0.032, 0.026], n=8, close_caps=True, oval=0.78)
    tube(bm, [(-0.010, -0.26, 0.015), (-0.030, -0.28, 0.032), (-0.036, -0.30, 0.048)],
         [0.014, 0.013, 0.010], n=6, close_caps=True, oval=0.85)
    xform_bm(bm, X)
    ob = bm_to_obj('GloveL', bm)
    bevel(ob, 0.004, 3, 50)
    objs.append(ob)
    return objs


def build_helmet():
    """High-cut dome lofted to 1.85–1.88 m, plus NVG tubes, rails, ear cups, back patch."""
    bm = bmesh.new()
    # High-cut: brim lower in front, higher at the ears (sides pulled in at low z)
    rings = [
        # front brim ~ mid-forehead, sides already rising (smaller rx at this height)
        oval_ring(1.688, 0.108, 0.118, 0.04, 16),
        oval_ring(1.730, 0.128, 0.122, 0.05, 16),
        oval_ring(1.780, 0.122, 0.118, 0.05, 16),
        oval_ring(1.830, 0.090, 0.090, 0.05, 16),
        oval_ring(1.868, 0.040, 0.040, 0.05, 16),  # crown ~1.87
        oval_ring(1.878, 0.008, 0.008, 0.05, 16),
    ]
    loft_rings(bm, rings, close_caps=True)
    ob = bm_to_obj('HelmetDome', bm)
    apply_mod(ob, 'SOLIDIFY', thickness=0.010, offset=1)
    bevel(ob, 0.003, 3, 40)
    cleanup_mesh(ob)
    shade_smooth(ob)

    acc = bmesh.new()
    # NVG shroud plate (dark, must read from the front) + dual tubes flipped up
    add_box(acc, (0, -0.06, 1.805), (0.062, 0.050, 0.032))
    add_box(acc, (0, -0.095, 1.838), (0.072, 0.036, 0.026), rot=(0.55, 0, 0))
    add_cyl(acc, (-0.022, -0.130, 1.890), 0.016, 0.015, 0.095, rot=(0.95, 0, 0), seg=12)
    add_cyl(acc, (0.022, -0.130, 1.890), 0.016, 0.015, 0.095, rot=(0.95, 0, 0), seg=12)
    # side rails
    add_box(acc, (-0.132, 0.03, 1.755), (0.014, 0.11, 0.032))
    add_box(acc, (0.132, 0.03, 1.755), (0.014, 0.11, 0.032))
    # ear-pro cups (slightly flattened, over the ears)
    add_uvsphere(acc, (-0.138, 0.03, 1.668), 0.048, 8, 6, (0.70, 0.85, 0.95))
    add_uvsphere(acc, (0.138, 0.03, 1.668), 0.048, 8, 6, (0.70, 0.85, 0.95))
    # back counterweight + team IR patch (flat, later tinted in JS too)
    add_box(acc, (0, 0.155, 1.745), (0.14, 0.055, 0.050), rot=(0.30, 0, 0))
    add_box(acc, (0, 0.165, 1.775), (0.055, 0.010, 0.024))
    acc_ob = bm_to_obj('HelmetGear', acc)
    bevel(acc_ob, 0.0022, 3, 50)
    return [ob, acc_ob]


def build_glasses():
    """Wraparound ballistic glasses — a curved ribbon, not a flat bar."""
    bm = bmesh.new()
    path, radii = [], []
    for i in range(9):
        a = -0.95 + i * (1.90 / 8.0)
        x = math.sin(a) * 0.078
        y = -0.020 - math.cos(a) * 0.092
        z = 1.678 + 0.004 * math.cos(a * 1.2)
        path.append((x, y, z))
        radii.append(0.022 if 1 < i < 7 else 0.016)
    tube(bm, path, radii, n=6, close_caps=True, oval=0.62)
    # brow frame
    add_box(bm, (0, -0.115, 1.698), (0.12, 0.008, 0.008))
    return bm_to_obj('Glasses', bm)


def build_carrier():
    """Plate carrier to the navel, wrapping cummerbund, 3 mag pouches, radio, pack."""
    bm = bmesh.new()
    # Wrapped vest shell, slightly larger than the torso, longer (navel ~1.10)
    shell = [
        oval_ring(1.10, 0.195, 0.175, 0.03, 10),
        oval_ring(1.20, 0.215, 0.195, 0.03, 10),
        oval_ring(1.32, 0.225, 0.205, 0.025, 10),
        oval_ring(1.44, 0.200, 0.175, 0.03, 10),
        oval_ring(1.51, 0.145, 0.125, 0.04, 10),
    ]
    loft_rings(bm, shell, close_caps=True)
    # Shoulder straps as tubes over the shoulders
    for side in (-1, 1):
        path = [
            (side * 0.08, -0.12, 1.48),
            (side * 0.12, 0.00, 1.56),
            (side * 0.08, 0.14, 1.48),
        ]
        tube(bm, path, [0.028, 0.026, 0.028], n=8, close_caps=True, oval=0.7)
    # Front plate extra thickness
    add_box(bm, (0, -0.195, 1.28), (0.26, 0.06, 0.34))
    # 3 mag pouches — distinct, rounded later by bevel
    for x in (-0.085, 0.0, 0.085):
        add_box(bm, (x, -0.250, 1.20), (0.078, 0.075, 0.145))
        add_box(bm, (x, -0.260, 1.280), (0.060, 0.045, 0.018))  # flap
        add_box(bm, (x, -0.290, 1.20), (0.068, 0.007, 0.130))   # MOLLE
    add_box(bm, (0.0, -0.245, 1.42), (0.115, 0.050, 0.065))      # admin
    add_box(bm, (-0.13, -0.245, 1.38), (0.062, 0.052, 0.100))    # radio
    add_cyl(bm, (-0.13, -0.245, 1.52), 0.005, 0.004, 0.16, seg=8)
    add_box(bm, (0.22, -0.06, 1.24), (0.070, 0.075, 0.100))      # side pouch
    # hydration pack
    add_box(bm, (0, 0.24, 1.32), (0.22, 0.09, 0.20))
    add_box(bm, (0, 0.20, 1.16), (0.16, 0.07, 0.10))
    # belt
    add_box(bm, (0, 0.0, 1.10), (0.34, 0.24, 0.045))
    add_box(bm, (-0.13, -0.12, 1.07), (0.080, 0.065, 0.100))
    ob = bm_to_obj('Carrier', bm)
    bevel(ob, 0.004, 2, 40)
    return ob


def build_knees_holster():
    objs = []
    for side in (-1, 1):
        bm = bmesh.new()
        # rounded cap + backing, not a flat slab
        add_uvsphere(bm, (side * 0.125, -0.02, 0.515), 0.065, 10, 8, (1.15, 0.70, 1.05))
        add_box(bm, (side * 0.125, 0.02, 0.515), (0.11, 0.06, 0.12))
        ob = bm_to_obj(f'Knee{"L" if side < 0 else "R"}', bm)
        bevel(ob, 0.006, 3, 50)
        objs.append(ob)
    bm = bmesh.new()
    add_box(bm, (0.20, 0.0, 0.70), (0.070, 0.080, 0.16))
    add_box(bm, (0.155, 0.0, 0.80), (0.020, 0.020, 0.17))
    add_box(bm, (0.20, -0.01, 0.69), (0.030, 0.050, 0.11))
    hol = bm_to_obj('Holster', bm)
    bevel(hol, 0.004, 3, 50)
    objs.append(hol)
    for side in (-1, 1):
        bm = bmesh.new()
        add_box(bm, (side * 0.175, 0.03, 0.70), (0.085, 0.065, 0.125), rot=(0.12, 0, side * 0.08))
        ob = bm_to_obj(f'Cargo{"L" if side < 0 else "R"}', bm)
        bevel(ob, 0.005, 3, 50)
        objs.append(ob)
    return objs


def build_rifle():
    """0.85 m carbine. Local barrel -Y. Placed at the weapon-bone bind pose."""
    bm = bmesh.new()
    add_box(bm, (0, 0, 0.03), (0.042, 0.22, 0.050))                 # receiver
    add_box(bm, (0, 0.02, -0.035), (0.028, 0.038, 0.085))           # pistol grip
    add_box(bm, (0, -0.08, -0.045), (0.026, 0.038, 0.12))           # mag
    add_box(bm, (0, 0.16, 0.03), (0.032, 0.16, 0.060))              # stock tube
    add_box(bm, (0, 0.26, 0.02), (0.048, 0.04, 0.085))              # stock
    add_box(bm, (0, -0.24, 0.026), (0.036, 0.22, 0.038))            # handguard
    add_cyl(bm, (0, -0.50, 0.032), 0.011, 0.012, 0.30, rot=(math.pi / 2, 0, 0), seg=10)
    add_cyl(bm, (0, -0.66, 0.032), 0.014, 0.016, 0.04, rot=(math.pi / 2, 0, 0), seg=10)
    add_box(bm, (0, -0.04, 0.058), (0.018, 0.16, 0.022))            # top rail
    add_box(bm, (0, -0.02, 0.090), (0.024, 0.075, 0.036))           # optic body
    add_cyl(bm, (0, -0.02, 0.105), 0.015, 0.015, 0.05, rot=(math.pi / 2, 0, 0), seg=10)
    add_box(bm, (0, -0.02, -0.01), (0.014, 0.035, 0.028))           # trigger guard
    ob = bm_to_obj('Rifle', bm)
    bevel(ob, 0.0014, 2, 40)
    ob.location = Vector(RIFLE_LOC)
    ob.rotation_euler = Euler(RIFLE_ROT, 'XYZ')
    return ob

def build_blockout():
    arm = build_armature()
    parts = [build_body(), build_gaiter()]
    parts.extend(build_boots())
    parts.extend(build_gloves())
    parts.extend(build_helmet())
    parts.append(build_glasses())
    parts.append(build_carrier())
    parts.extend(build_knees_holster())
    rifle = build_rifle()
    parts.append(rifle)
    for p in parts:
        shade_smooth(p)
        zs = [v.co.z for v in p.data.vertices]
        print('part', p.name, 'tris', tris(p), 'z', round(min(zs), 3), '..', round(max(zs), 3))
    return arm, parts, rifle


def make_mat(name, color, rough=0.85, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial'); out.location = (400, 0)
    bsdf = nt.nodes.new('ShaderNodeBsdfPrincipled'); bsdf.location = (0, 0)
    bsdf.inputs['Base Color'].default_value = color
    bsdf.inputs['Roughness'].default_value = rough
    bsdf.inputs['Metallic'].default_value = metal
    nt.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    m.diffuse_color = color
    return m


def assign(ob, mat):
    ob.data.materials.clear()
    ob.data.materials.append(mat)


def build_camo_material():
    """Object-space camo. Avoid ShaderNodeMix (socket names differ across 4.x)."""
    m = bpy.data.materials.new('M_CamoPBR')
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial'); out.location = (700, 0)
    bsdf = nt.nodes.new('ShaderNodeBsdfPrincipled'); bsdf.location = (400, 0)
    coord = nt.nodes.new('ShaderNodeTexCoord'); coord.location = (-800, 0)
    vor = nt.nodes.new('ShaderNodeTexVoronoi'); vor.location = (-500, 120)
    vor.feature = 'F1'
    vor.inputs['Scale'].default_value = 7.0
    ramp = nt.nodes.new('ShaderNodeValToRGB'); ramp.location = (-200, 120)
    ramp.color_ramp.elements[0].position = 0.22
    ramp.color_ramp.elements[0].color = CAMO_C
    ramp.color_ramp.elements[1].position = 0.88
    ramp.color_ramp.elements[1].color = CAMO_D
    mid = ramp.color_ramp.elements.new(0.5); mid.color = CAMO_A
    mid2 = ramp.color_ramp.elements.new(0.36); mid2.color = CAMO_B
    nt.links.new(coord.outputs['Object'], vor.inputs['Vector'])
    nt.links.new(vor.outputs['Distance'], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], bsdf.inputs['Base Color'])
    bsdf.inputs['Roughness'].default_value = 0.9
    nt.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    m.diffuse_color = CAMO_A
    return m


def apply_preview_mats(parts):
    camo = build_camo_material()
    skin = make_mat('M_Skin', SKIN, 0.72)
    mats = {
        'Body': camo, 'CargoL': camo, 'CargoR': camo,
        'Gaiter': make_mat('M_Gaiter', GAITER, 0.92),
        'BootL': make_mat('M_Boot', BOOT, 0.9), 'BootR': make_mat('M_Boot', BOOT, 0.9),
        'GloveL': make_mat('M_Glove', GLOVE, 0.86), 'GloveR': make_mat('M_Glove', GLOVE, 0.86),
        'HelmetDome': make_mat('M_Helm', HELM, 0.76),
        'HelmetGear': make_mat('M_Dark', DARK, 0.5, 0.08),
        'Glasses': make_mat('M_Glass', GLASS, 0.15, 0.15),
        'Carrier': make_mat('M_Gear', GEAR, 0.88),
        'KneeL': make_mat('M_Gear', GEAR, 0.88), 'KneeR': make_mat('M_Gear', GEAR, 0.88),
        'Holster': make_mat('M_Gear', GEAR, 0.88),
        'Rifle': make_mat('M_Rifle', RIFLE, 0.45, 0.32),
    }
    cache = {}
    for ob in parts:
        src = mats.get(ob.name)
        if not src:
            continue
        cache.setdefault(src.name, src)
        assign(ob, cache[src.name])
    # Skin on the exposed face (eye strip), not camo
    body = next((p for p in parts if p.name == 'Body'), None)
    if body:
        if skin.name not in [m.name for m in body.data.materials]:
            body.data.materials.append(skin)
        sidx = list(body.data.materials).index(skin)
        for poly in body.data.polygons:
            zs = [body.data.vertices[i].co.z for i in poly.vertices]
            ys = [body.data.vertices[i].co.y for i in poly.vertices]
            if sum(zs) / len(zs) > 1.62 and sum(ys) / len(ys) < 0.02:
                poly.material_index = sidx
    return cache


def duplicate(ob, name, collection='SoldierHigh'):
    d = ob.copy()
    d.data = ob.data.copy()
    d.name = name
    link(d, collection)
    return d


def make_high(parts):
    high = []
    for ob in parts:
        h = duplicate(ob, ob.name + '_HP')
        if ob.name in ('Body', 'Gaiter', 'CargoL', 'CargoR'):
            tex = bpy.data.textures.new(ob.name + '_Fold', 'CLOUDS')
            tex.noise_scale = 0.16
            tex.noise_depth = 2
            m = h.modifiers.new('Fold', 'DISPLACE')
            m.texture = tex
            m.strength = 0.012 if ob.name == 'Body' else 0.007
            m.mid_level = 0.5
            sd = h.modifiers.new('SubD', 'SUBSURF')
            sd.levels = 2
            sd.render_levels = 2
        elif ob.name in ('Carrier', 'HelmetDome', 'HelmetGear', 'BootL', 'BootR',
                         'KneeL', 'KneeR', 'Holster', 'GloveL', 'GloveR'):
            bev = h.modifiers.new('Bev', 'BEVEL')
            bev.width = 0.004
            bev.segments = 3
            bev.limit_method = 'ANGLE'
            bev.angle_limit = math.radians(35)
            sd = h.modifiers.new('SubD', 'SUBSURF')
            sd.levels = 1
            sd.render_levels = 2
        else:
            sd = h.modifiers.new('SubD', 'SUBSURF')
            sd.levels = 1
            sd.render_levels = 1
        high.append(h)
    return high


def apply_high_mods(high):
    for h in high:
        bpy.context.view_layer.objects.active = h
        h.select_set(True)
        for m in list(h.modifiers):
            if m.type == 'ARMATURE':
                continue
            try:
                bpy.ops.object.modifier_apply(modifier=m.name)
            except Exception:
                pass
        h.select_set(False)


def _uv_scale_translate(ob, sx, sy, ox, oy):
    uv = ob.data.uv_layers.active
    if not uv:
        return
    for loop in uv.data:
        loop.uv.x = loop.uv.x * sx + ox
        loop.uv.y = loop.uv.y * sy + oy


def unwrap_and_pack(parts, margin=0.012):
    """Unwrap each part, pack it into 0-1, then shelf-pack into one atlas.

    Multi-object pack_islands in Blender 4.5 only reliably packs the active
    object, which previously left Body covering the whole sheet and every
    other part un-baked / overlapping.
    """
    HEAD = {'HelmetDome', 'HelmetGear', 'Glasses', 'Gaiter'}
    for ob in parts:
        if not ob.data.uv_layers:
            ob.data.uv_layers.new(name='UVMap')
        bpy.ops.object.select_all(action='DESELECT')
        ob.select_set(True)
        bpy.context.view_layer.objects.active = ob
        bpy.ops.object.mode_set(mode='EDIT')
        bpy.ops.mesh.select_all(action='SELECT')
        try:
            bpy.ops.uv.smart_project(angle_limit=math.radians(66), island_margin=0.002,
                                     correct_aspect=True, scale_to_bounds=False)
        except TypeError:
            bpy.ops.uv.smart_project(island_margin=0.002)
        try:
            bpy.ops.uv.average_islands_scale()
        except Exception:
            pass
        try:
            bpy.ops.uv.pack_islands(margin=0.004, rotate=True)
        except TypeError:
            try:
                bpy.ops.uv.pack_islands(margin=0.004)
            except Exception as e:
                print('pack warn', ob.name, e)
        bpy.ops.object.mode_set(mode='OBJECT')

    # Shelf-pack objects into the atlas, area-weighted (head gets a texel boost)
    items = []
    for ob in parts:
        if ob.name == 'Rifle':
            continue  # rifle uses its own material, not the body atlas
        area = sum(p.area for p in ob.data.polygons) or 0.001
        if ob.name in HEAD:
            area *= 1.6
        items.append([area, ob])
    total = sum(a for a, _ in items) or 1.0
    # Convert area share to a rectangle; shelf pack left-to-right, bottom-to-top
    margin = max(margin, 0.008)
    avail = 1.0 - 2 * margin
    # pre-compute side lengths so area shares fill the square
    for it in items:
        it[0] = math.sqrt(it[0] / total) * avail
    items.sort(key=lambda it: -it[0])
    x = y = margin
    shelf_h = 0.0
    max_top = margin
    placed = []
    for side, ob in items:
        w = h = max(0.04, min(avail, side))
        if x + w > 1.0 - margin + 1e-6:
            x = margin
            y += shelf_h + margin
            shelf_h = 0.0
        if y + h > 1.0 - margin:
            h = max(0.03, 1.0 - margin - y)
            w = min(w, h * 1.4)
        _uv_scale_translate(ob, w, h, x, y)
        placed.append((ob.name, round(x, 3), round(y, 3), round(w, 3), round(h, 3)))
        x += w + margin
        shelf_h = max(shelf_h, h)
        max_top = max(max_top, y + h)
    print('atlas slots', placed, 'top', round(max_top, 3))


def ensure_cycles():
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'CPU'
    sc.cycles.samples = 16
    try:
        sc.cycles.use_denoising = False
    except Exception:
        pass


def make_image(name, size, color=(0.5, 0.5, 1, 1)):
    return bpy.data.images.new(name, width=size, height=size, alpha=True, float_buffer=False)



def _emit_mat(name, color):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    em = nt.nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = color
    em.inputs['Strength'].default_value = 1.0
    nt.links.new(em.outputs['Emission'], out.inputs['Surface'])
    m.diffuse_color = color
    return m


def bake_maps(lows, highs, size=1024):
    """Per-part selected-to-active bake: normal, AO, and an ID/emit atlas."""
    ensure_cycles()
    maps = {
        'normal': make_image('SoldierNormal', size, (0.5, 0.5, 1, 1)),
        'ao': make_image('SoldierAO', size, (1, 1, 1, 1)),
        'id': make_image('SoldierID', size, (0, 0, 0, 1)),
    }
    hi_by = {h.name.replace('_HP', ''): h for h in highs}

    # Keep a copy of preview mats, then hook bake targets.
    for ob in lows:
        if not ob.data.materials:
            assign(ob, make_mat('tmp', CAMO_A))
        for i, mat in enumerate(list(ob.data.materials)):
            mat = mat.copy()
            ob.data.materials[i] = mat
            node = mat.node_tree.nodes.new('ShaderNodeTexImage')
            node.image = maps['normal']
            mat.node_tree.nodes.active = node

    def hook(ob, img):
        for mat in ob.data.materials:
            if not mat or not mat.node_tree:
                continue
            for n in mat.node_tree.nodes:
                if n.type == 'TEX_IMAGE':
                    n.image = img
                    mat.node_tree.nodes.active = n

    def hide_all(vs=False):
        for o in list(lows) + list(highs):
            o.hide_set(not vs)
            o.hide_render = not vs

    def bake_one(ob, typ, img, samples, selected_to_active, pass_filter=None, cage=0.020):
        hook(ob, img)
        hide_all(False)
        ob.hide_set(False); ob.hide_render = False
        bpy.ops.object.select_all(action='DESELECT')
        high = hi_by.get(ob.name)
        if selected_to_active and high:
            high.hide_set(False); high.hide_render = False
            high.select_set(True)
        ob.select_set(True)
        bpy.context.view_layer.objects.active = ob
        bpy.context.scene.cycles.samples = samples
        kwargs = dict(type=typ, use_selected_to_active=selected_to_active,
                      cage_extrusion=cage, max_ray_distance=0.14, margin=12,
                      normal_space='TANGENT')
        if pass_filter:
            kwargs['pass_filter'] = pass_filter
        try:
            bpy.ops.object.bake(**kwargs)
        except Exception as e:
            print('BAKE WARN', ob.name, typ, e)

    print('Baking normals (per part)…')
    for ob in lows:
        if ob.name == 'Rifle':
            continue
        bake_one(ob, 'NORMAL', maps['normal'], 6, True)
    print('Baking AO (per part)…')
    for ob in lows:
        if ob.name == 'Rifle':
            continue
        bake_one(ob, 'AO', maps['ao'], 12, True)

    # ID bake: flat principled colours, DIFFUSE+COLOR (more reliable than EMIT in 4.5)
    print('Baking ID colours…')
    id_mats = {}
    skin_mat = make_mat('ID_Skin', ID_COLORS['Skin'], 1.0, 0.0)
    for ob in lows:
        if ob.name == 'Rifle':
            continue
        col = ID_COLORS.get(ob.name, (1, 0, 0, 1))
        key = tuple(col)
        if key not in id_mats:
            id_mats[key] = make_mat('ID_' + ob.name, col, 1.0, 0.0)
        assign(ob, id_mats[key])
        if ob.name == 'Body':
            if skin_mat.name not in [m.name for m in ob.data.materials]:
                ob.data.materials.append(skin_mat)
            sidx = list(ob.data.materials).index(skin_mat)
            for poly in ob.data.polygons:
                zs = [ob.data.vertices[i].co.z for i in poly.vertices]
                ys = [ob.data.vertices[i].co.y for i in poly.vertices]
                if sum(zs) / len(zs) > 1.60 and sum(ys) / len(ys) < 0.02:
                    poly.material_index = sidx
        for mat in ob.data.materials:
            node = mat.node_tree.nodes.new('ShaderNodeTexImage')
            node.image = maps['id']
            mat.node_tree.nodes.active = node

    for ob in lows:
        if ob.name == 'Rifle':
            continue
        bake_one(ob, 'DIFFUSE', maps['id'], 2, False, {'COLOR'})

    hide_all(True)
    WORK.mkdir(parents=True, exist_ok=True)
    for k, img in maps.items():
        path = WORK / f'{k}.png'
        img.filepath_raw = str(path)
        img.file_format = 'PNG'
        img.save()
        print('saved', path)
    # also save a copy named albedo.png so older compose paths don't crash
    maps['id'].filepath_raw = str(WORK / 'albedo.png')
    maps['id'].save()
    return maps


def compose_and_pack():
    script = Path('/workspace/zz-soldier/tools/hd/soldier_compose.py')
    subprocess.check_call(['/usr/bin/python3', str(script)])


def apply_baked_mats(parts):
    """Bind the composed atlas so review renders match what the game will show."""
    alb_p = WORK / 'albedo-composed.png'
    nrm_p = WORK / 'normal.png'
    orm_p = WORK / 'orm.png'
    if not alb_p.exists():
        print('apply_baked_mats: no composed albedo yet')
        return None
    # Reload from disk so we pick up the compose step
    def load(path, space):
        img = bpy.data.images.load(str(path), check_existing=False)
        try:
            img.colorspace_settings.name = space
        except Exception:
            pass
        return img
    alb = load(alb_p, 'sRGB')
    nrm = load(nrm_p, 'Non-Color') if nrm_p.exists() else None
    orm = load(orm_p, 'Non-Color') if orm_p.exists() else None
    mat = bpy.data.materials.new('M_SoldierBaked')
    mat.use_nodes = True
    nt = mat.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial'); out.location = (700, 0)
    bsdf = nt.nodes.new('ShaderNodeBsdfPrincipled'); bsdf.location = (350, 0)
    tex_a = nt.nodes.new('ShaderNodeTexImage'); tex_a.location = (-200, 200)
    tex_a.image = alb
    nt.links.new(tex_a.outputs['Color'], bsdf.inputs['Base Color'])
    if nrm:
        tex_n = nt.nodes.new('ShaderNodeTexImage'); tex_n.location = (-200, 0)
        tex_n.image = nrm
        try:
            tex_n.image.colorspace_settings.name = 'Non-Color'
        except Exception:
            pass
        nrm_n = nt.nodes.new('ShaderNodeNormalMap'); nrm_n.location = (80, 0)
        nt.links.new(tex_n.outputs['Color'], nrm_n.inputs['Color'])
        nt.links.new(nrm_n.outputs['Normal'], bsdf.inputs['Normal'])
    if orm:
        tex_o = nt.nodes.new('ShaderNodeTexImage'); tex_o.location = (-200, -220)
        tex_o.image = orm
        try:
            tex_o.image.colorspace_settings.name = 'Non-Color'
        except Exception:
            pass
        sep = nt.nodes.new('ShaderNodeSeparateColor'); sep.location = (80, -220)
        nt.links.new(tex_o.outputs['Color'], sep.inputs['Color'])
        nt.links.new(sep.outputs['Green'], bsdf.inputs['Roughness'])
        nt.links.new(sep.outputs['Blue'], bsdf.inputs['Metallic'])
    else:
        bsdf.inputs['Roughness'].default_value = 0.88
        bsdf.inputs['Metallic'].default_value = 0.05
    nt.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    rifle_mat = make_mat('M_Rifle', RIFLE, 0.45, 0.32)
    for ob in parts:
        if 'Rifle' in ob.name:
            assign(ob, rifle_mat)
        else:
            assign(ob, mat)
    print('applied baked mats to', [p.name for p in parts])
    return mat


def mute_ik(arm, mute=True):
    for pb in arm.pose.bones:
        for c in pb.constraints:
            c.mute = mute


def ensure_all_weighted(ob, arm):
    """Every vert gets a deform weight so the exporter does not emit a neutral_bone."""
    n = len(ob.data.vertices)
    if n == 0:
        return
    totals = [0.0] * n
    deform = {b.name for b in arm.data.bones if b.use_deform}
    # drop non-deform groups (ik_/pole_)
    for vg in list(ob.vertex_groups):
        if vg.name not in deform:
            ob.vertex_groups.remove(vg)
    for i, v in enumerate(ob.data.vertices):
        totals[i] = sum(g.weight for g in v.groups)
    missing = [i for i, t in enumerate(totals) if t < 1e-6]
    if not missing:
        return
    # nearest deform bone (head)
    bones = [(b.name, Vector(JOINTS[b.name]) if b.name in JOINTS else Vector(b.head_local))
             for b in arm.data.bones if b.use_deform]
    groups = {vg.name: vg for vg in ob.vertex_groups}
    for i in missing:
        co = ob.data.vertices[i].co
        name, _ = min(bones, key=lambda bn: (co - bn[1]).length)
        if name not in groups:
            groups[name] = ob.vertex_groups.new(name=name)
        groups[name].add([i], 1.0, 'REPLACE')
    print('weighted leftover', ob.name, len(missing))


def bind_weights(arm, parts):
    """Rigid gear to a single bone; automatic weights on the body only. IK muted."""
    mute_ik(arm, True)
    # make sure we bind from rest
    bpy.context.view_layer.objects.active = arm
    set_mode(arm, 'POSE')
    for b in arm.pose.bones:
        b.matrix_basis.identity()
    set_mode(arm, 'OBJECT')
    bpy.context.view_layer.update()
    for ob in parts:
        bone = GEAR_BONE.get(ob.name)
        bpy.ops.object.select_all(action='DESELECT')
        ob.select_set(True)
        arm.select_set(True)
        bpy.context.view_layer.objects.active = arm
        if bone:
            ob.parent = arm
            mod = next((m for m in ob.modifiers if m.type == 'ARMATURE'), None)
            if not mod:
                mod = ob.modifiers.new('Armature', 'ARMATURE')
            mod.object = arm
            mod.use_vertex_groups = True
            while ob.modifiers and ob.modifiers[0] != mod:
                bpy.context.view_layer.objects.active = ob
                try:
                    bpy.ops.object.modifier_move_up(modifier=mod.name)
                except Exception:
                    break
            for vg in list(ob.vertex_groups):
                ob.vertex_groups.remove(vg)
            vg = ob.vertex_groups.new(name=bone)
            vg.add([v.index for v in ob.data.vertices], 1.0, 'REPLACE')
            print('rigid', ob.name, '→', bone, 'verts', len(ob.data.vertices))
        else:
            try:
                bpy.ops.object.parent_set(type='ARMATURE_AUTO')
            except Exception as e:
                print('heat warn', ob.name, e)
                ob.parent = arm
                mod = ob.modifiers.new('Armature', 'ARMATURE')
                mod.object = arm
            bpy.context.view_layer.objects.active = ob
            ob.select_set(True)
            try:
                bpy.ops.object.vertex_group_limit_total(group_select_mode='ALL', limit=4)
                bpy.ops.object.vertex_group_normalize_all(lock_active=False)
            except Exception as e:
                print('limit warn', ob.name, e)
            print('auto', ob.name, 'groups', len(ob.vertex_groups))
        ensure_all_weighted(ob, arm)
    mute_ik(arm, False)

def join_objects(name, objs):
    objs = [o for o in objs if o is not None]
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.hide_set(False); o.hide_render = False
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    objs[0].name = name
    return objs[0]


def set_mode(ob, mode):
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.mode_set(mode=mode)


def key_bone(pbone, frame, loc=None, rot=None):
    if loc is not None:
        pbone.location = Vector(loc)
        pbone.keyframe_insert('location', frame=frame)
    if rot is not None:
        pbone.rotation_mode = 'XYZ'
        pbone.rotation_euler = Euler(rot, 'XYZ')
        pbone.keyframe_insert('rotation_euler', frame=frame)


def new_action(arm, name, frames, fn):
    set_mode(arm, 'POSE')
    act = bpy.data.actions.new(name)
    if arm.animation_data is None:
        arm.animation_data_create()
    arm.animation_data.action = act
    for b in arm.pose.bones:
        b.location = (0, 0, 0)
        b.rotation_mode = 'XYZ'
        b.rotation_euler = (0, 0, 0)
        b.scale = (1, 1, 1)
    fn(arm, frames)
    for fc in act.fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = 'BEZIER'
            kp.handle_left_type = 'AUTO_CLAMPED'
            kp.handle_right_type = 'AUTO_CLAMPED'
    return act


def anim_idle(arm, frames=48):
    hips, spine, chest = arm.pose.bones['hips'], arm.pose.bones['spine'], arm.pose.bones['chest']
    for f, t in ((1, 0.0), (frames // 2, 1.0), (frames + 1, 0.0)):
        breath = math.sin(t * math.pi) * 0.008
        key_bone(hips, f, loc=(0, 0, breath * 0.4), rot=(0.015, math.sin(t * math.pi) * 0.015, 0))
        key_bone(spine, f, rot=(0.02 + breath, 0, 0))
        key_bone(chest, f, rot=(0.015 + breath * 1.5, 0, 0))


def _foot(phase, stride, lift):
    swing = math.sin(phase)
    plant = math.cos(phase)
    y = -swing * stride
    z = 0.0 if plant > 0.2 else lift * max(0, -plant)
    return (0, y, z)


def anim_walk(arm, frames=32):
    hips, spine, chest = arm.pose.bones['hips'], arm.pose.bones['spine'], arm.pose.bones['chest']
    fl, fr = arm.pose.bones.get('ik_footL'), arm.pose.bones.get('ik_footR')
    for i in range(frames + 1):
        f, ph = i + 1, i / frames * math.tau
        key_bone(hips, f, loc=(math.sin(ph) * 0.015, 0, abs(math.sin(ph)) * 0.02),
                 rot=(0.04, math.sin(ph) * 0.05, 0))
        key_bone(spine, f, rot=(0.03, math.sin(ph) * 0.035, 0))
        key_bone(chest, f, rot=(0.02, math.sin(ph) * 0.025, 0))
        if fl and fr:
            key_bone(fl, f, loc=_foot(ph, 0.28, 0.10))
            key_bone(fr, f, loc=_foot(ph + math.pi, 0.28, 0.10))


def anim_run(arm, frames=20):
    hips, spine = arm.pose.bones['hips'], arm.pose.bones['spine']
    fl, fr = arm.pose.bones.get('ik_footL'), arm.pose.bones.get('ik_footR')
    for i in range(frames + 1):
        f, ph = i + 1, i / frames * math.tau
        key_bone(hips, f, loc=(math.sin(ph) * 0.02, 0, abs(math.sin(ph)) * 0.04),
                 rot=(0.10, math.sin(ph) * 0.07, 0))
        key_bone(spine, f, rot=(0.08, math.sin(ph) * 0.05, 0))
        if fl and fr:
            key_bone(fl, f, loc=_foot(ph, 0.38, 0.16))
            key_bone(fr, f, loc=_foot(ph + math.pi, 0.38, 0.16))


def anim_strafe(arm, frames=32):
    hips = arm.pose.bones['hips']
    fl, fr = arm.pose.bones.get('ik_footL'), arm.pose.bones.get('ik_footR')
    for i in range(frames + 1):
        f, ph = i + 1, i / frames * math.tau
        key_bone(hips, f, loc=(math.sin(ph) * 0.02, 0, abs(math.sin(ph)) * 0.015),
                 rot=(0.04, 0.08, math.sin(ph) * 0.04))
        if fl and fr:
            def foot(phase):
                swing, plant = math.sin(phase), math.cos(phase)
                x = swing * 0.22
                z = 0.0 if plant > 0.2 else 0.08 * max(0, -plant)
                return (x, 0, z)
            key_bone(fl, f, loc=foot(ph))
            key_bone(fr, f, loc=foot(ph + math.pi))


def anim_aim(arm, frames=8):
    chest, spine, head = arm.pose.bones['chest'], arm.pose.bones['spine'], arm.pose.bones['head']
    w = arm.pose.bones.get('weapon')
    key_bone(spine, 1, rot=(0.02, 0, 0)); key_bone(chest, 1, rot=(0.02, 0, 0))
    key_bone(spine, frames, rot=(-0.12, 0, 0))
    key_bone(chest, frames, rot=(-0.22, 0, 0))
    key_bone(head, frames, rot=(-0.08, 0, 0))
    if w:
        key_bone(w, 1, rot=(0, 0, 0))
        key_bone(w, frames, rot=(-0.45, 0, 0))


def anim_reload(arm, frames=28):
    hl, chest = arm.pose.bones.get('ik_handL'), arm.pose.bones['chest']
    key_bone(chest, 1, rot=(0.02, 0, 0))
    key_bone(chest, 8, rot=(0.08, 0.05, 0))
    key_bone(chest, 20, rot=(0.08, 0.05, 0))
    key_bone(chest, frames, rot=(0.02, 0, 0))
    if hl:
        key_bone(hl, 1, loc=(0, 0, 0))
        key_bone(hl, 8, loc=(0.04, 0.06, -0.08))
        key_bone(hl, 16, loc=(0.03, 0.05, -0.10))
        key_bone(hl, frames, loc=(0, 0, 0))


def anim_flinch(arm, frames=10):
    chest, spine, head = arm.pose.bones['chest'], arm.pose.bones['spine'], arm.pose.bones['head']
    key_bone(spine, 1, rot=(0, 0, 0)); key_bone(chest, 1, rot=(0, 0, 0))
    key_bone(spine, 4, rot=(0.16, -0.07, 0.08))
    key_bone(chest, 4, rot=(0.18, -0.08, 0.10))
    key_bone(head, 4, rot=(0.08, 0.06, 0.06))
    key_bone(spine, frames, rot=(0, 0, 0))
    key_bone(chest, frames, rot=(0, 0, 0))
    key_bone(head, frames, rot=(0, 0, 0))


def bake_action(arm, act, start, end):
    if arm.animation_data is None:
        arm.animation_data_create()
    arm.animation_data.action = act
    set_mode(arm, 'POSE')
    bpy.ops.pose.select_all(action='SELECT')
    bpy.ops.nla.bake(frame_start=start, frame_end=end, only_selected=True,
                     visual_keying=True, clear_constraints=False,
                     use_current_action=True, bake_types={'POSE'})


def make_animations(arm):
    actions = {}
    for name, frames, fn in (
        ('idle', 48, anim_idle), ('walk', 32, anim_walk), ('run', 20, anim_run),
        ('strafe', 32, anim_strafe), ('aim', 8, anim_aim),
        ('reload', 28, anim_reload), ('flinch', 10, anim_flinch),
    ):
        print('anim', name)
        act = new_action(arm, name, frames, lambda a, fr, fn=fn, frames=frames: fn(a, frames))
        bake_action(arm, act, 1, frames + 1)
        act.use_fake_user = True
        actions[name] = act
    arm.animation_data.action = actions['idle']
    return actions


def make_lod(parts, ratio=0.42):
    lod = []
    for ob in parts:
        d = duplicate(ob, ob.name + '_LO', 'SoldierLOD')
        # decimate must be first (armature stays for export)
        m = d.modifiers.new('Dec', 'DECIMATE')
        m.ratio = ratio
        bpy.context.view_layer.objects.active = d
        # move decimate above armature if needed, apply only decimate
        try:
            while d.modifiers[0].type != 'DECIMATE' and d.modifiers[0].type != 'ARMATURE':
                break
            if d.modifiers[0].type == 'ARMATURE':
                # add decimate, apply by making a temp copy without applying armature
                idx = list(d.modifiers).index(m)
                for _ in range(idx):
                    bpy.ops.object.modifier_move_up(modifier=m.name)
            bpy.ops.object.modifier_apply(modifier=m.name)
        except Exception as e:
            print('lod warn', d.name, e)
        lod.append(d)
    return lod


def setup_world(mode='game'):
    sc = bpy.context.scene
    world = bpy.data.worlds.new('World') if not bpy.data.worlds else bpy.data.worlds[0]
    sc.world = world
    world.use_nodes = True
    nt = world.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputWorld')
    bg = nt.nodes.new('ShaderNodeBackground')
    if mode == 'albedo':
        bg.inputs['Color'].default_value = (0.18, 0.19, 0.22, 1)
        bg.inputs['Strength'].default_value = 1.0
    else:
        bg.inputs['Color'].default_value = (0.06, 0.07, 0.09, 1)
        bg.inputs['Strength'].default_value = 0.85
    nt.links.new(bg.outputs['Background'], out.inputs['Surface'])
    bpy.ops.mesh.primitive_cylinder_add(vertices=48, radius=7, depth=0.04, location=(0, 0, -0.02))
    ground = bpy.context.active_object
    ground.name = 'Ground'
    gm = make_mat('M_Ground', (0.20, 0.17, 0.13, 1), 0.95)
    assign(ground, gm)

    def area(name, loc, rot, color, energy, size=3):
        bpy.ops.object.light_add(type='AREA', location=loc, rotation=rot)
        L = bpy.context.active_object
        L.name = name
        L.data.energy = energy
        L.data.size = size
        L.data.color = color
        return L
    if mode == 'albedo':
        bpy.ops.object.light_add(type='SUN', location=(-2, -3, 6), rotation=(0.5, 0.2, 0.3))
        bpy.context.active_object.data.energy = 2.2
        bpy.ops.object.light_add(type='SUN', location=(3, 2, 4), rotation=(0.8, -0.4, 0))
        bpy.context.active_object.data.energy = 0.7
    else:
        area('Key', (-3.2, -3.4, 5.5), (0.9, 0, -0.7), (1.0, 0.74, 0.48), 700, 3.5)
        area('Rim', (3.2, 3.0, 2.6), (1.2, 0, 2.4), (0.60, 0.70, 0.68), 40, 2.2)
        area('Fill', (1.5, -4, 3), (1.0, 0, 0.3), (0.70, 0.64, 0.55), 200, 4.5)
        area('Bounce', (0, 3.5, 1.2), (1.4, 0, 3.14), (0.88, 0.74, 0.52), 90, 5.0)
    return ground


def setup_camera(loc, look_at=(0, 0, 0.95)):
    cam = bpy.data.cameras.new('Cam')
    cam.lens = 50
    ob = bpy.data.objects.new('Cam', cam)
    bpy.context.scene.collection.objects.link(ob)
    ob.location = Vector(loc)
    ob.rotation_euler = (Vector(look_at) - ob.location).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.camera = ob
    return ob


def render_views(tag, engine='EEVEE', samples=24, views=None):
    SHOTS.mkdir(parents=True, exist_ok=True)
    sc = bpy.context.scene
    sc.display_settings.display_device = 'sRGB'
    try:
        sc.view_settings.view_transform = 'AgX'
        try:
            sc.view_settings.look = 'AgX - Medium High Contrast'
        except TypeError:
            pass
    except TypeError:
        try:
            sc.view_settings.view_transform = 'Filmic'
        except TypeError:
            pass
    sc.view_settings.exposure = 0.35
    sc.view_settings.gamma = 1.0
    if engine == 'CYCLES':
        sc.render.engine = 'CYCLES'
        sc.cycles.device = 'CPU'
        sc.cycles.samples = samples
    else:
        try:
            sc.render.engine = 'BLENDER_EEVEE_NEXT'
        except Exception:
            sc.render.engine = 'BLENDER_EEVEE'
        try:
            sc.eevee.taa_render_samples = samples
        except Exception:
            pass
    sc.render.resolution_x = 1280
    sc.render.resolution_y = 720
    sc.render.film_transparent = False
    sc.render.image_settings.file_format = 'PNG'
    for name, (loc, look) in (views or VIEWS).items():
        setup_camera(loc, look)
        path = SHOTS / f'{tag}-{name}.png'
        sc.render.filepath = str(path)
        print('RENDER', path)
        bpy.ops.render.render(write_still=True)


def render_clip(arm, action_name, frames, tag, views=('threequarter', 'side')):
    act = bpy.data.actions.get(action_name)
    if not act or not arm.animation_data:
        return
    arm.animation_data.action = act
    clip_dir = SHOTS / f'clip-{tag}'
    clip_dir.mkdir(parents=True, exist_ok=True)
    sc = bpy.context.scene
    try:
        sc.render.engine = 'BLENDER_EEVEE_NEXT'
    except Exception:
        sc.render.engine = 'BLENDER_EEVEE'
    sc.render.resolution_x = 960
    sc.render.resolution_y = 540
    for vname in views:
        loc, look = VIEWS[vname]
        setup_camera(loc, look)
        for i in range(1, frames + 1):
            sc.frame_set(i)
            sc.render.filepath = str(clip_dir / f'{vname}-{i:02d}.png')
            bpy.ops.render.render(write_still=True)
    # stitch
    for vname in views:
        out = SHOTS / f'{tag}-{vname}.mp4'
        cmd = ['ffmpeg', '-y', '-framerate', '24', '-i', str(clip_dir / f'{vname}-%02d.png'),
               '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', str(out)]
        try:
            subprocess.check_call(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            print('clip', out)
        except Exception as e:
            print('ffmpeg warn', e)
    idle = bpy.data.actions.get('idle')
    if idle:
        arm.animation_data.action = idle
        sc.frame_set(1)


def export_glb(path, objects, arm):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    if arm:
        mute_ik(arm, True)
    bpy.ops.object.select_all(action='DESELECT')
    if arm:
        arm.hide_set(False); arm.select_set(True)
        bpy.context.view_layer.objects.active = arm
    for ob in objects:
        ob.hide_set(False); ob.select_set(True)
        triangulate(ob)
        # limit weights again on the joined mesh
        bpy.context.view_layer.objects.active = ob
        try:
            bpy.ops.object.vertex_group_limit_total(group_select_mode='ALL', limit=4)
            bpy.ops.object.vertex_group_normalize_all(lock_active=False)
        except Exception:
            pass
    kwargs = dict(filepath=str(path), check_existing=False, use_selection=True,
                  export_format='GLB', export_skins=True, export_texcoords=True,
                  export_normals=True, export_cameras=False, export_lights=False)
    optional = dict(
        export_animations=True, export_animation_mode='ACTIONS', export_def_bones=True,
        export_image_format='NONE', export_tangents=False, export_morph=False,
        export_force_sampling=True, export_optimize_animation_size=True,
        export_draco_mesh_compression_enable=False, export_apply=False,
    )
    kwargs.update(optional)
    while True:
        try:
            bpy.ops.export_scene.gltf(**kwargs)
            break
        except TypeError as e:
            dropped = False
            for k in list(kwargs):
                if k in str(e) and k not in ('filepath', 'export_format'):
                    kwargs.pop(k); dropped = True; print('export drop', k); break
            if not dropped:
                raise
    print('exported', path, 'bytes', path.stat().st_size if path.exists() else 0)
    return path


def save_blend():
    WORK.mkdir(parents=True, exist_ok=True)
    bpy.ops.wm.save_as_mainfile(filepath=str(WORK / 'soldier.blend'))


def run(mode, light='game'):
    global QUICK
    ASSETS.mkdir(parents=True, exist_ok=True)
    SHOTS.mkdir(parents=True, exist_ok=True)
    clear_scene()
    print('== blockout / grip-pose retopo ==')
    arm, parts, rifle = build_blockout()
    apply_preview_mats(parts)
    setup_world(light)
    if mode in ('blockout', 'all'):
        render_views('blockout', 'EEVEE', 20)
        if mode == 'blockout':
            save_blend(); return
    print('== high poly ==')
    high_parts = make_high(parts)
    apply_high_mods(high_parts)
    if mode == 'high':
        for p in parts:
            p.hide_render = True; p.hide_set(True)
        render_views('high', 'EEVEE', 20)
        save_blend(); return
    print('== UVs (even texel) ==')
    unwrap_and_pack(parts, margin=0.012)
    print('== weights (rigid gear, auto body) ==')
    bind_weights(arm, parts)
    print('== bake ==')
    maps = bake_maps(parts, high_parts, 1024)
    compose_and_pack()
    apply_baked_mats(parts)
    for h in high_parts:
        h.hide_set(True); h.hide_render = True
    if mode in ('bake', 'texture', 'all'):
        render_views('textured', 'EEVEE', 28)
        if mode in ('bake', 'texture'):
            save_blend(); return
    # Join everything except the rifle (weapon swaps stay a second mesh)
    body_parts = [p for p in parts if p.name != 'Rifle']
    low = join_objects('SoldierLow', body_parts)
    parts = [low, rifle]
    # re-assert armature modifier first on the joined mesh
    for ob in parts:
        mods = [m for m in ob.modifiers if m.type == 'ARMATURE']
        if not mods:
            m = ob.modifiers.new('Armature', 'ARMATURE'); m.object = arm
        else:
            mods[0].object = arm
            for extra in mods[1:]:
                ob.modifiers.remove(extra)
        while ob.modifiers and ob.modifiers[0].type != 'ARMATURE':
            bpy.context.view_layer.objects.active = ob
            try:
                bpy.ops.object.modifier_move_up(modifier='Armature')
            except Exception:
                break
        if ob.parent is None:
            ob.parent = arm
        print(ob.name, 'groups', len(ob.vertex_groups), 'mods', [m.type for m in ob.modifiers], 'tris', tris(ob))
    apply_baked_mats(parts)
    for ob, cap in zip(parts, (9500, 2200)):
        t0 = tris(ob)
        if t0 > cap:
            ratio = cap / float(t0)
            apply_mod(ob, 'DECIMATE', ratio=ratio)
            print('clamp', ob.name, t0, '→', tris(ob))
        ensure_all_weighted(ob, arm)
        print('joined', ob.name, 'tris', tris(ob), 'groups', len(ob.vertex_groups))
    print('== animations ==')
    make_animations(arm)
    if mode in ('anim', 'all'):
        arm.animation_data.action = bpy.data.actions.get('walk')
        bpy.context.scene.frame_set(8)
        render_views('walk', 'EEVEE', 16, views={'threequarter': VIEWS['threequarter'], 'side': VIEWS['side']})
        arm.animation_data.action = bpy.data.actions.get('run')
        bpy.context.scene.frame_set(6)
        render_views('run', 'EEVEE', 16, views={'threequarter': VIEWS['threequarter'], 'side': VIEWS['side']})
        if not QUICK:
            render_clip(arm, 'walk', 32, 'walk')
            render_clip(arm, 'run', 20, 'run')
        if mode == 'anim':
            save_blend(); return
    print('== LOD + export ==')
    lod = make_lod(parts, 0.42)
    for o in lod:
        o.hide_set(True); o.hide_render = True
    # idle rest for export / final stills
    idle = bpy.data.actions.get('idle')
    if idle and arm.animation_data:
        arm.animation_data.action = idle
        bpy.context.scene.frame_set(1)
    export_glb(ASSETS / 'soldier.glb', parts, arm)
    for p in parts:
        p.hide_set(True)
    for o in lod:
        o.hide_set(False)
    export_glb(ASSETS / 'soldier_lo.glb', lod, arm)
    for p in parts:
        p.hide_set(False)
    for o in lod:
        o.hide_set(True)
    apply_baked_mats(parts)
    render_views('final', 'EEVEE', 28)
    save_blend()
    print('DONE', ASSETS, 'hi', (ASSETS / 'soldier.glb').stat().st_size,
          'lo', (ASSETS / 'soldier_lo.glb').stat().st_size)


QUICK = False


def main():
    global QUICK
    p = argparse.ArgumentParser()
    p.add_argument('--mode', default='all',
                   choices=('blockout', 'high', 'bake', 'texture', 'anim', 'export', 'all'))
    p.add_argument('--light', default='game', choices=('game', 'albedo'))
    p.add_argument('--quick', action='store_true', help='Skip walk/run mp4 clips')
    args = p.parse_args(argv_after_dd())
    QUICK = bool(args.quick)
    run(args.mode, args.light)


if __name__ == '__main__':
    main()
