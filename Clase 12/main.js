// let numero = 5;

// numero = numero + 1;
// numero += 1;
// numero++;

/* let edad = 15;

if(edad >= 18){
  console.log("Puede entrar");
}else{
  console.log("no puede entrar");
} */

/* 
estructura del operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa;
*/
// let edad = 19;

// edad >= 18 ? console.log("Puede entrar") : console.log("no puede entrar");

// let usuario = {
//   nombre: "camila",
//   edad: 10,
// };
// let permiso;

// if(usuario.edad >= 18){
//   permiso = true;
// }else{
//   permiso = false;
// }

// if(permiso){
//   console.log("puedes entrar");
// }else{
//   console.log("no puedes entrar");
// }

// let usuario = {
//   nombre: "camila",
//   edad: 10,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar") : console.log("no puedes entrar");

/* 
operador1 && operador2 retona operador2 si operador1 representa algo verdadero, de lo contrario retorna operador1 (si operador1 verdadero retorna el siguiente)

operador1 || operador2 retorna operador1 si este representa algo verdadero, de lo contrario retorna operador2 (si operador1 verdadero se retorna el mismo)
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito esta vacio");
// }

// carrito.length === 0 && console.log("El carrito esta vacio");

// let usuario = {
//   nombre: "camila",
//   edad: 20,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log( 0 || "Falsy") //falsy
// console.log( 40 || "Falsy") //40
// console.log( null || "Falsy") //falsy
// console.log( undefined || "Falsy") //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy") //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") //falsy

// let usuario1 = {
//   nombre: "camila",
//   edad: 20,
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;

// let carritoStorage = JSON.parse(localStorage.getItem("carrito"))

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// let usuario1 = {
//   nombre: "camila",
//   edad: 20,
// };

// console.log(usuario1?.nombre || "El usuario no existe");

// let usuario1 = {
//   nombre: "camila",
//   edad: 20,
//   telefonos: {
//     casa: 123,
//     trabajo: 345,
//     personal: 234,
//   },
// };

// console.log(usuario1?.telefonos?.casa);

// let usuario = {
//   nombre: "pepito",
//   edad: 45,
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// let { nombre, edad } = usuario;
// console.log(nombre, edad);

// let usuario = {
//   nombre: "pepito",
//   edad: 45,
//   telefonos: {
//     casa: 1234,
//     trabajo: 234234,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { casa },
// } = usuario;

// console.log(nombrePersona, casa);

// const destructurar = ({ nombre, edad }) => {
//   console.log(nombre);
//   console.log(edad);
// };

// const usuario = { nombre: "Pepito", edad: 50 };
// destructurar(usuario);

// const nombres = ["calitos", "pepito", "pepita"];

// const [a, , b] = nombres;
// console.log(a, b);

// let numero1 = 5;
// let numero2 = numero1;

// numero2 = 10;
// console.log(numero1);

// const usuario1 = { nombre: "martin", edad: 14 };
// const usuario2 = {...usuario1};

// usuario2.nombre = "mariana";
// console.log(usuario1);

// const nombres = ["juan", "kevin"];
// console.log(...nombres);
// console.log(nombres.join(" "));
// let numeros = [1, 2, 3, 4, 5, 6, 4, 3, 3, 455];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const usuario1 = { nombre: "Pepito", edad: 50 };
// const usuario2 = {
//   ...usuario1,
//   edad: 100,
//   direccion: "AV",
// };

// console.log(usuario2);

const sumar = (...numeros) => {
  console.log(numeros.reduce((acum, item) => acum + item, 0));
};

sumar(1, 2, 4, 6, 8, 9);
