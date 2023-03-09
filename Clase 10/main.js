// console.log(localStorage);

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", "5");
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// sessionStorage.setItem("nombre", "pepito");

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log(localStorage.getItem(clave));
// }

// localStorage.removeItem(clave); //elimina solo un elemento
// localStorage.clear(); //elimina todo el storage

// let objeto = {
//   nombre: "andres",
//   edad: 26,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));
// localStorage.setItem("array", JSON.stringify([1, 2, 3, 4, 5]));

// let objeto = JSON.parse(localStorage.getItem("objeto"));
// console.log(objeto);

// const productos = [
//   { id: 1, nombre: "zapato", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 1350 },
//   { id: 3, nombre: "media", precio: 750 },
//   { id: 4, nombre: "gorra", precio: 411 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardar(item.id, JSON.stringify(item))
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   alert(`Bienvenido nuevamente ${usuario}`);
// }else{
//   usuario = prompt("Ingrese el usuario");
//   alert(`Hola ${usuario} es tu primera vez`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "zapato", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 1350 },
//   { id: 3, nombre: "media", precio: 750 },
//   { id: 4, nombre: "gorra", precio: 411 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let boton = document.getElementById("borrar");
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "El carrito está vacio";
  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

boton.addEventListener("click", () => {
  localStorage.clear();
  alert("carrito borrado");
  location.reload();
});
