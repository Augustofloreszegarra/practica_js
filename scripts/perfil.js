import { login, loginData } from './functions/printLayout.js';

let isOnline = false;

let misDatosFisicos = ["Juan",25,["Calle principal",123,"Ciudad"],1.75,70,"Deportes",]
let [ nombre, edad, ubicacion, altura, peso, hobby ] = misDatosFisicos
let profesion = "Ingeniero de Software";


const misDatosFisicosEstructurados = {
  nombre,
  edad,
  ubicacion,
  altura,
  peso,
  hobby,
}

console.log(misDatosFisicosEstructurados);


let texto = `
Mi nombre es ${nombre}, tengo ${edad} años.
Soy ${profesion} y vivo en ${ubicacion}.
Mi hobby es ${hobby}.
`;


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

if (isOnline) {
  imprimirDatos();
}

function imprimirDatos(id = "pre3") {
  const pre = document.getElementById(id);
  pre.innerHTML = `
    <h2>Información del usuario</h2>
    <p>Nombre: ${misDatosFisicosEstructurados.nombre}</p>
    <p>Edad: ${misDatosFisicosEstructurados.edad}</p>
    <p>Dirección: ${misDatosFisicosEstructurados.ubicacion[0]} ${misDatosFisicosEstructurados.ubicacion[1]}, ${misDatosFisicosEstructurados.ubicacion[2]}</p>
    <p>Altura: ${misDatosFisicosEstructurados.altura} metros</p>
    <p>Peso: ${misDatosFisicosEstructurados.peso} kg</p>
    <p>Hobby: ${misDatosFisicosEstructurados.hobby}</p>
  `;
}

