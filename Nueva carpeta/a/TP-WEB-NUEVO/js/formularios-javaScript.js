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


    const passwordInput = document.getElementById('password');
    const cambiarBtn = document.querySelector('.btn-sec'); // Botón "CAMBIAR"

    // Creamos un elemento para mostrar el resultado
    const resultadoPass = document.createElement('p');
    resultadoPass.id = 'resultado-pass';
    passwordInput.parentNode.appendChild(resultadoPass);

    cambiarBtn.addEventListener('click', () => {
        const password = passwordInput.value.trim();

        // Regex para validar contraseña segura
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (passwordRegex.test(password)) {
            resultadoPass.textContent = 'Contraseña válida!';
            resultadoPass.className = 'valid';
        } else {
            resultadoPass.textContent = 'Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.';
            resultadoPass.className = 'invalid';
        }
    });

});

