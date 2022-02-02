let tempo = 3000;
let imagemAtual = 0;
let imagens = document.querySelectorAll(".banner__img");
let maxImagens = imagens.length;


const nextImage = () => {

    imagens[imagemAtual].classList.remove("selected");

    imagemAtual++;

    if(imagemAtual >= maxImagens) {
        imagemAtual = 0;
    }
    imagens[imagemAtual].classList.add("selected");
}


const start = () =>  {
    setInterval(() => {
        // TROCA DE IMAGEM 
        nextImage();
    }, tempo)
}
    
window.addEventListener("load", start);