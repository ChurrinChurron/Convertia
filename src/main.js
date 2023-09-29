let btnMenuAbrir = document.querySelector("#btnMenuAbrir");
let btnMenuCerrar = document.querySelector("#btnMenuCerrar");
let menu = document.querySelector(".nav__mob");
let header = document.querySelector("header");
let sections = document.querySelectorAll("section");
let footer = document.querySelector("footer");
let navLinks = document.querySelectorAll(".nav__linksDesktop a");

/*Función para abrir y cerrar el menú*/

btnMenuAbrir.addEventListener("click", () => {

    menu.classList.add("abrir");
})

btnMenuCerrar.addEventListener("click", () => {

    menu.classList.remove("abrir");
})

/*Función para activar los links al scrollear*/

// window.onscroll = () => {

//     let topHeadFoot = window.scrollY;
//     let offsetFoot = footer.offsetTop;
//     let heightHead = header.offsetHeight;
//     let heightFoot = footer.offsetHeight;
//     let idHead = header.getAttribute("id");
//     let idFoot = footer.getAttribute("id"); 

//     sections.forEach(sec => {

//         let top = window.scrollY;
//         let offset = sec.offsetTop - 300;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if(top >= offset && top < offset + height) {

//             navLinks.forEach(links => {

//                 links.classList.remove('active');
//                 document.querySelector(".nav__linksDesktop a[href*=" + id +"]").classList.add('active');
//             })
            
//         }
//     })

//     if(topHeadFoot <= 20 & topHeadFoot < 20 + heightHead) {

//         navLinks.forEach(links => {

//             links.classList.remove('active');
//             document.querySelector(".nav__linksDesktop a[href*=" + idHead +"]").classList.add('active');
//         })
//     }

//     if(topHeadFoot >= 8300 & topHeadFoot < 8300 + heightFoot) {

//         navLinks.forEach(links => {

//             links.classList.remove('active');
//             document.querySelector(".nav__linksDesktop a[href*=" + idFoot +"]").classList.add('active');
//         })
//     }
// }