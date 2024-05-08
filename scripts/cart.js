const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
console.log(cartData);



function printDetails ( cartData ) {
 
  const productDetailSelector = document.getElementById( 'cartSection' )
  productDetailSelector.innerHTML = `
    ${ cartData.map( ( cartData ) => `
    <article class="product-cart" id="cartproducts">
    <img src="/assets/${ cartData.image }" alt="alt imgaen" class="product-img">
    <div class="product-details">
      <span class="product-description">${ cartData.title } ${ cartData.color }</span>
      <span class="product-description">${ cartData.descriptionLarge }</span>
      <input type="number" class="product-input" id="quantity" onchange="changeSubtotal()" value="${ cartData.quantity }">
    </div>
    <span class="product-price">S/ ${ Number( cartData.price * cartData.quantity ).toFixed( 2 ) }</span>
    </article>
    
    `).join( '' ) }
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
    `
    console.log( document.getElementById( "quantity" ).value )
}
function changeSubtotal () {
  const quantityValue = document.getElementById( "quantity" ).value;

  const price = cartData.price; // Obtener el precio como un número
  const total = price * parseInt( quantityValue ); // Calcular el total
  document.getElementById( "price" ).innerText = total.toFixed( 2 );
}

printDetails( cartData )