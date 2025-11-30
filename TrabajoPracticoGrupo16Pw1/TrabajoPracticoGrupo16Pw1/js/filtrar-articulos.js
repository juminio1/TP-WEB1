const buscador = document.getElementById('q'); 
const noResultados = document.getElementById('noResultados');
const seccionCategoria = document.getElementById('seccion-categoria');
const corrousel = document.getElementById('carouselExampleCaptions');


buscador.addEventListener('input', () => {
    
    const textoBusqueda = buscador.value.toLowerCase().trim();
    const todosLosArticulos = seccionCategoria.querySelectorAll('article.articulo-categoria');

    if (textoBusqueda.length < 3) {
        
        todosLosArticulos.forEach(article => {
            article.style.display = ''; 
        });
        noResultados.style.display = 'none'; 
        corrousel.style.display = ''; 
        
        return; 
    }
    

    let articulosVisibles = 0; 
    
    todosLosArticulos.forEach(article => {
        
        const nombre = article.querySelector('.item-valor-nombre').textContent.toLowerCase();
        const autor = article.querySelector('.item-valor-autor').textContent.toLowerCase();
        const descripcion = article.querySelector('.item-valor-descripcion').textContent.toLowerCase();

        const coincide = (
            nombre.includes(textoBusqueda) ||
            autor.includes(textoBusqueda) ||
            descripcion.includes(textoBusqueda)
        );

        if (coincide) {
            article.style.display = ''; 
            articulosVisibles++;       
        } else {
            article.style.display = 'none';
           
            corrousel.style.display = 'none';
        }
    });

    if (articulosVisibles === 0) {
        noResultados.style.display = 'block'; 
    } else {
        noResultados.style.display = 'none'; 
    }
});