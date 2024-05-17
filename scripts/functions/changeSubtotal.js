import { products } from "../products.js";
// Función para actualizar el subtotal en función del cambio de cantidad en el carrito
function changeSubtotal(event) {
  // Obtiene el valor del input que disparó el evento
  const value = event.target.value;

  // Obtiene el ID del producto a partir del ID del input
  const id = event.target.id.slice(9);

  // Busca el producto en el array de productos utilizando el ID
  const found = products.find((each) => each.id === id);

  // Calcula el nuevo subtotal multiplicando el precio del producto por la cantidad seleccionada
  const subtotal = found.price * value;

  // Obtiene el elemento del DOM con el ID "price"
  const priceSelector = document.querySelector("#price");

  // Actualiza el contenido del elemento del DOM con el nuevo subtotal
  priceSelector.innerHTML = "$" + subtotal;
}

export { changeSubtotal };