// let nombre = "Camila";
// let edad = 18;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, clave3: valor3, ..., claven: valorn}
*/

// const persona = {
//   nombre: "camila",
//   edad: 18,
//   direccion: "AV"
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// function Persona(tuNombre, tuEdad, tuDireccion){
//   this.nombre = tuNombre;
//   this.edad = tuEdad;
//   this.direccion = tuDireccion;
// }

// let nombre = prompt("Ingrese el nombre");
// let edad = prompt("Ingrese la edad");
// let direccion = prompt("Ingrese la direccion");

// const persona1 = new Persona(nombre, edad, direccion);

// console.log(persona1);

// function Persona(info) {
//   this.nombre = info.tuNombre;
//   this.edad = info.tuEdad;
//   this.direccion = info.tuDireccion;
//   this.peso = info.tuPeso;
// }

// const persona1 = new Persona({
//   tuEdad: 18,
//   tuDireccion: "AV",
//   tuNombre: "Camila",
//   tuPeso: 60
// });

// const persona2 = new Persona({
//   tuEdad: 18,
//   tuDireccion: "AV",
//   tuNombre: "Camila",
//   tuPeso: 60
// });

// function Producto(nombre, precio, imagen) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
//   this.hablar = function () {
//     console.log(`Hola Soy ${this.nombre}`);
//   };
// }

// const producto1 = new Producto(
//   "Monitor gamer ...",
//   659900,
//   "http:asdfgalskdfjalsdkf"
// );
// producto1.hablar();
// console.log(producto1);

// function Producto(nombre, precio, imagen) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto(
//   "Monitor gamer ...",
//   659900,
//   "http:asdfgalskdfjalsdkf"
// );

// for (const clave in producto1) {
//   console.log("clave", clave);
//   console.log("valor", producto1[clave]);
// }

//CLASES
// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("Camila", 18, "AV");
// console.log(persona1);

// class Producto{
//   constructor(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("Monitor", 1000);
// const producto2 = new Producto("Monitor1", 1000);

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad -= 1; //this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto("Monitor", 1000, 5);
const producto2 = new Producto("Monitor1", 1000, 5);

console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);


