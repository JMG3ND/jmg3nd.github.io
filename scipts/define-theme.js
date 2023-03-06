function loadTheme() {
    const theme = localStorage.getItem("theme");
    if(theme == undefined){
        localStorage.setItem("theme","");
    }
}