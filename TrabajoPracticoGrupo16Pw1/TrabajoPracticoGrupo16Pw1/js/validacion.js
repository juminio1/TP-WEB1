
// ----------------------
// ELEMENTOS
// ----------------------
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const btnIngresar = document.getElementById("btnIngresar");      // puede no existir
const btnRegistrarse = document.getElementById("btnRegistrarse"); // puede no existir

// Lugares para mensajes de error
let emailError = document.createElement("p");
emailError.style.color = "red";
emailError.style.fontSize = "13px";

let passError = document.createElement("p");
passError.style.color = "red";
passError.style.fontSize = "13px";

// Insertar debajo de los inputs
emailInput.parentElement.appendChild(emailError);
passwordInput.parentElement.appendChild(passError);

// ----------------------
// VALIDAR EMAIL
// ----------------------
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|org|net)$/;
    return regexEmail.test(email);
}

// ----------------------
// VALIDAR PASSWORD
// ----------------------
function validarPassword(pass) {
    const regexPass =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    return regexPass.test(pass);
}

// ----------------------
// VALIDAR FORMULARIO
// ----------------------

function validarFormulario() {
    const email = emailInput.value.trim();
    const pass = passwordInput.value.trim();

    let emailValido = false;
    let passValida = false;

    // VALIDACIÓN DE EMAIL
    if (email === "") {
        emailInput.style.border = "2px solid red";
        emailError.textContent = "El email es obligatorio.";
    } else if (!validarEmail(email)) {
        emailInput.style.border = "2px solid red";
        emailError.textContent = "Formato de email inválido (.com, .net, .org).";
    } else {
        emailInput.style.border = "2px solid green";
        emailError.textContent = "";
        emailValido = true;
    }

    // VALIDACIÓN DE CONTRASEÑA
    if (pass === "") {
        passwordInput.style.border = "2px solid red";
        passError.textContent = "La contraseña es obligatoria.";
    } else if (!validarPassword(pass)) {
        passwordInput.style.border = "2px solid red";
        passError.textContent =
            "Debe tener 8-12 caracteres, mayúscula, minúscula, número y símbolo.";
    } else {
        passwordInput.style.border = "2px solid green";
        passError.textContent = "";
        passValida = true;
    }

    // HABILITAR / DESHABILITAR BOTÓN LOGIN (solo si existe)
    if (btnIngresar) {
        btnIngresar.disabled = !(emailValido && passValida);
    }

    // HABILITAR / DESHABILITAR BOTÓN REGISTRO (solo si existe)
    if (btnRegistrarse) {
        btnRegistrarse.disabled = !(emailValido && passValida);
    }
}

// EVENTOS
emailInput.addEventListener("input", validarFormulario);
passwordInput.addEventListener("input", validarFormulario);

// ----------------------
// ACCIÓN AL ENVIAR FORMULARIO
// ----------------------
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Si existe EL BOTÓN DE LOGIN (página iniciar sesión)
    if (btnIngresar && !btnIngresar.disabled) {
        window.parent.postMessage("cerrarLogin", "*");
    }

    // Si existe EL BOTÓN DE REGISTRO (página registrarse)
    if (btnRegistrarse && !btnRegistrarse.disabled) {
        alert("Usuario registrado con éxito. Se le ha enviado un correo");
        window.location.href = "../html/datos_personales.html";
        // LIMPIAR FORMULARIO
        emailInput.value = "";
        passwordInput.value = "";

        emailInput.style.border = "";
        passwordInput.style.border = "";

        emailError.textContent = "";
        passError.textContent = "";

        btnRegistrarse.disabled = true;
    }
});

// funcion ojo de contraseña
const inputPassword = document.getElementById("password");
    const botonMostrar = document.getElementById("mostrar");

    botonMostrar.addEventListener("click", function () {
        if (inputPassword.type === "password") {
            inputPassword.type = "text";   // Muestra la contraseña
        } else {
            inputPassword.type = "password"; // Oculta la contraseña
            botonMostrar.textContent = "👁"; // Vuelve al ícono original
        }
    });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        let isValid = true;
        let errorMessages = [];

        // Seleccionamos los inputs
        const nombre = form.querySelector('input[placeholder="Nombre"]');
        const apellido = form.querySelector('input[placeholder="Apellido"]');
        const tipo = form.querySelector('input[placeholder="Tipo"]');
        const telefono = form.querySelector('input[placeholder="Teléfono celular"]');
        const documento = form.querySelector('input[placeholder="Sólo números"]');
        const email = form.querySelector('input[type="email"]');
        let mensaje = document.createElement("p");

        // Validación de campos vacíos
        if (nombre.value.trim()) {
            isValid = false;
            mensaje.textContent("Dato cargado correctamente");
        } if (!nombre.value.trim()) {
            isValid = false;
            mensaje.textContent("El campo Nombre es obligatorio.");
        }
        if (!apellido.value.trim()) {
            isValid = false;
            errorMessages.push("El campo Nombre es obligatorio.");
        }
        if (!tipo.value.trim()) {
            isValid = false;
            errorMessages.push("El campo Tipo es obligatorio.");
        }

        if (!documento.value.trim()) {
            isValid = false;
            errorMessages.push("El campo Número de documento es obligatorio.");
        }

        // Validación de teléfono (solo números y mínimo 8 dígitos)
        const telefonoRegex = /^[0-9]{8,15}$/;
        if (!telefonoRegex.test(telefono.value.trim())) {
            isValid = false;
            errorMessages.push("El teléfono debe contener solo números y tener entre 8 y 15 dígitos.");
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            isValid = false;
            errorMessages.push("El email no tiene un formato válido.");
        }

        // Mostrar errores o enviar formulario
        if (!isValid) {
            alert("Errores encontrados:\n" + errorMessages.join("\n"));
        } else {
            alert("Formulario válido. ¡Datos enviados!");
            form.submit(); // Envía el formulario si todo está correcto
        }
    });
    const tipoInput = document.getElementById("tipoInput");
    const tipoLista = document.getElementById("tipoLista");

    // Mostrar/ocultar lista al hacer clic en el input
    tipoInput.addEventListener("click", function () {
        tipoLista.style.display = tipoLista.style.display === "none" ? "block" : "none";
    });

    // Asignar valor al input al seleccionar un elemento
    tipoLista.querySelectorAll("li").forEach(function (item) {
        item.addEventListener("click", function () {
            tipoInput.value = this.textContent;
            tipoLista.style.display = "none"; // Ocultar lista después de seleccionar
        });
    });

    // Ocultar lista si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!tipoInput.contains(event.target) && !tipoLista.contains(event.target)) {
            tipoLista.style.display = "none";
        }
    });
});
