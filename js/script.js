const hamburger = document.getElementById('hammburger');
const navUl = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});