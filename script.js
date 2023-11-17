// Create a grid
let gridBlock = 256;
for (let i = 0; i <= gridBlock; i++) {
    const grid = document.createElement("div");
    grid.className = "grid-item";
    const container = document.querySelector(".grid-container");
    container.appendChild(grid);
}
