const navSelector = document.getElementById( "navbar" );
const footerSelector = document.querySelector( "#footer" );

const navOptions = [
  {
    title: "Inicio",
    linkTo: "#",
    opts: [""]
  },
  {
    title: "Productos",
    linkTo: "#",
    opts: [ "Laptops", "Audio", "Auticulares" ]
  },
  {
    title: "Ofertas",
    linkTo: "#",
    opts: [ "Ofertas de la semana", "Ofertas del mes" ]
  },
  {
    title: "Contacto",
    linkTo: "#",
    opts: [ "Formulario", "Ubicación" ]
  },
  {
    title: "Ayuda",
    linkTo: "#",
    opts: [ "Preguntas frecuentes", "Soporte" ]
  }
]

const Footeroptions = [
  {
    title: "Ofertas de la semana",
    linkTo: "#",
    opts: [ "Laptops", "Audio", "Auticulares" ]
  },
  {
    title: "¿Cómo comprar?",
    linkTo: "#",
    opts: [ "Formas de pago", "Envios", "Devoluciones" ]
  },
  {
    title: "Costos y tarifas",
    linkTo: "#",
    opts: [ "Impuestos", "Facturación" ]
  },
  {
    title: "Mis pedidos",
    linkTo: "#",
    opts: [ "Pedir nuevamente", "Lista de deseos" ]
  },
  {
    title: "Garantía",
    linkTo: "#",
    opts: [""]
  },
  {
    title: "Contacto",
    linkTo: "#",
    opts: [ "Formulario", "Ubicación" ]
  },
  {
    title: "Ayuda",
    linkTo: "#",
    opts: [ "Preguntas frecuentes", "Soporte" ]

  }
];

// navbar
for ( let option of navOptions ) {
  // Crear el elemento <li>
  const listItem = document.createElement( "li" );
  listItem.className = "nav-li";

  // Adjuntar el elemento <li> al elemento con el id "navbar"
  navSelector.appendChild( listItem );

  // Crear el elemento <a>
  const anchor = document.createElement( "a" );
  anchor.className = "nav-a";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;

  // Adjuntar el elemento <a> al elemento <li>
  listItem.appendChild( anchor );
}

for ( let option of Footeroptions ) {

  //--------------------------------footer--------------------------------
  // Crear el elemento <ul> que despues le diremos q sera hijo del footer
  const footerUl = document.createElement("ul");
  footerUl.className = "footer-ul";

  // Crear el elemento <ul> que despues le diremos q sera hijo del footerUl
  const footerColummTitle = document.createElement( "li" );
  footerColummTitle.className = "footer-main-item";

  // Creamos el elemento <a> del primer li del footer
  const footerColummTitleAnchor = document.createElement( "a" );
  footerColummTitleAnchor.className = "footer-a";
  footerColummTitleAnchor.innerText = option.title;
  footerColummTitleAnchor.href = option.linkTo;

  // Adjuntar el elemento <a> al elemento con clase footerColummTitleAnchor/*  */
  footerColummTitle.appendChild( footerColummTitleAnchor );
  footerUl.appendChild( footerColummTitle );

  for ( let opt of option.opts ) {
    const footerLi = document.createElement( "li" );
    footerLi.className = "footer-li";
    const footerLiAnchor = document.createElement( "a" );
    footerLiAnchor.className = "footer-a";
    footerLiAnchor.innerText = opt;
    footerLiAnchor.href = "#";
    footerLi.appendChild( footerLiAnchor );
    footerUl.appendChild( footerLi );
  }

  footerSelector.appendChild( footerUl );
  //
}

