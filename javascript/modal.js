// Seleciona todos os botões de abrir modal
const openModalButtons = document.querySelectorAll(".open-modal");

// Seleciona todos os botões de fechar modal
const closeModalButtons = document.querySelectorAll(".close-modal");

// Seleciona todos os fades
const fades = document.querySelectorAll(".fadeSquad");

// Função para alternar o modal
const toggleModal = (modalId) => {
  const modal = document.querySelector(`#${modalId}`);
  const fade = document.querySelector(`.fadeSquad[data-modal="${modalId}"]`);
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

// Adiciona eventos para abrir o modal
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    toggleModal(modalId);
  });
});

// Adiciona eventos para fechar o modal
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    toggleModal(modalId);
  });
});

// Fecha o modal ao clicar fora
fades.forEach((fade) => {
  fade.addEventListener("click", () => {
    const modalId = fade.getAttribute("data-modal");
    toggleModal(modalId);
  });
});