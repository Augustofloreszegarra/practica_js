import { clearCart } from "../functions/buyProducts.js";

// Función para imprimir el resumen del pedido y el botón de compra en la página web
function printCartTotal(arrayOfProducts, id) {
  // Inicializa la variable total como 0
  let total = arrayOfProducts.reduce(  (a, b) => a + b.price * b.quantity,0);

 /*  // Recorre cada producto en el array y calcula el subtotal (precio multiplicado por cantidad)
  // y lo suma a la variable total
  arrayOfProducts.forEach(
    (each) => (total = total + each.price * each.quantity)
  ); */



  // Crea una plantilla HTML con el resumen del pedido y el botón de compra
  const template = `
    <div class="cart-resume">
      <div class="cart-data">
        <h2 class="cart-title"><span>Resumen</span><span>del</span><span>pedido</span></h2>
        <div class="cart-total">
          <h3>Total</h3>
          <strong class="cart-price">${total}</strong>
        </div>
        <small class="cart-tax">Incluye impuesto PAIS y percepción AFIP.</small>
      </div>
      <button class="cart-btn" id="buy" type="button">COMPRAR</button>
    </div>`;

  // Obtiene el elemento del DOM con el id especificado y actualiza su contenido con la plantilla creada
  const selector = document.getElementById(id);
  selector.innerHTML = template;

  // Obtiene el botón de compra del elemento del DOM y agrega un evento de clic que llama a la función clearCart al ser presionado
  const buySelector = document.getElementById("buy");
  buySelector.addEventListener("click", clearCart);
}

export { printCartTotal };