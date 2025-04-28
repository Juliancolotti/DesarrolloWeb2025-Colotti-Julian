// server.js
import express from 'express';
import {
  procesarNuevoProducto,
  obtenerListaProcesada,
  obtenerProductoProcesado,
  procesarActualizacion,
  procesarEliminacion
} from './logic.js';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas (Endpoints REST)

// Listar productos
app.get('/productos', (req, res) => {
  const productos = obtenerListaProcesada();
  res.json(productos);
});

// Agregar un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre } = req.body;
  if (procesarNuevoProducto(nombre)) {
    res.status(201).json({ mensaje: 'Producto agregado exitosamente' });
  } else {
    res.status(400).json({ error: 'Nombre de producto inválido' });
  }
});

// Obtener producto por ID (opcional)
app.get('/productos/:id', (req, res) => {
  const producto = obtenerProductoProcesado(req.params.id);
  if (producto !== undefined) {
    res.json(producto);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Actualizar producto por ID (opcional)
app.put('/productos/:id', (req, res) => {
  const { nombre } = req.body;
  if (procesarActualizacion(req.params.id, nombre)) {
    res.json({ mensaje: 'Producto actualizado exitosamente' });
  } else {
    res.status(400).json({ error: 'Nombre de producto inválido' });
  }
});

// Eliminar producto por ID (opcional)
app.delete('/productos/:id', (req, res) => {
  procesarEliminacion(req.params.id);
  res.json({ mensaje: 'Producto eliminado exitosamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
