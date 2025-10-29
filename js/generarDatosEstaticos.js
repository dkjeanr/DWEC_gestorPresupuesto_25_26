import * as gP from "./gestionPresupuesto.js"
import * as gPWeb from "./gestionPresupuestoWeb.js"

gP.actualizarPresupuesto(1500);
gPWeb.mostrarDatoEnId('presupuesto', gP.mostrarPresupuesto());

// let g1 = new gP.CrearGasto(descripcion,valor, fecha, ...etiquetas);


