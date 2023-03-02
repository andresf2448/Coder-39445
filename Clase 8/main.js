// console.log(document.body);

//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola coder</h1>";

// let contenedor = document.getElementById("contenedor");

// let seccion = prompt("Ingrese el nombre de la seccion");

// if(seccion === "carrito"){
//   contenedor.innerHTML = "Bienvenid@ al carrito";
//   contenedor.className = "verde";
// }else if(seccion === "favoritos"){
//   contenedor.innerHTML = "Bienvenid@ a los favoritos";
//   contenedor.className = "azul";
// }else{
//   contenedor.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
//   contenedor.className = "amarillo";
// }

// //primer paso, creación
// let parrafo = document.createElement("p");
// //segundo paso, agregado de contenido
// parrafo.innerHTML = "Hola super coder";
// //tercer paso, asigancion de padre
// // document.body.append(parrafo);
// let contenedor = document.getElementById("contenedor");
// contenedor.append(parrafo);

// let contenedor = document.getElementById("contenedor");
// contenedor.remove();
// const arregloPersonas = ["andres", "camila", "sofia", "juan"];
// let nombre = prompt("Ingrese un nombre");
// arregloPersonas.push(nombre);

// let personas = document.getElementById("personas");

// arregloPersonas.forEach(persona => {
//   let li = document.createElement("li");
//   li.innerHTML = persona;
//   personas.append(li);
// });

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 750 },
  { id: 3, nombre: "zapato", precio: 870 },
  { id: 4, nombre: "correa", precio: 1350 },
  { id: 5, nombre: "media", precio: 1350 },
];

let pepito = document.getElementById("contenedor");

productos.forEach(item => {
  let persona = document.createElement("div");
  persona.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;
  contenedor.append(persona)
});