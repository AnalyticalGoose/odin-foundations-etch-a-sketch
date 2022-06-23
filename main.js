const gridDiv = document.querySelector('#gridContainer')
const squares = document.getElementById('.square')


let size = 16
let gridSize = size*size

function createSquare () {
    let square = document.createElement('div')
    square.classList.add('square')
    return square 
}

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        gridDiv.appendChild(createSquare())
    }
}

createGrid(gridSize)
gridDiv.setAttribute(`style`, `grid-template-columns:repeat(${size}, auto);`)

gridDiv.addEventListener('click', function(event) {
    console.log(event)
})