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
    if (!element) {
        console.log(`Error: No existe el elemento con id ${idElemento}`);
        return;
    }
        //Creo divPadre y le asigno una clase
    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');
    element.appendChild(divGasto);

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
    divGasto.appendChild (divValor);
    
    let divEtiquetas = document.createElement('div');
    divEtiquetas.classList.add('gasto-etiquetas');
    divGasto.appendChild (divEtiquetas);
    if (gasto.etiquetas && gasto.etiquetas.length > 0) {
        for (let i = 0; i < gasto.etiquetas.length ; i++){
            let spanEtiqueta = document.createElement ('span');
            spanEtiqueta.classList.add('gasto-etiquetas-etiqueta');
            spanEtiqueta.textContent = gasto.etiquetas[i];
            divEtiquetas.appendChild (spanEtiqueta);
            }
    }
    
}
    
//clasName o classList?

function mostrarGastosAgrupadosWeb (idElemento,agrup,periodo){
    let element = document.getElementById(idElemento);
    if(element && agrup){
        let divAgrupacion = document.createElement("div");
        divAgrupacion.classList.add("agrupacion");
        element.appendChild(divAgrupacion);

        let textoPeriodo = periodo === "dia" ? "día" : (periodo === "anyo" ? "año" : "mes");

        let h1Periodo = document.createElement("h1");
        h1Periodo.textContent = `Gastos agrupados por ${textoPeriodo}`;// textpPerodo
        divAgrupacion.appendChild(h1Periodo);

        let claves = Object.keys(agrup);
        claves.sort();
        for(let i = 0; i < claves.length;i++){
            let clave = claves[i];
            let valor = agrup[clave];

            let divAgrupDato = document.createElement("div");
            divAgrupDato.classList.add("agrupacion-dato");
            divAgrupacion.appendChild(divAgrupDato);

            let spanADClave = document.createElement("span")
            spanADClave.classList.add("agrupacion-dato-clave");
            spanADClave.textContent = clave;
            divAgrupDato.appendChild(spanADClave);

            let spanADValor = document.createElement("span");
            spanADValor.classList.add("agrupacion-dato-valor");
            spanADValor.textContent = String(valor);
            divAgrupDato.appendChild(spanADValor);
        }
    }
} 


export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}