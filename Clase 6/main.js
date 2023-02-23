// const vacio = [];
// const numeros = [3, 5, 4];
// const nombres = ["camila", "andres", "sofia", "alejandra", "fabian"];
// const valores = [false, true, false, false, true];
// const variados = [1, "camila", true];

// console.log(nombres[0]);
// console.log(nombres[1]);
// console.log(nombres[2]);
// console.log(numeros[0] + numeros[1]);

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["camila", "andres", "sofia"];
// nombres.push("alejandra"); //agrega al final del arreglo
// console.log(nombres);

// nombres.unshift("mariana"); //agrega al incio del arreglo
// console.log(nombres);

// nombres.pop(); // quita el ultimo elemento del arreglo
// console.log(nombres);

// nombres.shift(); //quita el primer elemento del arreglo
// console.log(nombres);

// const nombres = ["camila", "andres", "sofia", "alejandra", "fabian"];
// nombres.splice(1, 3); //elimina uno o varios elementos
// console.log(nombres);

// console.log(nombres.join("----")); //unir los elementos del arreglo separados por lo indicado en el parametro

// const mascotas = ["firu", "max", "zeus"];
// const varios =   mascotas.concat(nombres); //combinar dos arreglos en uno único
// console.log(varios);

// const nombres = ["camila", "andres", "sofia", "alejandra", "fabian", "camila"];
// const copia = nombres.slice(1, 4); //realiza una copia de un fragmento del arreglo
// console.log(copia);

// console.log(nombres.indexOf("camila")); //devuelve la posicion del elemento
// console.log(nombres.indexOf("lucas"));
// console.log(nombres.includes("andres")); // dice si el elemento existe o no existe
// console.log(nombres.includes("lucas"));

// nombres.reverse(); //invierte el orden de los elementos del arreglo
// console.log(nombres);

// const nombres = ["camila", "andres", "sofia", "alejandra", "fabian", "camila"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("sofia");

// const arreglo = [];
// const objeto = {
//   nombre: "mariana",
//   edad: 26,
// };

// arreglo.push(objeto);
// console.log(arreglo);

// arreglo.push({ nombre: "andres", edad: 26 });
// console.log(arreglo);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "correa", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 1350 },
// ];

// for(const producto of productos){
//   console.log(producto.id);
//   console.log(producto.nombre);
// }

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "correa", precio: 850 },
  { id: 4, nombre: "zapato", precio: 1350 },
];

let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

let producto = {
  id: productos.length + 1,
  nombre,
  precio,
};

productos.push(producto);
console.log(productos);
