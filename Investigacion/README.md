Las API REST (que significa Transferencia de Estado Representacional) operan en una arquitectura cliente-servidor sin estado, proporcionando una forma estandarizada de crear, leer, actualizar y eliminar recursos, que permite la comunicación entre aplicaciones.
La integración de API RESTful con React mejora la funcionalidad de sus aplicaciones web al permitirles obtener y actualizar datos de forma dinámica. Esta integración facilita una experiencia de usuario fluida, lo que garantiza que la aplicación siga respondiendo y esté actualizada, podemos interactuar con ellas mediante solicitudes HTTP para consumir o enviar datos.

Conocimiento conceptual:
•	Fundamentos de JavaScript (variables, funciones, matrices, objetos)
•	Comprensión básica del desarrollo web con HTML y CSS
•	Conocimiento de APIs RESTful y sus operaciones (GET, POST, PUT, DELETE)
Habilidades técnicas:
•	Capacidad de utilizar una interfaz de línea de comandos (terminal)
•	Conocimientos básicos de Node.js y el gestor de paquetes npm
Herramientas:
•	Editor de texto o IDE para desarrollo de código
•	Navegador web
Configuración del Servicio de la API
Define las funciones que realizarán las solicitudes HTTP en un archivo, por ejemplo, 'services/api.js':
- Configura la base de la API con la URL del servidor.
- Implementa funciones específicas como obtener datos (GET) o crear recursos (POST).
Consumo de la API en React
Para consumir la API en React, se utilizan hooks como 'useState' para manejar el estado y 'useEffect' para realizar solicitudes al cargar un componente.
1. Al cargar la página, una solicitud GET puede obtener datos y mostrarlos en la interfaz.
2. Un botón o interacción del usuario puede desencadenar una solicitud POST para enviar datos nuevos.
Hay tres tipos principales de API. Cada uno ofrece ventajas y tiene posibles inconvenientes. 
API privadas
Nuestras propia API internas se denominan API privadas y crean una interfaz de comunicación entre las aplicaciones que utiliza tu equipo, incluyendo cualquier software de terceros que utilices junto con el tuyo. 
API públicas 
También conocidas como API abiertas, las API públicas están disponibles para los equipos de desarrollo que desean personalizar las aplicaciones para el acceso al software patentado. 
API de socios
Al igual que las API públicas, las API de socios proporcionan acceso para que el software se comunique con aplicaciones patentadas. Sin embargo, a diferencia de las API públicas, las API de socios no son de acceso público y requieren un acceso especial otorgado a través de un tipo de asociación con la empresa que posee o controla el software patentado. 


Referencias:
Ayebola, J. (2024, January 9). How to Work with RESTful APIs in React. freeCodeCamp.org. https://www.freecodecamp.org/news/how-work-with-restful-apis-in-react-simplified-steps-and-practical-examples/
Cómo crear una API. (n.d.). Lucidchart. https://www.lucidchart.com/blog/es/como-crear-una-api




