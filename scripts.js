function openImage(game) {
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    overlay.classList.add("active");
    overlayImage.src = `images/${game}.jpg`;
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
}
function handleClick(event, mapName) {
    // Lógica para manejar el clic
    openImage(mapName);
}

"use strict";

let productos = document.querySelectorAll("#imagenes img");

for (let i = 0; i < productos.length; i++) {
    productos[i].setAttribute("draggable", "true");
    productos[i].addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    })
}
