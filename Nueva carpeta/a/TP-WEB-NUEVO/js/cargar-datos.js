import items from "../data/items.json" with { type: 'json' };
import configuracion from "../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.getElementById("tab-categoria-1");

let linksCategorias = document.querySelectorAll("a.tab-categoria");



linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      items.forEach((item) => {
         const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

         if (linkCategoria.innerText != Categoria) return;
         const articuloContenedor = document.querySelector("article." + Id.split("-")[1])

         articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].src = Portada;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].alt = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
         articuloContenedor.getElementsByClassName("item-valor-rating")[0].innerText = Rating;

         const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));
         
         personalizados.forEach((personalizado, index) => {
            articuloContenedor.getElementsByClassName(`item-campo-personalizado_${index + 1}`)[0].innerText = personalizado.split(".")[1];
            articuloContenedor.getElementsByClassName(`item-valor-personalizado_${index + 1}`)[0].innerText = item[personalizado];
         });

         articuloContenedor.id = Id;
      });
   });
  
});

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};

// El filtrado de la busqueda

// const searchInput = document.getElementById("q");

// const handleSearch = () => { // Esta funcion lo que hace es que capte lo que el usuario vaya poniendo. Captura el valor del input

//    const searchTerm = searchInput.value.toLowercCase();
//    const flitroArtiuculos = items.filter((item) = > item.Nombre.toLowercCase().startsWith(searchTerm)) 

// }

// --- 4. CÓDIGO NUEVO DEL FILTRO (ADAPTADO DEL VIDEO) ---

const searchInput = document.getElementById("q");
// Debes agregar esto en tu HTML: <p id="noResults" style="display: none;">No se encontraron resultados.</p>
const noResults = document.getElementById("noResultados"); 

/**
 * Función que MUESTRA u OCULTA artículos (reemplaza a 'displayProducts' del video)
 */
function mostrarArticulosFiltrados(articulosFiltrados) {
    const idsParaMostrar = articulosFiltrados.map(item => item.Id);

    if (idsParaMostrar.length === null) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    // Recorremos TODOS los items para mostrar/ocultar su HTML
    items.forEach(item => {
        // Esta es la MISMA lógica que usan tus profes para encontrar el article
        const selector = "article." + item.Id.split("-")[1];
        const contenedor = document.querySelector(selector);

        if (contenedor) {
            if (idsParaMostrar.includes(item.Id)) {
                contenedor.style.display = "block"; // MUESTRA
            } else {
                contenedor.style.display = "none";  // OCULTA
            }
        }
    });
}

/**
 * Función 'handleSearch' del video (adaptada a 'items')
 */
const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtroArticulos = items.filter((item) => {
        
        // 1. ¿El artículo pertenece a la categoría que estamos viendo?
        const matchCategoria = item.Categoria === categoriaActiva;

        // 2. ¿El artículo coincide con el texto de búsqueda?
        //    (Usamos 'includes' para que "sp" coincida con "spider-man")
        const matchNombre = item.Nombre.toLowerCase().includes(searchTerm);
        const matchAutor = item.Autor.toLowerCase().includes(searchTerm);
        const matchDescripcion = item.Descripcion.toLowerCase().includes(searchTerm);
       
        
        const matchBusqueda = (matchNombre || matchAutor || matchDescripcion);

        // 3. ¡Debe cumplir AMBAS condiciones!
        return (matchCategoria && matchBusqueda);
    });

    // Llama a tu función que muestra/oculta (esta ya la tenías)
    mostrarArticulosFiltrados(filtroArticulos);
};

// --- 5. EL "OYENTE" DEL VIDEO (¡TAL CUAL!) ---
searchInput.addEventListener("input", handleSearch);