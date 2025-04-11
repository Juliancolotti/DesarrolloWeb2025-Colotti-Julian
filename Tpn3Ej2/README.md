# Gestión de Productos – Arquitectura en Tres Capas

## 📌 Descripción de la arquitectura

Este proyecto aplica una arquitectura en tres capas:

- **Capa de presentación (UI)**: `index.html` + `ui.js`
  - Captura eventos del usuario y muestra los datos.
- **Capa de lógica de negocio**: `logic.js`
  - Contiene validaciones y operaciones que procesan los datos.
- **Capa de acceso a datos**: `data.js`
  - Administra la lista en memoria (crear, leer, eliminar).

## ✅ Ventajas respecto a la versión monolítica

- **Mejor organización**: el código está dividido por responsabilidad.
- **Mantenimiento más fácil**: se pueden hacer cambios en una capa sin romper las otras.
- **Reutilización**: la lógica de negocio y los datos podrían adaptarse a otra interfaz (por ejemplo, web o móvil).
- **Facilita pruebas unitarias**: cada parte puede testearse por separado.

