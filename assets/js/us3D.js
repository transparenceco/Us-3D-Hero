// This code lists the 3d models in an array and rotates between them every 4 seconds

const models = [
  'https://uscommunications.ca/3d/hero/people.glb',
  'https://uscommunications.ca/3d/hero/doggolovers.glb',
  'https://uscommunications.ca/3d/hero/midnighttokers.glb',
  'https://uscommunications.ca/3d/hero/beergeeks.glb',
  'https://uscommunications.ca/3d/hero/gamers.glb',
  'https://uscommunications.ca/3d/hero/homegrowers.glb',
  'https://uscommunications.ca/3d/hero/newcanucks.glb',
  'https://uscommunications.ca/3d/hero/moguls.glb',
];

const modelViewer = document.getElementById('model-viewer');
let currentModelIndex = 0;
let originalCameraPosition = null;

function loadNextModel() {
  currentModelIndex = (currentModelIndex + 1) % models.length;
  modelViewer.src = models[currentModelIndex];
  setTimeout(loadNextModel, 4000);
}

function resetCameraPosition() {
  if (originalCameraPosition) {
    modelViewer.cameraOrbit = originalCameraPosition;
    originalCameraPosition = null;
  }
}

loadNextModel();

modelViewer.addEventListener('camera-change', () => {
  if (!originalCameraPosition) {
    originalCameraPosition = modelViewer.cameraOrbit;
  }
});

modelViewer.addEventListener('click', resetCameraPosition);
modelViewer.addEventListener('dblclick', resetCameraPosition);


