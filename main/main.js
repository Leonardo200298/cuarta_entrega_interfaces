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