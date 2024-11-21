"use strict";

/* Variables */
let header = document.querySelector("#header");
let menuDeHamburguesa = document.querySelector("#menuDeHamburguesaContenedor");
let botonComprar = document.querySelector("#botonComprar");
let imagenLogo = document.querySelector("#imagenLogo");
let menuDeHamburguesaInterior = document.querySelector("#menuHambNB")
let contenedorSeccion3 = document.querySelector("#contenedorSeccion3");
let imagenSeccion3 = document.querySelector(".fondoDeSeccion3");
/* Eventos */
window.addEventListener("scroll", capturaDePixeles);
menuDeHamburguesa.addEventListener("click", transicionMenuHamburguesa);
/* direccion opuesta al mousse */
contenedorSeccion3.addEventListener("mousemove", (e)=>{
  
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  
  const speed = imagenSeccion3.getAttribute('data-speed');
  imagenSeccion3.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
});


/* Scroll */
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

/* menu desplegable */
function transicionMenuHamburguesa() {
  const menuHamburguesa = document.getElementById("menuHamburguesa");
  const menuLista = document.getElementById("menuLista");


  menuHamburguesa.classList.toggle("activo");
  menuLista.classList.toggle("activo");
}
/* const section4 = document.querySelector(".section4");
const imagenes = document.querySelectorAll(".imagenesScroll img"); */

/* section4.addEventListener("scroll", () => {
  imagenes.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const sectionRect = section4.getBoundingClientRect();

    // Verifica si la imagen está dentro de la sección visible
    if (rect.top >= sectionRect.top && rect.bottom <= sectionRect.bottom) {
      img.style.transform = "scale(1.2)"; // Aumenta el tamaño
    } else {
      img.style.transform = "scale(1)"; // Vuelve al tamaño normal
    }
  });
}); */



