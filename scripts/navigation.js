const navigation = document.querySelector('body nav');
const closeBtn = document.getElementById('close-sidebar');
const openBtn = document.getElementById('open-sidebar');
const overlay = document.getElementById('overlay');

const openSidebar = () => {
    navigation.classList.add('show');
    openBtn.style.display = 'none';
    overlay.style.display = 'block'
}
const closeSidebar = () => {
    navigation.classList.remove('show');
    openBtn.style.display = 'block';
    overlay.style.display = 'none';
}

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
openBtn.addEventListener('click', openSidebar);