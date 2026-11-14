#!/usr/bin/env python3
"""
DUST & DEAD co-op soldier v2, built from "Sand soldier (outdated)" by buh (CC BY 4.0, modified)
+ NVG parts from "Military Character Kit 1.1" (CC0) by britdawgmasterfunk. Original rifle + camo.

  blender -b --python tools/hd/sand_build.py -- --stage pose|rig|anim|export|all
Stages save .blend files in /workspace/zz-soldier-shots/v3/work (SOLDIER_WORK) so they can be re-run separately.
"""
import os, sys, math, argparse
from pathlib import Path
import bpy, bmesh
from mathutils import Vector, Matrix, Euler

sys.path.insert(0, str(Path(__file__).resolve().parent))
import soldier_build as sb  # helpers: armature, anims, rifle primitives, export

SRC = Path('/workspace/zz-free-models/src')
WORK = Path(os.environ.get('SOLDIER_WORK', '/workspace/zz-soldier-shots/v3/work'))
SHOTS = WORK.parent
ASSETS = Path('/workspace/zz-soldier/assets/hd/soldier')
WORK.mkdir(parents=True, exist_ok=True)
sb.SHOTS = WORK
sb.WORK = WORK
TARGET_H = 1.80          # total height incl. helmet (m)
HI_TRIS = 21500          # body hi (rifle + NVG on top)
LO_TRIS = 7000

# their bone → our bone (sides: +X is our 'R', matching soldier_build JOINTS)
def map_bone(n):
    n = n.split('_')[0]
    if n in ('Bone', 'Bone.001'): return 'hips'
    if n == 'Bone.002': return 'spine'
    if n == 'Bone.003': return 'chest'
    if n == 'Bone.004': return 'neck'
    if n == 'Bone.005': return 'head'
    if n == 'Bone.007': return 'thighR'
    if n == 'Bone.008': return 'calfR'
    if n == 'Bone.009': return 'footR'
    if n == 'Bone.010': return 'thighL'
    if n == 'Bone.011': return 'calfL'
    if n == 'Bone.012': return 'footL'
    if n == 'Bone.006': return 'clavR'
    if n == 'Bone.013': return 'upperR'
    if n == 'Bone.014': return 'lowerR'
    if n == 'Bone.035': return 'clavL'
    if n == 'Bone.036': return 'upperL'
    if n == 'Bone.037': return 'lowerL'
    try:
        k = int(n.split('.')[1])
    except Exception:
        return 'hips'
    if 15 <= k <= 34: return 'handR'
    if 38 <= k <= 57: return 'handL'
    return 'hips'

def short(n): return n.split('_')[0]

def args():
    a = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser(); p.add_argument('--stage', default='pose')
    p.add_argument('--render', action='store_true')
    return p.parse_args(a)

# ------------------------------------------------------------------ helpers
def sel_only(objs, active=None):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.hide_set(False); o.select_set(True)
    bpy.context.view_layer.objects.active = active or objs[0]

def preview_mat(name, img_path):
    m = bpy.data.materials.new(name); m.use_nodes = True
    nt = m.node_tree; b = nt.nodes['Principled BSDF']
    t = nt.nodes.new('ShaderNodeTexImage'); t.image = bpy.data.images.load(str(img_path))
    nt.links.new(t.outputs['Color'], b.inputs['Base Color'])
    b.inputs['Roughness'].default_value = 0.85
    return m

def look_cam(loc, at, lens=50):
    cam = bpy.data.cameras.new('Cam'); cam.lens = lens
    ob = bpy.data.objects.new('Cam', cam); bpy.context.scene.collection.objects.link(ob)
    ob.location = Vector(loc)
    ob.rotation_euler = (Vector(at) - ob.location).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.camera = ob
    return ob

def quick_render(tag, views, res=(960, 720)):
    sc = bpy.context.scene
    try: sc.render.engine = 'BLENDER_EEVEE_NEXT'
    except Exception: sc.render.engine = 'BLENDER_EEVEE'
    sc.eevee.taa_render_samples = 16
    sc.render.resolution_x, sc.render.resolution_y = res
    sc.view_settings.view_transform = 'AgX'
    for name, (loc, at, lens) in views.items():
        look_cam(loc, at, lens)
        sc.render.filepath = str(WORK / f'{tag}-{name}.png')
        bpy.ops.render.render(write_still=True)
        print('RENDER', sc.render.filepath)

VIEWS = {
    'front': ((0, -4.6, 1.05), (0, 0, 0.95), 45),
    'tq': ((2.9, -3.4, 1.2), (0, 0, 0.95), 45),
    'side': ((4.4, 0, 1.1), (0, 0, 0.95), 45),
    'hands': ((0.9, -1.3, 1.35), (0.05, -0.15, 1.1), 50),
    'handsL': ((-1.1, -1.0, 1.3), (0.0, -0.2, 1.1), 50),
    'head': ((0.5, -1.2, 1.75), (0, -0.02, 1.66), 50),
}

