var meuIcone = L.icon({
  iconUrl: 'https://mateuszao.github.io/olhares-do-interior/img/doc/map/Map-Icon.png', // Substitua pelo caminho real do seu arquivo SVG
  iconSize: [48, 48], // Ajuste o tamanho conforme necessário
  iconAnchor: [22, 94], // Ponto do ícone que estará ancorado na posição do marcador
  popupAnchor: [-3, -76] // Ponto de onde o popup abrirá em relação ao iconAnchor
});

const map = L.map('map', {
  center: [-22.4084, -44.2604],
  zoom: 15,
  gestureHandling: true
});

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 80,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   dragging: !L.Browser.mobile,
//   tap: !L.Browser.mobile
// }).addTo(map);

const apiKey = '423wSiRgSu5yEsCXSotk';

L.tileLayer(`https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${apiKey}`, {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
  maxZoom: 80,
  style: "e12ebc5d-52cf-4110-9c2f-6169c62fcbb5", //optional
  dragging: !L.Browser.mobile,
  tap: !L.Browser.mobile
}).addTo(map);

//Pega o json
fetch('https://mateuszao.github.io/olhares-do-interior/historias.json')
//Local fetch('../historias.json')
  .then(response => response.json())
  .then(dados => {
    dados.forEach(item => {
      const marcador = L.marker([item.latitude, item.longitude], { icon: meuIcone }).addTo(map);
      marcador.on('click', function() {
        const conteudo = `
        <img src="${item.imagemUrl}" alt="${item.titulo}" style="display:flex; width:100%; max-width:500px; height:250px; object-fit: cover;">
        <p><strong>Nome:</strong> ${item.nomeUsuario}</p>
        <p><strong>Endereço:</strong> ${item.endereco}</p>
        <p><strong>História:</strong> ${item.mensagem}</p>
        `;
        mostrarModal(item.titulo, conteudo);
      });
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));


function mostrarModal(titulo, conteudo) {
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-conteudo').innerHTML = conteudo;
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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calcula a posição da seção ajustada por um offset
      const offset = 80; // Ajuste de 80px, por exemplo
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      // Rola suavemente para a posição ajustada
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});