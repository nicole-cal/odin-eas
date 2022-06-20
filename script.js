// Need to fix opacity thing

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
        const rgb = `rgb(${r}, ${g}, ${b})`;
        console.log(rgb);

        cell.addEventListener("mouseenter", changeColour, false);
        function changeColour() {
        cell.style.backgroundColor = `${rgb}`;
        cell.style.width = `${pixelSizeCell}px`;
        cell.style.height = `${pixelSizeCell}px`;
       }

        cell.addEventListener("mouseenter", addBlack, false);
        function addBlack() {
        cell.style.opacity = '80%'; // Need to fix this so goes in increments.
        cell.style.width = `${pixelSizeCell}px`;
        cell.style.height = `${pixelSizeCell}px`; 
        }
         
     } 
  } if ((howManySquares > 100) || (howManySquares < 1)) {
     alert("Please enter a value between 1 and 100.");
  }

};

function refresh() {
  location.reload();
}