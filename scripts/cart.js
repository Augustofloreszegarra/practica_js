const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
console.log(cartData);
console.log(products);



function printDetails ( cartData ) {
  const productos = products.filter(product => {
    return cartData.some(cart => cart.id == product.id);
  });
  
  console.log(productos);
  /* const productDetailSelector = document.getElementById( 'cart-section' )
  productDetailSelector.innerHTML = `
    ${ cartData.map( ( cart ) => `
    <article class="product-cart" id="cartproducts">
    <img src="/assets/${ cart.image }" alt="alt imgaen" class="product-img">
    <div class="product-details">
      <span class="product-description">${ cart.title } ${ cart.color }</span>
      <span class="product-description">${ cart.descriptionLarge }</span>
      <input type="number" class="product-input" value="${ cart.value }">
    </div>
    <span class="product-price">S/ ${ Number( cart.price * cart.igv ).toFixed( 2 ) }</span>
    </article>
    <article class="cart-resume" id="total">
      <div class="cart-data">
        <span class="cart-title">Resumen del pedido</span>
        <div class="cart-total">
          <span>subtotal</span>
          <span>S/ 1500.00</span>
        </div>
        <span class="cart-tax">Incluye impuestos PAIS y percepión AFIP</span>
        <button class="cart-btn">Finaliza Pedido</button>
      </div>
    </article>
    `).join( '' ) }` */
}

printDetails( cartData )