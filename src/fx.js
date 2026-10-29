import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { rnd, TAU } from './util.js';

/* ---------- GPU point-sprite particle system (CPU simulated) ---------- */
export class Particles {
  constructor(max, additive, tex) {
    this.max = max; this.n = 0; this.next = 0;
    const g = (this.geo = new THREE.BufferGeometry());
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 4); this.siz = new Float32Array(max);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.siz, 1).setUsage(THREE.DynamicDrawUsage));
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max); this.drag = new Float32Array(max); this.s0 = new Float32Array(max); this.s1 = new Float32Array(max);
    this.c0 = new Float32Array(max * 4);
    this.uniforms = { map: { value: tex }, uScale: { value: 800 } };
    const m = (this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: `attribute float aSize; attribute vec4 aColor; varying vec4 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv; gl_PointSize = clamp(aSize*uScale/max(-mv.z,0.1), 0., 300.); vC = aColor; }`,
      fragmentShader: `uniform sampler2D map; varying vec4 vC;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vC.a; if(a<0.004) discard; gl_FragColor = vec4(vC.rgb, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`,
    }));
    this.points = new THREE.Points(g, m); this.points.frustumCulled = false; this.points.renderOrder = 5; this.points.userData.noAO = true;
  }
  emit(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, grav = 0, drag = 0) {
    const i = this.next; this.next = (this.next + 1) % this.max;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = this.maxLife[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.grav[i] = grav; this.drag[i] = drag;
    this.c0[i * 4] = r; this.c0[i * 4 + 1] = g; this.c0[i * 4 + 2] = b; this.c0[i * 4 + 3] = a;
  }
  update(dt) {
    const { pos, vel, life, maxLife, col, siz, c0 } = this;
    for (let i = 0; i < this.max; i++) {
      if (life[i] <= 0) { siz[i] = 0; col[i * 4 + 3] = 0; continue; }
      life[i] -= dt; if (life[i] <= 0) { siz[i] = 0; col[i * 4 + 3] = 0; continue; }
      const k = 1 - life[i] / maxLife[i], i3 = i * 3, dr = Math.max(0, 1 - this.drag[i] * dt);
      vel[i3] *= dr; vel[i3 + 1] = vel[i3 + 1] * dr - this.grav[i] * dt; vel[i3 + 2] *= dr;
      pos[i3] += vel[i3] * dt; pos[i3 + 1] += vel[i3 + 1] * dt; pos[i3 + 2] += vel[i3 + 2] * dt;
      if (pos[i3 + 1] < 0.02 && this.grav[i] > 0) { pos[i3 + 1] = 0.02; vel[i3] *= 0.4; vel[i3 + 2] *= 0.4; vel[i3 + 1] *= -0.25; }
      siz[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * k;
      const f = k < 0.1 ? k * 10 : 1 - (k - 0.1) / 0.9;
      col[i * 4] = c0[i * 4]; col[i * 4 + 1] = c0[i * 4 + 1]; col[i * 4 + 2] = c0[i * 4 + 2]; col[i * 4 + 3] = c0[i * 4 + 3] * f;
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.aColor.needsUpdate = true; this.geo.attributes.aSize.needsUpdate = true;
  }
  clear() { this.life.fill(0); }
}

/* ---------- effects manager ---------- */
export class FX {
  constructor(scene, tex, tier) {
    this.scene = scene; this.tier = tier;
    const big = tier > 0 ? 1 : 0.4;
    this.soft = new Particles(Math.floor(900 * big) + 100, false, tex.glow); // blood mist, dust, smoke
    this.add = new Particles(Math.floor(900 * big) + 100, true, tex.glow); // sparks, embers, flashes
    scene.add(this.soft.points, this.add.points);
    // tracers
    this.tracers = []; const tg = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 24; i++) { const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 3.6, 1.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })); m.visible = false; m.userData.noAO = true; m.userData.t = 0; scene.add(m); this.tracers.push(m); }
    this.tn = 0;
    // shell casings
    this.maxCas = tier > 0 ? 80 : 16;
    this.cas = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.009, 0.009, 0.034, 6), new THREE.MeshStandardMaterial({ color: 0xd6a437, metalness: 1, roughness: 0.3 }), this.maxCas);
    this.cas.frustumCulled = false; this.cas.castShadow = false; scene.add(this.cas);
    this.casData = Array.from({ length: this.maxCas }, () => ({ t: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), r: new THREE.Euler(), w: new THREE.Vector3() }));
    this.casNext = 0; this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < this.maxCas; i++) { this._m.makeScale(0, 0, 0); this.cas.setMatrixAt(i, this._m); }
  }
  setScale(h, fov) { const s = h / (2 * Math.tan((fov * Math.PI) / 360)); this.soft.uniforms.uScale.value = s; this.add.uniforms.uScale.value = s; }
  tracer(a, b, w = 0.012) {
    const m = this.tracers[this.tn++ % this.tracers.length]; const len = a.distanceTo(b); if (len < 0.5) return;
    m.position.copy(a).lerp(b, 0.5); m.lookAt(b); m.scale.set(w, w, len); m.visible = true; m.userData.t = 0.06; m.material.opacity = 1;
  }
  casing(p, v) {
    const d = this.casData[this.casNext++ % this.maxCas]; d.t = 2.5; d.p.copy(p); d.v.copy(v); d.r.set(rnd(TAU), rnd(TAU), rnd(TAU)); d.w.set(rnd(-30, 30), rnd(-30, 30), rnd(-30, 30));
  }
  blood(p, n, count, big = 1) { // stylised cartoon mist + droplets
    const k = this.tier > 0 ? 1 : 0.5; count = Math.ceil(count * k);
    for (let i = 0; i < count; i++) {
      const sp = rnd(0.6, 3.2) * big;
      this.soft.emit(p.x, p.y, p.z, n.x * sp + rnd(-1, 1), n.y * sp + rnd(-0.2, 1.4), n.z * sp + rnd(-1, 1), rnd(0.35, 0.8), rnd(0.12, 0.2) * big, rnd(0.45, 0.8) * big, rnd(0.55, 0.9), rnd(0.02, 0.07), rnd(0.04, 0.12), rnd(0.35, 0.65), 4, 2.5);
    }
    for (let i = 0; i < Math.ceil(count * 0.6); i++) { const sp = rnd(1.5, 5) * big; this.soft.emit(p.x, p.y, p.z, n.x * sp + rnd(-1.5, 1.5), n.y * sp + rnd(0, 2.5), n.z * sp + rnd(-1.5, 1.5), rnd(0.5, 1.0), 0.05, 0.04, 0.6, 0.0, 0.03, 0.9, 11, 0.4); }
  }
  sparks(p, n, count) {
    count = Math.ceil(count * (this.tier > 0 ? 1 : 0.5));
    for (let i = 0; i < count; i++) { const sp = rnd(2, 7); this.add.emit(p.x, p.y, p.z, n.x * sp + rnd(-2, 2), n.y * sp + rnd(-1, 2.5), n.z * sp + rnd(-2, 2), rnd(0.2, 0.5), 0.07, 0.015, 4, rnd(1.6, 2.6), 0.5, 1, 9, 0.8); }
  }
  dust(p, n, count, tint = [0.45, 0.36, 0.26]) {
    count = Math.ceil(count * (this.tier > 0 ? 1 : 0.5));
    for (let i = 0; i < count; i++) this.soft.emit(p.x, p.y, p.z, n.x * rnd(0.3, 1.5) + rnd(-0.5, 0.5), n.y * rnd(0.2, 1) + rnd(0, 0.6), n.z * rnd(0.3, 1.5) + rnd(-0.5, 0.5), rnd(0.6, 1.3), 0.2, rnd(0.8, 1.4), tint[0], tint[1], tint[2], 0.35, -0.2, 1.8);
  }
  smoke(p, dir, count = 2) { for (let i = 0; i < count; i++) this.soft.emit(p.x, p.y, p.z, dir.x * 1.2 + rnd(-0.2, 0.2), dir.y * 1.2 + rnd(0.1, 0.5), dir.z * 1.2 + rnd(-0.2, 0.2), rnd(0.5, 1), 0.05, 0.28, 0.55, 0.55, 0.58, 0.25, -0.4, 2); }
  flash(p, dir) { this.add.emit(p.x, p.y, p.z, dir.x * 1, dir.y * 1, dir.z * 1, 0.06, 0.45, 0.8, 5, 3.4, 1.4, 1, 0, 0); for (let i = 0; i < 3; i++) this.add.emit(p.x, p.y, p.z, dir.x * rnd(3, 9) + rnd(-2, 2), dir.y * rnd(3, 9) + rnd(-2, 2), dir.z * rnd(3, 9) + rnd(-2, 2), rnd(0.08, 0.18), 0.1, 0.02, 4, 2.2, 0.6, 1, 2, 1); }
  glowBurst(p, r, g, b, count = 24, speed = 4) { for (let i = 0; i < count; i++) { const a = rnd(TAU), e = rnd(-0.6, 1), s = rnd(0.4, 1) * speed; this.add.emit(p.x, p.y, p.z, Math.cos(a) * s, e * s, Math.sin(a) * s, rnd(0.5, 1.1), 0.18, 0.02, r, g, b, 1, 2, 1.2); } }
  update(dt) {
    this.soft.update(dt); this.add.update(dt);
    for (const m of this.tracers) if (m.visible) { m.userData.t -= dt; m.material.opacity = Math.max(0, m.userData.t / 0.06); if (m.userData.t <= 0) m.visible = false; }
    let any = false;
    for (let i = 0; i < this.maxCas; i++) {
      const d = this.casData[i]; if (d.t <= 0) continue; any = true; d.t -= dt;
      d.v.y -= 9.8 * dt; d.p.addScaledVector(d.v, dt);
      if (d.p.y < 0.02) { d.p.y = 0.02; d.v.y *= -0.35; d.v.x *= 0.6; d.v.z *= 0.6; d.w.multiplyScalar(0.5); }
      d.r.x += d.w.x * dt; d.r.y += d.w.y * dt; d.r.z += d.w.z * dt;
      const s = Math.min(1, d.t * 2); this._q.setFromEuler(d.r); this._s.setScalar(d.t > 0 ? s : 0);
      this._m.compose(d.p, this._q, this._s); this.cas.setMatrixAt(i, this._m);
      if (d.t <= 0) { this._m.makeScale(0, 0, 0); this.cas.setMatrixAt(i, this._m); }
    }
    if (any || this._anyBefore) this.cas.instanceMatrix.needsUpdate = true; this._anyBefore = any;
  }
  reset() { this.soft.clear(); this.add.clear(); for (const d of this.casData) d.t = 0; for (const t of this.tracers) t.visible = false; }
}