def lights():
    w = bpy.data.worlds.new('W'); bpy.context.scene.world = w; w.use_nodes = True
    w.node_tree.nodes['Background'].inputs['Color'].default_value = (0.35, 0.35, 0.38, 1)
    for nm, rot, en in (('Sun1', (0.7, 0.2, -0.6), 3.5), ('Sun2', (1.1, -0.3, 2.4), 1.0)):
        L = bpy.data.lights.new(nm, 'SUN'); L.energy = en
        o = bpy.data.objects.new(nm, L); o.rotation_euler = rot; bpy.context.scene.collection.objects.link(o)


RIFLE_LOC = (0.124, -0.169, 1.176)  # v3: slid 3 cm back along the bore so the support hand reaches the handguard
RIFLE_ROT = (math.radians(32), math.radians(6), math.radians(-30))

def build_rifle2():
    """Original 0.87 m carbine (our own design). Local barrel -Y, up +Z. ~2k tris."""
    bm = bmesh.new(); X = math.pi / 2
    box, cyl = sb.add_box, sb.add_cyl
    box(bm, (0, -0.02, 0.047), (0.040, 0.205, 0.040))            # upper receiver
    box(bm, (0, 0.005, 0.012), (0.036, 0.16, 0.032))             # lower receiver
    box(bm, (0, -0.075, -0.020), (0.034, 0.052, 0.045))          # magwell
    for i in range(5):                                           # curved magazine
        t = i / 4.0
        box(bm, (0, -0.080 - 0.035 * t * t, -0.055 - 0.028 * i), (0.026, 0.062, 0.030), rot=(-0.10 - 0.18 * t, 0, 0))
    box(bm, (0, 0.040, -0.035), (0.028, 0.034, 0.085), rot=(0.38, 0, 0))   # raked pistol grip
    box(bm, (0, -0.012, -0.024), (0.012, 0.055, 0.005))          # trigger guard
    box(bm, (0, 0.000, -0.012), (0.004, 0.006, 0.018), rot=(0.3, 0, 0))    # trigger
    cyl(bm, (0, 0.175, 0.040), 0.015, 0.015, 0.17, rot=(X, 0, 0), seg=12)  # buffer tube
    box(bm, (0, 0.235, 0.028), (0.040, 0.12, 0.055))             # stock body
    box(bm, (0, 0.230, 0.062), (0.030, 0.10, 0.020))             # cheek riser
    box(bm, (0, 0.298, 0.010), (0.044, 0.016, 0.110))            # butt pad
    cyl(bm, (0, -0.255, 0.046), 0.025, 0.025, 0.27, rot=(X, 0, math.pi / 8), seg=8)  # octagonal handguard
    for k in range(6):                                           # handguard vent slots (dark recess blocks)
        box(bm, (0.0245, -0.17 - 0.035 * k, 0.046), (0.004, 0.020, 0.010))
        box(bm, (-0.0245, -0.17 - 0.035 * k, 0.046), (0.004, 0.020, 0.010))
    box(bm, (0, -0.10, 0.074), (0.022, 0.42, 0.010))             # full-length top rail
    for k in range(26):
        box(bm, (0, 0.10 - 0.016 * k, 0.081), (0.024, 0.006, 0.005))
    cyl(bm, (0, -0.455, 0.046), 0.0085, 0.0085, 0.14, rot=(X, 0, 0), seg=10)  # barrel
    box(bm, (0, -0.400, 0.068), (0.012, 0.018, 0.040))           # front sight post (folded)
    cyl(bm, (0, -0.545, 0.046), 0.012, 0.012, 0.055, rot=(X, 0, 0), seg=10)   # flash hider
    cyl(bm, (0, -0.018, 0.112), 0.018, 0.018, 0.062, rot=(X, 0, 0), seg=14)   # red-dot tube
    box(bm, (0, -0.018, 0.090), (0.026, 0.045, 0.016))           # optic mount
    box(bm, (0.026, -0.018, 0.112), (0.012, 0.016, 0.016))       # optic turret
    box(bm, (0, 0.085, 0.060), (0.030, 0.012, 0.010))            # charging handle
    box(bm, (0.022, -0.030, 0.050), (0.006, 0.035, 0.018))       # ejection cover
    box(bm, (-0.020, 0.270, 0.020), (0.008, 0.02, 0.014))        # sling loop
    box(bm, (-0.026, -0.30, 0.040), (0.008, 0.02, 0.014))        # front sling loop
    ob = sb.bm_to_obj('rifle', bm)
    sb.bevel(ob, 0.0012, 1, 40)
    ob.location = Vector(RIFLE_LOC)
    ob.rotation_euler = Euler(RIFLE_ROT, 'XYZ')
    return ob

# ------------------------------------------------------------------ stage: pose
GRIP = {}

