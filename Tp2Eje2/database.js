export const tareasDB = []; // Escalabilidad: se puede reemplazar por IndexedDB o un backend real

export function guardarTarea(tarea) {
  tareasDB.push(tarea);
}
