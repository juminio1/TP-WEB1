const articulos = document.querySelectorAll("article");

articulos.forEach((articulo) => {
   articulo.addEventListener("click", () => {
      // Aplica fullscreen en el article
      articulo.classList.toggle("fullscreen");

      // Busca la imagen dentro del article y aplica el nuevo estilo
      const imagen = articulo.querySelector(".item-valor-portada");
      if (imagen) {
         imagen.classList.toggle("item-valor-portada-fullscreen");
      }
   });
});