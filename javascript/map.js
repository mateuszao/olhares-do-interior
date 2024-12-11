const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header-bg');
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


hamburger.addEventListener('click', () => {
  header.classList.toggle('nav-active');
});



