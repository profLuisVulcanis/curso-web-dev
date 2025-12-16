/**
 * Script para mostrar e esconder o menu do sistema
 * sempre que o botão de menu for acionado
 * ou um dos itens do menu for clicado
 * Curso de Desenvolvimento Web do Canal
 * Tempos Esquisitos - Luis Augusto Vulcanis 2025
 */

document.addEventListener('DOMContentLoaded', function() {

    const btnMenu = document.getElementById('btnMenuContainer')
    const navMenu = document.getElementById('mainMenu')
    const navItems = document.querySelectorAll('nav li')

     if (btnMenu && navMenu && navItems.length > 0) {

        btnMenu.addEventListener('click', function() {
            navMenu.classList.toggle('visible')
        })

        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                navMenu.classList.remove('visible')
            })
        })

    } else {
        console.error("Erro: Um ou mais elementos necessários (btnMenuContainer, nav ou nav li) não foram encontrados no DOM")
    }

    //Lógica da Galeria

    const galleryLinks = document.querySelectorAll('#galleryMenuList a')
    const galleryBand = document.getElementById('galleryBand')

    function loadContent(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.statusText)
                }
                return response.text()
            })
            .then(html => {
                galleryBand.innerHTML = html
            })
            .catch(error => {
                console.error('Erro ao carregar conteúdo:', error)
                galleryBand.innerHTML = `<p>Erro ao carregar o conteúdo: ${error.message}</p>`
            })
    }

    if (galleryLinks.length > 0 && galleryBand) {
        // Carrega o conteúdo inicial (band1.html)
        loadContent('./bands/band1.html');

        galleryLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault()
                const url = this.getAttribute('data-url')
                if (url) {
                    loadContent(url)
                }
            })
        })
    }
})

