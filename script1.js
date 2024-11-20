// Script para mostrar alertas personalizadas y botones funcionales
document.addEventListener("DOMContentLoaded", () => {
    // Encontrar el botón de volver al inicio si existe
    const backToHomeButton = document.getElementById("backToHome");

    if (backToHomeButton) {
        backToHomeButton.addEventListener("click", () => {
            window.location.href = "index.html"; // Redirigir al inicio
        });
    }
});
