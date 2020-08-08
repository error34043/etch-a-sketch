//Set the active color fill mode. 0 is black, 1 is random RGB,  2 is RGB shading, 3 is text fill, and 4 is vaporwave mode.
let currentMode = 0;

//Setting values to required variables
const resetBtn = document.querySelector('#clearBtn');
const bwBtn = document.querySelector('#bwBtn');
const rgbBtn = document.querySelector('#rgbBtn');
const gradBtn = document.querySelector('#gradBtn');
const textBtn = document.querySelector('#textBtn');
const vwBtn = document.querySelector('#vwBtn');
const holder = document.querySelector('.holder');

//Array of all available letters for use in text fill
const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array of vaporwave color codes for use in vaporwave mode
const vwColors = ['#FF71CE', '#01CDFE', '#05FFA1', '#B967FF', '#FFFB96', '#F927F5', '#979BF5', '#765BFF', '#00F1FF', '#000000'];

//Make a new grid
let createGrid = (gridSize) => {
    const grid = document.createElement('div');
    grid.id='grid';
    grid.setAttribute(`style`, `width: 500px; height: 500px; display: grid; grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr); outline: solid; outline-color: black;`)
    holder.appendChild(grid);
    let i = 0;
    while (i < Math.pow(gridSize, 2)) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('style', 'background-color: white; height: auto; width: auto; outline: none; display: grid; justify-items: center; align-items: center; font-family: "Lato", sans-serif; font-size: 0.75em');
        gridBox.className = 'gridBox';
        gridBox.id = i;
        grid.appendChild(gridBox);
        i++;
    };
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        allGridBoxes[i].addEventListener('mouseenter', fillColor);
        allGridBoxes[i].setAttribute('data-count', 10);
    };
};

//Reset button clears existing grid
resetBtn.addEventListener('click', () => {
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].style.backgroundColor = 'white';
        allGridBoxes[i].style.filter = `brightness(100%)`;
        allGridBoxes[i].setAttribute('data-count', 10);
    };
});

//Function to remove existing grid and build new one
const remakeGrid = newGridSize => {
    const grid = document.querySelector('#grid');
    grid.remove();
    const allGridBoxes = document.querySelectorAll('.gridBox');
    for (let i = 0; i < allGridBoxes.length; i++) {
        allGridBoxes[i].remove();
    };
    createGrid(newGridSize);
};

//Generate random RGB color
const randomRGB = () => {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R},${G},${B})`;
};

//Fill with black in black mode, color in RGB mode, ever darker color in RGB shading mode and text in text mode
const fillColor = e => {
    if (currentMode === 0) {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 1) {
        e.target.style.backgroundColor = randomRGB();
    } else if (currentMode === 2) {
        let count = e.target.getAttribute('data-count');
        if (count == 10) {
            e.target.style.backgroundColor = randomRGB();
            count--;
            e.target.setAttribute('data-count', count);
        } else {
            e.target.style.filter = `brightness(${10 * count}%)`;
            count--;
            e.target.setAttribute('data-count', count);
        };
        console.log(count);
    } else if (currentMode === 3) {
        let randomIndex = Math.floor(Math.random() * 52);
        let randomLetter = alphabetArr[randomIndex];
        e.target.textContent = randomLetter;
        e.target.style.color = randomRGB();
    } else if (currentMode === 4) {
        let randomIndex = Math.floor(Math.random() * 10);
        let randomColor = vwColors[randomIndex];
        e.target.style.backgroundColor = randomColor;
    };
};

//Take a value for a new grid size and build the corresponding grid on button click
const resetGrid = () => {
    if (currentMode === 3) {
        newGridSize = prompt('Enter a size for your new grid (under 33): ', 16);
        if (isNaN(newGridSize) != false || newGridSize === null || newGridSize > 32) {
            alert('Please enter a number that is under 32. Click a button to try again.');
        } else {
            remakeGrid(newGridSize);
        };
    } else {
        newGridSize = prompt('Enter a size for your new grid (under 101): ', 16);
        if (isNaN(newGridSize) != false || newGridSize === null || newGridSize > 100) {
            alert('Please enter a number that is under 101. Click a button to try again.');
        } else {
            remakeGrid(newGridSize);
        };
    };
};

//Button to set back mode
bwBtn.addEventListener('click', () => {
    currentMode = 0;
    resetGrid();
});

//Button to set RGB mode
rgbBtn.addEventListener('click', () => {
    currentMode = 1;
    resetGrid();
});

//Button to set RGB shading mode
gradBtn.addEventListener('click', e => {
    currentMode = 2;
    resetGrid();
});

//Button to set text mode
textBtn.addEventListener('click', () => {
    currentMode = 3;
    resetGrid();
});

//Button to set vaporwave mode
vwBtn.addEventListener('click', () => {
    currentMode = 4;
    resetGrid();
});

//Create initial 16x16 grid on load
createGrid(16);