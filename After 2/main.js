let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 750 },
  { id: 3, nombre: "media", precio: 400 },
  { id: 4, nombre: "correa", precio: 950 },
  { id: 4, nombre: "cacao", precio: 950 },
];

// let precio = 700;

// let encontrados = productos.filter(item => item.precio > precio);
// console.log(encontrados);

let palabra = prompt("Ingrese la palabra");
let cantidad = parseInt(prompt("INgrese la cantidad de items a mostrar"));
// let palabra = "c";
// let cantidad = 2;

let filtrados = productos.filter((item) => item.nombre.includes(palabra));
let mostrados = filtrados.slice(0, cantidad);

mostrados.forEach((item) => {
  let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    precio: ${item.precio}
  `;

  alert(mensaje);
});
