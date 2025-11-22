
// ----------------------
// ELEMENTOS
// ----------------------
/* const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnIngresar = document.getElementById("btnIngresar");

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
            "La contraseña debe tener 8-12 caracteres, mayúscula, minúscula, número y símbolo (#?!%$).";
    } else {
        passwordInput.style.border = "2px solid green";
        passError.textContent = "";
        passValida = true;
    }

    // HABILITAR / DESHABILITAR BOTÓN
    btnIngresar.disabled = !(emailValido && passValida);
}

// ----------------------
// EVENTOS
// ----------------------
emailInput.addEventListener("input", validarFormulario);
passwordInput.addEventListener("input", validarFormulario);

// mensaje para cerrar el popup al validar mail y contraseña
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evita que recargue o abra el popup otra vez

    // Si el botón no está deshabilitado, entonces todo está validado correctamente
    if (!btnIngresar.disabled) {

        // LE AVISAMOS AL INDEX QUE CIERRE EL POPUP
        window.parent.postMessage("cerrarLogin", "*");
    }
}); */

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




