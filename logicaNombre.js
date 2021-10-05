/* ENVIAR NOMBRE A PAGINA PRINCIPAL */
const btnLogin = document.querySelector(".botonLogin");
btnLogin.addEventListener("click", () => {
    const valueLogin = document.getElementById("nombreUsu");
    localStorage.setItem("nombreInvitado",valueLogin.value);
});