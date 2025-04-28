// data.js
const productos = [];

export function agregarProducto(nombre) {
  productos.push(nombre);
}

export function obtenerProductos() {
  return productos;
}

export function obtenerProductoPorId(id) {
  return productos[id];
}

export function actualizarProducto(id, nuevoNombre) {
  productos[id] = nuevoNombre;
}

export function eliminarProducto(id) {
  productos.splice(id, 1);
}
