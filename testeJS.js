const btn3 = document.getElementById('btnTres')
const divEx3 = document.getElementById('ex3')

btn3.addEventListener('click', function() {
    divEx3.style.backgroundColor = 'lightgreen'
    divEx3.style.borderColor = 'green'

    divEx3.querySelector('h2').innerText = "Cor Alterada através de JS Externo"
})
