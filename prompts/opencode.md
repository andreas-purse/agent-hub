# Open Code — Your Tasks

You are part of a 4-agent team building a 3D model viewer. Read `prompts/PROJECT.md` for full context.

**Your files:** `js/controls.js` and `js/ui.js`
**Do not modify** any other files — other agents own those.

---

## Task 1: `js/controls.js`

Create a controls module for camera interaction.

**Exports:**
- `initControls(camera, renderer)` — returns the OrbitControls instance
- `resetCamera(camera, controls, boundingBox)` — repositions camera to frame the model

**Requirements:**
- Import OrbitControls from `three/addons/controls/OrbitControls.js`
- Enable damping (`enableDamping = true`, `dampingFactor = 0.05`)
- `resetCamera` should:
  - Get the center and size of the provided boundingBox
  - Position camera at a distance that fits the model (use max dimension * 1.5)
  - Set controls target to the center of the bounding box
  - Call `controls.update()`
- Use ES module syntax

---

## Task 2: `js/ui.js`

Create a UI module for file input and model info display.

**Exports:**
- `initUI(onFileSelected)` — sets up drag-and-drop and file picker, calls `onFileSelected(file)` when a file is chosen
- `updateModelInfo(info)` — updates the info panel with model data
- `showDropZone()` / `hideDropZone()` — show/hide the drop overlay

**Requirements:**
- **Drag-and-drop** on `#drop-zone`:
  - Listen for `dragover` on `document` — show drop zone, prevent default
  - Listen for `dragleave` on `#drop-zone` — hide drop zone
  - Listen for `drop` on `#drop-zone` — hide drop zone, extract file from `e.dataTransfer.files[0]`, call `onFileSelected(file)`
- **File picker**: listen for `change` on `#file-input`, call `onFileSelected` with selected file
- **`updateModelInfo(info)`**: populate `#info-panel` with:
  - File name from `info.name`
  - Vertex count from `info.vertices` (format with toLocaleString)
  - Dimensions: compute from `info.boundingBox` (width × height × depth, 2 decimal places)
- Use ES module syntax
