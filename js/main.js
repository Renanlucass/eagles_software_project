if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js')
        .then(function (registration) {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(function (error) {
            console.log('Falha ao registrar o Service Worker:', error);
        });

    window.addEventListener('beforeinstallprompt', function (event) {
        event.preventDefault();
        var deferredPrompt = event;

    });
}