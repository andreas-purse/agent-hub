import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';

let currentModel = null;

export function loadModel(file, scene) {
  return new Promise((resolve, reject) => {
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (!['gltf', 'glb', 'obj', 'stl'].includes(extension)) {
      reject(new Error(`Unsupported file format: ${file.name}`));
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
    };

    const onSuccess = (object) => {
      if (currentModel) {
        scene.remove(currentModel);
      }

      currentModel = object;
      scene.add(object);

      const boundingBox = new THREE.Box3().setFromObject(object);
      let totalVertices = 0;

      object.traverse((child) => {
        const position = child.geometry?.attributes?.position;
        if (position) {
          totalVertices += position.count;
        }
      });

      cleanup();
      resolve({
        object,
        info: {
          name: file.name,
          vertices: totalVertices,
          boundingBox,
        },
      });
    };

    const onError = (error) => {
      cleanup();
      reject(error);
    };

    if (extension === 'gltf' || extension === 'glb') {
      const loader = new GLTFLoader();
      loader.load(
        objectUrl,
        (gltf) => onSuccess(gltf.scene),
        undefined,
        onError
      );
      return;
    }

    if (extension === 'obj') {
      const loader = new OBJLoader();
      loader.load(objectUrl, onSuccess, undefined, onError);
      return;
    }

    const loader = new STLLoader();
    loader.load(
      objectUrl,
      (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
        const mesh = new THREE.Mesh(geometry, material);
        onSuccess(mesh);
      },
      undefined,
      onError
    );
  });
}
