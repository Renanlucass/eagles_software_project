// Redireciona para a página home

document.addEventListener("DOMContentLoaded", function () {
    // Obtém o formulário de login
    var form = document.querySelector("form");

    // Adiciona um evento de escuta ao evento "submit" do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Redireciona para a página home
        window.location.href = "telaInicio.html";
    });
});