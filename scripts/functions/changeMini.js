// Esta función se ejecuta cuando se cambia la imagen en la interfaz de usuario.
function changeMini(event) {
  // Obtener la ruta de la imagen seleccionada desde el evento.
  const selectedSrc = event.target.src;
  
  // Obtener el elemento de imagen con el ID "big-img" en la interfaz de usuario.
  const bigSelector = document.querySelector("#big-img");
  
  // Cambiar la ruta de la imagen en el elemento de imagen con el ID "big-img"
  // a la ruta de la imagen seleccionada.
  bigSelector.src = selectedSrc;
}