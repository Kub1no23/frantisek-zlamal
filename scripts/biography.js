const textScroller = document.getElementById("text-scroller");
const imgScroller = document.getElementById("img-scroller");
const paragraphs = textScroller.querySelectorAll(':scope > div');
const textContainers = document.querySelectorAll(".text-container");

const syncScroll = () => {
    const ratio = window.innerWidth / window.innerHeight;
    imgScroller.scrollLeft = Math.round(textScroller.scrollTop * ratio);
}

const headingChange = () => {
    paragraphs.forEach((paragraph, index) => {
        const viewportHeight = window.innerHeight;
        const h2 = paragraph.querySelector('h2');
        const rect = h2.getBoundingClientRect();
        const rectMiddlePoint = (rect.top + rect.bottom) / 2;
        const ViewportStart = viewportHeight * 0.01;
        const ViewportEnd = viewportHeight * 0.40;

        if (rectMiddlePoint >= ViewportStart && rectMiddlePoint <= ViewportEnd) {
            h2.classList.add('modify1-after');
            setTimeout(() => {
                // Remove the border-right by setting it to "none"
                h2.classList.add('modify2-after');
            }, 2000);
            switch (index) {
                case 1:
                    h2.closest('.container').style.backgroundColor = '#ecf1e1';
                    break;
                case 2:
                    h2.closest('.container').style.backgroundColor = '#DCB18B';
                    break;
                case 3:
                    h2.closest('.container').style.backgroundColor = '#a89982';
                    break;
                default:
                    h2.closest('.container').style.backgroundColor = '#e9d6d6';
            }
        } else {
            h2.classList.remove('modify1-after', 'modify2-after');
        }
    });
}

if (window.innerWidth < 1642) {
    textContainers.forEach((container) => {
        container.addEventListener("touchstart", () => {
            container.style.opacity = '0';
        });

        container.addEventListener("touchend", () => {
            container.style.opacity = '1';
        });
    });
}

window.addEventListener('load', headingChange);
textScroller.addEventListener("scroll", function(event) {
    syncScroll(event);
    headingChange(event);
});
window.addEventListener("resize", function(event) {
    syncScroll(event);
    headingChange(event);
});