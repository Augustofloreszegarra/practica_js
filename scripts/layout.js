const navSelector = document.getElementById( "navbar" );

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo comprar?", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

for ( let option of options ) {
  const anchor = document.createElement( "a" );
  anchor.className = "nav-button"
  anchor.textContent = option.title
  anchor.href = option.linkTo
  navSelector.appendChild( anchor )
}