def stage_pose(render):
    sb.clear_scene()
    bpy.ops.import_scene.gltf(filepath=str(SRC / 'sand_soldier/scene.gltf'))
    for o in list(bpy.data.objects):
        if o.name.startswith('Icosphere'): bpy.data.objects.remove(o)
    arm0 = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    meshes = [o for o in bpy.data.objects if o.type == 'MESH']
    top = next(o for o in bpy.data.objects if o.name == 'Sketchfab_model')
    s = TARGET_H / 1.913
    top.scale = (s, s, s)
    bpy.context.view_layer.update()
    pb = arm0.pose.bones
    B = {short(b.name): b for b in pb}
    mw = arm0.matrix_world
    # --- rifle + grip targets (world, after scale)
    rifle = build_rifle2()
    bpy.context.view_layer.update()
    RX = rifle.matrix_world.copy()
    def RL(v): return RX @ Vector(v)
    WR, KR, TR = RL(GRIP_R['W']), RL(GRIP_R['K']), RL(GRIP_R['T'])
    WL, KL, TL = RL(GRIP_L['W']), RL(GRIP_L['K']), RL(GRIP_L['T'])
    def empty(n, p):
        e = bpy.data.objects.new(n, None); bpy.context.scene.collection.objects.link(e); e.location = p; return e
    eR, eL = empty('tgtR', WR), empty('tgtL', WL)
    pR, pL = empty('poleR', Vector(POLE_R)), empty('poleL', Vector(POLE_L))
    for bn, t, p in (('Bone.014', eR, pR), ('Bone.037', eL, pL)):
        c = B[bn].constraints.new('IK'); c.target = t; c.pole_target = p; c.chain_count = 2
        c.pole_angle = math.radians(-90)
    bpy.context.view_layer.update()
    # orient each hand: align (wrist->knuckles, palm normal) to the grip frame
    inv = mw.inverted()
    for base, fb, th, Wd, Kd, Td in ((15, (19, 20, 21, 22), 16, WR, KR, TR), (38, (42, 43, 44, 45), 39, WL, KL, TL)):
        hb = B[f'Bone.{base:03d}']
        W = mw @ hb.head
        K = sum((mw @ B[f'Bone.{k:03d}'].head for k in fb), Vector()) / 4
        T = mw @ B[f'Bone.{th:03d}'].tail
        d0 = (K - W).normalized(); n0 = d0.cross(T - W).normalized(); b0 = d0.cross(n0)
        d1 = (Kd - Wd).normalized(); n1 = d1.cross(Td - Wd).normalized()
        if PALM_FLIP['R' if base == 15 else 'L']: n1 = -n1
        b1 = d1.cross(n1)
        M0 = Matrix((d0, n0, b0)).transposed(); M1 = Matrix((d1, n1, b1)).transposed()
        R = (M1 @ M0.inverted()).to_4x4()
        wm = mw @ hb.matrix
        new = Matrix.Translation(W) @ R @ Matrix.Translation(-W) @ wm
        hb.matrix = inv @ new
        bpy.context.view_layer.update()
    print('REACH R', tuple(round(x,3) for x in (mw @ B['Bone.015'].head)), tuple(round(x,3) for x in WR))
    print('REACH L', tuple(round(x,3) for x in (mw @ B['Bone.038'].head)), tuple(round(x,3) for x in WL))
    global HANDCAM
    HANDCAM = {'cR': (tuple(WR + Vector((0.35, -0.25, 0.12))), tuple(WR), 50), 'cR2': (tuple(WR + Vector((-0.05, -0.4, 0.15))), tuple(WR), 50),
               'cL': (tuple(WL + Vector((-0.35, -0.2, -0.05))), tuple(WL), 50), 'cL2': (tuple(WL + Vector((0.1, -0.3, -0.3))), tuple(WL), 50)}
    # finger curl (local X), thumb wrap
    for side, fingers, thumb in (('R', (19, 20, 21, 22), (16, 17, 18)), ('L', (42, 43, 44, 45), (39, 40, 41))):
        sg = CURL_SIGN[side]
        for f in fingers:
            for j, k in enumerate((f, f + 4, f + 8, f + 12)):
                b = B.get(f'Bone.{k:03d}')
                if not b: continue
                b.rotation_mode = 'XYZ'; b.rotation_euler = (math.radians(CURL[j] * sg), 0, 0)
        for j, k in enumerate(thumb):
            b = B.get(f'Bone.{k:03d}'); b.rotation_mode = 'XYZ'
            b.rotation_euler = (math.radians(THUMB[j] * sg), 0, 0)
    bpy.context.view_layer.update()
    # measure posed joints (world) for our rig
    def H(n): return mw @ B[n].head
    def T(n): return mw @ B[n].tail
    J = {
        'root': Vector((0, 0, 0)),
        'hips': (H('Bone.007') + H('Bone.010')) / 2 + Vector((0, 0.01, 0.04)),
        'spine': H('Bone.002'), 'chest': H('Bone.003'), 'neck': H('Bone.004'), 'head': H('Bone.005'),
        'clavR': H('Bone.006'), 'upperR': H('Bone.013'), 'lowerR': H('Bone.014'), 'handR': H('Bone.015'),
        'clavL': H('Bone.035'), 'upperL': H('Bone.036'), 'lowerL': H('Bone.037'), 'handL': H('Bone.038'),
        'thighR': H('Bone.007'), 'calfR': H('Bone.008'), 'footR': H('Bone.009'),
        'thighL': H('Bone.010'), 'calfL': H('Bone.011'), 'footL': H('Bone.012'),
        'weapon': rifle.location.copy(),
    }
    for sd in 'LR':
        f = J['foot' + sd]
        J['toe' + sd] = Vector((f.x, f.y - 0.15, 0.03))
    import json
    (WORK / 'joints.json').write_text(json.dumps({k: list(v) for k, v in J.items()}, indent=1))
    if render:
        lights()
        pm = preview_mat('prev', WORK / 'src_base_2k.png')
        for m in meshes:
            if len(m.data.polygons) > 1000: m.data.materials.clear(); m.data.materials.append(pm)
        rm = sb.make_mat('rifle', (0.03, 0.03, 0.03, 1), 0.45, 0.3); rifle.data.materials.clear(); rifle.data.materials.append(rm)
        quick_render('pose', {k: VIEWS[k] for k in ('front', 'tq', 'side', 'hands', 'handsL')})
        quick_render('pose', HANDCAM, (640, 480))
        quick_render('pose', {'handsT': ((0.3, -0.6, 1.8), (0.05, -0.2, 1.1), 50), 'handsU': ((0.6, -0.9, 0.7), (0.05, -0.2, 1.1), 50)})

    # bake pose into mesh
    for m in meshes:
        sel_only([m])
        mod = next((x for x in m.modifiers if x.type == 'ARMATURE'), None)
        if mod: bpy.ops.object.modifier_apply(modifier=mod.name)
    for m in meshes:
        mwm = m.matrix_world.copy(); m.parent = None; m.matrix_world = mwm
        sel_only([m]); bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    for o in list(bpy.data.objects):
        if o.type in ('ARMATURE', 'EMPTY') and o.name not in ('Rifle',): bpy.data.objects.remove(o)
    for c in list(bpy.data.objects):
        if c.type in ('CAMERA', 'LIGHT'): bpy.data.objects.remove(c)
    bpy.ops.wm.save_as_mainfile(filepath=str(WORK / 'pose.blend'))
    print('POSE OK', {k: tuple(round(x, 3) for x in v) for k, v in J.items()})

