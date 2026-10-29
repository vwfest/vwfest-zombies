// Fully synthesised audio (Web Audio) — no samples, no external assets.
import { rnd, clamp } from './util.js';
export class Sound {
  constructor() { this.ctx = null; this.muted = false; this.lastGroan = 0; this.lastTick = 0; }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = (this.ctx = new AC());
    this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : 0.8;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 6; comp.attack.value = 0.003; comp.release.value = 0.2;
    this.master.connect(comp); comp.connect(c.destination);
    const nb = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; this.noise = nb;
    // cheap generated reverb impulse
    const len = c.sampleRate * 1.8, ib = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const x = ib.getChannelData(ch); for (let i = 0; i < len; i++) x[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    this.verb = c.createConvolver(); this.verb.buffer = ib; this.verbIn = c.createGain(); this.verbIn.gain.value = 0.35; this.verbIn.connect(this.verb); this.verb.connect(this.master);
    this.startAmbient();
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.03); }
  get ok() { return this.ctx && !this.muted && this.ctx.state === 'running'; }
  out(pan = 0, wet = 0.3) { const c = this.ctx, g = c.createGain(); let n = g; if (c.createStereoPanner) { const p = c.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); g.connect(p); n = p; } n.connect(this.master); const w = c.createGain(); w.gain.value = wet; n.connect(w); w.connect(this.verbIn); return g; }
  nz(t, dur, type, f0, f1, g0, dest, q = 1) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noise; s.loop = true; const f = c.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(g0, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f); f.connect(g); g.connect(dest); s.start(t, rnd(1)); s.stop(t + dur + 0.05);
  }
  tone(t, dur, type, f0, f1, g0, dest, att = 0.003) {
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(10, f1), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(g0, t + att); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  shot(kind) {
    if (!this.ok) return; const c = this.ctx, t = c.currentTime, o = this.out(0, kind === 'shotgun' || kind === 'lmg' ? 0.5 : 0.3);
    const P = { pistol: [0.13, 2600, 0.7, 150, 0.9, 0.55], smg: [0.09, 3400, 0.5, 190, 0.7, 0.45], shotgun: [0.34, 1800, 1.0, 85, 1.2, 0.9], rifle: [0.16, 2200, 0.8, 120, 1.0, 0.7], lmg: [0.2, 1900, 0.9, 95, 1.2, 0.8] }[kind] || [0.12, 2500, 0.7, 150, 1, 0.6];
    this.nz(t, P[0], 'lowpass', P[1], 220, P[2], o, 0.7); this.nz(t, 0.025, 'highpass', 3000, 6000, 0.6, o); this.tone(t, P[0] * 1.2, 'sine', P[3], P[3] * 0.3, P[4] * 0.9, o);
    this.tone(t, 0.05, 'square', P[3] * 4, P[3] * 1.5, 0.15, o);
  }
  click(t0 = 0, f = 3200, g = 0.35, pan = 0) { if (!this.ok) return; const t = this.ctx.currentTime + t0; const o = this.out(pan, 0.1); this.nz(t, 0.03, 'bandpass', f, f * 0.7, g, o, 3); this.tone(t, 0.025, 'square', f * 0.3, f * 0.2, 0.05, o); }
  reload(kind) { if (!this.ok) return; const d = kind === 'lmg' ? 3.4 : kind === 'rifle' ? 1.7 : kind === 'smg' ? 1.4 : 1.0; this.click(0.12, 2400, 0.4); this.click(d * 0.55, 1800, 0.5); this.click(d * 0.8, 3600, 0.45); if (kind !== 'pistol') this.click(d * 0.92, 1400, 0.5); }
  pump() { this.click(0, 900, 0.6); this.click(0.18, 1500, 0.55); }
  shell() { this.click(0, 2000, 0.45); }
  empty() { this.click(0, 1500, 0.3); }
  groan(pan = 0, vol = 0.5, pitch = 1, dur = 1) {
    if (!this.ok) return; const c = this.ctx, now = c.currentTime; if (now - this.lastGroan < 0.09) return; this.lastGroan = now;
    const t = now, o = this.out(pan, 0.45), f0 = rnd(70, 105) * pitch;
    const osc = c.createOscillator(); osc.type = 'sawtooth'; osc.frequency.setValueAtTime(f0 * 1.25, t); osc.frequency.linearRampToValueAtTime(f0, t + dur * 0.3); osc.frequency.linearRampToValueAtTime(f0 * 0.7, t + dur);
    const vib = c.createOscillator(); vib.frequency.value = rnd(5, 9); const vg = c.createGain(); vg.gain.value = 6; vib.connect(vg); vg.connect(osc.frequency);
    const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.Q.value = 5; f1.frequency.setValueAtTime(rnd(450, 700), t); f1.frequency.linearRampToValueAtTime(rnd(900, 1300), t + dur * 0.6);
    const f2 = c.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = 1600;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol * 0.5, t + dur * 0.15); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(f1); f1.connect(f2); f2.connect(g); g.connect(o); osc.start(t); vib.start(t); osc.stop(t + dur + 0.05); vib.stop(t + dur + 0.05);
    this.nz(t, dur * 0.8, 'bandpass', 900, 500, vol * 0.15, o, 2);
  }
  zhit(pan = 0, head = false) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(pan, 0.2); this.nz(t, 0.09, 'lowpass', 700, 120, 0.5, o); this.tone(t, 0.1, 'sine', 120, 50, 0.4, o); if (head) this.tone(t, 0.08, 'triangle', 900, 500, 0.12, o); }
  zdie(pan = 0, vol = 0.4) { if (!this.ok) return; this.groan(pan, vol, 0.75, 0.7); const t = this.ctx.currentTime + 0.15, o = this.out(pan, 0.25); this.nz(t, 0.25, 'lowpass', 500, 60, 0.6, o); this.tone(t, 0.3, 'sine', 90, 35, 0.5, o); }
  tick(kill) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0); this.tone(t, 0.05, 'square', kill ? 900 : 1500, kill ? 600 : 1300, kill ? 0.12 : 0.07, o); }
  cash() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.2); this.tone(t, 0.12, 'triangle', 1250, 1250, 0.22, o); this.tone(t + 0.07, 0.25, 'triangle', 1880, 1880, 0.22, o); this.nz(t, 0.05, 'highpass', 5000, 8000, 0.15, o); }
  deny() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0); this.tone(t, 0.22, 'sawtooth', 130, 90, 0.2, o); this.tone(t + 0.1, 0.22, 'sawtooth', 110, 80, 0.2, o); }
  hurt() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.2); this.nz(t, 0.18, 'lowpass', 600, 90, 0.9, o); this.tone(t, 0.25, 'sine', 80, 40, 0.8, o); this.tone(t, 0.2, 'sawtooth', 220, 110, 0.12, o); }
  heart() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0); this.tone(t, 0.14, 'sine', 62, 38, 0.7, o); this.tone(t + 0.18, 0.14, 'sine', 56, 34, 0.5, o); }
  plank(brk) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.3); this.nz(t, brk ? 0.16 : 0.08, 'bandpass', brk ? 500 : 800, 250, 0.7, o, 2); this.tone(t, 0.1, 'triangle', 220, 90, 0.4, o); if (brk) this.nz(t + 0.03, 0.12, 'highpass', 1500, 3000, 0.3, o); }
  repair() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.2); this.nz(t, 0.07, 'bandpass', 1100, 600, 0.6, o, 2); this.tone(t, 0.08, 'square', 300, 120, 0.15, o); this.tone(t + 0.1, 0.1, 'triangle', 1500, 1500, 0.1, o); }
  door() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.5); this.nz(t, 2.2, 'lowpass', 900, 150, 0.7, o, 1); this.tone(t, 2.2, 'sawtooth', 55, 42, 0.2, o, 0.3); for (let i = 0; i < 5; i++) this.click(0.2 + i * 0.35, 700 + i * 120, 0.7); this.nz(t + 2.0, 0.4, 'lowpass', 400, 60, 0.9, o); }
  boom() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.7); this.nz(t, 2.4, 'lowpass', 2400, 50, 1.4, o, 0.7); this.tone(t, 1.6, 'sine', 90, 24, 1.3, o); this.tone(t + 0.05, 0.8, 'sawtooth', 50, 25, 0.3, o); }
  power(kind) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.4); const base = kind === 'nuke' ? [220, 277, 330, 440] : kind === 'double' ? [392, 494, 587, 784] : [330, 440, 554, 659]; base.forEach((f, i) => { this.tone(t + i * 0.07, 0.4, 'triangle', f, f, 0.2, o); this.tone(t + i * 0.07, 0.4, 'sine', f * 2, f * 2, 0.08, o); }); }
  medkit() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.5); [523, 659, 784, 1047].forEach((f, i) => { this.tone(t + i * 0.08, 0.5, 'sine', f, f, 0.2, o); this.tone(t + i * 0.08, 0.5, 'triangle', f * 2, f * 2, 0.05, o); }); this.tone(t, 0.9, 'sine', 300, 600, 0.12, o, 0.1); }
  spawnPower() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.5); this.tone(t, 0.7, 'sine', 600, 1200, 0.25, o, 0.05); this.tone(t + 0.1, 0.7, 'sine', 900, 1800, 0.12, o, 0.05); }
  round(n) {
    if (!this.ok) return; const c = this.ctx, t = c.currentTime, o = this.out(0, 0.8);
    const chord = [55, 82.4, 98, 130.8]; chord.forEach((f, i) => { const osc = c.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = f; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(200, t); lp.frequency.linearRampToValueAtTime(1400, t + 1.1); lp.frequency.linearRampToValueAtTime(150, t + 3.2); const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.16, t + 0.9); g.gain.exponentialRampToValueAtTime(0.001, t + 3.4); osc.connect(lp); lp.connect(g); g.connect(o); osc.start(t); osc.stop(t + 3.5); });
    [440, 415, 392, 330, 294].forEach((f, i) => { this.tone(t + 0.5 + i * 0.32, 1.3, 'sine', f, f, 0.14, o, 0.01); this.tone(t + 0.5 + i * 0.32, 1.3, 'sine', f * 2.01, f * 2.01, 0.04, o, 0.01); });
    this.tone(t, 0.5, 'sine', 70, 28, 0.9, o); this.nz(t, 0.35, 'lowpass', 700, 70, 0.5, o);
  }
  over() { if (!this.ok) return; const c = this.ctx, t = c.currentTime, o = this.out(0, 0.9); [110, 130.8, 164.8].forEach((f) => { this.tone(t, 3.6, 'sawtooth', f, f * 0.5, 0.12, o, 0.4); }); this.tone(t, 1.5, 'sine', 60, 25, 1, o); this.nz(t, 1.2, 'lowpass', 900, 60, 0.7, o); }
  jingle(dur = 4) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.5); const s = [523, 659, 784, 659, 587, 740, 880, 740]; for (let i = 0; i < dur * 4; i++) { const f = s[i % s.length] * (i > 8 ? 1.12 : 1); this.tone(t + i * 0.2, 0.32, 'triangle', f, f, 0.1, o, 0.005); } this.nz(t, 0.4, 'bandpass', 600, 300, 0.4, o); }
  open() { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.4); this.nz(t, 0.5, 'bandpass', 500, 900, 0.4, o, 4); this.tone(t, 0.5, 'sawtooth', 120, 220, 0.1, o); }
  startAmbient() {
    const c = this.ctx, o = c.createGain(); o.gain.value = 0.5; o.connect(this.master);
    const s = c.createBufferSource(); s.buffer = this.noise; s.loop = true; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 0.8; bp.frequency.value = 380; const g = c.createGain(); g.gain.value = 0.07;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.11; const lg = c.createGain(); lg.gain.value = 0.045; lfo.connect(lg); lg.connect(g.gain); const lfo2 = c.createOscillator(); lfo2.frequency.value = 0.07; const lg2 = c.createGain(); lg2.gain.value = 140; lfo2.connect(lg2); lg2.connect(bp.frequency);
    s.connect(bp); bp.connect(g); g.connect(o); s.start(); lfo.start(); lfo2.start();
    const dr = c.createOscillator(); dr.type = 'sawtooth'; dr.frequency.value = 36; const dl = c.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 90; const dg = c.createGain(); dg.gain.value = 0.07; dr.connect(dl); dl.connect(dg); dg.connect(o); dr.start();
    const cr = c.createOscillator(); cr.type = 'sine'; cr.frequency.value = 4300; const cg = c.createGain(); cg.gain.value = 0; const cl = c.createOscillator(); cl.type = 'square'; cl.frequency.value = 28; const clg = c.createGain(); clg.gain.value = 0.004; cl.connect(clg); clg.connect(cg.gain); const cl2 = c.createOscillator(); cl2.frequency.value = 0.3; const cl2g = c.createGain(); cl2g.gain.value = 0.003; cl2.connect(cl2g); cl2g.connect(cg.gain); cr.connect(cg); cg.connect(o); cr.start(); cl.start(); cl2.start();
  }
}
