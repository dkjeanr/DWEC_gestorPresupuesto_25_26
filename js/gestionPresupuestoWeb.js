"use strict";
function mostrarDatoEnId (idElemento,valor){
    let element = document.getElementById(idElemento);
    if(element){
        element.textContent = String(valor);
    }
    else{
        console.log(`Error: No existe el elemento con id ${idElemento}`);
    }
}
function mostrarGastoWeb (idElemento, gasto){
    let element = document.getElementById(idElemento);
    if(element){
        //Creo divPadre y le asigno una clase
    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');

    //Creo divHijo, le asigno una clase, le asigno texto y lo añado al divPadre
    let divDescripcion = document.createElement('div');
    divDescripcion.classList.add('gasto-descripcion');
    divDescripcion.textContent = gasto.descripcion;
    divGasto.appendChild (divDescripcion);

    let divFecha = document.createElement('div');
    divFecha.classList.add('gasto-fecha');
    divFecha.textContent = gasto.fecha;
    divGasto.appendChild (divFecha);

    let divValor = document.createElement('div');
    divValor.classList.add('gasto-valor');
    divValor.textContent = `${gasto.valor} €`;
    divGasto.appendChild (divdivValor);

    //Como genero las distintas etiquetas automáticamente?
    
    let divEtiquetas = document.createElement('div');
    divEtiquetas.classList.add('gasto-etiquetas');
    // divEtiquetas.textContent = 'ETIQUETAS DEL GASTO';
    divGasto.appendChild (divEtiquetas);
    for (let i = 0; i < gasto.etiquetas.length ; i++){
        let spanEtiqueta = document.createElement ('span');
        spanEtiqueta.classList.add('gasto-etiqueta');
        spanEtiqueta.textContent = gasto.etiquetas[i];
        divEtiquetas.appendChild (spanEtiqueta);
    }

    
}
    


}
function mostrarGastosAgrupadosWeb (){
    
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}