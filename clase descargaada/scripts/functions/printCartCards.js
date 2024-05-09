// Función para imprimir las tarjetas del carrito en la página web
function printCartCards(arrayOfProducts, id) {
  // Inicializa una cadena vacía para almacenar las plantillas de las tarjetas del carrito
  let cartTemplates = "";

  // Obtiene el elemento del DOM con el id especificado
  const selector = document.getElementById(id);

  // Verifica si hay productos en el array
  if (arrayOfProducts.length > 0) {
    // Recorre cada elemento del array y genera la plantilla de la tarjeta del carrito llamando a la función createCartCard
    for (const element of arrayOfProducts) {
      cartTemplates = cartTemplates + createCartCard(element);
    }

    // Actualiza el contenido del elemento del DOM con las plantillas de las tarjetas del carrito
    selector.innerHTML = cartTemplates;
  } else {
    // Si no hay productos en el array, muestra un mensaje de "No hay productos en el carrito" en el elemento del DOM
    selector.innerHTML = `
      <article class="product-cart">
        <strong class="product-title" style='width: 100%; text-align: center'>No hay productos en el carrito</strong>
      </article>
    `;
  }
}