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
    const P = { pistol: [0.13, 2600, 0.7, 150, 0.9, 0.55], akimbo: [0.1, 2800, 0.55, 170, 0.75, 0.45], smg: [0.09, 3400, 0.5, 190, 0.7, 0.45], shotgun: [0.34, 1800, 1.0, 85, 1.2, 0.9], sawed: [0.28, 1500, 1.1, 70, 1.3, 1], rifle: [0.16, 2200, 0.8, 120, 1.0, 0.7], lever: [0.2, 1800, 0.75, 110, 1.15, 0.7], nailer: [0.045, 4200, 0.28, 240, 0.25, 0.2], lmg: [0.2, 1900, 0.9, 95, 1.2, 0.8] }[kind] || [0.12, 2500, 0.7, 150, 1, 0.6];
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
    const dr = c.createOscillator(); dr.type = 'sawtooth'; dr.frequency.value = 36; const dl = c.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 90; const dg = c.createGain(); dg.gain.value = 0.04; dr.connect(dl); dl.connect(dg); dg.connect(o); dr.start();
    const cr = c.createOscillator(); cr.type = 'sine'; cr.frequency.value = 4300; const cg = c.createGain(); cg.gain.value = 0; const cl = c.createOscillator(); cl.type = 'square'; cl.frequency.value = 28; const clg = c.createGain(); clg.gain.value = 0.003; cl.connect(clg); clg.connect(cg.gain); const cl2 = c.createOscillator(); cl2.frequency.value = 0.3; const cl2g = c.createGain(); cl2g.gain.value = 0.002; cl2.connect(cl2g); cl2g.connect(cg.gain); cr.connect(cg); cg.connect(o); cr.start(); cl.start(); cl2.start();
  }
  beep(left = 3) { if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0), f = left < 1.2 ? 1480 : 860; this.tone(t, 0.04, 'square', f, f, left < 1.2 ? 0.1 : 0.05, o); }
  // Instrumental hype rap/rock. Rounds run a ~146 BPM trap grid; between rounds it drops to a ~96 BPM half-time.
  // Original synthesis only: distorted saw power chords, gliding 808, kick, clap, hats. Never the voice-chat graph.
  _distort(drive) { const n = 256, curve = new Float32Array(n); for (let i = 0; i < n; i++) { const x = (i / (n - 1)) * 2 - 1; curve[i] = Math.tanh(x * drive); } return curve; }
  ensureMusic() {
    if (!this.ctx || this.musicBus) return;
    const c = this.ctx;
    this.musicBus = c.createGain(); this.musicBus.gain.value = 0.2; this.musicBus.connect(this.master);
    this.musicFilter = c.createBiquadFilter(); this.musicFilter.type = 'lowpass'; this.musicFilter.frequency.value = 1200; this.musicFilter.connect(this.musicBus);
    this.guitarShaper = c.createWaveShaper(); this.guitarShaper.curve = this._distort(14); this.guitarShaper.oversample = '2x';
    const gLP = c.createBiquadFilter(); gLP.type = 'lowpass'; gLP.frequency.value = 2400; this.guitarShaper.connect(gLP); gLP.connect(this.musicFilter);
    this.guitarIn = c.createGain(); this.guitarIn.gain.value = 0.2; this.guitarIn.connect(this.guitarShaper);
    this.musicOn = true; this.musicPlaying = false; this.musicMood = 'calm'; this.musicLow = false; this._nextMus = 0; this._duckUntil = 0; this._six = 0;
  }
  setMusicDetail(low) { this.musicLow = !!low; if (this.guitarShaper) this.guitarShaper.oversample = low ? 'none' : '2x'; }
  setMusicOn(on) { this.musicOn = !!on; if (this.musicBus) this.musicBus.gain.setTargetAtTime(this.musicOn ? 0.2 : 0, this.ctx.currentTime, 0.05); }
  musicStart() { this.init(); this.ensureMusic(); this.musicPlaying = true; this._nextMus = 0; this._six = 0; }
  musicStop() { this.musicPlaying = false; this._nextMus = 0; }
  setMusicPhase(mood) { this.musicMood = mood === 'hot' || mood === 'round' ? 'hot' : 'calm'; if (this.musicFilter) this.musicFilter.frequency.setTargetAtTime(this.musicMood === 'hot' ? (this.musicLow ? 1600 : 3400) : 1000, this.ctx.currentTime, 0.35); }
  pumpMusic() {
    if (!this.ctx || !this.musicPlaying || !this.musicOn || this.muted || this.ctx.state !== 'running') return;
    this.ensureMusic(); const t = this.ctx.currentTime, horizon = t + (this.musicLow ? 0.28 : 0.2);
    if (!this._nextMus || this._nextMus < t - 0.05) this._nextMus = t + 0.04;
    const bpm = this.musicMood === 'hot' ? 146 : 96, sixteenth = 60 / bpm / 4;
    const ducked = t < (this._duckUntil || 0);
    if (ducked) this.musicBus.gain.setTargetAtTime(0.05, t, 0.04);
    else this.musicBus.gain.setTargetAtTime(this.musicMood === 'hot' ? 0.24 : 0.14, t, 0.25);
    const tone = (t0, dur, type, f0, f1, g0, dest = this.musicFilter) => this.tone(t0, dur, type, f0, f1, g0, dest, 0.004);
    const nz = (t0, dur, type, f0, f1, g0) => this.nz(t0, dur, type, f0, f1, g0, this.musicFilter);
    while (this._nextMus < horizon) { this._riffStep(tone, nz, this._nextMus, sixteenth, this._six++, this.musicMood === 'hot', this.musicLow); this._nextMus += sixteenth; }
  }
  // One 16th. Power chords are E5 G5 D5 E5. Half-time clap sits on beat 3; trap claps on 2 and 4.
  _riffStep(tone, nz, t, dur, index, hot, low, guitar) { const gDest = guitar || this.guitarIn;
    const s = ((index % 16) + 16) % 16, bar = Math.floor(index / 16) % 4;
    const chords = [[164.81, 246.94, 41.2], [196, 293.66, 49], [146.83, 220, 36.71], [164.81, 246.94, 41.2]];
    const ch = chords[bar];
    const kick = hot ? (s === 0 || s === 3 || s === 6 || s === 10) : (s === 0 || s === 7);
    const clap = hot ? (s === 4 || s === 12) : s === 8;
    if (kick) { tone(t, 0.14, 'sine', 160, 46, hot ? 0.72 : 0.5); nz(t, 0.018, 'highpass', 2400, 700, 0.16); }
    if (clap) { nz(t, low ? 0.06 : 0.1, 'bandpass', 1900, 700, hot ? 0.32 : 0.18); if (!low) tone(t, 0.04, 'triangle', 240, 150, 0.07); }
    if (!low && (hot || s % 2 === 0)) { const open = hot && (s === 6 || s === 14); nz(t, open ? 0.07 : 0.018, 'highpass', open ? 5500 : 8000, 4200, hot ? (s % 2 ? 0.045 : 0.08) : 0.03); }
    const gOn = low ? s === 0 : (hot ? s % 2 === 0 : (s === 0 || s === 8 || s === 12));
    if (gOn && gDest) {
      const gdur = low ? dur * 10 : (hot ? dur * 1.5 : dur * 5);
      const g = hot ? 0.11 : 0.06;
      nz(t, 0.012, 'highpass', 3000, 1200, 0.05);
      tone(t, gdur, 'sawtooth', ch[0], ch[0] * 0.985, g, gDest);
      if (!low) tone(t, gdur, 'sawtooth', ch[1] * 1.005, ch[1], g * 0.55, gDest);
    }
    if (s === 0 || (hot && !low && (s === 8 || s === 11))) {
      const slide = hot && s !== 0;
      const f0 = slide ? ch[2] * 1.5 : ch[2] * 1.04, f1 = ch[2];
      tone(t, slide ? dur * 4 : dur * (hot ? 7 : 12), 'sine', f0, f1, hot ? 0.42 : 0.26);
    }
  }
  duck(sec) { if (!this.ctx) return; this._duckUntil = this.ctx.currentTime + sec; }
  lineFor(kind, id, n) {
    const waves = ['Wave one. The yard is waking.', 'Wave two. They heard the metal.', 'Wave three. Do not blink.', 'Wave four. The fence is tired.', 'Wave five. They smell you.'];
    const extra = ['The yard remembers.', 'More of them. Always more.', 'Keep the lights on.'];
    const open = { fuel: ['The cans are bleeding. Bring them in.', 'Fuel the generator. They hate the light.'], bus: ['Board the bus. It still knows the road.', 'Four windows, then the barn.'], carb: ['Something in the back lot is missing a heart.', 'Find the carburetor. It is still warm.'], radio: ['Hold the signal. They hunt the quiet.', 'Stay on the mast.'], parts: ['The side yard wants its pieces back.', 'Scrap. Three pieces. Do not linger.'], clear: ['Lot D is full of them. Empty it.', 'Clear the barn. Leave none standing.'] };
    const done = { fuel: 'The generator drinks. They smelled it.', bus: 'The bus is boarded. They know.', carb: 'The heart is back in the engine.', radio: 'The signal held. Something answered.', parts: 'The yard has its pieces.', clear: 'Lot D is quiet. For now.' };
    if (kind === 'wave') return n >= 1 && n <= 5 ? waves[n - 1] : extra[(n || 0) % extra.length];
    if (kind === 'done') return done[id] || 'The yard remembers.';
    const arr = open[id] || extra; return arr[(n || 0) % arr.length];
  }
  announce(text) {
    if (!text) return; this._aq = this._aq || []; this._aq.push(String(text)); if (!this._ab) this._drainAnn();
  }
  _drainAnn() {
    const line = (this._aq || []).shift(); if (!line) { this._ab = false; return; } this._ab = true;
    const dur = Math.min(3.4, 0.6 + line.length * 0.04); this.duck(dur + 0.2);
    if (this.ctx && !this.muted && this.ctx.state === 'running') this.growl(dur);
    if (!this.muted && typeof speechSynthesis !== 'undefined') {
      try { const u = new SpeechSynthesisUtterance(line); u.rate = 0.76; u.pitch = 0.42; u.volume = 0.8; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {}
    }
    setTimeout(() => this._drainAnn(), dur * 1000 + 160);
  }
  growl(dur) {
    if (!this.ok) return; const t = this.ctx.currentTime, o = this.out(0, 0.55);
    const sh = this.ctx.createWaveShaper(), curve = new Float32Array(64);
    for (let i = 0; i < 64; i++) { const x = (i / 63) * 2 - 1; curve[i] = Math.tanh(x * 4); }
    sh.curve = curve; const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 6; bp.frequency.setValueAtTime(180, t); bp.frequency.linearRampToValueAtTime(420, t + dur * 0.45); bp.frequency.linearRampToValueAtTime(140, t + dur);
    this.tone(t, dur, 'sawtooth', 70, 48, 0.22, sh); sh.connect(bp); bp.connect(o);
    this.nz(t, dur * 0.8, 'bandpass', 500, 220, 0.08, o, 3);
  }
  async renderSample(seconds = 8) {
    const rate = 22050, ctx = new OfflineAudioContext(1, Math.floor(rate * seconds), rate);
    const bus = ctx.createGain(); bus.gain.value = 0.85; bus.connect(ctx.destination);
    const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 3400; filter.connect(bus);
    const shaper = ctx.createWaveShaper(); shaper.curve = this._distort(14);
    const gLP = ctx.createBiquadFilter(); gLP.type = 'lowpass'; gLP.frequency.value = 2400; shaper.connect(gLP); gLP.connect(filter);
    const guitarIn = ctx.createGain(); guitarIn.gain.value = 0.2; guitarIn.connect(shaper);
    const noiseLen = rate * 2, nb = ctx.createBuffer(1, noiseLen, rate), nd = nb.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) nd[i] = Math.random() * 2 - 1;
    const tone = (t0, dur, type, f0, f1, g0, dest = filter) => { const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(Math.max(20, f0), t0); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + Math.max(0.02, dur)); const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(g0, t0 + 0.006); g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur); o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.03); };
    const nz = (t0, dur, type, f0, f1, g0) => { const s = ctx.createBufferSource(); s.buffer = nb; const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(f0, t0); f.frequency.exponentialRampToValueAtTime(Math.max(40, f1), t0 + dur); const g = ctx.createGain(); g.gain.setValueAtTime(g0, t0); g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur); s.connect(f); f.connect(g); g.connect(filter); s.start(t0); s.stop(t0 + dur + 0.02); };
    const hotUntil = seconds * 0.62; let t = 0.05, i = 0;
    while (t < seconds - 0.05) { const hot = t < hotUntil; const sixteenth = 60 / (hot ? 146 : 96) / 4; this._riffStep(tone, nz, t, sixteenth, i++, hot, false, guitarIn); t += sixteenth; }
    const buf = await ctx.startRendering(), ch = buf.getChannelData(0);
    const n = ch.length, ab = new ArrayBuffer(44 + n * 2), v = new DataView(ab);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
    for (let i = 0; i < n; i++) { const s = Math.max(-1, Math.min(1, ch[i])); v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true); }
    let bin = ''; const bytes = new Uint8Array(ab); for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
}
