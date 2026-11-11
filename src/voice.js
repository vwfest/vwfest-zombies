// Co-op voice only. Loaded with a dynamic import after the player joins a room, never on the single-player path.
const STUN = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
const TALK = 0.04;

export function attach(opts) {
  const peers = new Map();
  let stream = null, joined = false, muted = false, actx = null, localAn = null;
  const buf = new Uint8Array(256);
  const polite = (id) => String(opts.selfId()) < String(id);

  function level(an) {
    if (!an) return 0;
    an.getByteTimeDomainData(buf);
    let s = 0;
    for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; s += v * v; }
    return Math.sqrt(s / buf.length);
  }
  function closePeer(id) {
    const rec = peers.get(id); if (!rec) return;
    rec.pc.onicecandidate = rec.pc.ontrack = rec.pc.onnegotiationneeded = null;
    try { rec.pc.close(); } catch (e) {}
    rec.audio.pause(); rec.audio.srcObject = null; rec.audio.remove();
    peers.delete(id); opts.setTalking(id, false);
  }
  async function flushIce(rec) {
    if (!rec.pc.remoteDescription) return;
    const wait = rec.ice.splice(0);
    for (const c of wait) { try { await rec.pc.addIceCandidate(c); } catch (e) {} }
  }
  function ensure(id) {
    let rec = peers.get(id);
    if (rec) return rec;
    const pc = new RTCPeerConnection(STUN);
    const audio = document.createElement('audio'); audio.autoplay = true; audio.setAttribute('playsinline', '');
    rec = { pc, audio, an: null, making: false, ice: [] };
    pc.onicecandidate = (ev) => { if (ev.candidate) opts.send({ t: 'sig', to: id, k: 'ice', s: { c: ev.candidate.candidate, m: ev.candidate.sdpMid || '', l: ev.candidate.sdpMLineIndex || 0 } }); };
    pc.ontrack = (ev) => {
      const remote = ev.streams[0] || new MediaStream([ev.track]);
      audio.srcObject = remote; audio.play().catch(() => {});
      if (actx) { try { const src = actx.createMediaStreamSource(remote); const an = actx.createAnalyser(); an.fftSize = 256; src.connect(an); rec.an = an; } catch (e) {} }
    };
    pc.onnegotiationneeded = async () => {
      if (rec.making || !joined) return;
      rec.making = true;
      try { await pc.setLocalDescription(); opts.send({ t: 'sig', to: id, k: 'offer', s: pc.localDescription.sdp }); }
      catch (e) {} finally { rec.making = false; }
    };
    if (stream) for (const t of stream.getTracks()) pc.addTrack(t, stream);
    peers.set(id, rec);
    return rec;
  }
  async function onSignal(m) {
    if (!joined || !m || !m.from || m.from === opts.selfId()) return;
    if (m.k === 'bye') { closePeer(m.from); paint(); return; }
    const rec = ensure(m.from), pc = rec.pc;
    try {
      if (m.k === 'offer') {
        const collide = rec.making || pc.signalingState !== 'stable';
        if (collide && !polite(m.from)) return;
        if (collide && pc.signalingState !== 'stable') { try { await pc.setLocalDescription({ type: 'rollback' }); } catch (e) {} }
        await pc.setRemoteDescription({ type: 'offer', sdp: m.s });
        await flushIce(rec);
        await pc.setLocalDescription();
        opts.send({ t: 'sig', to: m.from, k: 'answer', s: pc.localDescription.sdp });
      } else if (m.k === 'answer') {
        if (pc.signalingState === 'have-local-offer') { await pc.setRemoteDescription({ type: 'answer', sdp: m.s }); await flushIce(rec); }
      } else if (m.k === 'ice' && m.s && m.s.c) {
        const cand = { candidate: m.s.c, sdpMid: m.s.m || null, sdpMLineIndex: m.s.l || 0 };
        if (!pc.remoteDescription) rec.ice.push(cand); else await pc.addIceCandidate(cand);
      }
    } catch (e) {}
  }
  function syncPeers() {
    if (!joined) return;
    const ids = new Set(opts.peers());
    for (const id of ids) ensure(id);
    for (const id of [...peers.keys()]) if (!ids.has(id)) closePeer(id);
  }
  function paint(rows) {
    const el = opts.list; if (!el) return;
    const list = rows || [{ id: opts.selfId(), name: opts.selfName() || 'You', on: false }];
    el.replaceChildren(...list.map((r) => {
      const s = document.createElement('span'); if (r.on) s.className = 'on';
      const i = document.createElement('i');
      const mine = r.id === opts.selfId();
      s.append(i, document.createTextNode(r.name + (mine && muted ? ' muted' : '')));
      return s;
    }));
  }
  async function join() {
    if (joined) return toggleMute();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { opts.toast('This browser has no microphone API'); return; }
    let mic;
    try { mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true }, video: false }); }
    catch (e) { opts.toast('Microphone blocked. Voice stays off.'); opts.button.classList.add('muted'); return; }
    stream = mic; joined = true; muted = false;
    const AC = window.AudioContext || window.webkitAudioContext;
    actx = new AC(); if (actx.state === 'suspended') actx.resume();
    try { const src = actx.createMediaStreamSource(stream); localAn = actx.createAnalyser(); localAn.fftSize = 256; src.connect(localAn); } catch (e) {}
    opts.button.classList.add('on'); opts.button.classList.remove('muted');
    opts.button.setAttribute('aria-label', 'Mute voice');
    opts.list.classList.remove('hidden');
    syncPeers(); paint();
  }
  function toggleMute() {
    if (!joined) return join();
    muted = !muted;
    for (const t of stream.getAudioTracks()) t.enabled = !muted;
    opts.button.classList.toggle('muted', muted);
    opts.button.setAttribute('aria-label', muted ? 'Unmute voice' : 'Mute voice');
  }
  function toggle() { return joined ? toggleMute() : join(); }
  function leave() {
    for (const id of [...peers.keys()]) closePeer(id);
    if (stream) stream.getTracks().forEach((t) => t.stop());
    stream = null; joined = false; muted = false; localAn = null;
    if (actx) { actx.close().catch(() => {}); actx = null; }
    if (opts.button) { opts.button.classList.remove('on', 'muted'); opts.button.setAttribute('aria-label', 'Join voice'); }
    if (opts.list) { opts.list.classList.add('hidden'); opts.list.replaceChildren(); }
  }
  function rebuild() { if (!joined) return; for (const id of [...peers.keys()]) closePeer(id); syncPeers(); }
  function tick() {
    if (!joined) return;
    syncPeers();
    const rows = [{ id: opts.selfId(), name: opts.selfName() || 'You', on: !muted && level(localAn) > TALK }];
    const names = opts.names();
    for (const [id, rec] of peers) { const on = level(rec.an) > TALK; opts.setTalking(id, on); rows.push({ id, name: names.get(id) || 'Survivor', on }); }
    paint(rows);
  }
  return { join, toggle, leave, onSignal, tick, rebuild, get joined() { return joined; }, get muted() { return muted; } };
}
