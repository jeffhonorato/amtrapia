const menuMobile = document.querySelector(".js-menu-mobile");
const navItens = document.querySelector(".js-menu-itens");
const menuLinks = document.querySelectorAll(".js-menu-link");

console.log(menuLinks);

    menuMobile.addEventListener("click", () => {
        navItens.classList.toggle("ativo");
    });

    menuLinks.forEach((link) => {   
        link.addEventListener("click", () => {
            if(link.id == "menu-inicio" || link.id == "menu-radioweb" || link.id == "menu-programacao" || link.id == "menu-locutores" || link.id == "menu-contato") {
                navItens.classList.remove("ativo");
            }
        })
    })

   

    

