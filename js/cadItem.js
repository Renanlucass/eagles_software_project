function cadastrarItem() {
  const achador = document.getElementById('achador').value;
  const local = document.getElementById('local').value;
  const armazenado = document.getElementById('armazenado').value;
  const data = document.getElementById('data').value;
  const imagem = document.getElementById('imagem').value;
  const detalhes = document.getElementById('detalhes').value;

  if (achador === '' || local === '' || armazenado === '' || data === '' || imagem === '' || detalhes === '') {
    alert('Por favor, preencha todos os campos antes de cadastrar o item.');
    return;
  }

  const item = {
    achador: achador,
    local: local,
    armazenado: armazenado,
    data: data,
    imagem: imagem,
    detalhes: detalhes
  };


  itemList.push(item);
  localStorage.setItem('items', JSON.stringify(itemList));

  document.getElementById('achador').value = '';
  document.getElementById('local').value = '';
  document.getElementById('armazenado').value = '';
  document.getElementById('data').value = '';
  document.getElementById('imagem').value = '';
  document.getElementById('detalhes').value = '';

  alert('Item cadastrado com sucesso!');
}

const itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function exibirItens(items = itemList) {
  const itemListElement = document.getElementById('itemList');
  itemListElement.innerHTML = '';

  for (let i = 0; i < items.length; i += 2) {
    const itemPairElement = document.createElement('div');
    itemPairElement.className = 'itemPair';

    for (let j = i; j < i + 2 && j < items.length; j++) {
      const item = items[j];

      const itemElement = document.createElement('div');
      itemElement.className = 'itemContainer';

      const imagemElement = document.createElement('img');
      imagemElement.src = item.imagem;
      itemElement.appendChild(imagemElement);

      const itemDetailsElement = document.createElement('div');
      itemDetailsElement.className = 'itemDetails';

      const descricaoElement = document.createElement('p');
      descricaoElement.textContent = item.detalhes;
      itemDetailsElement.appendChild(descricaoElement);

      const dataElement = document.createElement('p');
      dataElement.textContent = `Data: ${item.data}`;
      itemDetailsElement.appendChild(dataElement);

      const localElement = document.createElement('p');
      localElement.textContent = `Local: ${item.local}`;
      itemDetailsElement.appendChild(localElement);

      itemElement.appendChild(itemDetailsElement);

      itemElement.onclick = function () {
        exibirModal(item);
      };

      itemPairElement.appendChild(itemElement);
    }

    itemListElement.appendChild(itemPairElement);
  }
}

const exemploItem1 = {
  achador: 'Renan Lucas',
  local: 'Sala de aula Bloco E',
  armazenado: 'Setor achados e perdidos',
  data: '04-06-2023',
  imagem: 'imagensCadastro/chave.webp',
  detalhes: 'Chave de uma moto'
};

const exemploItem2 = {
  achador: 'Renan Lucas',
  local: 'Pátio',
  armazenado: 'Setor achados e perdidos',
  data: '04-06-2023',
  imagem: 'imagensCadastro/carregador-de-celular-parede-com-1-porta-usb-2-0a-bivolt-branco-com-cabo-micro-usb-v8-x-cell-xc-kit-v8-sinop-03-ec07421e..jpg',
  detalhes: 'Carregador de celular'
};

const exemploItem3 = {
  achador: 'João Victor',
  local: 'Auditório',
  armazenado: 'Setor achados e perdidos',
  data: '05-06-2023',
  imagem: 'imagensCadastro/download.jpeg',
  detalhes: 'Carteira de couro'
};


const exemploItem4 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '06-06-2023',
  imagem: 'imagensCadastro/caderno_espiral_tilibra_neon_sem_pauta_1_4_a5_azul_3411_1_da2eb0c357f3cf0bce35436176ee2a35.webp',
  detalhes: 'Caderno cor azul'
}


const exemploItem5 = {
  achador: 'João Victor',
  local: 'Refeitório',
  armazenado: 'Setor achados e perdidos',
  data: '07-06-2023',
  imagem: 'imagensCadastro/fb25646a83.webp',
  detalhes: 'Garrafa térmica'
}

const exemploItem6 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '10-06-2023',
  imagem: 'imagensCadastro/garrafa.webp',
  detalhes: 'Garrafa Twpperware azul'
}

const exemploItem7 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '10-06-2023',
  imagem: 'imagensCadastro/chuteira.webp',
  detalhes: 'Chuteira da Nike cor preta'
}
const exemploItem8 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '12-06-2023',
  imagem: 'imagensCadastro/relogio.jpg',
  detalhes: 'Rélogio digital'
}
const exemploItem9 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '12-06-2023',
  imagem: 'imagensCadastro/bone_snapback_aba_curva_classic_hats_preto_liso_1669_1_20180831162410.webp',
  detalhes: 'Boné preto'
}

const exemploItem10 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '12-06-2023',
  imagem: 'imagensCadastro/chaveiro.jpg',
  detalhes: 'chaveiro'
}

const exemploItem11 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '13-06-2023',
  imagem: 'imagensCadastro/mochila rosa.webp',
  detalhes: 'Mochila rosa'
}

const exemploItem12 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '13-06-2023',
  imagem: 'imagensCadastro/89870e19b8.webp',
  detalhes: 'Mochila preta'
}


// const itemList = [exemploItem1, exemploItem2, exemploItem3, exemploItem4,exemploItem5, exemploItem6, exemploItem7, exemploItem8, exemploItem9, exemploItem10, exemploItem11, exemploItem12];
// localStorage.setItem('items', JSON.stringify(itemList)); 

exibirItens();

function exibirModal(item) {
  document.getElementById('modalItemAchador').textContent = item.achador;
  document.getElementById('modalItemLocal').textContent = item.local;
  document.getElementById('modalItemArmazenado').textContent = item.armazenado;
  document.getElementById('modalItemData').textContent = item.data;
  document.getElementById('modalItemDescricao').textContent = item.detalhes;
  document.getElementById('modalItemImagem').src = item.imagem;
  
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  modal.classList.add('open');
}

function fecharModal() {
  const modal
    = document.getElementById('modal');
  modal.classList.remove('open');

  setTimeout(function () {
    modal.style.display = 'none';
  }, 300);
}

function voltarLista() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function excluirItem() {
  const index = parseInt(document.getElementById('itemList').selectedIndex);

  if (index === -1) {
    alert('Por favor, selecione um item para excluir.');
    return;
  }

  const confirmacao = confirm('Tem certeza que deseja excluir o item?');

  if (confirmacao) {
    itemList.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemList));
    voltarLista();
    exibirItens();
  }
}

function buscarItens() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const filteredItems = itemList.filter(function (item) {
    return item.detalhes.toLowerCase().includes(searchTerm);
  });

  if (filteredItems.length === 0) {
    alert('Nenhum item corresponde à busca.');
  }

  exibirItens(filteredItems);
}

function limparBusca() {
  document.getElementById('searchInput').value = '';
  exibirItens();
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();
  buscarItens();
});

document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.trim().toLowerCase();

  if (searchTerm === '') {
    limparBusca();
  }
});

exibirItens();


