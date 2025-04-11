// ui.js
import {
    procesarNuevoProducto,
    obtenerListaProcesada,
    procesarEliminacion
  } from './logic.js';
  
  const input = document.getElementById('productInput');
  const lista = document.getElementById('productList');
  document.getElementById('addBtn').addEventListener('click', () => {
    if (procesarNuevoProducto(input.value)) {
      input.value = '';
      mostrarProductos();
    }
  });
  
  function mostrarProductos() {
    lista.innerHTML = '';
    const productos = obtenerListaProcesada();
    productos.forEach((prod, i) => {
      const li = document.createElement('li');
      li.textContent = prod;
  
      const btn = document.createElement('span');
      btn.textContent = 'Eliminar';
      btn.className = 'delete-btn';
      btn.onclick = () => {
        procesarEliminacion(i);
        mostrarProductos();
      };
  
      li.appendChild(btn);
      lista.appendChild(li);
    });
  }
  
  mostrarProductos();
  