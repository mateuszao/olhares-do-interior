const map = L.map('map', {
  center: [-22.4084, -44.2604],
  zoom: 13,
  gestureHandling: true
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 80,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  dragging: !L.Browser.mobile,
  tap: !L.Browser.mobile
}).addTo(map);

//Marker add
L.marker([-22.4084, -44.2604]).addTo(map)
    .on('click', function() {
        mostrarModal('Título do Local 1', '<iframe width="300" height="300" src="https://www.youtube.com/embed/fM9wiB7DR_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

// Adicione o segundo marcador com evento de clique
L.marker([-22.1078, -44.1078]).addTo(map)
    .on('click', function() {
        mostrarModal('Um título para o mapa', '<p>Texto texto texto texto</p><iframe width="300" height="300" src="https://www.youtube.com/embed/fM9wiB7DR_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});


function mostrarModal(titulo, conteudo) {
  // Defina o título e o conteúdo do modal
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-conteudo').innerHTML = conteudo;

  // Exiba o modal
  document.getElementById('fade').classList.remove('hide');
  document.getElementById('modal').classList.remove('hide');
}

// Fechar o modal ao clicar no fundo escuro
document.getElementById('fade').addEventListener('click', function() {
  document.getElementById('fade').classList.add('hide');
  document.getElementById('modal').classList.add('hide');
});

// Fechar o modal ao clicar no botão de fechar
document.getElementById('modal-fechar').addEventListener('click', function() {
  document.getElementById('fade').classList.add('hide');
  document.getElementById('modal').classList.add('hide');
});