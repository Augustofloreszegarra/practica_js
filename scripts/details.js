const query = window.location.search;
console.log( query );
const urlParams = new URLSearchParams( query );
const id = urlParams.get( 'id' );
console.log( "primer console log id:"+id );
const product = products.find( ( product ) => product.id === Number( id ) )
/* 
const title = document.getElementsByClassName( 'product-title' );
title[ 0 ].innerText = product.title;

const image = document.getElementsByClassName( 'product-image' ); */

/* function pregunta ( product ) {
  product.id === Number( id )
}

(product) => product.id === Number(id)
console.log( product ); */

function printDetails ( product ) {
  const productDetailSelector = document.getElementById( 'details' )
  productDetailSelector.innerHTML = `
        <section class="product-images-block">
        <div class="product-images">
        ${ product.images.map( ( image ) => `
            <img
            class="mini-img"
            src="/assets/${ image }"
            alt="MacBook Pro 13'4"
            onclick="changeMini(event)"
            />
        `).join( '' ) }
        </div>
        <img
            class="big-img"
            id="big-img"
            src="/assets/${ product.images[ 0 ] }"
            alt="MacBook Pro 13'4"
        />
        </section>
        <div class="product-description-block">
        <h1 class="product-title">${ product.title }</h1>
        <form class="product-selector">
            <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select
                class="product-select"
                type="text"
                placeholder="Selecciona un color"
                id="color"
            >
            ${ product.colors.map( ( color ) => `
                <option value="${ color }">${ color }</option>
                `) }
            </select>
            </fieldset>
        </form>
        <div class="product-description">
            <span class="product-label">Descripción</span>
            <p>
            ${ product.descriptionLarge }
            </p>
        </div>
        </div>
        <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 id="price" class="checkout-total-price">${ Number( product.price ).toFixed( 2 ) }</h2>
            <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar USD
            ${ Number( product.price * product.igv ).toFixed( 2 ) } haciendo la solicitud en Sunat.
            </p>
            <ul class="checkout-policy-list">
            <li>
                <span class="policy-icon"
                ><img src="./assets/truck.png" alt="Truck"
                /></span>
                <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
                >
            </li>
            <li>
                <span class="policy-icon"
                ><img src="./assets/plane.png" alt="Plane"
                /></span>
                <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
                >
            </li>
            </ul>
            <div class="checkout-process">
            <div class="top">
                <input id="quantity" type="number" min="1" value="1" onchange="changeSubtotal()"/>
                <button type="button" class="cart-btn" onclick="saveProduct('${id}')">
                Añadir al Carrito
                </button>
            </div>
            </div>
        </div>
        </div>
    `
}

function changeMini ( event ) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector( "#big-img" );
  bigSelector.src = selectedSrc;
}

printDetails( product )

function changeSubtotal () {
  const quantityValue = document.getElementById( "quantity" ).value;

  const price = product.price; // Obtener el precio como un número
  const total = price * parseInt( quantityValue ); // Calcular el total
  document.getElementById( "price" ).innerText = total.toFixed( 2 );
}

function saveProduct(id) {
  /* Se busca en el array products un objeto cuya propiedad id sea 
  igual al id proporcionado como argumento a la función. 
  El objeto encontrado se asigna a la variable found. */
  const found = products.find((product) => product.id == id);
  
  /* Se crea un nuevo objeto product con las propiedades id, title, price, image, color y quantity. 
  Estos valores se obtienen del objeto encontrado en el paso anterior y de los elementos 
  del DOM seleccionados con los selectores #color y #quantity. */
  const product = {
    id: id,
    title: found.title,
    price: found.price,
    image: found.images[0],
    color: document.querySelector("#color").value,
    descriptionCort: found.descriptionCort,
    descriptionLarge: found.descriptionLarge,
    igv: found.igv,
    quantity: parseInt(document.querySelector("#quantity").value),
  };

  /* Se obtiene el contenido del carrito desde localStorage. Si el carrito tiene elementos, 
  se convierte de JSON a un array y se busca si ya existe un producto con el mismo id y color. 
  Si se encuentra, se incrementa la cantidad del producto existente; de lo contrario, 
  se agrega el nuevo producto al carrito. Si el carrito está vacío, se agrega el nuevo 
  producto directamente. */
  const cart = localStorage.getItem('cart');
  let cartProducts = [];

  if (cart) {
    //se utiliza para convertir la cadena de texto del carrito en un array que se asigna a la variable
    cartProducts = JSON.parse(cart);

    /* Se utiliza el método findIndex() en el array cartProducts para buscar un producto existente que 
    coincida con el id y el color del nuevo producto que se desea agregar. La función de flecha 
    (item) => item.id == id && item.color == product.color se usa como criterio de búsqueda. 
    Si se encuentra un producto existente que coincida, se guarda su índice en la variable existingProductIndex. */
    const existingProductIndex = cartProducts.findIndex((item) => item.id == id && item.color == product.color);
    
    if (existingProductIndex !== -1) { /* Se verifica si se encontró un producto existente en el carrito que 
    coincida con el id y el color del nuevo producto. Si existingProductIndex es diferente de -1, 
    significa que se encontró un producto que coincide. */
      cartProducts[existingProductIndex].quantity += product.quantity;/* Si se encuentra un producto existente 
      que coincide, se incrementa la cantidad del producto existente en el carrito sumándole la cantidad 
      del nuevo producto que se desea agregar. */
    } else {
      cartProducts.push(product);
    }/* En caso de que no se encuentre un producto existente que coincida con el 
      mismo id y color se agrega el nuevo producto al final del array cartProducts ya que no se encontró un 
      producto existente con el mismo id y color*/
  } else {
    cartProducts.push(product);
  }/* Si no hay contenido en el carrito (cuando cart es falso o nulo), en este caso, se agrega el nuevo 
  producto directamente al array cartProducts ya que no hay productos existentes en el carrito.*/

  /* Se guarda el contenido actualizado del carrito en localStorage después de 
  convertirlo a formato JSON. */
  localStorage.setItem('cart', JSON.stringify(cartProducts));

  /* Se imprime en la consola el contenido actual del carrito, 
  lo que te permite ver los productos con las cantidades actualizadas 
  después de realizar las operaciones. */
  console.log('Contenido actual del carrito:', cartProducts);
}