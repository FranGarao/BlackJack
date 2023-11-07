const producto = document.getElementById("producto");

const agregarProducto = producto.addEventListener("click", () => {
  agregarCarrito();
});

const buzoNike = {
  nombre: "buzo nike",
  talle: "S a XXL",
  valor: 200,
};
const lista = ["nike", "puma", "adidas", "newbalance", "zappa"];
nike = lista[0];
puma = lista[1];
adidas = lista[2];

function agregarCarrito() {
  productoElegido = nike;
  lista.length === 0
    ? console.log("No hay mas productos")
    : console.log(productoElegido);
  return productoElegido;
}
