/* 
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}

if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que la condicion2 sea verdadera
}else{
  codigo a ejecutar en caso de que ninguna de las condiciones sea verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "pepito"){
//   alert("El usuario es incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

/* 
estructura de las funciones

function nombreFuncion(parm1, ..., parmn){
  codigo de la funcion
}

const nombreFuncion = (parm1, ..., parmn) => {
  codigo de la funcion
}
*/

/* 
estructura de las funciones constructoras

function NombreFuncion(parm1, ..., parmn){
  this.parm1 = parm1;
  .
  .
  .
  this.parmn = parmn;
}
*/

/*
estructura de las clases

class NombreClase{
  constructor(parm1, ..., parmn){
    this.parm1 = parm1;
    .
    .
    .
    this.parmn = parmn;
  }

  hablar(){

  }
}
*/

// class Persona{
//   constructor(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar(){
//     console.log("hola");
//   }

//   llamar(){
//     this.hablar();
//   }
// }

// let encontrado = arreglo.find(condicion);
// encontrado.hablar();

// const personas =  ["marina", "natalia", "camila", "pepito"];
// let contenedor = document.getElementById("contenedor");

// personas.forEach(persona => {
//   let div = document.createElement("div");
//   div.innerHTML = persona;

//   contenedor.append(div);
// });

// for(const persona of personas){
//   let div = document.createElement("div");
//   div.innerHTML = persona;

//   contenedor.append(div);
// }

// let formulario = document.getElementById("formulario");
// let usuarios;

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   // console.log(e);
//   // console.log(inputs);
//   let nombre = inputs[0].value;
//   let edad = inputs[1].value;

//   let objeto = {
//     nombre,
//     edad,
//   };

//   let usuariosStoreage = localStorage.getItem("usuarios");

//   if (usuariosStoreage) {
//     usuarios = JSON.parse(usuariosStoreage);
//   } else {
//     usuarios = [];
//   }

//   usuarios.push(objeto);
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
// });

let contenedor = document.getElementById("contenedor");
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const agregarProducto = (id) => {
  let producto = productos.find(item => item.id === id);
  console.log(producto);
};
productos.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.producto}</p>
    <b>$${producto.precio}</b>
    <button id="boton${producto.id}">Agregar</button>
  `;

  contenedor.append(div);
  let boton = document.getElementById(`boton${producto.id}`);
  boton.addEventListener("click", () => agregarProducto(producto.id));
});
