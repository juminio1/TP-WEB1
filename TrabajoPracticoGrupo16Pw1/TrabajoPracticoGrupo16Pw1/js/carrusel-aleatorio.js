document.addEventListener('DOMContentLoaded', function() {

    const carouselItems = document.querySelectorAll('#carouselExampleCaptions .carousel-item');
    

    if (carouselItems.length > 0) {
        

        const randomIndex = Math.floor(Math.random() * carouselItems.length);
        
       
        carouselItems.forEach(item => {
            item.classList.remove('active');
        });
        
     
        carouselItems[randomIndex].classList.add('active');
        
     
        const carouselIndicators = document.querySelectorAll('#carouselExampleCaptions .carousel-indicators button');
        
   
        carouselIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.removeAttribute('aria-current');
        });
        

        carouselIndicators[randomIndex].classList.add('active');
        carouselIndicators[randomIndex].setAttribute('aria-current', 'true');
    }
});