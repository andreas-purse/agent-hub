# Gemini — Your Tasks

You are part of a 4-agent team building a 3D model viewer. Read `prompts/PROJECT.md` for full context.

**Your files:** `index.html` and `css/style.css`
**Do not modify** any other files — other agents own those.

---

## Task 1: `index.html`

Create the HTML shell for the 3D model viewer.

**Requirements:**
- Standard HTML5 doctype
- Link to `css/style.css`
- Import map for Three.js (cdn.jsdelivr.net, v0.162.0):
  ```html
  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/"
    }
  }
  </script>
  ```
- Elements needed (other agents' JS depends on these exact IDs):
  - `<canvas id="viewer">` — fills the viewport, where Three.js renders
  - `<div id="drop-zone">` — fullscreen overlay, contains text "Drop 3D model here (.gltf, .obj, .stl)"
  - `<input type="file" id="file-input" accept=".gltf,.glb,.obj,.stl">` — styled as a button
  - `<div id="info-panel">` — bottom-left panel showing model info (name, vertices, dimensions)
  - `<button id="reset-btn">` — "Reset View" button
- Load `js/app.js` as ES module: `<script type="module" src="js/app.js"></script>`

---

## Task 2: `css/style.css`

Create the stylesheet with a dark theme.

**Requirements:**
- Dark background: `#1a1a2e`
- Text color: `#e0e0e0`
- `*` box-sizing border-box, margin/padding 0
- `#viewer` (canvas): `position: fixed`, fills entire viewport (`width: 100vw, height: 100vh`), `display: block`
- `#drop-zone`: fullscreen fixed overlay, `background: rgba(26, 26, 46, 0.9)`, centered flex layout, large dashed border (`2px dashed #555`), rounded corners, `z-index: 10`. Hidden by default (add `.hidden` class with `display: none`). On `.dragover` state, border color changes to `#7c83ff`
- `#file-input`: styled as a button — `background: #7c83ff`, padding, border-radius, cursor pointer, positioned top-right, `z-index: 5`
- `#info-panel`: positioned bottom-left, `background: rgba(0,0,0,0.7)`, `backdrop-filter: blur(10px)`, padding, border-radius, `z-index: 5`, min-width 200px
- `#reset-btn`: positioned bottom-right, same style as file input button, `z-index: 5`
- Font family: system-ui or sans-serif
