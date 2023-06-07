function cadastrarItem() {
    const achador = document.getElementById('achador').value;
    const local = document.getElementById('local').value;
    const armazenado = document.getElementById('armazenado').value;
    const data = document.getElementById('data').value;
    const imagem = document.getElementById('imagem').value;
    const detalhes = document.getElementById('detalhes').value;

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

    // Limpar os campos do formulário
    document.getElementById('achador').value = '';
    document.getElementById('local').value = '';
    document.getElementById('armazenado').value = '';
    document.getElementById('data').value = '';
    document.getElementById('imagem').value = '';
    document.getElementById('detalhes').value = '';

    alert('Item cadastrado com sucesso!');
}

let itemList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

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
          exibirDetalhes(j);
        };
  
        itemPairElement.appendChild(itemElement);
      }
  
      itemListElement.appendChild(itemPairElement);
    }
  }
  


function exibirDetalhes(index) {
    const item = itemList[index];
    document.getElementById('itemAchador').textContent = item.achador;
    document.getElementById('itemLocal').textContent = item.local;
    document.getElementById('itemArmazenado').textContent = item.armazenado;
    document.getElementById('itemData').textContent = item.data;
    document.getElementById('itemDescricao').textContent = item.detalhes;
    document.getElementById('itemImagem').src = item.imagem;

    document.getElementById('itemList').style.display = 'none';
    document.getElementById('itemDetails').style.display = 'block';
}

function voltarLista() {
    document.getElementById('itemList').style.display = 'block';
    document.getElementById('itemDetails').style.display = 'none';
}

function excluirItem() {
    const index = parseInt(document.getElementById('itemList').selectedIndex);
    itemList.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemList));
    voltarLista();
    exibirItens();
}

exibirItens();