// create grid
// based on size of squares build grid

// mouseover drawing effect 
// change color 
// reset grid
// change grid size 

const grid = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset');
const blkBtn = document.querySelector('.black');
const gryBtn = document.querySelector('.gray');
const rbwBtn = document.querySelector('.rainbow');

function createGrid() {
    for(let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

blkBtn.addEventListener('click', function() {

})

gryBtn.addEventListener('click', function() {

})

rbwBtn.addEventListener('click', function() {
    
})

resetBtn.addEventListener('click', function() {
    window.location.reload();
})


createGrid();