// Selecione o formulário
const form = document.getElementById("itemForm");

// Adicione um evento de escuta para o envio do formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Chame a função de validação do formulário
    validarFormulario();
});

function validarFormulario() {
    // Pegue os valores dos campos do formulário
    const achado = document.getElementById("achado").value;
    const local = document.getElementById("local").value;
    const armazenado = document.getElementById("armazenado").value;
    const data = document.getElementById("data").value;
    const descricaoItem = document.getElementById("descricaoItem").value;
    const observacoes = document.getElementById("observacoes").value;

    // Realize a validação dos campos
    if (achado.trim() === "") {
        alert("Por favor, preencha o campo 'Achado por'.");
        return;
    }

    if (local.trim() === "") {
        alert("Por favor, preencha o campo 'Local'.");
        return;
    }

    // Realize as validações adicionais necessárias para os outros campos

    // Se todos os campos estiverem preenchidos corretamente, adicione o item na tela de "Itens Encontrados"
    adicionarItemEncontrado(achado, local, armazenado, data, descricaoItem, observacoes);

    // Limpe o formulário
    form.reset();
}

function adicionarItemEncontrado(achado, local, armazenado, data, descricaoItem, observacoes) {
    // Selecione a lista de itens encontrados (você precisará adicionar um ID apropriado a essa lista)
    const listaItens = document.getElementById("listaItensEncontrados");

    // Crie os elementos HTML para exibir as informações do item
    const item = document.createElement("div");
    item.classList.add("item");

    const titulo = document.createElement("h3");
    titulo.textContent = `Item encontrado por: ${achado}`;
    item.appendChild(titulo);

    const localItem = document.createElement("p");
    localItem.textContent = `Local: ${local}`;
    item.appendChild(localItem);

    const armazenadoItem = document.createElement("p");
    armazenadoItem.textContent = `Armazenado: ${armazenado}`;
    item.appendChild(armazenadoItem);

    const dataItem = document.createElement("p");
    dataItem.textContent = `Data: ${data}`;
    item.appendChild(dataItem);

    const descricaoItem = document.createElement("p");
    descricaoItem.textContent = `Descrição do item: ${descricaoItem}`;
    item.appendChild(descricaoItem);

    const observacoesItem = document.createElement("p");
    observacoesItem.textContent = `Observações do item: ${observacoes}`;
    item.appendChild(observacoesItem);

    // Adicione o item à lista de itens encontrados
    listaItens.appendChild(item);
}