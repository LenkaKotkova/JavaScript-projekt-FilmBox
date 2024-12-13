const elMenuTlacitko = document.querySelector("#menu-tlacitko")
elMenuTlacitko.addEventListener("click",function(){
    const elMenuPolozky = document.querySelector("#menu-polozky")
    const menuViditelne = elMenuPolozky.classList.contains("show")
    if (menuViditelne) {
        elMenuTlacitko.innerHTML = '<i class="fas fa-bars"></i>'
    } else {
        elMenuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>'
    }
   
    
    elMenuPolozky.classList.toggle("show") 
} )

