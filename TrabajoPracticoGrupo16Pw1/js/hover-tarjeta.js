
// Efectos por categoría
const efectosCategorias = {
  "categoria01": (articulo) => {
    // Súper Héroes: fondo verde
    articulo.style.backgroundColor = "blue";
  },
  "categoria02": (articulo) => {
    // Villanos: se agranda un poquito
    articulo.style.transform = "scale(1.05)";
    articulo.style.transition = "transform 0.3s";
  },
  "categoria03": (articulo) => {
    // Anti Héroes: se pone un borde rojo
    articulo.style.border = "2px solid red";
  },
  "categoria04": (articulo) => {
    // Dioses: brilla sombra y brillo
    articulo.style.boxShadow = "0 0 20px yellow";
    articulo.style.transition = "box-shadow 0.3s";
  },
  "categoria05": (articulo) => {
    // Animal: cambia opacidad
    articulo.style.opacity = "0.7";
    articulo.style.transition = "opacity 0.3s";
  }
};

// Contenedor padre donde están los artículos
const seccionCategoria = document.getElementById("seccion-categoria");

// Delegación de eventos
seccionCategoria.addEventListener("mouseover", (e) => {
  const articulo = e.target.closest("article[id^='categoria']");
  if (!articulo) return;

  const categoriaId = articulo.id.split("-")[0];
  if (efectosCategorias[categoriaId]) {
    efectosCategorias[categoriaId](articulo);
  }
});

seccionCategoria.addEventListener("mouseout", (e) => {
  const articulo = e.target.closest("article[id^='categoria']");
  if (!articulo) return;

  // Resetear estilos según categoría
  const categoriaId = articulo.id.split("-")[0];
  switch (categoriaId) {
    case "categoria01":
      articulo.style.backgroundColor = "";
      break;
    case "categoria02":
      articulo.style.transform = "";
      break;
    case "categoria03":
      articulo.style.border = "";
      break;
    case "categoria04":
      articulo.style.boxShadow = "";
      break;
    case "categoria05":
      articulo.style.opacity = "";
      break;
  }
});



/* ----------- RATING -------------*/ 

function actualizarRatings() {
  const ratings = document.querySelectorAll(".item-valor-rating");

  ratings.forEach(ratingElement => {
    const texto = ratingElement.textContent.trim();
    const numero = parseInt(texto.match(/\d+/));
    if (isNaN(numero)) return;

    // Limpiar el contenido y agregar texto base
    ratingElement.innerHTML = "";

    // Crear 5 estrellas
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement("span");
      estrella.textContent = "★";
      estrella.style.color = i <= numero ? "gold" : "lightgray";
      estrella.style.fontSize = "16px";
      estrella.style.marginRight = "2px";
      ratingElement.appendChild(estrella);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Genera las estrellas al cargar la página
  actualizarRatings();

  // Detecta cambios en el contenedor de artículos
  const seccionCategoria = document.getElementById("seccion-categoria");

  const observer = new MutationObserver(() => {
    actualizarRatings(); // Vuelve a generar las estrellas automáticamente
  });

  observer.observe(seccionCategoria, { childList: true, subtree: true });
}); 
















