const container = document.querySelector('.items');

let isDragging = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  container.classList.add('dragging'); // Optional: add a class while dragging
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.classList.remove('dragging');
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.classList.remove('dragging');
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
});
