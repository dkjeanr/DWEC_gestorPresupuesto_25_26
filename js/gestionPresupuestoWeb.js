"use strict";
function mostrarDatoEnId (idElemento,valor){
    let element = document.getElementById('idElemento');
    if(element){
        element.textContent = String(valor);
    }
}
function mostrarGastoWeb (){
    
}
function mostrarGastosAgrupadosWeb (){
    
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}