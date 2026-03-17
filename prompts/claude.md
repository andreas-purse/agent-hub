# Claude Code — Your Tasks

You are the architect and integrator for this project. Read `prompts/PROJECT.md` for full context.

**Your files:** `js/app.js`
**Do not modify** other agents' files unless fixing integration bugs during final review.

---

## Task: `js/app.js`

Create the entry point that wires all modules together.

**Wait until all other agents have completed their files before writing this.**

**Requirements:**
- Import from all 4 modules: scene.js, loaders.js, controls.js, ui.js
- On load:
  1. `initScene(canvas)` → get scene, camera, renderer
  2. `initControls(camera, renderer)` → get controls
  3. `initUI(onFileSelected)` → set up UI with callback
  4. Start animation loop: `requestAnimationFrame`, call `controls.update()` and `renderer.render(scene, camera)` each frame
- `onFileSelected(file)` callback:
  1. Call `loadModel(file, scene)`
  2. On success: call `resetCamera(camera, controls, info.boundingBox)` and `updateModelInfo(info)`
  3. On error: `console.error` and optionally show an alert
- Get canvas via `document.getElementById('viewer')`

## Final Review Checklist
After integrating, verify:
- [ ] All import paths match actual file locations
- [ ] All element IDs match between HTML and JS
- [ ] All function signatures match between modules
- [ ] No circular dependencies
- [ ] Test by opening index.html in browser
