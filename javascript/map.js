var meuIcone = L.icon({
  iconUrl: '../img/doc/map/Map-Icon.svg', // Substitua pelo caminho real do seu arquivo SVG
  iconSize: [72, 95], // Ajuste o tamanho conforme necessário
  iconAnchor: [22, 94], // Ponto do ícone que estará ancorado na posição do marcador
  popupAnchor: [-3, -76] // Ponto de onde o popup abrirá em relação ao iconAnchor
});

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

//Pega o json
fetch('../historias.json')
  .then(response => response.json())
  .then(dados => {
    dados.forEach(item => {
      const marcador = L.marker([item.latitude, item.longitude], { icon: meuIcone }).addTo(map);
      marcador.on('click', function() {
        const conteudo = `
        <p><strong>Nome do Usuário:</strong> ${item.nomeUsuario}</p>
        <p><strong>Endereço:</strong> ${item.endereco}</p>
        <p><strong>Mensagem:</strong> ${item.mensagem}</p>
        <p><strong>Mensagem:</strong> ${item.mensagem}</p>
        <img src="${item.imagemUrl}" alt="${item.titulo}" style="width:100%;max-width:300px;height:auto;">`;
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
