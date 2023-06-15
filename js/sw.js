window.addEventListener('beforeinstallprompt', function (e) {
    // Evita que o prompt de instalação padrão seja exibido
    e.preventDefault();

    // Cria um novo prompt personalizado
    var installPrompt = document.createElement('div');
    installPrompt.classList.add('install-prompt');
    installPrompt.innerHTML = '<p>Deseja instalar o aplicativo?</p><button id="install-btn">Instalar Aplicativo</button>';

    // Adiciona o prompt personalizado à página
    document.body.appendChild(installPrompt);

    // Ação ao clicar no botão "Instalar Aplicativo"
    document.getElementById('install-btn').addEventListener('click', function () {
        // Exibe o prompt de instalação padrão
        e.prompt();

        // Oculta o prompt personalizado
        installPrompt.style.display = 'none';
    });
});