CURL = (35, 60, 50, 35)
THUMB = (10, 20, 15)
CURL_SIGN = {'R': 1, 'L': 1}
PALM_FLIP = {'R': True, 'L': False}
# grip frames in rifle-local coords (barrel -Y, up +Z): wrist, knuckles, thumb tip
GRIP_R = {'W': (0.036, 0.080, 0.000), 'K': (0.030, 0.005, -0.048), 'T': (0.022, 0.050, 0.060)}
GRIP_L = {'W': (-0.040, -0.085, -0.004), 'K': (0.008, -0.150, -0.010), 'T': (-0.055, -0.150, 0.018)}
POLE_R = (0.30, 0.55, 0.85)
POLE_L = (-0.45, 0.25, 0.85)


# ------------------------------------------------------------------ stage: rig
PATCH_NVG = None   # (u0, v0, u1, v1) set from free atlas space
PATCH_LENS = None

def free_atlas_cells(objs, res=128, need=2):
    """Find empty UV cells (Blender UV space, v up) not covered by any triangle bbox."""
    import numpy as np
    occ = np.zeros((res, res), bool)
    for o in objs:
        me = o.data; uv = me.uv_layers.active.data
        for p in me.polygons:
            us = [uv[i].uv for i in p.loop_indices]
            u0 = max(0, int(min(u.x for u in us) * res) - 1); u1 = min(res - 1, int(max(u.x for u in us) * res) + 1)
            v0 = max(0, int(min(u.y for u in us) * res) - 1); v1 = min(res - 1, int(max(u.y for u in us) * res) + 1)
            occ[v0:v1 + 1, u0:u1 + 1] = True
    cells = []
    k = 4  # 4x4 cells of 1/128 → 32 px at 1024
    for vy in range(2, res - k - 2, k):
        for ux in range(2, res - k - 2, k):
            if not occ[vy - 2:vy + k + 2, ux - 2:ux + k + 2].any():
                cells.append((ux / res, vy / res, (ux + k) / res, (vy + k) / res))
                if len(cells) >= need: return cells
    return cells

def set_uv_patch(ob, poly_filter, patch):
    u0, v0, u1, v1 = patch
    cu, cv = (u0 + u1) / 2, (v0 + v1) / 2
    r = (u1 - u0) * 0.25
    uv = ob.data.uv_layers.active.data
    for p in ob.data.polygons:
        if not poly_filter(p): continue
        for j, li in enumerate(p.loop_indices):
            a = j * 2.1
            uv[li].uv = (cu + math.cos(a) * r * 0.3, cv + math.sin(a) * r * 0.3)

