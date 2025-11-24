// Esperamos a que el contenido de la página se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // 1. Selecciona todos los items del carrusel (los <div> con la clase carousel-item)
    const carouselItems = document.querySelectorAll('#carouselExampleCaptions .carousel-item');
    
    // 2. Verifica si hay items
    if (carouselItems.length > 0) {
        
        // 3. Genera un índice (posición) aleatorio
        // Math.random() * cantidad total de items
        // Math.floor() asegura que sea un número entero
        const randomIndex = Math.floor(Math.random() * carouselItems.length);
        
        // 4. Remueve la clase 'active' de todos los items
        carouselItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // 5. Añade la clase 'active' al item seleccionado aleatoriamente
        carouselItems[randomIndex].classList.add('active');
        
        // --- OPCIONAL: Sincronizar el indicador (el puntito de abajo) ---
        // También necesitamos actualizar el indicador correspondiente
        const carouselIndicators = document.querySelectorAll('#carouselExampleCaptions .carousel-indicators button');
        
        // 6. Remueve la clase 'active' de todos los indicadores
        carouselIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.removeAttribute('aria-current'); // Remueve el atributo aria-current
        });
        
        // 7. Añade la clase 'active' al indicador seleccionado aleatoriamente
        carouselIndicators[randomIndex].classList.add('active');
        carouselIndicators[randomIndex].setAttribute('aria-current', 'true');
    }
});