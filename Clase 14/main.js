/* 
setTimeout(funcion, tiempo);
*/

// setTimeout(() => {
//   console.log("hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("final");

// let boton = document.getElementById("boton");
// let mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("final");

// function multiply(x, y){
//   return x * y;
// }

// function printSquare(x){
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("final");

// setInterval(() => {
//   console.log("hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

// new Promise((resolve, reject) => {
//   //cuerpo de a promesa
// })

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor ? resolve(["pepito", "pepita"]) : reject("Error, intente luego");
//     }, 2000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso terminado"));

////////////////////////////////////////////////////////////////////////////////////////////////////
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];

const traerproductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("Error, intente luego");
    }, 3000);
  });
};

///////////////////////////////////////////////////////////////////////////////////////////////////

traerproductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      <b>$${producto.precio}</b>
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `${error}`;

    document.body.append(div);
  });
