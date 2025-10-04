// Your code here.
let isDragging = false;
let offsetX, offsetY;

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;
        item.classList.add('active'); // Optional: add a class to indicate dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // Optional: Add boundary checks here if needed

            item.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        item.classList.remove('active'); // Remove the class when done
    });
});