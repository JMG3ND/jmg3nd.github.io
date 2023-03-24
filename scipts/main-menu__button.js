(function(){
    const mainMenuButton = document.querySelectorAll(".main-menu__content-item--hamburguer");
    mainMenuButton.forEach(element => {
        element.children[0].children[1].addEventListener("click", ()=>{
            element.classList.toggle('main-menu__content-item--active');
        })
    });
})();