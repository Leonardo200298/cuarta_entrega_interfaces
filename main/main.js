"use strict";

let header = document.querySelector("#header");
let menuDeHamburguesa = document.querySelector("#menuDeHamburguesaContenedor");
let botonComprar = document.querySelector("#botonComprar");
let imagenLogo = document.querySelector("#imagenLogo");
let menuDeHamburguesaInterior = document.querySelector("#menuHambNB")


window.addEventListener("scroll", capturaDePixeles);
menuDeHamburguesa.addEventListener("click", transicionMenuHamburguesa);


function capturaDePixeles() {
  if (window.scrollY > 100) { 
    header.classList.add("headerScroll");
    menuDeHamburguesa.classList.add("menuDeHamburguesaScroll");
    botonComprar.classList.add("botonComprarScroll");
    imagenLogo.classList.add("logoScroll");
  } else {
    header.classList.remove("headerScroll");
    menuDeHamburguesa.classList.remove("menuDeHamburguesaScroll");
    botonComprar.classList.remove("botonComprarScroll");
    imagenLogo.classList.remove("logoScroll");

  }
}
function transicionMenuHamburguesa() {
  const menuHamburguesa = document.getElementById("menuHamburguesa");
  const menuLista = document.getElementById("menuLista");

  // Alternar clases para el menú hamburguesa y la lista
  menuHamburguesa.classList.toggle("activo");
  menuLista.classList.toggle("activo");
}







// Selecciona todas las capas
const layers = document.querySelectorAll('.layer');

document.addEventListener('mousemove', (e) => {
  // Calcula la posición del mouse en relación con el centro de la ventana
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  // Ajusta la posición de cada capa según su velocidad
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    layer.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
  });
});



/* paralax vertical */
// Selecciona todas las capas
const layerScroll = document.querySelectorAll('.layerScroll');

window.addEventListener('scroll', () => {
  // Calcula el desplazamiento de scroll
  const scrollTop = window.scrollY;

  layerScroll.forEach(layer => {
    // Obtén la velocidad desde el atributo data-speed
    const speed = layer.getAttribute('data-speed');
    // Mueve la capa verticalmente según la velocidad
    layer.style.transform = `translateY(${-scrollTop * speed}px)`;
  });
});

