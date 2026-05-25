document.addEventListener("DOMContentLoaded", () => {
    const botonSubmenu = document.getElementById("boton-submenu");
    const submenu = document.querySelector(".submenu-categorias");
    const btoResponsive = document.getElementById("boton-responsive");

    botonSubmenu.addEventListener('click', (ev) => {
        ev.stopPropagation(); 
        submenu.classList.toggle("submenu-activo");
    });

    document.addEventListener('click', () => {
        submenu.classList.remove("submenu-activo");
    });
});