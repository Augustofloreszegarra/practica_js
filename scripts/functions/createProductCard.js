// Función para crear una tarjeta de producto
function createProductCard(product) {
  // Devuelve la plantilla HTML para mostrar la información del producto
  return `
    <a class="product-card" href="./details.html?id=${product.id}">
      <img class="product-img" src="${product.images[0]}" alt="${product.id}">
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.colors[0]}</span>
        <div class="product-price-block">
          <span class="product-price">$${product.price}</span>
          <span class="product-discount">50% Off</span>
        </div>
        <div class="product-tax-policy">Incluye impuesto país y percepción AFIP</div>
      </div>
    </a>
  `;
}

export { createProductCard }