// Create a grid
let gridBlock = 256;
for (let i = 1; i <= gridBlock; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    const container = document.querySelector(".grid-container");
    container.appendChild(gridItem);

    gridItem.addEventListener("mouseenter", () => {
        gridItem.style.backgroundColor = "#ff4500";
    })
}


