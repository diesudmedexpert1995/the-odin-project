const container = document.querySelector("#container");

const containerSize = 800;
let gridNum = 16;
const btn = document.querySelector('.btn');

createGrid(gridNum);
colorGrid();

btn.addEventListener('click', ()=>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    do {
        gridNum = prompt('Enter grid Size: ');
    } while (gridNum > 50);
    createGrid(gridNum);
})

function createGrid(gridNum) {
    container.innerHTML = '';
    for (let i = 0; i < gridNum; i++) {
        let parentDiv = document.createElement('div');
        parentDiv.classList.add('sub-container');
        for(let j = 0; j < gridNum; j++){
            div = document.createElement('div');
            div.classList.add('grid');
            parentDiv.appendChild(div);
        }
        container.appendChild(parentDiv);
    }
    grid = document.querySelectorAll('.grid');
    subContainer = document.querySelectorAll('.sub-container');
    gridSize();
    colorGrid();
    
}

function gridSize(){
    grid.forEach(grid => {
        grid.style.width = (containerSize / gridNum) + "px";
        grid.style.height = (containerSize / gridNum) + "px";
    });
}

function colorGrid() {
    grid.forEach((grid)=>{
        grid.addEventListener('click', ()=>{
            grid.style.background = 'black'
        });
        grid.addEventListener('dblclick', ()=>{
            grid.style.background = ''
        })
    });
}