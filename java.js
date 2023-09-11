// script.js
document.addEventListener('DOMContentLoaded', function() {
    const fechaActual = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);
    document.getElementById('fecha').textContent = fechaFormateada;
});
