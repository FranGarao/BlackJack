// console.log(persona);

// console.log(persona.alumno);
// console.log(persona["nombre"]);
// userName = prompt("Ingresa tu nombre");
// function promotion(persona) {
//   return (persona.nombre = userName);
// }
// promotion(persona);
// console.log(persona);
// const persona = {
//   nombre: "pepe",
//   apellido: "perez",
//   email: "@gmail",
//   password: "1234",
//   edad: "33",
// };

// function Persona(nombre, apellido, email, password, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.email = email;
//   this.password = password;
//   this.edad = edad;
// }

// //para nuevos objetos se hace una const con el nombre y palabra NEW haciendo referencia al constructor en orden de acuerdo a los parametros

// const persona1 = new Persona(
//   "Pedro",
//   "villagra",
//   "pepepe@gmail",
//   "12345656",
//   "55"
// );
// const persona2 = new Persona(
//   "martin",
//   "lopez",
//   "peaaae@gmail",
//   "123sss45656",
//   "29"
// );
// console.log(persona);
// console.log(persona1);
// console.log(persona2);

// const producto = document.getElementById("producto");
// const agregarProducto = producto.addEventListener("click", () => {});

function Persona12(literal) {
  this.nombre = literal.nombre;
  this.apellido = literal.apellido;
  this.password = literal.password;
  this.nombre = literal.edad;
}

let personita = new Persona12({
  nombre: "pepe",
  apellido: "jose",
  password: "pasoas",
  edad: 23923,
});
console.log(personita);

console.log(cadena.length);
