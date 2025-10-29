import * as gP from "./gestionPresupuesto.js"
import * as gPW from "./gestionPresupuestoWeb.js"

gp.actualizarPresupuesto(1500);
gpWeb.mostrarDatoEnId('presupuesto', gp.mostrarPresupuesto());

// let g1 = new gP.CrearGasto(descripcion,valor, fecha, ...etiquetas);


