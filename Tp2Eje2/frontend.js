import { procesarTarea } from "./logica.js";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("botonAgregar");
  const input = document.getElementById("tareaInput");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", () => {
    const tarea = input.value;
    const resultado = procesarTarea(tarea);

    mensaje.innerText = resultado.mensaje;
    if (resultado.exito) input.value = "";
  });
});
