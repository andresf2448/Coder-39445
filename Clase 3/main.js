/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
//i++ === i = i + 1;

// for(let i = 0;  i < 100;  i++){
//   console.log("Hola", i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("No hay mas turnos");

// for (let i = 0; i < 10; i++) {
//   if(i === 5){
//     console.log("NUmero del break", i);
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   // if(i === 5){
//   //   continue;
//   // }

//   console.log(i);
// }

/* 
estructura del while

while(condicion){
  codigo a repetir siempre que la condicion se, averdadera
}
*/

// let repetir = true; //CUIDADO BUCLE INFINITO!!!!!!!!!!!!!!

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "camila"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenida");

// let repetir = false;

// while(repetir){
//   console.log("entramos");
// }

// do{
//   console.log("entramos");
// }while(repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor sea igual a valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que valor sea igual a valor2
    break;

  .
  .
  .

  default:
    codigo a ejecutar en caso de que valor no sea ninguno de los anteriores
    break;
}
*/

// let moneda = "usd";

// switch(moneda){
//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "ars":
//     console.log("Moneda de argentina");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//     default:
//       console.log("Moneda no reconocida");
//       break;
// }

let entrada = prompt("Ingrese un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ANA");
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;

    default:
      alert("Quién eres?");
      break;
  }

  entrada = prompt("Ingrese un nombre");
}
