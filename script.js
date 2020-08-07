const holder = document.querySelector('.holder');

const grid = document.createElement('div');
grid.setAttribute('style', 'width: 500px; height: 500px; display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); outline: solid; outline-color: black;')
holder.appendChild(grid);

let i = 0;
while (i < 256) {
    const gridBox = document.createElement('div');
    gridBox.setAttribute('style', 'outline: solid; outline-color: black; outline-width: 1px;');
    gridBox.className = 'gridBox';
    gridBox.id = i;
    grid.appendChild(gridBox);
    i++;
}

//sets the active color fill mode. 0 is black, 1 is random RGB, and 2 is gradient fill.
let currentMode = 0;
let gridSize = 16;
const resetBtn = document.querySelector('#clearBtn');
const bwBtn = document.querySelector('#bwBtn');
const rgbBtn = document.querySelector('#rgbBtn');
const gradBtn = document.querySelector('#gradBtn');
const allGridBoxes = document.querySelectorAll('.gridBox');

const fillColor = e => {
    e.target.style.backgroundColor = 'black';
};

const resetGrid = () => {
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < 256; i++) {
        allGridBoxes[i].remove();
    }
};

const makeGrid = (gridSize) => {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        allGridBoxes[i].addEventListener('mouseenter', fillColor);
    };    
};






resetBtn.addEventListener('click', resetGrid);

bwBtn.addEventListener('click', e => {
    console.log(e);
});

rgbBtn.addEventListener('click', e => {
    console.log(e);
});

gradBtn.addEventListener('click', e => {
    console.log(e);
});

makeGrid(gridSize);