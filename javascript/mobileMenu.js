const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header-bg');

hamburger.addEventListener('click', () => {
  header.classList.toggle('nav-active');
});