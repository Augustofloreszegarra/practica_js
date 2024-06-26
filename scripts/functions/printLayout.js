// Definimos las opciones de la barra de navegación y el pie de página
const options = [
  {
    title: "Ofertas",
    href: "./index.html",
    refs: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    href: "./index.html",
    refs: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    href: "./index.html",
    refs: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    href: "./index.html",
    refs: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía", href: "./index.html", refs: [] },
];

// hideSearch: esta función oculta el campo de búsqueda si la página no es la principal
function hideSearch() {
  const pathname = location.pathname;
  // Verificamos si la página no es la principal
  if (!pathname.includes("index")) {
    // Removemos el campo de búsqueda del encabezado
    document
      .querySelector(".header-form")
      .removeChild(document.querySelector(".header-input"));
  }
}

// printNavBar: esta función imprime la barra de navegación en la página
function printNavBar(opts, id) {
  // Inicializamos una variable template para construir la plantilla HTML
  let template = "";

  // Iteramos sobre cada objeto en el array opts
  for (const each of opts) {
    // Construimos la plantilla HTML para cada opción
    template =
      template +
      `
      <li class="nav-li">
        <a class="nav-a" href="${each.href}">${each.title}</a>
      </li>
    `;
  }

  // Obtener el elemento del DOM con el ID especificado en id
  const selector = document.getElementById(id);

  // Establecer el contenido HTML del elemento con la plantilla construida
  selector.innerHTML = template;
}

// printFooter: esta función imprime el pie de página en la página
function printFooter(opts, id) {
  // Inicializamos una variable template para construir la plantilla HTML
  let template = "";

  // Iteramos sobre cada objeto en el array opts
  for (const each of opts) {
    // Construimos la plantilla HTML para cada opción
    template =
      template +
      `
        <ul class="footer-ul">
        <li class="footer-main-item">
          <a class="footer-a" href="./index.html">${each.title}</a>
        </li>
        ${each.refs
          .map(
            (ref) =>
              `<li class="footer-li"><a class="footer-a" href="./index.html">${ref}</a></li>`
          )
          .join("")}
      </ul>
    `;
  }

  // Obtener el elemento del DOM con el ID especificado en id
  const selector = document.getElementById(id);

  // Establecer el contenido HTML del elemento con la plantilla construida
  selector.innerHTML = template;
}

function printIcons() {
  let template = `
      <li id="facebook" class="header-li">
        <a class="header-a" href="https://facebook.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/RJREFUaEPtmVuoVlUQx3//fMjESMkkSyi1XrIgUjSILlCQiBVKFIRgYFAaYWqJogVdoVCLKEXMCkQwhIioECqMMPNF8ckkugndMwpT8qlpj+wT3zlnX2avvT/kgPN2zl5z+a2Zvfas+cQIF43w+DkLcKYz2FkGzGwyMAe4GbgF8L975Yfs/59mz/cAuyX91AV8KwAzuwxYAcwFrmgY0FfAh8AGSQ6XJEkAZjYGWAesSfI6XOkJSc+m2GoMYGZ3AZuBSSkOK3SOAoslfdLEbhgg3/U3gHubOEhYu0XSQ1G9EICZTQA+Aq6NGm65zl/2eZJO1tmpBTCz84C9wHV1xjp+7hs2R9K/VXYjALuAuzsKzo/ObwAPajxwDnB1he31WRYeTwYws0eBl1oG7zv5NHBI0omhtszsSsCP1DK5Q9L7ZQ9LM2Bmfsr4bnkJpYgH+4Ckt6uUzexi4OeKNf5sqqRTRWuqALYDC1Miz3VuixyJAQA3t07Sc2GAPK1H8hpNYXhPkn8vaiUI8CdwqaR/hhoszICZvQYsrfWeWLe9akEAV3lY0qZagPzY/A0Y2wJgbNkZbmZP5aU5taH9g5JmRAA89e82NN67/Jiki4r0zcx7p+db2PYyGtTFDishM9sILG/h5Kiky0sADrT8IC6UtKPXdhHAZ8CNfQL4DiiEC/rbKGllHcDvgPc+qVKVge8Bv0OkygeS5tUBWKr1XK+fAIclTR/JAMclXVAH8HeDI/RA1qfMbJMxM/Pe3y9IETkpadDxXvQSe/8TPaO7AHgZWBaJ3nszSYPu3kUAX2RTg+uDBrsA2A3cHvS3T9INdSX0DjA/aLALgG+BKUF/uyTdUwfgY5INQYOtAMzsXKCwTS7xv0zSK3UAdReMXn2/iDw4xNkpSfuLAjAzL83RPc/8m/BWcLN82RRJ/i35X8q60a+BaQ0M9y7t13fgS0lXDY2pDGAtkDRoAvoF8JikYaVdBnA+8GvidbIfAH8Bl4QvNJ4mM1sPDGqcgiXVD4BnsvHKk0X+q+7EE4HDwIXBwAeWdQ3wI3CNJL9WDpPKuZCZ3Qp8fAYBfH50k6TPy2KIDLZeAFY1gOgyA6XTiIF4IgCjgJ0NpnNdAfgg2edKle19LUD+QjuEtxh3BjLRBUAoeI8lBDAQdPaLzJvA/TUQbQFelfRIYKNOL2kEkGdjAbANGFfiJBXARzmLJHl3GpbGADmEzzP9q3hfgacUgNezpm51tvN/hCPPFyYB9JSUt8GrfecA7yxdogA+/N0KvJj9IvNL08DDp1DEcD7NmwXMzjvGJUV6ZuajQR+t+MWk9GyP+OwUoInDrte2KqGug0mxdxYgZde61PkPoFiDQMAu40AAAAAASUVORK5CYII="
          />
        </a>
      </li>
      <li id="instagram" class="header-li">
        <a class="header-a" href="https://instagram.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJdJREFUaEPtmWmolkUUx3//VtoLsj2zpLCiD+20SLRQtEB9iII+tECIVGYbBaIVpQQtJmG0QLRQEEEUpBDRIhUSCvZBW2xTW6gwK0zLD9ppzmVeee69z/PMzH3ve28X7oH3yztnzsx/zn/OMo8Y46Ixvn/GAYy2B8c9MOY8YGaHANcAlwFHAYd3CeJ74DtgMfCypF9K7GVTyMx2A+YCM4EdSxYp0N0GPA7cK+mfnHlZAMzsQuBZ4Igco8Ogsw64QdIHKVtJAGZ2NvBRylCPxs+R9GGb7VYAkTZfjODJD9zrWuC4NjqlADwBzOjR6eaanS/pziblRgBm5nz3E+i1PA28A5wOTAP2q1lwoqQf6jbSBuAm4Mke736xJA/HfWJm84BZNWtOl/RMKYDngweu7wLAZuBrYC9gcoOdfvQwsyuAN2p0n5N0YykAv/1TCwH8GL3mJ7uycrL7BJqcCZwH3FWx6UnsBEkbowfeDRHv/Jo1l0g6txSAx+KJBQDmSpqT0jez40MGfwk4Keq6p14BzgJ8rE7WSjqyFMDvDReqzs4tkvrdFzPboRJ+10n6tzrRzBbErJ7C7OMbJO1fCsByLAMPSLqvQhfnu9+dq4Bj4v9fhnj+GvCCpDUV3WWhBjo1Y52NkpyGg6Q2CpmZ1zpbMww7hydL6tM1s8sjxz1718mScKkfk7Qo6jvYz4FdEmttkuTBIA9ANJ7jgRnBtQujvnP0xYyL7/XNdZ24bmavAlcnAPwlae9sAGa2O+CXq00c4ARJGyKA+4MTtlMpMXe2JI/57rXpwFPD6gEz2yNQYVPC6GpJUyp8XtUSRQaaWiHp5Ajg6NBffJVYa7OkPUs8sCuwJWF0qSQPfX6Kh8WyI7dP+FuSH1KfmNnPwEEt622TtFMJAA+B3ly0yXJJp1UAfJtxGTv2+nHazHyud3eNIqk24LTVQqlL/Kuk7admZiuAExOgO8OfSDojgvfw+GdqXhGAmIRSHvA1p0haHTfiRVjfxcyQuwOFHonzvER4PzFna7j0O2dTKBpOecDVZkl6KOofHDKvF4AXJTbjzbu3i+vjvDs8NyTmbJHkPfkg6YZCbmy9pAM6VmPvfBtwccOGPIEtkPRe3Py+wKchQ09KACjLAwUecNWHQ8t3TwWEA7oW8NL4WA8yMdu+6YmukzfiGu6NSzIo91uotSb0wgMdm7dL8uIsW8zMaeP0yZEhVaNe2x+aYz3qzAs10eyUfigdPPl5OZ1TxHXMrZFUG2bb7sBy4JTUhgaM/wR4bfSWpM8GzjUzb84fLbTp6sskec88SNoAOGe9uhyqeCnyTUyIBwKerYcqr0u6shRATngb6oZK582U5E88RR5wznmK/z/IJEne4uYDcE0zcz7fPMoIFobQ2/i4lnqZ8xLWnxa74W83+D0oeLnSWNrnPO56afB2N7voYu4FnazdZCMJIFLp0lCv+xPgSHnC+T5Nkj85tkoWgAjCG5AHgVt7/IHDM/qcYf3AUT2Cyicm94q/KnT7iclfAJfG38eS/kidenU82wMlRkdSdxzASJ52cSIb7c3lrD9OoZxT6qXOfxP4g0B5AWE+AAAAAElFTkSuQmCC"
          />
        </a>
      </li>
      <li id="cart" class="header-li" id="mostrarCarrito">
        <a class="header-a" href="./cart.html">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA81JREFUaEPtml2ITVEUx/9/UsjDiDFJHpQ8iAfNNCFfSV4YKUUzJOHVw0QKTT4ilDJ58UBpkq/yIIM3GV9NE0Z58aCRfGZGyseDByx3ZV/dtn3vuedjnzNz792vZ++11m//V3vts84hqmywynhRA650xWsK1xSusB2opXSFCfofTk1h3RIRkRGu9ACAXSSv2RxOhSsAWDl/A6gj+a0QupKBlXMayffVAjxEcko1pfQFkpvKAnYdWCJSD+ADgNHW8+Uk72R1yImIxvMVwHgrho0kL0YGNqf3DQCrLCPnSG7NEHgZAHvDtcpMJPklLvAGAJctI98B1JP8kQW0iBwHsNvy3UdyviueUBcPERkLYAjABMtYK0l7I1LhF5FnAOZazvaTPBQb2KT1WQDbLGO3SNqp7h3YnCuDDkfNuXgeJQW8FECPZewXgKkkVf3UhojoxqsAhUNjaCDpvC2GSmmjsK55o0XdctROsjM12r9X4KsA1lk+z5PcXCyO0MAG+giAvZbRfpKNaQGXKEdtJC8lDTwDwEuH0dkkn6cBLSKLAdyzfBUtR/l5kRQ2Kuuh0GQ5PEZyT0rArizrJbmwlP84wDsAnLKMvwMwvdiBkeRGiEg/gHmWzQ6Sh30B1wH4lMVVs0Q5aiL5xAuwSetuAKstBw8A3E5STYetWQBa7XLkejuy10ZOaQO8HsAVz3Dlmu8iuSVoclzgMQA+O66aQX59PF9BMjCzYgEblc8A2O6DIITN+ySXlDM/CWB1dLccZ57maMNuQbnX2tjARuXXWo4soMcAbnqCzJv9SPJ0GB9JAWvt22c5HiA5M0wwacxNCrjYVTOwLqYBWegjEWCT1n0Ami2AzlybpT1tKG8Xj0LDIuK6av4E0EhSuxLDYiSp8KRceXoLQNtA9tDu4QsPxD0k7WZESTeJAZu0PgFgpwewYiYPkjwQxl/SwJMBaIkaFyaIGHOzBTYqrwSgX+3SgM4e2EBr2/Soo2kfQ0zn0uEBnA8t12SbY3rG2vCze9lJwGd7aCVB4NtGooeW72CTsO8dWEROAmgDoCd4b65Oa6NPP8oFjjhrixn3Ciwi1wG0OJy3BEHHWVtqJ70Bi4j2urTn5RoPSS4qFlictUFp4xO4A4DzC57+cELS/rD+L1YRibw2S2DXy0Q+nsHci3tDCYUjr80SWDsgr3Iqj3IEUfK1UUQir80M2Ny49KeSLgu6m+SaoMBEJPLaTA6tgtuWqrVWfxID8DTodC4M1igdaW0mZSlIxSyeezuls4Apx2cNuJxdGslzagqPZPXKib3qFP4DPc5DTOx+iUAAAAAASUVORK5CYII="
          />
        </a>
      </li>
      <li id="login" class="header-li">
        <a class="header-a" href="./perfil.html">
          <img
            class="header-social-img"
            src="${login()}"
          />
        </a>
      </li>
    `;
  document.querySelector(".header-social").innerHTML = template;
}

const loginData = JSON.parse(localStorage.getItem('login') || '[]');

// Función para mostrar o ocultar el elemento con el ID "cart" en función del valor de loginData
function showCart(loginData) {
  // Obtiene el elemento del carrito del DOM
  const cartElement = document.getElementById("cart");
  
  // Muestra el carrito si loginData es true, de lo contrario lo oculta
  cartElement.style.display = loginData ? "block" : "none";
}

// Llamada a la función showCart con el valor de loginData cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  showCart(loginData);
});


