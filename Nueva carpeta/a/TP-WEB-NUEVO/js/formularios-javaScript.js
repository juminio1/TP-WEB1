
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const validateBtn = document.querySelector('.btn');
    const resultado = document.createElement('p');
    resultado.id = 'resultado';
    emailInput.parentNode.appendChild(resultado);

    const passwordInput = document.getElementById('password');
    const cambiarBtn = document.querySelector('.btn-sec');
    const resultadoPass = document.createElement('p');
    resultadoPass.id = 'resultado-pass';
    passwordInput.parentNode.appendChild(resultadoPass);

    const form = document.querySelector('.form');   
    const inputs = form.querySelectorAll('.input');

    // --- Cargar datos guardados al iniciar ---
    inputs.forEach(input => {
        const valorGuardado = localStorage.getItem(input.placeholder);
        if (valorGuardado) {
            input.value = valorGuardado;
        }
    });

    // --- Validación Email ---
    validateBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const email = emailInput.value.trim();

        if (emailRegex.test(email)) {
            resultado.textContent = 'Formato de correo válido!';
            resultado.className = 'valid';
        } else {
            resultado.textContent = 'Formato de correo inválido!';
            resultado.className = 'invalid';
        }
    });

    // --- Validación Contraseña ---
    cambiarBtn.addEventListener('click', () => {
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (passwordRegex.test(password)) {
            resultadoPass.textContent = 'Contraseña válida!';
            resultadoPass.className = 'valid';
        } else {
            resultadoPass.textContent = 'Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.';
            resultadoPass.className = 'invalid';
        }
    });

    // --- Validación y Guardado en LocalStorage ---
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        form.querySelectorAll('.mensaje-error').forEach(msg => msg.textContent = '');

        const [nombre, apellido, tipo, documento, fecha, telefono, emailSec] = inputs;

        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        if (!soloLetras.test(nombre.value.trim())) {
            nombre.nextElementSibling.textContent = 'Ingrese un nombre válido (solo letras).';
            valid = false;
        }
        if (!soloLetras.test(apellido.value.trim())) {
            apellido.nextElementSibling.textContent = 'Ingrese un apellido válido (solo letras).';
            valid = false;
        }

        if (tipo.value.trim() === '') {
            tipo.nextElementSibling.textContent = 'Ingrese el tipo de documento.';
            valid = false;
        }

        const soloNumeros = /^\d{7,}$/;
        if (!soloNumeros.test(documento.value.trim())) {
            documento.nextElementSibling.textContent = 'Ingrese un número válido (mínimo 7 dígitos).';
            valid = false;
        }

        if (fecha.value === '') {
            fecha.nextElementSibling.textContent = 'Seleccione una fecha.';
            valid = false;
        }

        const telefonoRegex = /^\d{10,}$/;
        if (!telefonoRegex.test(telefono.value.trim())) {
            telefono.nextElementSibling.textContent = 'Ingrese un teléfono válido (mínimo 10 dígitos).';
            valid = false;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(emailSec.value.trim())) {
            emailSec.nextElementSibling.textContent = 'Ingrese un email válido.';
            valid = false;
        }

        // Si todo es válido, guardar en LocalStorage
        if (valid) {
            inputs.forEach(input => {
                localStorage.setItem(input.placeholder, input.value.trim());
            });
            alert('Datos guardados en LocalStorage correctamente!');
        }
    });
});
