Copy
Insert
// Función para crear una tarjeta de producto en el carrito
function createCartCard(product) {
  // Retorna una plantilla HTML que muestra la información del producto en la tarjeta del carrito
  return `
    <article class="product-cart">
      <img class="product-img" src="${product.image}" alt="${product.title}">
      <div class="product-details">
        <strong class="product-title">${product.title}</strong><span class="product-description">- ${product.color}</span>
        <p class="product-description">${product.description}</p>
        <input class="product-input" type="number" name="quantity" value=${product.quantity} min="1" id="${product.id}" onchange="changeQuantityCart(event)">
      </div>
      <strong class="price">AR$ ${product.price}</strong>
    </article>
  `;
}