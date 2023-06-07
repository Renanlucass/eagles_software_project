document.addEventListener("DOMContentLoaded", function () {
    var cadastroForm = document.getElementById("cadastroForm");
    var loginForm = document.getElementById("loginForm");

    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateCadastroForm();
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateLoginForm();
    });

    function validateCadastroForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {
            alert("Por favor, preencha todos os campos do formulário de cadastro.");
            return;
        }

        // Salvar os dados de cadastro no armazenamento local
        var cadastroData = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("cadastroData", JSON.stringify(cadastroData));

        alert("Cadastro realizado com sucesso!");
        cadastroForm.reset();

        // Redirecionar para a página home
        window.location.href = "telaInicio.html";
    }

    function validateLoginForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Por favor, preencha todos os campos do formulário de login.");
            return;
        }

        // Obter os dados de cadastro do armazenamento local
        var cadastroData = localStorage.getItem("cadastroData");
        cadastroData = JSON.parse(cadastroData);

        if (cadastroData && email === cadastroData.email && password === cadastroData.password) {
            alert("Login bem-sucedido!");
            loginForm.reset();

            // Redirecionar para a página home
            window.location.href = "telaInicio.html";
        } else {
            alert("Email ou senha incorretos.");
        }
    }
});
