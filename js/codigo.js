// =====================================================
// FUERA DE MARCO — codigo.js
// =====================================================


// -----------------------------------------------------
// 1. TARJETAS DE ARTISTAS (fetch + JSON)
// Busca los datos en js/datos.json, recorre la lista
// con forEach y arma una tarjeta por cada artista.
// Ojo: la ruta del fetch es relativa a index.html.
// -----------------------------------------------------
function cargarArtistas() {
  fetch('js/datos.json')
    .then(res => res.json())
    .then(datos => {
      let contenedor = document.getElementById("contenedor-artistas");
      let htmlAcumulado = "";

      datos.forEach(item => {
        htmlAcumulado += `<div class="col">`;
        htmlAcumulado += `  <div class="tarjeta tarjeta-${item.color} h-100 border border-2 border-dark d-flex flex-column">`;
        htmlAcumulado += `    <img src="${item.imagen}" class="img-fluid w-100" alt="Retrato de ${item.nombre}">`;
        htmlAcumulado += `    <div class="tarjeta-numero fondo-${item.color} border-top border-bottom border-2 border-dark d-flex justify-content-between align-items-center px-3 py-2">`;
        htmlAcumulado += `      <span>0${item.id}</span>`;
        htmlAcumulado += `      <span>Artista</span>`;
        htmlAcumulado += `    </div>`;
        htmlAcumulado += `    <div class="p-3 d-flex flex-column">`;
        htmlAcumulado += `      <h3 class="tarjeta-nombre">${item.nombre}</h3>`;
        htmlAcumulado += `      <p class="etiqueta">${item.movimiento}</p>`;
        htmlAcumulado += `      <p class="tarjeta-texto">${item.descripcion}</p>`;
        htmlAcumulado += `    </div>`;
        htmlAcumulado += `  </div>`;
        htmlAcumulado += `</div>`;
      });

      contenedor.innerHTML = htmlAcumulado;
    });
}

// Llamamos a la función para que las tarjetas aparezcan al cargar la página
cargarArtistas();


// -----------------------------------------------------
// 2. VALIDACIÓN DEL FORMULARIO (Bootstrap)
// Si algún campo no cumple, frena el envío y
// muestra los mensajes de error.
// -----------------------------------------------------
const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});
