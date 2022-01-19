const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-button');
const blackBtn = document.querySelector('.black-button');
const rainbowBtn = document.querySelector('.rainbow-button');
const shaderBtn = document.querySelector('.shader-button');
const addColorButtons = document.querySelectorAll('.btn');

let size = 16;
let color = 'black';

function createGrid(size) {
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    
    for(let i = 0; i < (size * size); i++) {
      const grid = document.createElement('div');
      grid.classList.add('grid');
      grid.style.border = '1px solid white';
      gridContainer.appendChild(grid);
    }

    onLoad();
}

function colorGrid() {
    console.log("triggers colorGrid")
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove('shader');
            break;  
        case 'shader':
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('shader');
                }
            } else if (this.classList == 'shader' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
            }
            break;
        case 'black':
            this.style.backgroundColor = '#000000';
            this.classList.remove('shader');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('shader');
            break;
    } 
}

function changeColor(event) {
    console.log("triggers changeColor")
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'shader':
            color = 'shader';
            break;
        default:
            color = 'black';
            break;
    } 
}

addColorButtons.forEach(addColorButton => addColorButton.addEventListener('click', changeColor));

function onLoad() {
    let grid = document.querySelectorAll('.grid');
    grid.forEach(grid => grid.addEventListener('mouseover', colorGrid));
}


resetBtn.addEventListener('click', () => {
    size = Number(prompt('How many rows would you like? \(Max 100\):'));
  if(size <= 100) {
    let grid = document.querySelectorAll('.grid');
    grid.forEach(grid => grid.remove());
    createGrid(size);
  }else{
    alert('Grid size cannot exceed 100!');
  }
})



createGrid(size);