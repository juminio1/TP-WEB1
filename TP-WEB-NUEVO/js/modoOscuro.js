
/* modoOscuro.js */

let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');

// --- 1. AL CARGAR LA PÁGINA: REVISAMOS LA MEMORIA ---
// Preguntamos: "¿Hay algo guardado en localStorage que diga 'light'?"
if (localStorage.getItem('tema') === 'light') {
    
    // Si la respuesta es SÍ:
    document.body.classList.add('light-theme'); // Activamos la clase
    toggle.checked = true;                      // Movemos el interruptor a 'activado'
    
    // Ponemos el icono de la LUNA
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    label_toggle.style.color = 'blueviolet';
    
} else {
    // Si NO hay nada guardado (o es modo oscuro):
    // Ponemos el icono del SOL (el modo por defecto)
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    label_toggle.style.color = 'yellow';
}


// --- 2. AL TOCAR EL BOTÓN: GUARDAMOS EN MEMORIA ---
toggle.addEventListener('change', (event) => {
    
    let checked = event.target.checked; // true = queremos claro
    
    document.body.classList.toggle('light-theme');    
    
    if (checked == true) {
        // --- ACTIVANDO MODO CLARO ---
        localStorage.setItem('tema', 'light'); // <--- ¡AQUÍ GUARDAMOS!
        
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = 'blueviolet'; 
    } else {
        // --- ACTIVANDO MODO OSCURO ---
        localStorage.setItem('tema', 'dark');  // <--- ¡AQUÍ GUARDAMOS!
        
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = 'yellow';
    }
}); 