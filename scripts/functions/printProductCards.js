import { createProductCard } from "./createProductCard.js";

// Función para imprimir las tarjetas de productos en la página
export default function printProductCards(arrayOfProducts, idSelector) {
  // Inicializa la variable productsTemplate como una cadena vacía
  let productsTemplate = "";

  // Obtiene el elemento del DOM con el id especificado
  const productsSelector = document.getElementById(idSelector);

  // Verifica si hay productos en el array
  if (arrayOfProducts.length > 0) {
    // Recorre cada elemento del array y llama a la función createProductCard para generar la plantilla de la tarjeta de producto
    for (const element of arrayOfProducts) {
      productsTemplate = productsTemplate + createProductCard(element);
    }

    // Actualiza el contenido del elemento del DOM con la plantilla de las tarjetas de productos
    productsSelector.innerHTML = productsTemplate;
  } else {
    // Si no hay productos en el array, muestra un mensaje de "No hay coincidencias" en el elemento del DOM
    productsSelector.innerHTML = "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
  }
}