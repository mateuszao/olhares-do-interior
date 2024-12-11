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

const map = L.map("map").setView([-22.4084,  -44.2604], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 80,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  dragging: !L.Browser.mobile,
  tap: !L.Browser.mobile
}).addTo(map);

//Marker add
var marker = L.marker([-22.4084,  -44.2604])
.bindPopup('<iframe width="300" height="300" src="https://www.youtube.com/embed/fM9wiB7DR_k?si=PG0haDEaNVFCtSFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
.addTo(map);

//Marker add
var marker = L.marker([-22.1078,  -44.1078])
.bindPopup(
  '<h1>Um titulo para o map</h1><p>Texto texto texto texto</p> <iframe width="300" height="300" src="https://www.youtube.com/embed/fM9wiB7DR_k?si=PG0haDEaNVFCtSFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
)
.addTo(map);

