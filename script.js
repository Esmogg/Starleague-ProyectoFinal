const menuBtn = document.getElementById("menuBtn");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {

    aside.classList.toggle("abierto");
    document.body.classList.toggle("menu-abierto");

});