const menuDesplegable = document.querySelector(".nav__list")
const iconoHamburguesa = document.querySelector(".nav__hamburguesa")

iconoHamburguesa.addEventListener("click", function(){
    menuDesplegable.classList.toggle("nav__list--open")
    console.log(menuDesplegable)
})
