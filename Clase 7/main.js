// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); // (m) => m > 5;
// console.log(mayorQueCinco(10));
// console.log(mayorQueCinco(3));

// let mayorQueSiete = mayorQue(7); //(m) => m > 7;
// console.log(mayorQueSiete(8));
// console.log(mayorQueSiete(3));

// function operaciones(operacion){
//   if(operacion === "sumar"){
//     return (x, y) => x + y;
//   }

//   if(operacion === "restar"){
//     return (x, y) => x - y;
//   }

//   if(operacion === "multiplicar"){
//     return (x, y) => x * y;
//   }

//   if(operacion === "dividir"){
//     return (x, y) => x / y;
//   }
// }

// const suma = operaciones("sumar");//(x, y) => x + y;
// console.log(suma(8, 9));

// const resta = operaciones("restar");
// console.log(resta(8, 9));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([1, 2, 3, 4], console.log);

//forEach recorrer el arreglo
// let productos = [
//   { id: 1, nombre: "zapato", precio: 100 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "camisa", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1250 },
// ];

// productos.forEach(producto => { //recorrer el arreglo
//   console.log(producto.nombre);
// });

// let nombre = prompt("Ingrese el nombre del producto a encontrar");

// let producto = productos.find(item => item.nombre === nombre); //encuentra el primer elemento que cumple la condicion dada
// let mensaje = `
//   Id: ${producto.id}
//   Nombre: ${producto.nombre}
//   Precio: $${producto.precio}
// `;

// alert(mensaje);
// let precio = parseInt(prompt("Ingrese el precio minimo"));

// let filtrados = productos.filter((item) => item.precio > precio); //filtrar los productos que cumpolen la condicion dada

// filtrados.forEach((item) => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//   alert(mensaje);
// });

// console.log(productos.some(item => item.nombre === "camisa")); //valida si existe al menos un elemen to cque cumpla la condicion
// console.log(productos.some(item => item.nombre === "camisa1"));

// let productos = [
//   { id: 1, nombre: "zapato", precio: 100 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "camisa", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1250 },
// ];

// let nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// let precios = productos.map((item) => item.precio);
// console.log(precios);

// let preciosModificados = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(preciosModificados);

// const numeros = [1, 5, 4, 3];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// let productos = [
//   { id: 1, nombre: "zapato", precio: 100 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "camisa", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1250 },
// ];

// const total = productos.reduce((acum, item) => acum + item.precio, 100);
// console.log(total);

// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(3, 4, 5, 4, 444));
// console.log(Math.min(3, 4, 5, 4, 444));
// console.log(Math.ceil(3.14));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.7));
// console.log(Math.round(3.2));
// console.log(Math.sqrt(9));
// console.log(Math.random() * 10);
// console.log(Math.ceil(Math.random() * 10));

// console.log(new Date());
// let fecha = new Date(2023, 1, 27);
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toTimeString());
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth());
// console.log(fecha.getDay());

// const navidad = new Date("December 25, 2023");
// const hoy = new Date("february 27, 2023");

// console.log(navidad - hoy);
// const milisegundosPorDia = 86400000;

// console.log((navidad - hoy) / milisegundosPorDia);