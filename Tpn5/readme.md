# API REST - Gestión de Productos

## ¿Qué características hacen que esta sea una API REST?

- Usa HTTP como protocolo principal.
- Implementa endpoints claros que representan recursos (`/productos`).
- Utiliza métodos HTTP estándares: GET, POST, PUT y DELETE.
- Es stateless: cada solicitud contiene toda la información necesaria.
- Formato de respuesta: JSON.

## ¿Qué diferencias hay con la arquitectura de 3 capas anterior?

- **Antes**: la capa de presentación era un HTML interactuando directamente con la lógica en el navegador.
- **Ahora**: la capa de presentación es un servidor Express que expone rutas HTTP.
- **Antes**: el usuario interactuaba mediante botones y eventos en el navegador.
- **Ahora**: los usuarios (u otras aplicaciones) interactúan mediante solicitudes HTTP (por ejemplo, usando Postman o fetch).
- **Se mantiene** la separación de responsabilidades entre Datos, Lógica y Presentación, pero adaptada a un modelo de API web.