def import_nvg():
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=str(SRC / 'milkit/scene.gltf'))
    new = [o for o in bpy.data.objects if o not in before]
    keep_parent = ('frontmount_50', 'foldingmount_52', 'foldingmount.001_53', 'nightvisiontubes_44', 'dustcaps_43')
    parts = []
    for o in new:
        if o.type == 'MESH' and o.parent and o.parent.name in keep_parent:
            parts.append((o.parent.name, o))
    # kit helmet → our helmet (uniform scale, align centre-x, front, top)
    S = NVG_SCALE
    src_c = Vector((-7.497, -0.631, 7.468)); dst_c = Vector(NVG_ANCHOR)
    pivot = Vector((-7.5, -0.62, 7.17))
    objs = []
    for pn, o in parts:
        mw = o.matrix_world.copy()
        o.parent = None; o.matrix_world = mw
        sel_only([o]); bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        me = o.data
        flip = pn in ('nightvisiontubes_44', 'foldingmount.001_53', 'dustcaps_43')
        Rf = Matrix.Rotation(math.radians(NVG_FLIP), 4, 'X')
        for v in me.vertices:
            c = v.co.copy()
            if flip: c = pivot + (Rf @ (c - pivot).to_4d()).to_3d()
            v.co = dst_c + (c - src_c) * S + (Vector(NVG_SHIFT) if flip else Vector())
        objs.append(o)
    for o in new:
        if o not in objs and o.name in bpy.data.objects: bpy.data.objects.remove(o)
    nvg = sb.join_objects('nvg', objs)
    nvg.data.materials.clear()
    for uvl in list(nvg.data.uv_layers)[1:]: nvg.data.uv_layers.remove(uvl)
    if not nvg.data.uv_layers: nvg.data.uv_layers.new(name='UVMap')
    sel_only([nvg]); bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.mesh.remove_doubles(threshold=0.0004); bpy.ops.object.mode_set(mode='OBJECT')
    t0 = sb.tris(nvg)
    if t0 > NVG_TRIS: sb.apply_mod(nvg, 'DECIMATE', ratio=NVG_TRIS / t0)
    print('NVG tris', t0, '→', sb.tris(nvg))
    return nvg

NVG_SCALE = 0.205
NVG_ANCHOR = (0.0, -0.168, 1.80)
NVG_FLIP = -115
NVG_SHIFT = (0.0, 0.04, -0.025)
NVG_TRIS = 1100

