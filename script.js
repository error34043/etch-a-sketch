//sets the active color fill mode. 0 is black, 1 is random RGB, and 2 is gradient fill.
let currentMode = 0;
let gridSize = 16;
const resetBtn = document.querySelector('#clearBtn');
const bwBtn = document.querySelector('#bwBtn');
const rgbBtn = document.querySelector('#rgbBtn');
const gradBtn = document.querySelector('#gradBtn');
const holder = document.querySelector('.holder');

//create static box to hold the grid
const grid = document.createElement('div');
grid.setAttribute('style', 'width: 500px; height: 500px; display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); outline: solid; outline-color: black;')
holder.appendChild(grid);

//const makeGrid = (gridSize) => {
//    
//};

//Create initial 16x16 grid on load
let i = 0;
while (i < 256) {
    const gridBox = document.createElement('div');
    gridBox.setAttribute('style', 'outline: solid; outline-color: black; outline-width: 1px;');
    gridBox.className = 'gridBox';
    gridBox.id = i;
    grid.appendChild(gridBox);
    i++;
};

//fill with color in black mode
const fillColor = e => {
    e.target.style.backgroundColor = 'black';
};

//clear old grid on 'Reset grid' button click
const resetGrid = () => {
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].remove();
    }
};

//Function to add event listeners to each grid box
const addEventListeners = (gridSize) => {
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        allGridBoxes[i].addEventListener('mouseenter', fillColor);
    };
};

//Reset button clears existing grid
resetBtn.addEventListener('click', resetGrid);

//Button testing
bwBtn.addEventListener('click', e => {
    console.log(e);
});

rgbBtn.addEventListener('click', e => {
    console.log(e);
});

gradBtn.addEventListener('click', e => {
    console.log(e);
});

//Call to add event listeners to each grid box
addEventListeners(gridSize);