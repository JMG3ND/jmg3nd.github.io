( ()=> {
    //Obtener el botón del menú
    const button = document.getElementById('top-navegation-bar__button');
    //Asignar al evento click la función showMenu();
    button.addEventListener('click', ()=>{
        document.querySelector("#top-navegation-bar__menus-container").classList.toggle('top-navegation-bar__menus-container--show');
    })
})();