def stage_rig(render):
    import json, os
    global NVG_FLIP
    NVG_FLIP = float(os.environ.get('NVG_FLIP', NVG_FLIP))
    global NVG_SHIFT
    if os.environ.get('NVG_SHIFT'): NVG_SHIFT = tuple(float(x) for x in os.environ['NVG_SHIFT'].split(','))
    bpy.ops.wm.open_mainfile(filepath=str(WORK / 'pose.blend'))
    rifle = bpy.data.objects['rifle']
    meshes = [o for o in bpy.data.objects if o.type == 'MESH' and o != rifle]
    lens = next(o for o in meshes if len(o.data.polygons) < 500)
    for o in meshes:
        while len(o.data.uv_layers) > 1: o.data.uv_layers.remove(o.data.uv_layers[-1])
    cells = free_atlas_cells([o for o in meshes if o != lens])
    print('FREE CELLS', cells)
    global PATCH_NVG, PATCH_LENS
    PATCH_NVG, PATCH_LENS = cells[0], cells[1]
    (WORK / 'patches.json').write_text(json.dumps({'nvg': PATCH_NVG, 'lens': PATCH_LENS}))
    set_uv_patch(lens, lambda p: True, PATCH_LENS)
    nvg = import_nvg()
    set_uv_patch(nvg, lambda p: True, PATCH_NVG)
    # nvg: rigid to head
    nvg.vertex_groups.new(name='head').add([v.index for v in nvg.data.vertices], 1.0, 'REPLACE')
    # map source groups to ours (sum)
    for o in meshes:
        names = {vg.index: map_bone(vg.name) for vg in o.vertex_groups}
        acc = [dict() for _ in o.data.vertices]
        for v in o.data.vertices:
            for g in v.groups:
                n = names.get(g.group)
                if n: acc[v.index][n] = acc[v.index].get(n, 0) + g.weight
        for vg in list(o.vertex_groups): o.vertex_groups.remove(vg)
        groups = {}
        for i, d in enumerate(acc):
            for n, w in d.items():
                if n not in groups: groups[n] = o.vertex_groups.new(name=n)
                groups[n].add([i], w, 'REPLACE')
        print('mapped', o.name, sorted(groups))
    body = sb.join_objects('soldier_body', meshes + [nvg])
    body.data.materials.clear()
    m = bpy.data.materials.new('body'); body.data.materials.append(m)
    # weld + decimate (keep UV seams: collapse interpolates; boundary preserved)
    t0 = sb.tris(body)
    sel_only([body]); bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.mesh.remove_doubles(threshold=0.00005); bpy.ops.object.mode_set(mode='OBJECT')
    try: bpy.ops.mesh.customdata_custom_splitnormals_clear()
    except Exception as e: print('splitnormals', e)
    for p_ in body.data.polygons: p_.use_smooth = True
    lo = body.copy(); lo.data = body.data.copy(); bpy.context.scene.collection.objects.link(lo); lo.name = 'soldier_body_lo'
    sb.apply_mod(body, 'DECIMATE', ratio=HI_TRIS / t0, use_collapse_triangulate=True)
    sb.apply_mod(lo, 'DECIMATE', ratio=LO_TRIS / t0, use_collapse_triangulate=True)
    print('BODY tris', t0, 'hi', sb.tris(body), 'lo', sb.tris(lo))
    # our armature from measured joints
    J = json.loads((WORK / 'joints.json').read_text())
    sb.JOINTS = {k: tuple(v) for k, v in J.items()}
    sb.RIFLE_LOC = RIFLE_LOC
    arm = sb.build_armature()
    fix_ik_poles(arm)
    for ob in (body, lo):
        ob.parent = arm
        md = ob.modifiers.new('Armature', 'ARMATURE'); md.object = arm
        sel_only([ob])
        bpy.ops.object.vertex_group_limit_total(group_select_mode='ALL', limit=4)
        bpy.ops.object.vertex_group_normalize_all(lock_active=False)
        sb.ensure_all_weighted(ob, arm)
    rifle.vertex_groups.new(name='weapon').add([v.index for v in rifle.data.vertices], 1.0, 'REPLACE')
    rifle.parent = arm; md = rifle.modifiers.new('Armature', 'ARMATURE'); md.object = arm
    rifle.matrix_parent_inverse = arm.matrix_world.inverted()
    bpy.ops.wm.save_as_mainfile(filepath=str(WORK / 'rig.blend'))
    if render:
        lo.hide_render = True; lights()
        body.data.materials[0] = preview_mat('prev', WORK / 'src_base_2k.png')
        quick_render(f'rig-nvg{NVG_FLIP}', {'head': VIEWS['head'], 'hside': ((0.9, 0.0, 1.72), (0, -0.05, 1.68), 50)}, (640, 480))
    print('RIG OK')

def fix_ik_poles(arm):
    """Pick each IK pole angle so the rest pose is unchanged (no bind-time twist)."""
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='POSE')
    for pb in arm.pose.bones:
        for c in pb.constraints:
            if c.type != 'IK': continue
            chain = [pb, pb.parent]
            rest = [ (arm.data.bones[b.name].matrix_local).copy() for b in chain ]
            best = (1e9, 0)
            for deg in range(-180, 180, 3):
                c.pole_angle = math.radians(deg)
                bpy.context.view_layer.update()
                err = sum(sum(abs(x) for row in (b.matrix - r) for x in row) for b, r in zip(chain, rest))
                if err < best[0]: best = (err, deg)
            lo_, hi_ = best[1] - 3, best[1] + 3
            d = lo_
            while d <= hi_:
                c.pole_angle = math.radians(d); bpy.context.view_layer.update()
                err = sum(sum(abs(x) for row in (b.matrix - r) for x in row) for b, r in zip(chain, rest))
                if err < best[0]: best = (err, d)
                d += 0.25
            c.pole_angle = math.radians(best[1])
            print('pole', pb.name, best)
    bpy.context.view_layer.update()
    bpy.ops.object.mode_set(mode='OBJECT')


