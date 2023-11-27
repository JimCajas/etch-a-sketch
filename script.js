


// Ask how big the canvas should be
let gridCols = prompt("Please enter the number of squares per side for the sketch pad. Max. 100", 64);
if (gridCols > 100){
    alert("The maximum number of squares is 100. Please enter again.");
    window.location.reload();
} else {
    let gridRows = gridCols;

    // Create a grid
    const grid = document.createElement("div");
    grid.className = "grid";
    const container = document.querySelector(".container");
    
    for (let i = 0; i < gridCols; i++) {
        const column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < gridRows; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            column.appendChild(gridItem);
            
            // Draw with a mouse movement
            gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = "#ff4500";
            })    
        }
        grid.appendChild(column);
    } 
    container.appendChild(grid);
    
}

// Generate the sketch pad on button click
const button = document.querySelector("button");
button.addEventListener("click", ()=>{

// Ask how big the canvas should be
let gridCols = prompt("Please enter the number of squares per side for the sketch pad. Max. 100", 64);
if (gridCols > 100){
    alert("The maximum number of squares is 100. Please enter again.");
    window.location.reload();
} else {
    let gridRows = gridCols;

    // Create a grid
    const grid = document.createElement("div");
    grid.className = "grid";
    const container = document.querySelector(".container");


    for (let i = 0; i < gridCols; i++) {
        const column = document.createElement("div");
        column.className = "column";
        for (let j = 0; j < gridRows; j++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        column.appendChild(gridItem);
        
        // Draw with a mouse movement
        gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "#ff4500";
        })    
        }
        grid.appendChild(column);
        } 
        container.removeChild(container.firstElementChild);
        container.appendChild(grid);
}

})
