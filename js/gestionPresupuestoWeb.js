"use strict";
import * as gp from "./gestionPresupuesto.js"

function mostrarDatoEnId (idElemento,valor){
    let element = document.getElementById(idElemento);
    if(element)
        element.textContent = String(valor);    
}
function mostrarGastoWeb (idElemento, gasto){
    let element = document.getElementById(idElemento);

    //Creo divPadre y le asigno una clase
    let divGasto = document.createElement('div');
    divGasto.classList.add('gasto');
    element.append(divGasto);

    //Creo divHijo, le asigno una clase, le asigno texto y lo añado al divPadre
    let divDescripcion = document.createElement('div');
    divDescripcion.classList.add('gasto-descripcion');
    divDescripcion.textContent = gasto.descripcion;
    divGasto.append(divDescripcion);

    let divFecha = document.createElement('div');
    divFecha.classList.add('gasto-fecha');
    divFecha.textContent = gasto.fecha;
    divGasto.append(divFecha);

    let divValor = document.createElement('div');
    divValor.classList.add('gasto-valor');
    divValor.textContent = `${gasto.valor} €`;
    divGasto.append(divValor);
    
    let divEtiquetas = document.createElement('div');
    divEtiquetas.classList.add('gasto-etiquetas');
    divGasto.append(divEtiquetas);
    if (gasto.etiquetas && gasto.etiquetas.length > 0) {
        for (let i = 0; i < gasto.etiquetas.length ; i++){
            let spanEtiqueta = document.createElement ('span');
            spanEtiqueta.classList.add('gasto-etiquetas-etiqueta');
            spanEtiqueta.textContent = gasto.etiquetas[i];
            divEtiquetas.append (spanEtiqueta);
            }
    }    
}
    
function mostrarGastosAgrupadosWeb (idElemento,agrup,periodo){
    let element = document.getElementById(idElemento);
    if(element && agrup){
        let divAgrupacion = document.createElement("div");
        divAgrupacion.classList.add("agrupacion");
        element.append(divAgrupacion);

        let textoPeriodo = periodo === "dia" ? "día" : (periodo === "anyo" ? "año" : "mes");

        let h1Periodo = document.createElement("h1");
        h1Periodo.textContent = `Gastos agrupados por ${textoPeriodo}`;// textpPerodo
        divAgrupacion.append(h1Periodo);

        let claves = Object.keys(agrup);
        claves.sort();
        for(let i = 0; i < claves.length;i++){
            let clave = claves[i];
            let valor = agrup[clave];

            let divAgrupDato = document.createElement("div");
            divAgrupDato.classList.add("agrupacion-dato");
            divAgrupacion.append(divAgrupDato);

            let spanADClave = document.createElement("span")
            spanADClave.classList.add("agrupacion-dato-clave");
            spanADClave.textContent = clave;
            divAgrupDato.append(spanADClave);

            let spanADValor = document.createElement("span");
            spanADValor.classList.add("agrupacion-dato-valor");
            spanADValor.textContent = String(valor);
            divAgrupDato.append(spanADValor);
        }
    }
} 

function repintar(){
    mostrarDatoEnId('presupuesto', gP.mostrarPresupuesto());
    mostrarDatoEnId("gastos-totales", gP.calcularTotalGastos());
    mostrarDatoEnId("balance-total", gP.calcularBalance());
    let listadoCompleto = document.getElementById("listado-gastos-completo");
    if(listadoCompleto)
        listadoCompleto= "";
    let lista = gp.listarGastos();
        for (let i = 0; i< lista.length; i++)
            mostrarGastoWeb("listado-gastos-completo", lista[i]);        
}

function actualizarPresupuestoWeb(){
    let pedirNPresupuesto = prompt("Introduzca un nuevo presupuesto");
    pedirNPresupuesto = Number(pedirNPresupuesto);
    gp.actualizarPresupuesto(pedirNPresupuesto);
    repintar();
}

let boton = document.getElementById("actualizarpresupuesto");
boton.addEventListener('click',actualizarPresupuestoWeb);

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}