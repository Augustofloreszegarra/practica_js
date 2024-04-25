const navSelector = document.getElementById("navbar");
const footerSelector = document.querySelector("#footer");


const options = [
  { title: "Ofertas de la semana", linkTo: "#", opts: ["Laptops", "Audio", "Auticulares"]  },
  { title: "¿Cómo comprar?", linkTo: "#", opts: ["Formas de pago", "Envios", "Devoluciones"]  },
  { title: "Costos y tarifas", linkTo: "#", opts: ["Impuestos", "Facturación"] },
  { title: "Mis pedidos", linkTo: "#", opts: ["Pedir nuevamente", "Lista de deseos"] },
  { title: "Garantía", linkTo: "#", opts: [] },
];

for (let option of options) {
  // Crear el elemento <li>
  const listItem = document.createElement("li");
  listItem.className = "nav-li";
  
  // Adjuntar el elemento <li> al elemento con el id "navbar"
  navSelector.appendChild(listItem);

  // Crear el elemento <a>
  const anchor = document.createElement("a");
  anchor.className = "nav-a";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;

  // Adjuntar el elemento <a> al elemento <li>
  listItem.appendChild(anchor);
  
  // Crear el elemento <ul> que despues le diremos q sera hijo del footer
  const footerUl = document.createElement("ul");
  footerUl.className = "footer-ul";

  // Adjuntar el elemento <ul> al elemento con el id "footer"
  footerSelector.appendChild(footerUl);

  // Crear el elemento <ul> que despues le diremos q sera hijo del footerUl
  const footerColummTitle = document.createElement("li");
  footerColummTitle.className = "footer-main-item";

  // Adjuntar el elemento <ul> al elemento con el id "footer"
  footerUl.appendChild(footerColummTitle);

  // Creamos el elemento <a> del primer li del footer
  const footerColummTitleAnchor = document.createElement("a");
  footerColummTitleAnchor.className = "footer-a";
  footerColummTitleAnchor.textContent = option.title;
  footerColummTitleAnchor.href = option.linkTo;

  // Adjuntar el elemento <a> al elemento con clase footerColummTitleAnchor
  footerColummTitle.appendChild(footerColummTitleAnchor);

  //


}

