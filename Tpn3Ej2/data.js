// data.js
const productos = [];

export function agregarProducto(nombre) {
  productos.push(nombre);
}

export function obtenerProductos() {
  return productos;
}

export function eliminarProducto(index) {
  productos.splice(index, 1);
}
