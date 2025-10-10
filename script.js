const cubes = document.querySelectorAll('.cube');
const container = document.getElementById('container');

let currentCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        currentCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
        cube.classList.add('dragging');

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

function mouseMoveHandler(e) {
    if (!currentCube) return;

    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Boundary checking
    const containerRect = container.getBoundingClientRect();
    const cubeRect = currentCube.getBoundingClientRect();

    if (newX < containerRect.left) newX = containerRect.left;
    if (newX + cubeRect.width > containerRect.right) newX = containerRect.right - cubeRect.width;
    if (newY < containerRect.top) newY = containerRect.top;
    if (newY + cubeRect.height > containerRect.bottom) newY = containerRect.bottom - cubeRect.height;

    currentCube.style.transform = `translate(${newX}px, ${newY}px)`;
}

function mouseUpHandler() {
    if (currentCube) {
        currentCube.classList.remove('dragging');
        currentCube = null;
    }
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}