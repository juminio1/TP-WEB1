document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email'); // ID correcto
    const validateBtn = document.querySelector('.btn'); // Selecciona el primer botón con clase .btn
    const resultado = document.createElement('p'); // Creamos un elemento para mostrar el resultado
    resultado.id = 'resultado';
    emailInput.parentNode.appendChild(resultado); // Lo agregamos debajo del input

    validateBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = emailInput.value.trim();

        if (emailRegex.test(email)) {
            resultado.textContent = 'Formato de correo válido!';
            resultado.className = 'valid';
        } else {
            resultado.textContent = 'Formato de correo inválido!';
            resultado.className = 'invalid';
        }
    });
});
