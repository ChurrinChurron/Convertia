let btnMenuAbrir = document.querySelector("#btnMenuAbrir");
let btnMenuCerrar = document.querySelector("#btnMenuCerrar");
let menu = document.querySelector(".nav__mob");

/*Función para abrir y cerrar el menú*/

btnMenuAbrir.addEventListener("click", () => {

    menu.classList.add("abrir");
})

btnMenuCerrar.addEventListener("click", () => {

    menu.classList.remove("abrir");
})

/*Función para iniciar la librería de AOS*/

AOS.init();