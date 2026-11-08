# DUST & DEAD on Google Play: launch checklist

**Status: NOT LIVE.** Everything here is on the `app-multiplayer` branch only. Nothing has been submitted and no accounts have been paid for.

## What's in the repo
| Piece | Where | Notes |
|---|---|---|
| PWA (installable, offline single-player) | `manifest.webmanifest`, `sw.js`, `icons/` | Chrome reports no installability errors. Offline reload plus solo play were tested. |
| Android app (Trusted Web Activity) | `android/` (Bubblewrap, package `com.vwfest.dustanddead`) | Fullscreen, landscape, minSdk 24, targetSdk 36. It opens `https://vwfest.github.io/vwfest-zombies/`. |
| Digital Asset Links | `.well-known/assetlinks.json` (scaffold) | It **must be served from the domain root**: `https://vwfest.github.io/.well-known/assetlinks.json`, so it goes in the `vwfest/vwfest.github.io` repo, not this one. Without it the app shows a browser URL bar. |
| Co-op server | `server/` | Local/dev only. See `docs/MULTIPLAYER.md`. |

## Build
```bash
export JAVA_HOME=~/sdk/jdk-17.0.21+9 ANDROID_HOME=~/sdk/android
cd android && ./gradlew assembleDebug      # debug APK -> app/build/outputs/apk/debug/app-debug.apk
# Release (Play needs an .aab). Create the upload key ONCE and back it up offline:
keytool -genkeypair -v -keystore upload.keystore -alias upload -keyalg RSA -keysize 2048 -validity 10000
./gradlew bundleRelease                    # then sign with the upload key (or configure signingConfigs)
```
Never commit keystores. `android/.gitignore` already ignores them.

## Steps before launch (in order)
1. **Google Play developer account:** a one-time **$25** fee at play.google.com/console. A personal account needs ID verification and a verified contact phone and email.
2. **Production co-op server:** deploy `server/` behind **wss://** (TLS). Set `ALLOWED_ORIGINS=https://vwfest.github.io` and add the wss host to the CSP `connect-src` in `index.html`. Replace the `ws://localhost:8787` entries.
3. **Merge the branch to main** so that Pages serves the PWA, sw.js and co-op UI. *Only when ready.*
4. **Asset links:** create the app in Play Console and turn on Play App Signing. Copy the **App signing key SHA-256** into `assetlinks.json`, keeping the upload key's fingerprint too, and publish it at the domain root. Check it with https://developers.google.com/digital-asset-links/tools/generator.
5. **Privacy policy:** it needs a public URL. A draft is in `docs/PRIVACY.md`. The game collects only an optional nickname plus score, and in co-op a nickname plus in-game position over the socket. No accounts, ads or analytics.
6. **Data safety form:** declare the nickname and game score (leaderboard) and the co-op gameplay data. The data is not shared or sold, it's encrypted in transit (HTTPS/WSS), and no personal identifiers are collected.
7. **Content rating:** fill in the **IARC questionnaire** in Play Console. Answer accurately: realistic-ish violence against zombies (non-human), blood, no gambling, and users can interact online (co-op, nickname only, no chat). Expect roughly PEGI 12/16 or ESRB Teen.
8. **Target audience:** 13+ (or 18+). Not designed for children, which avoids the Families policy.
9. **Store listing:** short and full description, the 512x512 icon (`icons/icon-512.png`), a 1024x500 feature graphic, and at least 2 phone screenshots (landscape is fine).
10. **Closed testing (required for new personal accounts):** run a closed test with **at least 12 testers opted in for 14 consecutive days**. Then apply for production access in the Console, answering the questions about the test.
11. **Production rollout:** start with a staged rollout (for example 20%).

## Known gaps
- Co-op wall/shot collision is now server-side; further navigation and latency soak testing is still needed.
- Gate, planks, power-ups and mystery crate are now server-authoritative; magazine counts are still client-side.
- A TWA needs Chrome (or another TWA-capable browser) on the device. Without one it falls back to a Custom Tab.
