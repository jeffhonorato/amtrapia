const menuMobile = document.querySelector(".js-menu-mobile")
const navItens = document.querySelector(".js-menu-itens")

    menuMobile.addEventListener("click", () => {
        navItens.classList.toggle("ativo");
    })