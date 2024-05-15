import { products } from '../products';
import { printProductCards } from './printProductCards.js';
import { options, hideSearch, printNavBar, printFooter, printIcons, showCart, login} from './functions/printLayout.js';

// Imprime los íconos en la página
printIcons();

// Imprime la barra de navegación en la página
printNavBar(options, "navbar");

// Imprime el pie de página en la página
printFooter(options, "footer");

// Imprime las tarjetas de productos en la página
printProductCards(products, "products");
