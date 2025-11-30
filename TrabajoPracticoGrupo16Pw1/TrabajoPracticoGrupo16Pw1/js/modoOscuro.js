
/* modoOscuro.js */

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');



if (localStorage.getItem('tema') === 'light') {
    
    
    document.body.classList.add('light-theme'); 
    toggle.checked = true;                      
    

    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color = 'blueviolet';
    
} else {

    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color = 'yellow';
}



toggle.addEventListener('change', (event) => {
    
    let checked = event.target.checked; 
    
    document.body.classList.toggle('light-theme'); 
   
    
    if (checked == true) {
        // MODO CLARO 
        localStorage.setItem('tema', 'light'); 
        
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = 'blueviolet'; 
       
        
    } else {
        // MODO OSCURO 
        localStorage.setItem('tema', 'dark'); 
        
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = 'yellow';
    }
}); 