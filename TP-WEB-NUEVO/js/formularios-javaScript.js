// document.addEventListener('DOMContentLoaded', () => {
//     const emailInput = document.getElementById('email');
//     const validateBtn = document.querySelector('.btn');
//     const resultado = document.createElement('p');
//     const passwordInput = document.getElementById('password');
//     const resultadoPass = document.createElement('p');
//     const form = document.querySelector('.form');
//     const inputs = form.querySelectorAll('.input');
//     resultado.id = 'resultado';
//     emailInput.parentNode.appendChild(resultado);
//     resultadoPass.id = 'resultado-pass';
//     passwordInput.parentNode.appendChild(resultadoPass);

//     // --- Cargar datos guardados al iniciar ---
//     inputs.forEach(input => {
//         const valorGuardado = localStorage.getItem(input.placeholder);
//         if (valorGuardado) {
//             input.value = valorGuardado;
//         }
//     }); 

//     // --- Validación Email ---
//     validateBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//         const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         const email = emailInput.value.trim();

//         if (emailRegex.test(email)) {
//             resultado.textContent = 'Formato de correo válido!';
//             resultado.className = 'valid';
//             resultado.style.width = 'max-content';
//             resultado.style.backgroundColor = '#0ce45eff';
//             resultado.style.color = 'white';
//             resultado.style.height = '40px';
//             resultado.style.fontWeight = 'bolder';
//             resultado.style.alignContent = 'center';
//             resultado.style.padding = '0%';
//             resultado.style.borderRadius = '10px';

//         } else {
//             resultado.textContent = 'Formato de correo inválido!';
//             resultado.className = 'invalid';
//             resultado.style.width = 'max-content';
//             resultado.style.backgroundColor = '#c50808fa';
//             resultado.style.color = 'white';
//             resultado.style.height = '40px';
//             resultado.style.fontWeight = 'bolder';
//             resultado.style.alignContent = 'center';
//             resultado.style.padding = '0%';
//             resultado.style.borderRadius = '10px';

//         }

//         // event.preventDefault();
//         const password = passwordInput.value.trim();
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

//         if (passwordRegex.test(password)) {
//             resultadoPass.textContent = 'Contraseña válida!';
//             resultadoPass.className = 'valid';
//             resultadoPass.style.width = 'max-content';
//             resultadoPass.style.backgroundColor = '#0ce45eff';
//             resultadoPass.style.color = 'white';
//             resultadoPass.style.height = '40px';
//             resultadoPass.style.fontWeight = 'bolder';
//             resultadoPass.style.alignContent = 'center';
//             resultadoPass.style.padding = '0%';
//             resultadoPass.style.borderRadius = '10px';

//         } else {
//             resultadoPass.textContent = 'Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo!';
//             resultadoPass.className = 'invalid';
//             resultadoPass.style.width = 'max-content';
//             resultadoPass.style.backgroundColor = '#c50808fa';
//             resultadoPass.style.color = 'white';
//             resultadoPass.style.height = '40px';
//             resultadoPass.style.fontWeight = 'bolder';
//             resultadoPass.style.alignContent = 'center';
//             resultadoPass.style.padding = '0%';
//             resultadoPass.style.borderRadius = '10px';


//         }
//     });


//     const nombre = document.querySelector('input[placeholder="Nombre"]');
//     const validarBoton = document.querySelector('.datosBtn');
//     const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
//     const soloNumeros = /^\d{8,}$/;
//     const datosResultado = document.createElement('p');
//     const formulario = document.querySelector('.form');
//     nombre.parentNode.appendChild(datosResultado);

//     let valid = true;
//     formulario.querySelectorAll('.mensaje-error').forEach(msg => msg.remove());


//     validarBoton.addEventListener('click', (event) => {
//         event.preventDefault();
//         if (!soloLetras.test(nombre.value.trim())) {
//             datosResultado.textContent = "Ingrese un nombre válido (solo letras";
//             valid = false;
//         } else {
//             datosResultado.textContent = "Nombre válido";
//         }

//         if (valid) {
//             alert('Formulario válido. ¡Datos listos para enviar!');
//             nombre.forEach(input => {
//                 localStorage.setItem(input.placeholder, input.value.trim());
//             });
//         }
//     });
// });

// const [nombre, apellido, tipo, documento, fecha, telefono, emailSec] = inputs;


// const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
// if (!soloLetras.test(nombre.value.trim())) {
//     mostrarError(nombre, 'Ingrese un nombre válido (solo letras).');
//     valid = false;
// }
// if (!soloLetras.test(apellido.value.trim())) {
//     mostrarError(apellido, 'Ingrese un apellido válido (solo letras).');
//     valid = false;
// }

// if (tipo.value.trim() === '') {
//     mostrarError(tipo, 'Ingrese el tipo de documento.');
//     valid = false;
// }

// const soloNumeros = /^\d{8,}$/;
// if (!soloNumeros.test(documento.value.trim())) {
//     mostrarError(documento, 'Ingrese un número válido (mínimo 7 dígitos).');
//     valid = false;
// }

// if (fecha.value === '') {
//     mostrarError(fecha, 'Seleccione una fecha.');
//     valid = false;
// }

// const telefonoRegex = /^\d{10,}$/;
// if (!telefonoRegex.test(telefono.value.trim())) {
//     mostrarError(telefono, 'Ingrese un teléfono válido (mínimo 10 dígitos).');
//     valid = false;
// }

// if (!emailRegex.test(emailSec.value.trim())) {
//     mostrarError(emailSec, 'Ingrese un email válido.');
//     valid = false;
// }

// if (valid) {
//     alert('Formulario válido. ¡Datos listos para enviar!');
//     inputs.forEach(input => {
//         localStorage.setItem(input.placeholder, input.value.trim());
//     });
// }
// });


