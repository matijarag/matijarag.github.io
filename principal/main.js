/* SPAN NOMBRE INVITADO*/
var invitado = localStorage.getItem("nombreInvitado");
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('nombreInvitado').innerHTML = data.nombreUsu.replace(/[+]/,' ');
}

/* BOTON SABER MAS */
const btnSaberMas = document.querySelector(".sobre-mi");
btnSaberMas.addEventListener("click", () =>{
    //hideSection();
    toggleAbout();
});

/* BOTON VOLVER */
const btnVolver = document.querySelector(".volverbtn");
btnVolver.addEventListener("click", () =>{
    //hideSection();
    togglePrincipal();
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function togglePrincipal(){
    document.querySelector(".about-section").classList.remove("active");
    document.querySelector(".home-section").classList.toggle("active");

}
function toggleAbout(){
    document.querySelector(".home-section").classList.remove("active");
    document.querySelector(".about-section").classList.toggle("active");
}

/* MENU TABS EXPERIENCIA EDUCACION*/

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});