import { products } from "../products.js";

// Función para guardar un producto en el carrito
function saveProd(id) {
  // Encuentra el producto con el id especificado en la lista de productos
  const found = products.find((each) => each.id === id);

  // Crea un objeto con los detalles del producto seleccionado
  const product = {
    id: id,
    title: found.title,
    price: found.price,
    description: found.description,
    image: found.images[0],
    color: document.querySelector("#color-" + id).value,
    quantity: Number(document.querySelector("#quantity-" + id).value),
  };

  // Obtiene los productos existentes en el carrito del almacenamiento local
  const storage = localStorage.getItem("cart");

  // Verifica si ya hay productos en el carrito
  if (storage) {
    // Si hay productos en el carrito, los convierte a un array y agrega el nuevo producto
    const parseStorage = JSON.parse(storage);
    parseStorage.push(product);

    // Convierte el array de productos de nuevo a una cadena JSON y lo guarda en el almacenamiento local
    const stringifyProducts = JSON.stringify(parseStorage);
    localStorage.setItem("cart", stringifyProducts);
  } else {
    // Si no hay productos en el carrito, crea un array con el nuevo producto y lo guarda en el almacenamiento local
    const stringifyProduct = JSON.stringify([product]);
    localStorage.setItem("cart", stringifyProduct);
  }
}

export { saveProd };