import * as gP from "./gestionPresupuesto.js"
import * as gPWeb from "./gestionPresupuestoWeb.js"

//no se muestra
gP.actualizarPresupuesto(1500);
gPWeb.mostrarDatoEnId('presupuesto', gP.mostrarPresupuesto());

