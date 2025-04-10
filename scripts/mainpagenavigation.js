const title = document.getElementById('header-bg');
const navbar = document.querySelector('main > nav');
const openNav = document.getElementById('open-sidebar');

const adjustNavbar = () => {
    if (window.innerWidth <= 730) {
        const titleRect = title.getBoundingClientRect();

        if (titleRect.bottom > 0 ) {
            let distance = titleRect.bottom;

            navbar.style.top = distance + 'px';
            openNav.style.top = distance + 20 + 'px' ;
        } else {
            navbar.style.top = '0px';
            openNav.style.top = '20px';
        }
    }
}

adjustNavbar();
window.addEventListener('scroll', adjustNavbar);