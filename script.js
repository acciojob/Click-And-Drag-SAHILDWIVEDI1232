
const container = document.getElementById('container');
const cubes = document.querySelectorAll('.cube');

const containerRect = container.getBoundingClientRect();

// Arrange cubes in a grid initially
let gridPositions = [
  { x: 10, y: 10 },
  { x: 100, y: 10 },
  { x: 10, y: 100 },
  { x: 100, y: 100 },
];

cubes.forEach((cube, index) => {
  let { x, y } = gridPositions[index % gridPositions.length];
  cube.style.left = x + 'px';
  cube.style.top = y + 'px';
});

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    selectedCube.classList.add('dragging');

    const cubeRect = cube.getBoundingClientRect();
    offsetX = e.clientX - cubeRect.left;
    offsetY = e.clientY - cubeRect.top;

    // Bring cube to front
    selectedCube.style.zIndex = 1000;
  });
});

document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Constrain within container
  const maxX = container.clientWidth - selectedCube.offsetWidth;
  const maxY = container.clientHeight - selectedCube.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  selectedCube.style.left = x + 'px';
  selectedCube.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.classList.remove('dragging');
    selectedCube.style.zIndex = '';
    selectedCube = null;
  }
});
