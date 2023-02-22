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

const nombres = ["camila", "andres", "sofia", "alejandra", "fabian", "camila"];
const copia = nombres.slice(1, 4); //realiza una copia de un fragmento del arreglo
console.log(copia);

console.log(nombres.indexOf("camila")); //devuelve la posicion del elemento
console.log(nombres.indexOf("lucas"));
console.log(nombres.includes("andres")); // dice si el elemento existe o no existe
console.log(nombres.includes("lucas"));

nombres.reverse(); //invierte el orden de los elementos del arreglo
console.log(nombres);