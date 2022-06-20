// Need to fix opacity thing
// Black is rgb(0,0,0)

function newGrid() {
    let howManySquares = prompt("How many squares would you like each side of the grid to be, between 1 and 100? \nFor example, entering 8 will produce an 8 x 8 grid.");

    let pixelSizeCell = ((720 - [howManySquares * 4]) / howManySquares); // Calculation takes into account cell border: 2px on each side.

    for (let i = 0; (i < howManySquares && howManySquares < 100); i++) {
      for (let j = 0; (j < howManySquares && howManySquares < 100); j++) {
      
        let cell = document.createElement("div");
        cell.innerHTML = ""; 
        cell.className = "cell";
        container.appendChild(cell);
        cell.style.width = `${pixelSizeCell}px`;
        cell.style.height = `${pixelSizeCell}px`;

        const randomColour = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomColour(0, 255);
        const g = randomColour(0, 255);
        const b = randomColour(0, 255);
        const a = 1;
        const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
        console.log(rgba);

        cell.addEventListener("mouseenter", changeColour, false);
        function changeColour() {
        cell.style.backgroundColor = `${rgba}`;
        cell.style.width = `${pixelSizeCell}px`;
        cell.style.height = `${pixelSizeCell}px`;
       } 

  } if ((howManySquares > 100) || (howManySquares < 1)) {
     alert("Please enter a value between 1 and 100.");
  }

 }
};

function refresh() {
  location.reload();
}