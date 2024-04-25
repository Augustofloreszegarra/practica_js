const searchSelector = document.getElementById( 'search' );
searchSelector.addEventListener( "keyup", captureText );

function captureText () {
  const text = searchSelector.value;
  if ( text.length >= 2 ) {
    const filterProducts = products.filter( ( product ) =>
      product.title.toLowerCase().includes( text.toLowerCase() )
    )
    print( filterProducts, "products" );
  }
}
