// Oculta el campo de búsqueda en la página
hideSearch();

// Imprime los íconos en la página
printIcons();

// Imprime la barra de navegación en la página
printNavBar(options, "navbar");

// Imprime el pie de página en la página
printFooter(options, "footer");

// Obtiene la consulta de la URL actual
const query = location.search;

// Crea un objeto URLSearchParams a partir de la consulta
const params = new URLSearchParams(query);

// Obtiene el valor del parámetro "id" de la consulta
const id = params.get("id");

// Imprime los detalles del producto con el id especificado
printDetails(id);

// Filtra los productos que están en promoción
const onsale = products.filter((each) => each.onsale);

// Imprime las tarjetas de productos en promoción en la página
printProductCards(onsale, "product-container");

// Obtiene los datos del carrito desde el almacenamiento local
const cartData = JSON.parse(localStorage.getItem('cart') || '[]');

// Imprime los datos del carrito en la consola del navegador
console.log(cartData);