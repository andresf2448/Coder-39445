/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}

*/

/* 
= => asignacion
== => comparación solo de valor
=== => comparacion tanto de valor como tipo de dato
*/

// let nombre = "";

// if(nombre){
//   console.log("hola entramos al if");
// }

/* 
estructura del if else

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}
*/

// let respuesta = prompt("Terminaste la tarea???");

// if(respuesta === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando todas las condiciones anteriores son falsas
}
*/

// let edad = parseInt(prompt("Ingrese la edad"));

// if(edad < 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar a la fiesta con un adulto");
// }else{
//   alert("Puedes entrar a la fiesta");
// }

// let numero = 5;
// let valor = numero > 10;

// console.log(valor);

/* 
valor1 && valor2 es verdadero cuando ambos valores son verdaderos, de lo contrario es falso

valor1 || valor2 es verdadero cuando al menos uno de los valores es verdadero, de lo contrario es falso
*/

// let nombre =  "";

// if(nombre !== "" && nombre === "andres"){
//   console.log("Hola andres");
// }else{
//   console.log("nombre incorrecto");
// }

// let apellido = "ruiz";

// if(apellido === "ruiz" || apellido === "RUIZ"){
//   console.log("Hola Don Ruiz");
// }else{
//   console.log("apellido incorrecto");
// }

// let apellido = "ruiz";

// if(apellido.toLowerCase() === "ruiz"){
//   console.log("Hola Don Ruiz");
// }else{
//   console.log("apellido incorrecto");
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// if(numero % 2 === 0){
//   alert("El numero es par");
// }else{
//   alert("El número es impar");
// }
let palabra = prompt("Ingrese la palabra");

if(palabra.includes("s")){
  alert("La palabra contiene la letra s");
}else{
  alert("La palabra no contiene la letra s");
}

console.log();