/* ---------- ambient dust motes drifting in the night air ---------- */
export class Motes {
  constructor(tex, n, o = {}) {
    this.o = Object.assign({ R: 22, y0: 0.2, y1: 6, size: 0.06, alpha: 0.2, col: [0.9, 0.75, 0.55], additive: true, speed: 1 }, o);
    this.ps = new Particles(n, this.o.additive, tex.glow); this.n = n; this.R = this.o.R; this.t = 0;
    for (let i = 0; i < n; i++) { this.ps.pos[i * 3] = rnd(-this.R, this.R); this.ps.pos[i * 3 + 1] = rnd(this.o.y0, this.o.y1); this.ps.pos[i * 3 + 2] = rnd(-this.R, this.R); }
    this.ps.update = (dt) => this.upd(dt); this.points = this.ps.points; this.center = { x: 0, z: 0 };
  }
  upd(dt) {
    const p = this.ps, o = this.o; this.t += dt; const c = this.center;
    for (let i = 0; i < this.n; i++) {
      const i3 = i * 3, sp = o.speed; p.pos[i3] += (Math.sin(this.t * 0.3 + i) * 0.25 + 0.35) * dt * sp; p.pos[i3 + 1] += Math.sin(this.t * 0.4 + i * 1.7) * 0.06 * dt * sp; p.pos[i3 + 2] += Math.cos(this.t * 0.25 + i * 0.7) * 0.2 * dt * sp;
      if (p.pos[i3] - c.x > this.R) p.pos[i3] -= this.R * 2; else if (p.pos[i3] - c.x < -this.R) p.pos[i3] += this.R * 2;
      if (p.pos[i3 + 2] - c.z > this.R) p.pos[i3 + 2] -= this.R * 2; else if (p.pos[i3 + 2] - c.z < -this.R) p.pos[i3 + 2] += this.R * 2;
      p.siz[i] = o.size * (1 + (i % 3) * 0.4); p.col[i * 4] = o.col[0]; p.col[i * 4 + 1] = o.col[1]; p.col[i * 4 + 2] = o.col[2]; p.col[i * 4 + 3] = o.alpha * (0.6 + 0.4 * ((i % 4) / 3));
    }
    p.geo.attributes.position.needsUpdate = true; p.geo.attributes.aColor.needsUpdate = true; p.geo.attributes.aSize.needsUpdate = true;
  }
}

