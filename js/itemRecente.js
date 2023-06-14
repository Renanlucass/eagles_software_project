const itemList = [];

function cadastrarItemManualmente(achador, local, armazenado, data, imagem, detalhes) {
    const item = {
        achador: achador,
        local: local,
        armazenado: armazenado,
        data: data,
        imagem: imagem,
        detalhes: detalhes
    };

    itemList.push(item);
}

//Dados utilizados para demonstração da tela de home

cadastrarItemManualmente(
    'Renan Lucas',
    'Sala de aula Bloco E',
    'Setor achados e perdidos',
    '13-06-2023',
    'imagensCadastro/89870e19b8.webp',
    'Mochila cor preta'
);

cadastrarItemManualmente(
    'Renan Lucas',
    'Auditório',
    'Setor achados e perdidos',
    '13-06-2023',
    'imagensCadastro/mochila rosa.webp',
    'Mochila cor rosa'
);

cadastrarItemManualmente(
    'Lailson',
    'Laboratório',
    'Setor achados e perdidos',
    '12-06-2023',
    'imagensCadastro/bone_snapback_aba_curva_classic_hats_preto_liso_1669_1_20180831162410.webp',
    'Boné preto'
);

cadastrarItemManualmente(
    'Lailson',
    'Laboratório',
    'Setor achados e perdidos',
    '12-06-2023',
    'imagensCadastro/chaveiro.jpg',
    'Chaveiro'
);

cadastrarItemManualmente(
    'João Victor',
    'Pátio',
    'Setor achados e perdidos',
    '11-06-2023',
    'imagensCadastro/pulseira.webp',
    'Pulseira masculina cor preto'
);

cadastrarItemManualmente(
    'joão Victor',
    'Pátio',
    'Setor achados e perdidos',
    '11-06-2023',
    'imagensCadastro/relogio.jpg',
    'Rélogio digital'
);  


cadastrarItemManualmente(
    'Renan Lucas',
    'Próximo a quadra do IFPI',
    'Setor achados e perdidos',
    '10-06-2023',
    'imagensCadastro/chuteira.webp',
    'Chuteira da Nike cor preta'
);

cadastrarItemManualmente(
    'Sala de aula Bloco E',
    'Pátio',
    'Setor achados e perdidos',
    '10-06-2023',
    'imagensCadastro/garrafa.webp',
    'Garrafa Tupperware azul'
);

cadastrarItemManualmente(
    'Lailson',
    'Auditório',
    'Setor achados e perdidos',
    '10-06-2023',
    'imagensCadastro/fb25646a83.webp',
    'Garrafa térmica'
);

function exibirItens(itens) {
    const itemListElement = document.getElementById('itemList');
    itemListElement.innerHTML = '';

    let rowElement = document.createElement('div');
    rowElement.className = 'itemRow';

    const itensExibir = itens || itemList;

    for (let i = 0; i < itensExibir.length; i++) {
        const item = itensExibir[i];

        const itemElement = document.createElement('div');
        itemElement.className = 'itemContainer';
        itemElement.setAttribute('data-index', i);

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

        itemElement.onclick = function(index) {
            return function () {
                exibirModal(index);
            };
        }(i);

        itemListElement.appendChild(itemElement);

        rowElement.appendChild(itemElement);

        if ((i + 1) % 3 === 0) {
            itemListElement.appendChild(rowElement);
            rowElement = document.createElement('div');
            rowElement.className = 'itemRow';
        }
    }

    if (rowElement.children.length > 0) {
        itemListElement.appendChild(rowElement);
    }
}


function createItemClickHandler(index) {
    return function () {
        exibirModal(index
        );
    };
}

function exibirModal(index) {
    const item = itemList[index];
    const modalItemAchador = document.getElementById('modalItemAchador');
    const modalItemLocal = document.getElementById('modalItemLocal');
    const modalItemArmazenado = document.getElementById('modalItemArmazenado');
    const modalItemData = document.getElementById('modalItemData');
    const modalItemDescricao = document.getElementById('modalItemDescricao');
    const modalItemImagem = document.getElementById('modalItemImagem');

    modalItemAchador.textContent = item.achador;
    modalItemLocal.textContent = item.local;
    modalItemArmazenado.textContent = item.armazenado;
    modalItemData.textContent = item.data;
    modalItemDescricao.textContent = item.detalhes;
    modalItemImagem.src = item.imagem;

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

exibirItens(itemList);