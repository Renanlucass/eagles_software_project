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

  const itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
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


// const itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function exibirItens() {
  const itemListElement = document.getElementById('itemList');
  itemListElement.innerHTML = '';

  for (let i = 0; i < itemList.length; i += 2) {
    const itemPairElement = document.createElement('div');
    itemPairElement.className = 'itemPair';

    for (let j = i; j < i + 2 && j < itemList.length; j++) {
      const item = itemList[j];

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
        exibirModal(j);
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
  data: '06-06-2023',
  imagem: 'imagensCadastro/89870e19b8.webp',
  detalhes: 'Chave de uma moto'
};

const exemploItem2 = {
  achador: 'Renan Lucas',
  local: 'Pátio',
  armazenado: 'Setor achados e perdidos',
  data: '05-06-2023',
  imagem: 'imagensCadastro/carregador-de-celular-parede-com-1-porta-usb-2-0a-bivolt-branco-com-cabo-micro-usb-v8-x-cell-xc-kit-v8-sinop-03-ec07421e..jpg',
  detalhes: 'Carregador de celular'
};

const exemploItem3 = {
  achador: 'João Victor',
  local: 'Auditório',
  armazenado: 'Setor achados e perdidos',
  data: '04-06-2023',
  imagem: 'imagensCadastro/download.jpeg',
  detalhes: 'Carteira de couro'
};

const exemploItem4 = {
  achador: 'João Victor',
  local: 'Refeitório',
  armazenado: 'Setor achados e perdidos',
  data: '03-06-2023',
  imagem: 'imagensCadastro/fb25646a83.webp',
  detalhes: 'Garrafa de Água'
}

const exemploItem5 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '02-06-2023',
  imagem: 'imagensCadastro/caderno_espiral_tilibra_neon_sem_pauta_1_4_a5_azul_3411_1_da2eb0c357f3cf0bce35436176ee2a35.webp',
  detalhes: 'Caderno cor azul'
}

const exemploItem6 = {
  achador: 'Lailson',
  local: 'Laboratório',
  armazenado: 'Setor achados e perdidos',
  data: '01-06-2023',
  imagem: 'imagensCadastro/bone_snapback_aba_curva_classic_hats_preto_liso_1669_1_20180831162410.webp',
  detalhes: 'Boné preto'
}

const itemList = [exemploItem1, exemploItem2, exemploItem3, exemploItem4,exemploItem5, exemploItem6];
localStorage.setItem('items', JSON.stringify(itemList));

exibirItens();

function exibirModal(index) {
  const item = itemList[index];
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
  const modal = document.getElementById('modal');
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

exibirItens();