# ------------------------------------------------------------------ stage: tex (our camo, baked in 3D so it crosses seams)
def srgb2lin(h):
    c = [int(h[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    return tuple(((x + 0.055) / 1.055) ** 2.4 if x > 0.04045 else x / 12.92 for x in c) + (1.0,)

CAMO = {'D': '#B6A47F', 'A': '#8F7D5A', 'B': '#6A5A40', 'C': '#48472F'}

def stage_tex(render):
    bpy.ops.wm.open_mainfile(filepath=str(WORK / 'rig.blend'))
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE'); arm.data.pose_position = 'REST'
    body = bpy.data.objects['soldier_body']
    for o in bpy.data.objects:
        if o != body: o.hide_render = True
    m = bpy.data.materials.new('camo_bake'); m.use_nodes = True; nt = m.node_tree; N = nt.nodes; Lk = nt.links.new
    for n in list(N): N.remove(n)
    out = N.new('ShaderNodeOutputMaterial'); em = N.new('ShaderNodeEmission'); Lk(em.outputs[0], out.inputs[0])
    def img(path, color):
        t = N.new('ShaderNodeTexImage'); t.image = bpy.data.images.load(str(path))
        t.image.colorspace_settings.name = 'sRGB' if color else 'Non-Color'; t.interpolation = 'Cubic'; return t
    src, msk, shd = img(WORK / 'src_base_2k.png', True), img(WORK / 'camo_mask.png', False), img(WORK / 'camo_shade.png', False)
    tc = N.new('ShaderNodeTexCoord')
    mp = N.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = (1.0, 1.0, 0.62); Lk(tc.outputs['Object'], mp.inputs[0])
    def noise(scale, detail, rough, dist, w):
        n = N.new('ShaderNodeTexNoise'); n.noise_dimensions = '4D'
        n.inputs['Scale'].default_value = scale; n.inputs['Detail'].default_value = detail
        n.inputs['Roughness'].default_value = rough; n.inputs['Distortion'].default_value = dist; n.inputs['W'].default_value = w
        Lk(mp.outputs[0], n.inputs['Vector']); return n
    def step(sock, lo, hi):
        r = N.new('ShaderNodeMapRange'); r.interpolation_type = 'SMOOTHSTEP'
        r.inputs['From Min'].default_value = lo; r.inputs['From Max'].default_value = hi
        Lk(sock, r.inputs['Value']); return r.outputs[0]
    def mix(a, b, fac):
        x = N.new('ShaderNodeMix'); x.data_type = 'RGBA'; x.blend_type = 'MIX'
        if isinstance(a, tuple): x.inputs[6].default_value = a
        else: Lk(a, x.inputs[6])
        if isinstance(b, tuple): x.inputs[7].default_value = b
        else: Lk(b, x.inputs[7])
        if isinstance(fac, float): x.inputs[0].default_value = fac
        else: Lk(fac, x.inputs[0])
        return x.outputs[2]
    n1, n2, n3 = noise(5.2, 3, 0.55, 0.6, 1.3), noise(8.5, 2, 0.5, 0.4, 7.7), noise(24.0, 1, 0.5, 0.3, 3.1)
    c = mix(srgb2lin(CAMO['D']), srgb2lin(CAMO['A']), step(n2.outputs['Fac'], 0.475, 0.49))
    c = mix(c, srgb2lin(CAMO['B']), step(n1.outputs['Fac'], 0.535, 0.55))
    sp = N.new('ShaderNodeMath'); sp.operation = 'MULTIPLY'
    Lk(step(n3.outputs['Fac'], 0.60, 0.615), sp.inputs[0]); Lk(step(n1.outputs['Fac'], 0.45, 0.48), sp.inputs[1])
    c = mix(c, srgb2lin(CAMO['C']), sp.outputs[0])
    # shading (painted AO) multiply, x1.12 range
    sm = N.new('ShaderNodeMath'); sm.operation = 'MULTIPLY'; Lk(shd.outputs['Color'], sm.inputs[0]); sm.inputs[1].default_value = 1.12 * 0.92
    cm = N.new('ShaderNodeMix'); cm.data_type = 'RGBA'; cm.blend_type = 'MULTIPLY'; cm.inputs[0].default_value = 1.0
    Lk(c, cm.inputs[6]); cv = N.new('ShaderNodeCombineColor'); Lk(sm.outputs[0], cv.inputs[0]); Lk(sm.outputs[0], cv.inputs[1]); Lk(sm.outputs[0], cv.inputs[2])
    Lk(cv.outputs[0], cm.inputs[7])
    # exclude the helmet (it keeps its own tan cover): object z < 1.60
    sxyz = N.new('ShaderNodeSeparateXYZ'); Lk(tc.outputs['Object'], sxyz.inputs[0])
    zc = step(sxyz.outputs['Z'], 1.615, 1.595)
    fm = N.new('ShaderNodeMath'); fm.operation = 'MULTIPLY'; Lk(msk.outputs['Color'], fm.inputs[0]); Lk(zc, fm.inputs[1])
    final = mix(src.outputs['Color'], cm.outputs[2], fm.outputs[0])
    Lk(final, em.inputs['Color'])
    target = N.new('ShaderNodeTexImage'); im = bpy.data.images.new('baked', 2048, 2048, alpha=False)
    target.image = im; N.active = target; target.select = True
    body.data.materials.clear(); body.data.materials.append(m)
    sc = bpy.context.scene; sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 4
    sc.render.bake.margin = 8; sc.render.bake.use_clear = True
    sel_only([body])
    bpy.ops.object.bake(type='EMIT')
    im.filepath_raw = str(WORK / 'baked_diff_2k.png'); im.file_format = 'PNG'; im.save()
    print('TEX OK')

def pbr_mat(sz=1024):
    m = bpy.data.materials.new('pbr'); m.use_nodes = True; nt = m.node_tree; N = nt.nodes; b = N['Principled BSDF']
    def t(n, color):
        x = N.new('ShaderNodeTexImage'); x.image = bpy.data.images.load(str(ASSETS / f'soldier_{n}_{sz}.webp'))
        x.image.colorspace_settings.name = 'sRGB' if color else 'Non-Color'; return x
    d, nr, o = t('diff', True), t('nrm', False), t('orm', False)
    nt.links.new(d.outputs[0], b.inputs['Base Color'])
    nm = N.new('ShaderNodeNormalMap'); nt.links.new(nr.outputs[0], nm.inputs['Color']); nt.links.new(nm.outputs[0], b.inputs['Normal'])
    sp = N.new('ShaderNodeSeparateColor'); nt.links.new(o.outputs[0], sp.inputs[0])
    nt.links.new(sp.outputs[1], b.inputs['Roughness'])
    mm = N.new('ShaderNodeMath'); mm.operation = 'MULTIPLY'; mm.inputs[1].default_value = 0.05
    nt.links.new(sp.outputs[2], mm.inputs[0]); nt.links.new(mm.outputs[0], b.inputs['Metallic'])
    return m

def look_render(tag, which='soldier_body', sz=1024, views=None):
    for o in bpy.data.objects:
        if o.type == 'MESH': o.hide_render = o.name not in (which, 'rifle' if sz == 1024 else 'rifle_lo', 'rifle')
    bpy.data.objects[which].data.materials.clear(); bpy.data.objects[which].data.materials.append(pbr_mat(sz))
    r = bpy.data.objects['rifle']; r.data.materials.clear(); r.data.materials.append(sb.make_mat('rifle', (0.02, 0.02, 0.02, 1), 0.45, 0.32))
    if not bpy.context.scene.world: lights()
    quick_render(tag, views or {'front': VIEWS['front'], 'tq': VIEWS['tq'], 'back': ((0, 4.6, 1.05), (0, 0, 0.95), 45),
                               'head': VIEWS['head'], 'lowup': ((0.6, -1.6, 0.35), (0, 0, 1.25), 28)}, (640, 480))

# ------------------------------------------------------------------ stage: anim + export
def stage_anim(render):
    bpy.ops.wm.open_mainfile(filepath=str(WORK / 'rig.blend'))
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    sb.mute_ik(arm, False)
    acts = sb.make_animations(arm)
    sb.mute_ik(arm, True)
    bpy.ops.wm.save_as_mainfile(filepath=str(WORK / 'anim.blend'))
    if render:
        body = bpy.data.objects['soldier_body']
        lo = bpy.data.objects['soldier_body_lo']; lo.hide_render = True
        lights()
        pm = preview_mat('prev', WORK / 'src_base_2k.png'); body.data.materials[0] = pm
        rm = sb.make_mat('rifle', (0.03, 0.03, 0.03, 1), 0.45, 0.3); bpy.data.objects['rifle'].data.materials.clear(); bpy.data.objects['rifle'].data.materials.append(rm)
        for name, fr in (('idle', 1), ('walk', 1), ('walk', 9), ('run', 6), ('aim', 8)):
            arm.animation_data.action = acts[name]; bpy.context.scene.frame_set(fr)
            quick_render(f'anim-{name}{fr}', {'tq': VIEWS['tq'], 'side': VIEWS['side']}, (640, 480))
    print('ANIM OK')

def stage_export(render):
    bpy.ops.wm.open_mainfile(filepath=str(WORK / 'anim.blend'))
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    body, lo, rifle = bpy.data.objects['soldier_body'], bpy.data.objects['soldier_body_lo'], bpy.data.objects['rifle']
    for o in (body, lo, rifle): o.data.materials.clear()
    rlo = rifle.copy(); rlo.data = rifle.data.copy(); bpy.context.scene.collection.objects.link(rlo); rlo.name = 'rifle_lo'
    sb.apply_mod(rifle, 'DECIMATE', ratio=1500 / sb.tris(rifle))
    sb.apply_mod(rlo, 'DECIMATE', ratio=600 / sb.tris(rlo))
    for o in (body, lo, rifle, rlo): o.data.validate()
    arm.animation_data.action = bpy.data.actions['idle']; bpy.context.scene.frame_set(1)
    body.name = 'soldier'; lo.name = 'soldier_lo_body'
    tmp = WORK / 'raw'; tmp.mkdir(exist_ok=True)
    for o in bpy.data.objects: o.hide_set(False)
    sb.export_glb(tmp / 'soldier_raw.glb', [body, rifle], arm)
    sb.export_glb(tmp / 'soldier_lo_raw.glb', [lo, rlo], arm)
    print('TRIS hi', sb.tris(body), sb.tris(rifle), 'lo', sb.tris(lo), sb.tris(rlo))
    print('EXPORT OK')

if __name__ == '__main__':
    a = args()
    if a.stage in ('pose', 'all'): stage_pose(a.render)
    if a.stage in ('rig', 'all'): stage_rig(a.render)
    if a.stage in ('tex', 'all'): stage_tex(a.render)
    if a.stage == 'look':
        bpy.ops.wm.open_mainfile(filepath=str(WORK / 'rig.blend')); look_render('look')
    if a.stage in ('anim', 'all'): stage_anim(a.render)
    if a.stage in ('export', 'all'): stage_export(a.render)
