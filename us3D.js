// This code lists the 3d models in an array and rotates between them every 4 seconds

const models = [
'3dmodels/hero/people.glb',
'3dmodels/hero/doggolovers.glb',
'3dmodels/hero/midnighttokers.glb',
'3dmodels/hero/beergeeks.glb',
'3dmodels/hero/gamers.glb',
'3dmodels/hero/homegrowers.glb',
'3dmodels/hero/newcanucks.glb',
'3dmodels/hero/moguls.glb',
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
