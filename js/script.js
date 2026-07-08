/* ===================================
   Configurações
   =================================== */

// Link do Microsoft Forms para confirmação de presença
const FORMS_URL = "https://forms.cloud.microsoft/r/8mLE0pvd9K?origin=lprLink";

// Endereço do restaurante
const RESTAURANTE_ENDERECO = "SHTN, Setor de Clubes Norte Trecho 1 Projeto Orla, ao lado da Concha Acústica, Conjunto 09, Brasília - DF, 70800-200";

// Nome do restaurante
const RESTAURANTE_NOME = "Rei do Camarão";

/* ===================================
   Inicialização
   =================================== */
document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initMapButton();
});

/* ===================================
   Animações ao rolar a página
   =================================== */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    // Verifica se o navegador suporta IntersectionObserver
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: mostra tudo sem animação
        elements.forEach(function (el) {
            el.classList.add('visible');
        });
    }
}

/* ===================================
   Botão de abrir mapa
   =================================== */
function initMapButton() {
    const btnMapa = document.getElementById('btn-mapa');

    if (btnMapa) {
        const enderecoEncoded = encodeURIComponent(RESTAURANTE_NOME + ' ' + RESTAURANTE_ENDERECO);
        const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + enderecoEncoded;
        btnMapa.href = mapsUrl;
    }
}
