# 3D Model Viewer — Multi-Agent Project

## Overview
A browser-based 3D model viewer built with Three.js. No build tools — just HTML, CSS, and ES modules loaded via CDN importmap.

**Supports:** `.gltf` / `.glb` / `.obj` / `.stl` files

## Features
1. Drag-and-drop or file picker to load models
2. Orbit controls — rotate, pan, zoom
3. Auto-frame — camera fits to model bounds on load
4. Ground grid + ambient/directional lighting
5. Model info panel — file name, vertex count, dimensions
6. Reset view button

## Architecture

```
agent-hub/
├── index.html          ← page shell: canvas, drop zone, UI panels
├── css/
│   └── style.css       ← dark theme, layout, panels
├── js/
│   ├── app.js          ← entry point, wires all modules together
│   ├── scene.js        ← Three.js scene, camera, renderer, lights, grid
│   ├── loaders.js      ← file loading logic (GLTF, OBJ, STL)
│   ├── controls.js     ← orbit controls, zoom, reset view
│   └── ui.js           ← drag-and-drop, file picker, model info panel
```

## Tech Details
- Three.js v0.162.0 loaded via CDN importmap from cdn.jsdelivr.net
- All JS files use ES module syntax (import/export)
- No npm, no bundler — just open index.html in browser

## Team
This project is built collaboratively by 4 AI agents:
- **Claude Code** — architect, integrator (app.js), final reviewer
- **Codex** — scene.js, loaders.js
- **Open Code** — controls.js, ui.js
- **Gemini** — index.html, style.css

Each agent owns specific files. Do not modify files assigned to other agents.
