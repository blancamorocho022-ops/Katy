const estrellas = document.querySelector(".estrellas");

for (let i = 0; i < 150; i++) {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.top = Math.random() * window.innerHeight + "px";
    estrella.style.left = Math.random() * window.innerWidth + "px";

    const tamaño = Math.random() * 3 + 1;

    estrella.style.width = tamaño + "px";
    estrella.style.height = tamaño + "px";

    estrella.style.animationDuration = (Math.random() * 3 + 2) + "s";

    estrellas.appendChild(estrella);

}
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    musica.play();
    musica.currentTime= 35;
    mensaje.classList.remove("oculto");
    boton.style.display = "none";
});