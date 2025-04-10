const containers = document.querySelectorAll('.img-container');
const snapContainers = document.querySelectorAll('.snap-inline');
if (window.innerWidth <= 500) {
    const unorderedlists = document.querySelectorAll('main ul');
    unorderedlists.forEach(ul => {
        ul.classList.remove('first-layout', 'second-layout', 'third-layout', 'fourth-layout', 'default-layout');
    });

    const imgScale = () => {
        containers.forEach((container) => {
            const rect = container.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            if (rect.left >= 0 && rect.right <= viewportWidth) {
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
            } else {
                container.style.opacity = '0.3';
                container.style.transform = 'scale(0.9)';
            }
        });
    }
    imgScale();
    snapContainers.forEach(snapContainer => {
        snapContainer.addEventListener('scroll', imgScale);
    });
}