const boton = document.getElementById("btnComenzar");
const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById("musica");

const btnSi = document.getElementById("btnSi");
const btnObvio = document.getElementById("btnObvio");
const respuesta = document.getElementById("respuesta");

boton.addEventListener("click", () => {
    inicio.classList.add("oculto");
    mensaje.classList.remove("oculto");

    musica.currentTime = 0;
    musica.play();
});

btnSi.addEventListener("click", () => {
    respuesta.textContent = "Ushhh me cae mal sabia que diria que si💕✨";
});

btnObvio.addEventListener("click", () => {
    respuesta.textContent = "Igual no se podia negar muejejeje💕🌌";
});
