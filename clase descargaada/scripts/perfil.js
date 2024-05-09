/* let nombre = "Juan Pérez";
let edad = 30;
let profesion = "Ingeniero de Software";
let ubicacion = "Madrid";
let hobby = "Programar";

let texto = `
    Mi nombre es ${nombre}, tengo ${edad} años.
    Soy ${profesion} y vivo en ${ubicacion}.
    Mi hobby es ${hobby}.
`;

// Define una variable isOnline y asigna un valor inicial de false.
let isOnline = false;

// Utiliza la función prompt() para preguntar al usuario si está conectado.
let userInput = prompt("¿Estás conectado a internet? (SI/NO)");

// Implementa una condición que verifique la respuesta del usuario.
// Convierte la respuesta a mayúsculas para evitar problemas de mayúsculas y minúsculas.
userInput = userInput.toUpperCase();

// Si la respuesta es "SI" y isOnline es false, cambia el valor de isOnline a true.
if (userInput === "SI" && !isOnline) {
  isOnline = true;
}

// Dependiendo del estado de isOnline, muestra un mensaje diferente en la consola.
if (isOnline) {
  console.log("El usuario está conectado. Aquí se muestra el template:");
  console.log(texto);
} else {
  console.log("El usuario no está conectado. El template no se muestra.");
} */
let nombre = "Juan Pérez";
let edad = 30;
let profesion = "Ingeniero de Software";
let ubicacion = "Madrid";
let hobby = "Programar";

let texto = `
    Mi nombre es ${nombre}, tengo ${edad} años.
    Soy ${profesion} y vivo en ${ubicacion}.
    Mi hobby es ${hobby}.
`;

let isOnline = false;
let entrada = prompt('Estas conectado? Escribe "SI" o "NO"')
let respuesta = entrada ?? "No hay valor";
if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") {
    if (respuesta.toUpperCase() == "SI" && !isOnline) {
        isOnline = true;
        if (isOnline) {
            alert("Usuario conectado");
            console.log(texto);

            const stringifyLogin = JSON.stringify(isOnline);
            localStorage.setItem("login", stringifyLogin);

        }
    } else {
      const stringifyLogin = JSON.stringify(isOnline);
      localStorage.setItem("login", stringifyLogin);
        alert("has decidido no conectarte")
    }
}else{
    alert(`respuesta no valida: "${respuesta}" escribe si o no`);
}

const misDatosFisicos = {
  nombre: "Juan",
  edad: 25,
  direccion: {
    calle: "Calle principal",
    numero: 123,
    ciudad: "Ciudad"
  },
  altura: 1.75,
  peso: 70,
  hobby: "Deportes"
};
if (isOnline) {
  function imprimirDatos(id = "pre3") {
    const pre = document.getElementById(id);
    pre.innerHTML = `
      <h2>Información del usuario</h2>
      <p>Nombre: ${misDatosFisicos.nombre}</p>
      <p>Edad: ${misDatosFisicos.edad}</p>
      <p>Dirección: ${misDatosFisicos.direccion.calle} ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}</p>
      <p>Altura: ${misDatosFisicos.altura} metros</p>
      <p>Peso: ${misDatosFisicos.peso} kg</p>
      <p>Hobby: ${misDatosFisicos.hobby}</p>
    `;
  }
}

imprimirDatos();

