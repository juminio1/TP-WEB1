
document.querySelectorAll(".datosInput").forEach(input => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-grupo");
 
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);
});


const inputs = document.querySelectorAll(".datosInput");
const btnGuardar = document.querySelector(".boton-azul");

const inputNombre = inputs[0];
const inputApellido = inputs[1];
const inputTipo = inputs[2];
const inputNumeroDoc = inputs[3];
const inputFecha = inputs[4];
const inputTelefono = inputs[5];
const inputEmailSec = inputs[6];
 
function crearErrorDebajo(input) {
 
    const p = document.createElement("p");
 
    p.style.color = "white";
    p.style.backgroundColor = "red";
    // p.style.borderRadius = "10px"
 
    p.style.fontSize = "15px";
 
    input.parentElement.appendChild(p);
 
    return p;
 
}
const errNombre = crearErrorDebajo(inputNombre);
const errApellido = crearErrorDebajo(inputApellido);
const errTipo = crearErrorDebajo(inputTipo);
const errNumeroDoc = crearErrorDebajo(inputNumeroDoc);
const errFecha = crearErrorDebajo(inputFecha);
const errTelefono = crearErrorDebajo(inputTelefono);
const errEmail = crearErrorDebajo(inputEmailSec);
 

function validarNombre(nombre) {
    return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,20}$/.test(nombre);
}
 
function validarApellido(apellido) {
    return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,20}$/.test(apellido);
}
 
function validarTipo(tipo) {
    return ["DNI", "PASAPORTE", "CEDULA", "CUIT", "CUIL"].includes(tipo);
}
 
function validarNumeroDocumento(num) {
    return /^\d{6,12}$/.test(num);
}
 
function validarFecha(fecha) {
    return fecha !== "";
}
 
function validarTelefono(tel) {
    return /^\d{8,15}$/.test(tel);
}
 
function validarEmailSecundario(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|net|org)$/;
    return regex.test(email);
}
 

function validarFormulario() {
    let okNombre = false,
        okApellido = false,
        okTipo = false,
        okNum = false,
        okFecha = false,
        okTel = false,
        okEmail = false;
 
    // ------------------ Nombre ------------------
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        inputNombre.style.border = "2px solid red";
        errNombre.textContent = "El nombre es obligatorio.";
    } else if (!validarNombre(nombre)) {
        inputNombre.style.border = "2px solid red";
        errNombre.textContent = "El nombre debe tener 2-20 letras.";
    } else {
        inputNombre.style.border = "2px solid green";
        errNombre.textContent = "";
        okNombre = true;
    }
 
    // ------------------ Apellido ------------------
    const apellido = inputApellido.value.trim();
    if (apellido === "") {
        inputApellido.style.border = "2px solid red";
        errApellido.textContent = "El apellido es obligatorio.";
    } else if (!validarApellido(apellido)) {
        inputApellido.style.border = "2px solid red";
        errApellido.textContent = "El apellido debe tener 2-20 letras.";
    } else {
        inputApellido.style.border = "2px solid green";
        errApellido.textContent = "";
        okApellido = true;
    }
 
    // ------------------ TIPO documento ------------------
    const tipo = inputTipo.value.trim();
    if (!validarTipo(tipo)) {
        inputTipo.style.border = "2px solid red";
        errTipo.textContent = "Seleccione un tipo válido.";
    } else {
        inputTipo.style.border = "2px solid green";
        errTipo.textContent = "";
        okTipo = true;
    }
 
    // ------------------ Número documento ------------------
    const num = inputNumeroDoc.value.trim();
    if (num === "") {
        inputNumeroDoc.style.border = "2px solid red";
        errNumeroDoc.textContent = "El número es obligatorio.";
    } else if (!validarNumeroDocumento(num)) {
        inputNumeroDoc.style.border = "2px solid red";
        errNumeroDoc.textContent = "Debe tener entre 6 y 12 dígitos.";
    } else {
        inputNumeroDoc.style.border = "2px solid green";
        errNumeroDoc.textContent = "";
        okNum = true;
    }
 
    // ------------------ Fecha ------------------
    const fecha = inputFecha.value;
    if (!validarFecha(fecha)) {
        inputFecha.style.border = "2px solid red";
        errFecha.textContent = "Debe seleccionar una fecha.";
    } else {
        inputFecha.style.border = "2px solid green";
        errFecha.textContent = "";
        okFecha = true;
    }
 
    // ------------------ Teléfono ------------------
    const tel = inputTelefono.value.trim();
    if (tel === "") {
        inputTelefono.style.border = "2px solid red";
        errTelefono.textContent = "El teléfono es obligatorio.";
    } else if (!validarTelefono(tel)) {
        inputTelefono.style.border = "2px solid red";
        errTelefono.textContent = "Debe tener entre 8 y 15 números.";
    } else {
        inputTelefono.style.border = "2px solid green";
        errTelefono.textContent = "";
        okTel = true;
    }
 
    // ------------------ Email secundario ------------------
    const emailSec = inputEmailSec.value.trim();
    if (emailSec === "") {
        inputEmailSec.style.border = "2px solid red";
        errEmail.textContent = "El email es obligatorio.";
    } else if (!validarEmailSecundario(emailSec)) {
        inputEmailSec.style.border = "2px solid red";
        errEmail.textContent = "Email inválido (.com, .net, .org).";
    } else {
        inputEmailSec.style.border = "2px solid green";
        errEmail.textContent = "";
        okEmail = true;
    }
 
    // Habilitar o deshabilitar botón
    btnGuardar.disabled = !(okNombre && okApellido && okTipo && okNum && okFecha && okTel && okEmail);
}

inputs.forEach(input => {
    input.addEventListener("input", validarFormulario);
});
 
inputFecha.addEventListener("change", validarFormulario);
 

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
 
    if (!btnGuardar.disabled) {
        alert("Datos personales guardados con éxito.");
        
        window.location.href = "/html/index.html";

        // LIMPIAR TODO
        inputs.forEach(i => {
            i.value = "";
            i.style.border = "";
        });
 
        errNombre.textContent = "";
        errApellido.textContent = "";
        errTipo.textContent = "";
        errNumeroDoc.textContent = "";
        errFecha.textContent = "";
        errTelefono.textContent = "";
        errEmail.textContent = "";
 
        btnGuardar.disabled = true;
    }
});

const tipoInput = document.getElementById("tipoInput");

const tipoLista = document.getElementById("tipoLista");
 
tipoInput.addEventListener("click", () => {

    tipoLista.style.display = tipoLista.style.display === "none" ? "block" : "none";

});
 
// Selección de opción

tipoLista.querySelectorAll("li").forEach(li => {

    li.addEventListener("click", () => {

        tipoInput.value = li.textContent;

        tipoLista.style.display = "none";

        validarFormulario();

    });

});
 