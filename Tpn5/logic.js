// logic.js
import {
    agregarProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
  } from './data.js';
  
  export function procesarNuevoProducto(nombre) {
    if (nombre.trim() === '') return false;
    agregarProducto(nombre.trim());
    return true;
  }
  
  export function obtenerListaProcesada() {
    return obtenerProductos();
  }
  
  export function obtenerProductoProcesado(id) {
    return obtenerProductoPorId(id);
  }
  
  export function procesarActualizacion(id, nuevoNombre) {
    if (nuevoNombre.trim() === '') return false;
    actualizarProducto(id, nuevoNombre.trim());
    return true;
  }
  
  export function procesarEliminacion(id) {
    eliminarProducto(id);
  }
  