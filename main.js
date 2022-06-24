const gridDiv = document.querySelector('#gridContainer')

const resetBtn = document.getElementById('resetBtn')

const slider = document.getElementById('myRange')
let output = document.getElementById('gridRange')

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

resetBtn.addEventListener('click', function () {
    reset()
    
})

slider.oninput = function () {
    output.textContent = this.value +" X "+ this.value;    
}

slider.onchange = () => {
    gridDiv.replaceChildren();
    size = parseInt(slider.value)
    gridSize = size*size
    createGrid(gridSize)
    gridDiv.setAttribute(`style`, `grid-template-columns:repeat(${size}, auto);`)
    colourIn()
}

createGrid(gridSize)
gridDiv.setAttribute(`style`, `grid-template-columns:repeat(${size}, auto);`)
colourIn()