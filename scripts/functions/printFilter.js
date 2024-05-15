import { products } from '../products.js';
import { printProductCards } from './printProductCards.js';

// Esta función filtra los productos basándose en el valor del campo de entrada del evento.
// Convierte el título de cada producto y el valor del campo de entrada a minúsculas
// para que la búsqueda sea insensible a mayúsculas y minúsculas.
// Luego, llama a la función printProductCards con los productos filtrados y una cadena "products" como argumentos.
export default function printFilter(evento) {
  // Obtén el valor actual del campo de entrada del evento
  const text = evento.target.value;

  // Filtra los productos basado en el valor del campo de entrada
  // Convierte el título de cada producto y el valor del campo de entrada a minúsculas
  // para que la búsqueda sea insensible a mayúsculas y minúsculas
  const found = products.filter((each) => each.title.toLowerCase().includes(text.toLowerCase()));

  // Llama a la función printProductCards con los productos filtrados y una cadena "products"
  printProductCards(found, "products");
}