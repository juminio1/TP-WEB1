/*
 * SCRIPT DE FILTRADO COMPATIBLE CON 'cargar-datos.js'
 * Este script filtra los 12 artículos que están visibles en el DOM.
 */

// 1. Obtenemos las referencias a los elementos del DOM
// Usamos 'q' porque ese es el ID en tu index.html
const buscador = document.getElementById('q'); 
const noResultados = document.getElementById('noResultados');
const seccionCategoria = document.getElementById('seccion-categoria');

// 2. Escuchamos el evento 'input' del buscador
buscador.addEventListener('input', () => {
    
    // 3. Normalizamos el texto de búsqueda
    const textoBusqueda = buscador.value.toLowerCase().trim();

    // 4. Obtenemos TODOS los artículos que están en la sección
    // (Tu cargar-datos.js ya puso el contenido de la categoría correcta aquí)
    const todosLosArticulos = seccionCategoria.querySelectorAll('article.articulo-categoria');

    // 5. CUMPLIMOS LA CONSIGNA (3 caracteres)
    if (textoBusqueda.length < 3) {
        // Si hay menos de 3, mostramos todos los artículos de nuevo
        todosLosArticulos.forEach(article => {
            article.style.display = ''; // Resetea el display (lo hace visible)
        });
        noResultados.style.display = 'none'; // Oculta el mensaje de error
        return; // Salimos de la función
    }

    // 6. LÓGICA DE FILTRADO (si hay 3 o más caracteres)
    
    let articulosVisibles = 0; // Contador de resultados

    // Recorremos cada uno de los 12 artículos
    todosLosArticulos.forEach(article => {
        
        // Obtenemos el texto de los campos que pide la consigna
        // .textContent obtiene el texto que 'cargar-datos.js' ya puso.
        const nombre = article.querySelector('.item-valor-nombre').textContent.toLowerCase();
        const autor = article.querySelector('.item-valor-autor').textContent.toLowerCase();
        const descripcion = article.querySelector('.item-valor-descripcion').textContent.toLowerCase();

        // Comprobamos si el texto de búsqueda está en alguno de los campos
        const coincide = (
            nombre.includes(textoBusqueda) ||
            autor.includes(textoBusqueda) ||
            descripcion.includes(textoBusqueda)
        );

        // 7. Mostramos u Ocultamos el artículo
        if (coincide) {
            article.style.display = ''; // Lo mostramos
            articulosVisibles++;       // Sumamos al contador
        } else {
            article.style.display = 'none'; // Lo ocultamos
        }
    });

    // 8. MANEJO DEL MENSAJE "No se han encontrado resultados"
    if (articulosVisibles === 0) {
        noResultados.style.display = 'block'; // Lo mostramos
    } else {
        noResultados.style.display = 'none'; // Lo ocultamos
    }
});