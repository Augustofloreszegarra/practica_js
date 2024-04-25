

function createdCard ( product ) {
  return `
    <a class="product-card" href="./details.html?id=${ product.id }">
    <img class="product-img" src="/assets/${ product.images[ 0 ] }" alt="iPad Pro 12.9" />
    <div class="product-info">
    <span class="product-title">${ product.title }</span>
    <span class="product-description">${ product.description }</span>
    <div class="product-price-block">
        <span class="product-price">${ product.price }</span>
        <span class="product-discount">${ product.discount }% Off</span>
    </div>
    <div class="product-tax-policy">
        Incluye impuesto País y percepción AFIP
    </div>
    </div>
    </a>
`
}

function print ( array, selector ) {
  let productTemplate = "";
  for ( let product of array ) {
    productTemplate += createdCard( product );
  }
  const productSeletor = document.getElementById( selector );
  productSeletor.innerHTML = productTemplate;
}

print( products, "products" );