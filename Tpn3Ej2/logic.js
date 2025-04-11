// logic.js
import { agregarProducto, obtenerProductos, eliminarProducto } from './data.js';

export function procesarNuevoProducto(nombre) {
  if (nombre.trim() === '') return false;
  agregarProducto(nombre.trim());
  return true;
}

export function obtenerListaProcesada() {
  return obtenerProductos();
}

export function procesarEliminacion(index) {
  eliminarProducto(index);
}
