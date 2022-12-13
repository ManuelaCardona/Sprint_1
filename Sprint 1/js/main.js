let mon = Number(prompt('Indica cuánto te gastaste el lunes'));
let tue = Number(prompt('Indica cuánto te gastaste el martes'));
let wed = Number(prompt('Indica cuánto te gastaste el miercoles'));
let thu = Number(prompt('Indica cuánto te gastaste el jueves'));
let fri = Number(prompt('Indica cuánto te gastaste el viernes'));
let sat = Number(prompt('Indica cuánto te gastaste el sábado'));
let sun = Number(prompt('Indica cuánto te gastaste el domingo'));

let total = mon + tue + wed + thu + fri + sat + sun;

const contenido1 = document.getElementById("content1");
contenido1.innerHTML = mon;

const contenido2 = document.getElementById("content2");
contenido2.innerHTML = tue;

const contenido3 = document.getElementById("content3");
contenido3.innerHTML = wed;

const contenido4 = document.getElementById("content4");
contenido4.innerHTML = thu;

const contenido5 = document.getElementById("content5");
contenido5.innerHTML = fri;

const contenido6 = document.getElementById("content6");
contenido6.innerHTML = sat;

const contenido7 = document.getElementById("content7");
contenido7.innerHTML = sun;

const contenidoT = document.getElementById("contentT");
contenidoT.innerHTML = total;
