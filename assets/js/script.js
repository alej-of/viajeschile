$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    $("#enviarCorreo").on("click", function () {
        alert("Funcion deshabilitada temporalmente. Disculpe las molestias.");
    });

});