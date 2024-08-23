
/*function limpiarCaja(){
    document.querySelector('#valorUsuario').value =("");   
}*/

function esconderElemento(nombreDelElemento){

    document.getElementById(nombreDelElemento).style.display = "none";

}

function encriptarTexto() {
    const texto = document.getElementById("texto__encriptado").value;

    // Expresión regular para detectar mayúsculas o acentos
    const regexMayusculasYAcentos = /[A-ZÁÉÍÓÚáéíóú]/;

    if (regexMayusculasYAcentos.test(texto)) {
        alert("El texto no debe contener mayúsculas ni acentos.");
        return; // Detiene la ejecución de la función si se encuentran mayúsculas o acentos
    }

    // Si no hay mayúsculas ni acentos, continúa con la encriptación
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    esconderElemento("imagen__niño");
    esconderElemento("parrafos__niño");

    // Muestra el textarea con el texto encriptado
    const resultadoEncriptado = document.getElementById("resultado__del__boton");
    resultadoEncriptado.style.display = "block";
    resultadoEncriptado.value = textoEncriptado;
}

  

function desencriptarTexto() {
    const texto = document.getElementById("texto__encriptado").value;

    // Expresión regular para detectar mayúsculas o acentos
    const regexMayusculasYAcentos = /[A-ZÁÉÍÓÚáéíóú]/;

    if (regexMayusculasYAcentos.test(texto)) {
        alert("El texto no debe contener mayúsculas ni acentos.");
        return; // Detiene la ejecución de la función si se encuentran mayúsculas o acentos
    }

    // Desencripta el texto
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    esconderElemento("imagen__niño");
    esconderElemento("parrafos__niño");

    // Muestra el textarea con el texto desencriptado
    const resultadoDesencriptado = document.getElementById("resultado__del__boton");
    resultadoDesencriptado.style.display = "block";
    resultadoDesencriptado.value = textoDesencriptado;
}


 