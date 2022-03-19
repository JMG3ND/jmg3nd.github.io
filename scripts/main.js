let miBoton = document.querySelector("button");
let titulo = document.querySelector("h1");

miBoton.onclick = function() {
    cambiarNombreDeTitulo();
}

function cambiarNombreDeTitulo(){
    let miNombre = prompt("Introduzca su nombre");
    localStorage.setItem("nombre", miNombre);
    titulo.textContent = miNombre + ", Bienvenido a los Algoritmos OLL";
}
