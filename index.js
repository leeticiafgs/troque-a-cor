//declaracao de variaveis

const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Black']
const btn = document.getElementById('btn')
const colorName = document.querySelector('.color') // injeta uma variavel que vem de um outro ponto

//No clique

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.background = colors[randomColor] // aplicando a cor ao background
    colorName.textContent = colors[randomColor] // insere no textContente
})

// Gerando os numeros randomicos

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}