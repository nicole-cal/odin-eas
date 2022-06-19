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
  
    //let hover = document.getElementById("container"); // works on grid using grid as ID
    // how to get from grid to cell?
  
    //hover.addEventListener("mouseenter", func, false);

    //function func() {
    //hover.setAttribute("style", "background: magenta;");
    //}  
  
