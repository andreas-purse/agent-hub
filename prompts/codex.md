# Codex — Your Tasks

You are part of a 4-agent team building a 3D model viewer. Read `prompts/PROJECT.md` for full context.

**Your files:** `js/scene.js` and `js/loaders.js`
**Do not modify** any other files — other agents own those.

---

## Task 1: `js/scene.js`

Create a Three.js scene module.

**Exports:**
- `initScene(canvas)` — returns `{ scene, camera, renderer }`

**Requirements:**
- WebGLRenderer with antialiasing enabled, attached to the provided canvas element
- Set renderer pixel ratio to `window.devicePixelRatio`
- Set renderer size to window dimensions
- Perspective camera (FOV 60, near 0.1, far 1000), positioned at (3, 3, 3), looking at origin
- AmbientLight — color white, intensity 0.6
- DirectionalLight — color white, intensity 0.8, position (5, 10, 5)
- GridHelper — size 10, 20 divisions, color #444444
- Window resize handler that updates camera aspect ratio and renderer size
- Use ES module syntax (`import ... from 'three'`)

---

## Task 2: `js/loaders.js`

Create a loader module for multiple 3D formats.

**Exports:**
- `loadModel(file, scene)` — returns a Promise that resolves to `{ object, info }`

**Requirements:**
- Detect format by file extension (`.gltf`, `.glb`, `.obj`, `.stl`)
- Use `URL.createObjectURL(file)` to create a loadable URL
- Loaders:
  - `.gltf` / `.glb` → `GLTFLoader` (import from `three/addons/loaders/GLTFLoader.js`)
  - `.obj` → `OBJLoader` (import from `three/addons/loaders/OBJLoader.js`)
  - `.stl` → `STLLoader` (import from `three/addons/loaders/STLLoader.js`) — returns geometry, wrap in MeshStandardMaterial (color #888888)
- Before adding new model: remove previous model from scene (track it via a module-level variable)
- After loading, compute bounding box using `THREE.Box3().setFromObject(object)`
- Count vertices by traversing meshes: `object.traverse()`, sum `geometry.attributes.position.count`
- Return `{ object, info }` where info = `{ name: file.name, vertices: totalVertices, boundingBox }`
- Revoke the object URL after loading to prevent memory leaks
- Reject the promise for unsupported formats
- Use ES module syntax
