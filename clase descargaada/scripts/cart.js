// Oculta el campo de búsqueda en la página
hideSearch();

// Imprime los íconos en la página
printIcons();

// Imprime la barra de navegación en la página
printNavBar(options, "navbar");

// Imprime el pie de página en la página
printFooter(options, "footer");

// Obtiene los productos del carrito del almacenamiento local y los convierte a un array
let cartproducts = JSON.parse(localStorage.getItem("cart"));

// Verifica si no hay productos en el carrito y los inicializa como un array vacío si es así
if (!cartproducts) {
  cartproducts = [];
}

// Imprime las tarjetas de productos del carrito en la página
printCartCards(cartproducts, "productscart");

// Calcula y muestra el total del carrito en la página
printCartTotal(cartproducts, "total");