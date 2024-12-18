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

/* scroll */
function capturaDePixeles() {
  let menuLista = document.getElementById("menuLista");
  if (window.scrollY > 100) {
    header.classList.add("headerScroll");
    menuDeHamburguesa.classList.add("menuDeHamburguesaScroll");
    botonComprar.classList.add("botonComprarScroll");
    imagenLogo.classList.add("logoScroll");
    menuLista.classList.add("scrolled"); 
  } else {
    header.classList.remove("headerScroll");
    menuDeHamburguesa.classList.remove("menuDeHamburguesaScroll");
    botonComprar.classList.remove("botonComprarScroll");
    imagenLogo.classList.remove("logoScroll");
    menuLista.classList.remove("scrolled");
  }
}

/* menu desplegable */
function transicionMenuHamburguesa() {
  const menuHamburguesa = document.getElementById("menuHamburguesa");
  const menuLista = document.getElementById("menuLista");


  menuHamburguesa.classList.toggle("activo");
  menuLista.classList.toggle("activo");
}







// Selecciona todas las capas
const layers = document.querySelectorAll('.layer');

document.addEventListener('mousemove', (e) => {
 
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    layer.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
  });
});



/* paralax vertical */
// Selecciona todas las capas
const layerScroll = document.querySelectorAll('.layerScroll');

window.addEventListener('scroll', () => {

  const scrollTop = window.scrollY;

  layerScroll.forEach(layer => {
    
    const speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateY(${-scrollTop * speed}px)`;
  });
});




/* cambio de imagenes dependiendo de la altura del scroll */
// Selecciona todas las imágenes de section4 y el contenedor .section4
const images = document.querySelectorAll('.section4 .image');
const section4 = document.querySelector('.section4');

// Función para manejar las transiciones según la posición del scroll
function updateActiveImage() {
  const scrollPosition = window.scrollY;
  const sectionTop = section4.offsetTop; 
  const sectionHeight = section4.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  // Verifica sección 4
  if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    const relativeScroll = scrollPosition - sectionTop + 100; 
    const step = sectionHeight / images.length; 

    images.forEach((image, index) => {
     
      if (relativeScroll >= step * index && relativeScroll < step * (index + 1)) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  } else {
    
    images.forEach(image => image.classList.remove('active'));
  }
}

// Escucha el evento de scroll
window.addEventListener('scroll', updateActiveImage);

// Llama a la función al cargar la página para establecer el estado inicial
updateActiveImage();
