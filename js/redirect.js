// Redirecionando para a página home

document.addEventListener("DOMContentLoaded", function () {
    // Obtém o formulário de login
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Redireciona para a página home
        window.location.href = "telaInicio.html";
    });
});

// Função para visualizar senha

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});