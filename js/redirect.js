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

// Função para visualizar senha

document.getElementById('toggleButton').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var toggleButton = document.getElementById('toggleButton');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.remove('bi-eye-slash');
        toggleButton.classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.remove('bi-eye');
        toggleButton.classList.add('bi-eye-slash');
    }
});