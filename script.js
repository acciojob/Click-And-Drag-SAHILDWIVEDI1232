document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.items');

  let isDragging = false;
  let startX;
  let scrollStart;

  if (container) {
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      container.classList.add('dragging');
      startX = e.pageX;
      scrollStart = container.scrollLeft;
    });

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
      container.classList.remove('dragging');
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const walk = startX - e.pageX;
      container.scrollLeft = scrollStart + walk;
    });
  }
});
