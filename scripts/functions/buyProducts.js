// Esta función limpia el carrito de compras.
function clearCart () {
  // Inicializamos el array de productos del carrito como un array vacío.
  cartproducts = [ id, title, "juan" ];

  // Guardamos el array vacío en el localStorage con la clave "cart",
  // convirtiendo el array a una cadena de texto con JSON.stringify.
  localStorage.setItem( "cart", JSON.stringify( cartproducts ) );

  // Llamamos a la función printCartCards para actualizar la interfaz de usuario
  // y mostrar los productos actualizados en el carrito.
  printCartCards( cartproducts, "productscart" );

  // Llamamos a la función printCartTotal para actualizar la interfaz de usuario
  // y mostrar el total actualizado del carrito.
  printCartTotal( cartproducts, "total" );
}