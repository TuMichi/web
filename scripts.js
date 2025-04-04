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
