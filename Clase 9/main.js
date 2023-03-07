// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   alert("Hola Click");
// });

// boton.onclick = () => alert("Hola click");

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, () => {
//   alert("Hola Click");
// });

// let funcion = (nombre) => {
//   console.log("Hola Click", nombre);
// };

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });
// boton.addEventListener("mouseup", () => {
//   saludo.className = "verde";
// });
// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });
// boton.addEventListener("mouseout", () => {
//   saludo.className = "azul";
// });

// let saludo = document.getElementById("saludo");
// let nombre = document.getElementById("nombre");
// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "verde";
//   } else if (e.key === "s") {
//     saludo.className = "amarillo";
//   } else if (e.key === "d") {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "azul";
//   }
// });

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// let saludo = document.getElementById("saludo");
// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let inputs = e.target.children;
//   // console.log(inputs[0].value);
//   // console.log(inputs[1].value);

//   if (!inputs[0].value.includes("@")) {
//     inputs[0].value = "";
//   }
// });

// const arreglo = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "gorra", precio: 1270 },
//   { id: 4, nombre: "media", precio: 1500 },
// ];

// arreglo.forEach(item => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h1>${item.id}</h1>
//     <p>${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button>Agregar</button>
//   `;

//   document.body.append(div);
// })