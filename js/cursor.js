document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
});
