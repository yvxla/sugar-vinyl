# Sugar Vinyl Web App

## What is included
- `index.html`: responsive music player, file picker, playlists, repeat modes, shuffle, local IndexedDB audio storage
- `manifest.json`: home-screen/PWA metadata
- `sw.js`: offline app-shell cache

## How to run it
This must be served from an HTTPS website (or localhost) for the service worker and installable PWA behavior. Opening `index.html` directly from the Files app is not equivalent to hosting it.

### Easiest deployment: GitHub Pages
1. Sign in to GitHub and create a new repository.
2. Upload `index.html`, `manifest.json`, and `sw.js` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for the published HTTPS URL shown on the Pages settings screen.
6. Open that URL in Safari on iPhone and select an MP3 from Files.
7. To add to Home Screen, open the page in Safari, tap Share, then **Add to Home Screen**.

## Important limitations
- This web app stores imported audio blobs in IndexedDB on that browser/device. Storage may be cleared by the user or browser, and it does not automatically sync to other devices.
- iOS background playback and lock-screen behavior depends on Safari/iOS policies and must be tested on the actual device.
- A deployment URL is not created by this project bundle; you must publish it to a hosting provider to get a live URL.