function login () {
  const logoOnline = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAzpJREFUaEPtmFuIjVEUx39/PEhSPElMeJkHt8iDB/KINDQu0WiQDJOncckDuZXLg1seeHApIbcUUTxIkjxIaRLlWlJKKKNMlFi+Xd+MM99835y9z3eOaXL24zlr/df/v9bea6/9iT6+1Mf5UxXQ2xWsVqBagZwZqG6hnAnM7f7/VcDMRgAtwFRgYpzCVuAxcEDSx9xpDQAIqoCZrQYOR0QHZ8T4CqyVdCmAQy5TbwFmtgnY7xmtUdI5T9tcZl4CzGws8BLo7xntO1Aj6bOnfclmvgKOAusCo2yTtDvQJ9jcV8A7YFQg+kNJ0wJ9gs19BVgwMnyRNKwEvy4uZjZT0r0sHF8B7cCgQDLtkrK6lReUma0CTgL7JG1Nc/IV8Byo9Yr61+iZpPGBPp3mMflTBf4bJR1K4vkKcI7rA8nszcpaMRwzawTOpNjVSnLdsHP5CqgB3gADigWP//8BjJH0wdO+MPOLAHcR9ivwdWdwpaRuorwEOCAz2wAc9CS0TNJ5T9sk+YuJ+yaTvHP0FhCLaI5FZB3oNqAp2vtXeiJvZjMk3S+0MbOFQJrfcklnc3WhRKCRgKvGlHiY+wk8AR65OUnSpyLk3TjixpIlki7HiZkPXEvxa5B0oSe8oAqEbomkvZltAfYU/D4r3us3EufrF7BY0tViMf+ZADMbBzxNEHKHfWAKyQU+5IPOgJk1ALOBScBoYEgisBul3wLubXArbaQ2sybgeJGs1ktK206pbkUrYGZzgGMx6WIVLfz/NdAs6U7iDK2IsE5nAM2T5LaT9+pRgJntjDroDm+07oa/gc2SurRfM1sKuPdCx3juGsFcSbdDY2UKMLNdwPZQwAz7FklHEpWoB1wXcge2rhTymWfAzOqiNnm9TOQ7YKZLepAQ4eJ8k3S31FjdKmBmboJ8BQwvFTTD7wUwIZqP3HYp20oT4F5e7gVWiRXUYXwIpAm4CbjOU4l1QtKacgKnCXgf9Wr37acSq1XS5HICpwlwXxTSbsdyxG2LutHQcgB1YKQJKOX9681JUtHL0xssbZy26PYKAQi1rbiAUEK9bV/WcvaGmKqA3sh6YcxqBaoVyJmB6hbKmcDc7n2+An8AkWDpMUvsiqoAAAAASUVORK5CYII=";
  const logoOffline = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABG5JREFUaEPtmWnIZ3MUxz9fSpaZsieMPYWJCWXkDbK8IImSpYbyhjSm0QzDMKPGOrbB4JUlopRMKMqWIklNGGvCyM5YpixNkuN+6z7TzH3+995z7//553lqzpt//e/5nXO+9/zOesUUJ01x+9kC4P/24IR5ICL2AE4BjgdOAmZUwH0NvFg8f82/kn6aCPBDAYiI3YEFwOnAIR0N+gB4DrhT0s8dz25k7w0gIhYB1wHb91VenvvDciSt6COnM4CIOAZ4Ajigj8KGMx8D50iyZ9LUCUBEXAQ8nJbendHeOF+Sr1aK0gAi4mbA12bUFMBlkh7IKGoFEBHmeQy4ICNwAnmWSVrSJi8D4B5gbpugET2f3xbcjQAi4rgip78xIuMyYv8GDpP0WR1zLYCI2KHICh8B+2Q0jZDnbWC2JMfGOGoCsNLB1MOwDYAD8C5Jrr5ExL7APGB+D3k+MleS7ckBiAi3AV/1UPYpcKqkLwedjYiDgJeLVGxAXeh7SXt2AbAcWNhFA/AjMEvSD03nSm/4anat4HMkORtuRgOvUER8A+zVEUBrxhiTFxE3AIs7yn9e0mmtAMpW4a2Ows1+oKQvMuci4tiic30zw1vhmS7J1XojjfNARNwIXNND+NZF4fk3cy4idiyC+rcMb4XnbElPtwF4FTihh/Bpkv7MnIuIacDvGd4Kz3JJV7UB+BYYGPEtCg+X9H7GqIg4Elid4a3wrJJ0VhuAgQUjoWyRpFsTfK4L1xflYWmGt8KzRtIRowKwDpjZNipGxH7AGmB6DwDrJe00KgCW+0lZyAYWwYg4FHhhiPZkQ+Hl7doA/ALs3OPtjB35C7gbWCnpO/8ZEZ7erujZmmxqyjpJnsMb0+iHgN/UZKT3JM1qA7AKOHMyWl9sPp6UdG4bAOfZWyYpgHmSPGA1XqGZQCqfV0B6t/MI4OHDtWSzkg+4eLm/Ohi4ENilx0vav9rp1jVzn3dYmzjovddJDeFlUDuTXAwsA9xWZGi1pKOrjHUALPjahNSngEskGURnKjd7DwHjuswBwhZIuiMLwK3EWmCbBquedbDXjXpZNBGxFeDEcUbDGV/HGZLWpwCUbnYuv7xGqMdGC+y909xUbkTsWtQIV/I6WiLJt2IcNc3EDjpX1rrBxsF6ct342MEDHjNdnf07iNx2HCXpn04ASi+cCLzSYIx7+oWSHswaXHnzDuTbWwK5scvNLLbuL+bdS1sM9O7Im4N3M0DKqc/b6Nkt/Isl3dTE0wqg9MTjXromjHsHMO/rvtOS1pbDi/uX3cqPH3OSrcptkq5s05kFYL77Ep5o05d57nnE13JcyuwcA9UDEeGs5Ow0KnIn6/X6M1kFKQ9UAs/z8qPA3lklST63L+dJcjecps4AypjYFvDq++q0pnpGZ7Klku7tI6sXgDFF5ZbNGzxX0epXyTZ7nLH8JWaFpF/bmOueDwWgcrU8dfnzqmuHr9lmk1PZpbqm+DPrS337pyqQCQPQ9w0Oe24LgGHf4LDnp7wH/gPFkFlAiYY45gAAAABJRU5ErkJggg==";

  if (loginData) {
    return logoOnline;
  } else {
    return logoOffline;
  }
};

export { options, hideSearch, printNavBar, printFooter, printIcons, showCart, login, loginData};

