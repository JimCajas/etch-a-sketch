// Create a grid
const canvasDot = 16
let squares = canvasDot*canvasDot;
for (let i = 1; i <= squares; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    const container = document.querySelector(".grid-container");
    container.appendChild(gridItem);

    gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "#ff4500";
    })
}


