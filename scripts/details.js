const query = window.location.search;
console.log( query );
const urlParams = new URLSearchParams( query );
const id = urlParams.get( 'id' );
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
                <button type="button" class="cart-btn" onclick="saveProduct(event)">
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

function saveProduct(event) {
  // Obtener el ID del botón que desencadenó el evento
  const buttonId = event.target.id;
  // Extraer el ID del producto del ID del botón asumiendo un formato específico
  const productId = buttonId.substring(7); // Suponiendo que el ID del botón sigue el formato "addButton-{productId}"

  // Buscar el producto en el arreglo de productos utilizando el método .find
  const product = products.find(product => product.id === productId);

  // Si se encuentra el producto
  if (product) {
      // Crear un objeto con las propiedades de la compra
      const purchase = {
          productId: product.id,
          productName: product.name,
          price: product.price,
          quantity: 1 // Suponiendo que la cantidad por defecto es 1 al añadir al carrito
      };

      // Convertir el objeto a formato JSON
      const purchaseJSON = JSON.stringify(purchase);

      // Guardar el objeto JSON en la memoria del navegador utilizando localStorage
      localStorage.setItem('cartProduct', purchaseJSON);
  } else {
      console.error('Producto no encontrado');
  }
}
changeSubtotal()