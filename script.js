// Need to relate createGrid to DOM somehow.

let canvas = document.getElementById("canvas");

/* const example = document.querySelector('#example');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = createGrid();
example.appendChild(content); */


//let container = document.getElementById("grid"); ****
let grid = document.getElementById("container");
//let container = document.getElementById("cell");

// How to get the ## below into the container or canvas?? Need to append it to that somehow??
// Is the thing below locked into local scope?

//function print(s) {document.getElementById('out').innerHTML += s;}
//function println(s) {document.getElementById('out').innerHTML += s + '\n';}


    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
          let cell = document.createElement("div");
          //cell.appendChild(canvas);
          //print("#");
          cell.innerHTML = "##"; // need to get this to do a div. Doesn't insert DOM nodes just strings
          cell.className = "cell";
          container.appendChild(cell);
        }
    }
  
  


  

/* let canvas = document.querySelector('#canvas');
canvas.appendChild(container); */

//createGrid();



