// ----------------------
// ELEMENTOS
// ----------------------
const emailInput = document.getElementById("email");
const btnContinuar = document.querySelector("button[type='submit']");

// Crear mensaje de error debajo del input
let emailError = document.createElement("p");
emailError.style.color = "red";
emailError.style.fontSize = "13px";
emailInput.parentElement.appendChild(emailError);

// Crear mensaje de confirmación debajo del input
let confirmMsg = document.createElement("p");
confirmMsg.style.color = "white";
confirmMsg.style.fontSize = "14px";
confirmMsg.style.fontWeight = "bold";
confirmMsg.style.marginTop = "5px";
emailInput.parentElement.appendChild(confirmMsg);

// ----------------------
// VALIDAR EMAIL
// ----------------------
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.(com|org|net)$/;
    return regexEmail.test(email);
}

// ----------------------
// VALIDAR FORMULARIO
// ----------------------
function validarFormulario() {
    const email = emailInput.value.trim();
    let emailValido = false;

    confirmMsg.textContent = ""; // limpiar mensaje de confirmación al tipear

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

    // Habilitar / deshabilitar botón
    btnContinuar.disabled = !emailValido;
}

// ----------------------
// EVENTO INPUT
// ----------------------
emailInput.addEventListener("input", validarFormulario);

// ----------------------
// EVENTO SUBMIT
// ----------------------
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // evitar recargar la página

    if (!btnContinuar.disabled) {
        // Mostrar mensaje de confirmación
        confirmMsg.textContent = "Se ha enviado un correo para recuperar la contraseña.";

        // Limpiar input y deshabilitar botón
        emailInput.value = "";
        emailInput.style.border = "1px solid #ccc";
        emailError.textContent = "";
        btnContinuar.disabled = true;
    }
});
