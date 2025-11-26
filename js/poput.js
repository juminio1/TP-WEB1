const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

let loginIframe;

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';

  if (!loginIframe) {
    loginIframe = document.createElement('iframe');
    loginIframe.id = 'loginIframe';
    loginIframe.src = '/html/inicio_sesion.html';
    modalContent.appendChild(loginIframe);
  }
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  if (loginIframe) {
    modalContent.removeChild(loginIframe);
    loginIframe = null;
  }
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    if (loginIframe) {
      modalContent.removeChild(loginIframe);
      loginIframe = null;
    }
  }
});

// mensaje al iframe para que cierre el popup
window.addEventListener("message", (event) => {
  if (event.data === "cerrarLogin") {

    // Ocultar el modal
    loginModal.style.display = "none";

    // Eliminar el iframe como hacés siempre
    if (loginIframe) {
      modalContent.removeChild(loginIframe);
      loginIframe = null;
    }

    console.log("Login correcto → Popup cerrado");
  }
});










