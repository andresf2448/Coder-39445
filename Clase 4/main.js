/* 
estructura de una funcion

function nombre(){
  codigo de la funcion
}
*/

/* function saludar(){
  console.log("Hola");
}

saludar(); */

// function pedirDatos() {
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Hola ${nombre}`;
//   alert(mensaje);
// }

// pedirDatos();
// pedirDatos();
// pedirDatos();

/* 
estructura de una funcion con parametros

function nombre(parm1, parm2, ..., parm3){
  codigo de la funcion
}
*/

// function sumar(numero1, numero2){
//   let mensaje = `El resultado de la operacion es ${numero1 + numero2}`;
//   alert(mensaje);
// };

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// sumar(numero1, numero2);

// function saludar(saludo, nombre){
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("hola", "andres");
// saludar("bienvenida", "camila");

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let resultado = sumar(4, 5);
// console.log(resultado);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("Chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no identificada"
//   }
// }

// let operacion = prompt("Ingrese la operacion");
// let numero1 = parseInt(prompt("Ïngrese el numero uno"));
// let numero2 = parseInt(prompt("Ïngrese el numero dos"));

// let resultado = calculadora(numero1, numero2, operacion);
// let mensaje = `El resultado de la operacion es ${resultado}`;

// alert(mensaje);

// let resultado = 0;

// function sumar(num1, num2){
//   resultado = num1 + num2;
// }

// sumar(3, 4);
// console.log(resultado);

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2){
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(3, 4));

// const suma = (a, b) => a + b;
// console.log(suma(4, 5));

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const iva = (precio) => precio * 0.21;

let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
let descuento = parseInt(prompt("Ingrese el descuento del producto"));
let totaIva = iva(precioProducto);
let sumaConIva = suma(precioProducto, totaIva);

let nuevoPrecio = resta(sumaConIva, descuento);
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resta(1210, 100);
                // = 1110

let mensaje = `El precio es ${nuevoPrecio}`;
alert(mensaje);