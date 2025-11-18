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

})