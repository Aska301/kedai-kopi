// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// ketika Hamburger Menu Di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Kilik diluar sidebar untunk menghilangkan nav
const Hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})