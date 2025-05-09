// backend.js
import { guardarTarea } from "./database.js";

// Función simulando un endpoint del backend
export function procesarTarea(tarea) {
  if (!tarea || tarea.trim() === "") {
    return { exito: false, mensaje: "Error: la tarea no puede estar vacia." }; // Seguridad
  }

  guardarTarea(tarea); // Guardado
  return { exito: true, mensaje: "Tarea guardada: ${tarea}" };
}
