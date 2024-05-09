// Esta función se utiliza para cambiar la cantidad de un producto en el carrito.
function changeQuantityCart(event) {
  // Obtener el array de productos del carrito almacenado en el localStorage y convertirlo de nuevo a un objeto.
  let cartproducts = JSON.parse(localStorage.getItem("cart"));
  
  // Encontrar el producto correspondiente en el carrito basado en el ID del producto.
  let one = cartproducts.find((each) => each.id === event.target.id);
  
  // Actualizar la cantidad del producto encontrado con el nuevo valor ingresado en el evento.
  one.quantity = event.target.value;
  
  // Llamar a la función printCartTotal para actualizar la interfaz de usuario
  // y mostrar el total actualizado del carrito después de cambiar la cantidad del producto.
  printCartTotal(cartproducts, "total");
}