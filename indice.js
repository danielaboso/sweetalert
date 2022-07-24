const btnMostrarAlert = document.getElementById("btn-mostrar-alert");
btnMostrarAlert.onclick = mostrarAlert;

function mostrarAlert() {
    Swal.fire('Combo Registrado')
};

let boton = document.getElementById("btn-mostrar-alert");
boton.addEventListener("click", escribirNombre);

function escribirNombre() {
    let nombre = document.getElementById("nombre").value;
    let contenido = "El nombre del combo es: <strong>" + nombre + "</strong></p>";
    document.getElementById("resultado").innerHTML = contenido;
}
boton.addEventListener("click", escribirPrincipal);
function escribirPrincipal () {
    let principal= document.getElementById("menu").value;
    let contenido2 = "El principal es: <strong>" + principal + "</strong></p>";
    document.getElementById("resultado2").innerHTML = contenido2;
}
boton.addEventListener("click", escribirAgregado1);
function escribirAgregado1 () {
    let agregado1= document.getElementById("agregado").value;
    let contenido3 = "El agregado es: <strong>" + agregado1 + "</strong></p>";
    document.getElementById("resultado3").innerHTML = contenido3;
}
boton.addEventListener("click", escribirAgregado2);
function escribirAgregado2 () {
    let agregado2= document.getElementById("agregados").value;
    let contenido4 = "El agregado es: <strong>" + agregado2 + "</strong></p>";
    document.getElementById("resultado4").innerHTML = contenido4;
}
boton.addEventListener("click", escribirAderezo);
function escribirAderezo () {
    let aderezo= document.getElementById("aderezos").value;
    let contenido5 = "El aderezo es: <strong>" + aderezo + "</strong></p>";
    document.getElementById("resultado5").innerHTML = contenido5;
}
boton.addEventListener("click", escribirPapas);
function escribirPapas () {
    let papas= document.getElementById("fritas").value;
    let contenido6 = "Papas: <strong>" + papas + "</strong></p>";
    document.getElementById("resultado6").innerHTML = contenido6;
}
boton.addEventListener("click", escribirBebida);
function escribirBebida () {
    let bebida= document.getElementById("bebidas").value;
    let contenido7 = "La bebida seleccionada es: <strong>" + bebida + "</strong></p>";
    document.getElementById("resultado7").innerHTML = contenido7;
}
