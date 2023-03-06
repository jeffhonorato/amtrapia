const menu = document.querySelector(".js-menu-mobile");
const menuItens = document.querySelector(".js-menu-itens")

menu.addEventListener("click", () => {
    menuItens.classList.toggle("ativo")
});