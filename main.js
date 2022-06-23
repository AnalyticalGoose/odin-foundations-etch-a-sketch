const gridDiv = document.querySelector('#gridContainer')
const resetBtn = document.getElementById('reset')

let size = 16
let gridSize = size*size

function createSquare() {
    let square = document.createElement('div')
    square.classList.add('square')
    return square 
}

function createGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        gridDiv.appendChild(createSquare())
    }
}

function colourIn() {
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(s => {
        s.addEventListener('mouseover', function(event) {
            s.classList.add('colouredIn')
        })
    })
}

function reset() {
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(s => {
        s.classList.remove('colouredIn')
    })
}


createGrid(gridSize)
gridDiv.setAttribute(`style`, `grid-template-columns:repeat(${size}, auto);`)
colourIn()

resetBtn.addEventListener('click', function (event) {
    reset()
})