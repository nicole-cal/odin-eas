// Create 16 x 16 divs using JS
// Try creating line of 16 X first?
// Need to relate createGrid to DOM somehow.

//let canvas = document.createElement("canvas");
let canvas = document.getElementById("canvas");

const example = document.querySelector('#example');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = createGrid();
example.appendChild(content);



function createGrid() {
    for (let i = 0; i < 16; i++) {
     console.log(example);
        for (let j = 0; j < 16; j++) {
           console.log(example); 
        }
    }
}




