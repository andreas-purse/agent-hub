export function initUI(onFileSelected) {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
    showDropZone();
  });
  
  dropZone.addEventListener('dragleave', () => {
    hideDropZone();
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    hideDropZone();
    const file = e.dataTransfer.files[0];
    if (file) onFileSelected(file);
  });
  
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) onFileSelected(file);
  });
}

export function updateModelInfo(info) {
  document.getElementById('info-name').textContent = info.name;
  document.getElementById('info-vertices').textContent = info.vertices.toLocaleString();
  
  const box = info.boundingBox;
  const width = box.max.x - box.min.x;
  const height = box.max.y - box.min.y;
  const depth = box.max.z - box.min.z;
  document.getElementById('info-dimensions').textContent = 
    `${width.toFixed(2)} × ${height.toFixed(2)} × ${depth.toFixed(2)}`;
}

export function showDropZone() {
  document.getElementById('drop-zone').classList.remove('hidden');
}

export function hideDropZone() {
  document.getElementById('drop-zone').classList.add('hidden');
}