/* ---------- post-processing stack ---------- */
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uDamage: { value: 0 }, uVig: { value: 0.55 }, uGrain: { value: 0.07 }, uSat: { value: 1.1 }, uAberr: { value: 0.6 }, uRes: { value: new THREE.Vector2(1, 1) }, uLow: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime,uDamage,uVig,uGrain,uSat,uAberr,uLow; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c=vUv-.5; float d=dot(c,c);
      vec2 off=c*(d*uAberr*0.03 + uDamage*0.012);
      vec3 col; col.r=texture2D(tDiffuse,vUv+off).r; col.g=texture2D(tDiffuse,vUv).g; col.b=texture2D(tDiffuse,vUv-off).b;
      float l=dot(col,vec3(.299,.587,.114));
      col=mix(vec3(l),col,uSat*(1.-uDamage*.35-uLow*.5));
      col=(col-.5)*1.1+.5;
      col+=vec3(-.012,.006,.03)*(1.-l)+vec3(.035,.014,-.02)*l*l;
      float r=length(c*vec2(1.,.85));
      col*=1.-smoothstep(.28,.95,r)*uVig;
      float dm=smoothstep(.25,.85,r);
      col.r+=(uDamage+uLow*.35*(.5+.5*sin(uTime*6.)))*dm*.55; col.gb*=1.-(uDamage+uLow*.3)*dm*.6;
      col+=(h(vUv*uRes+fract(uTime)*100.)-.5)*uGrain;
      gl_FragColor=vec4(max(col,0.),1.);
    }`,
};

export class Post {
  constructor(renderer, scene, camera, viewScene) {
    this.r = renderer; this.scene = scene; this.camera = camera; this.viewScene = viewScene; this.mode = 'direct'; this.w = 1; this.h = 1; this.pr = 1;
  }
  build(mode) { // 'direct' | 'bloom' | 'full'
    this.mode = mode; if (this.composer) { this.composer.dispose?.(); this.composer = null; }
    if (mode === 'direct') return;
    const rt = new THREE.WebGLRenderTarget(this.w, this.h, { type: THREE.HalfFloatType, samples: mode === 'full' ? 0 : 4 });
    const c = (this.composer = new EffectComposer(this.r, rt)); c.setPixelRatio?.(this.pr); c.setSize(this.w, this.h);
    c.addPass(new RenderPass(this.scene, this.camera));
    if (mode === 'full') {
      const ao = (this.gtao = new GTAOPass(this.scene, this.camera, this.w * this.pr, this.h * this.pr));
      ao.output = GTAOPass.OUTPUT.Default; ao.blendIntensity = 1;
      ao.updateGtaoMaterial({ radius: 0.7, distanceExponent: 1.5, thickness: 1.5, scale: 1.2, samples: 10, distanceFallOff: 1, screenSpaceRadius: false });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 5, radiusExponent: 1, rings: 2, samples: 8 });
      const orig = ao._overrideVisibility.bind(ao);
      ao._overrideVisibility = () => { orig(); this.scene.traverse((o) => { if (o.userData.noAO && o.visible) { o.visible = false; ao._visibilityCache.push(o); } }); };
      c.addPass(ao);
    }
    const vr = new RenderPass(this.viewScene, this.camera); vr.clear = false; vr.clearDepth = true; c.addPass(vr);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(this.w, this.h), 0.42, 0.55, 0.9); c.addPass(this.bloom);
    c.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader); this.grade.uniforms.uRes.value.set(this.w * this.pr, this.h * this.pr); c.addPass(this.grade);
  }
  setSize(w, h, pr) {
    this.w = w; this.h = h; this.pr = pr;
    if (this.composer) { this.composer.setPixelRatio(pr); this.composer.setSize(w, h); this.gtao?.setSize(w * pr, h * pr); this.grade.uniforms.uRes.value.set(w * pr, h * pr); }
  }
  render(dt, t, damage, lowHp) {
    if (!this.composer) { const r = this.r; r.autoClear = false; r.clear(); r.render(this.scene, this.camera); r.clearDepth(); r.render(this.viewScene, this.camera); r.autoClear = true; return; }
    const u = this.grade.uniforms; u.uTime.value = t; u.uDamage.value = damage; u.uLow.value = lowHp;
    this.composer.render(dt);
  }
}
