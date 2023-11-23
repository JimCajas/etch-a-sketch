// Create a grid

const gridCols = 100;
const gridRows = 100;

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

        gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "#ff4500";
        })    
    }
    grid.appendChild(column);
} 
container.appendChild(grid);


