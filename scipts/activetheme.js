const btnSwitch = document.querySelector('#switcher-theme');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');

    if(localStorage.getItem("theme") == "light"){
        localStorage.removeItem("theme");
    }else{
        localStorage.setItem("theme","light");
    }
    
});