import { initScene } from './scene.js';
import { loadModel } from './loaders.js';
import { initControls, resetCamera } from './controls.js';
import { initUI, updateModelInfo } from './ui.js';

const canvas = document.getElementById('viewer');
const { scene, camera, renderer } = initScene(canvas);
const controls = initControls(camera, renderer);

let lastBoundingBox = null;

initUI((file) => {
  loadModel(file, scene)
    .then(({ info }) => {
      lastBoundingBox = info.boundingBox;
      resetCamera(camera, controls, info.boundingBox);
      updateModelInfo(info);
    })
    .catch((err) => {
      console.error('Failed to load model:', err);
      alert(`Failed to load model: ${err.message}`);
    });
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if (lastBoundingBox) {
    resetCamera(camera, controls, lastBoundingBox);
  }
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
