//let container = document.getElementById("grid"); this removes the grid
//let grid = document.getElementById("container"); grid remains the same

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
          let cell = document.createElement("div");
          //cell.appendChild(canvas);
          //print("#");
          cell.innerHTML = ""; // need to get this to do a div. Doesn't insert DOM nodes just strings
          cell.className = "cell";
          container.appendChild(cell);

          cell.addEventListener("mouseenter", func, false);
          function func() {
            cell.setAttribute("style", "background: magenta;");
          }
       }
    }
  
  function newGrid() {
    let howManySquares = prompt("How many squares would you like each side of the grid to be? \nFor example, entering 8 will produce an 8 x 8 grid.");
    alert(howManySquares);
  };
