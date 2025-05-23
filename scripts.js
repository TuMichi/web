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
let vCarrito = document.getElementById("mapa");

for (let i = 0; i < productos.length; i++) {
    productos[i].setAttribute("draggable", "true");
    productos[i].addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });
}

vCarrito.addEventListener("dragover", (event) => {
    event.preventDefault();
});

vCarrito.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("aligned-image")) {
        let data = event.dataTransfer.getData("text");
        let draggedElement = document.getElementById(data);
        draggedElement.style.position = "absolute";
        event.target.appendChild(draggedElement);
    }
});
