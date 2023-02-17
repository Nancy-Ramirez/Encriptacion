botonEncriptar.onclick = function () {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let texto = document.getElementById("texto").value;

  document.getElementById("textAnt").value = texto;
  //i es para que afecte tanto a mayuscula como minuscula
  // g afecta a toda la línea
  //m afecta a multiples lineas
  let textoCifrado = texto
    .replace(/a/gi, "agj")
    .replace(/e/gi, "ekpa")
    .replace(/i/gi, "igns")
    .replace(/o/gi, "oxt")
    .replace(/u/gi, "ukagl");

  //validación de datos
  if (texto.length > 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "images/correcto.png";
  } else {
    muñeco.src = "images/advertencia.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
};
botonDesencriptar.onclick = function () {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let texto = document.getElementById("texto").value;

  document.getElementById("textAnt").value = texto;
  //i es para que afecte tanto a mayuscula como minuscula
  // g afecta a toda la línea
  //m afecta a multiples lineas
  let textoCifrado = texto
    .replace(/agj/gi, "a")
    .replace(/ekpa/gi, "e")
    .replace(/igns/gi, "i")
    .replace(/oxt/gi, "o")
    .replace(/ukagl/gi, "u");

  //validación de datos
  if (texto.length > 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "images/correcto.png";
  } else {
    muñeco.src = "images/advertencia.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
};
botonReiniciar.onclick = function () {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let texto = document.getElementById("texto").value;
  document.getElementById("textAnt").value = " ";

  //Reiniciar datos
  document.getElementById("texto").value = "";
  tituloMensaje.textContent = "Bienvenido";
  parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  muñeco.src = "images/idea.png";
};
