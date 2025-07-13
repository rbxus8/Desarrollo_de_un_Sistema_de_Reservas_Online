Sistema de Reservas Online (React + Node.js)
Este proyecto consiste en el desarrollo de un sistema de reservas online enfocado en negocios como hoteles, hostales, consultorios o servicios que requieren agendar reservas o citas a través de internet. El sistema está dividido en dos partes: frontend con React y backend con Node.js + Express, comunicándose mediante una API REST.
🎯 Objetivo
Construir una aplicación web moderna, modular y funcional, que permita gestionar reservas, habitaciones y clientes. Esta versión no incluye login, lo que permite centrarse en la lógica principal del sistema y su integración entre frontend y backend.
🧩 Características del sistema
•	📅 Reservas: Crear, listar y cancelar reservas.
•	🛏️ Habitaciones: Crear, editar, eliminar y visualizar estado de habitaciones.
•	👤 Clientes: Registro y consulta de historial de huéspedes.
•	💰 Pagos (opcional): Registrar pagos y consultar totales.
•	🌐 API RESTful con Node.js + SPA en React + diseño responsivo.
🛠️ Tecnologías
Tecnología	Rol
React	Interfaz de usuario (frontend)
Vite	Entorno de desarrollo rápido
React Router	Navegación entre páginas
Node.js	Entorno backend
Express	API REST backend
MongoDB / MySQL	Base de datos (a elección)
Axios / Fetch	Comunicación HTTP
📁 Estructura del proyecto


<img width="538" height="396" alt="image" src="https://github.com/user-attachments/assets/dd01a6ea-e285-4731-b3c9-5be8472647ac" />



⚙️ Instalación
1. Clona el repositorio:
git clone https://github.com/tuusuario/sistema-reservas.git
cd sistema-reservas
2. Instala dependencias del backend:
cd server
npm install
3. Instala dependencias del frontend:
cd ../client
npm install
🚀 Ejecución
Inicia el backend:
cd server
npm run dev
Inicia el frontend:
cd ../client
npm run dev
La aplicación se abrirá en:
Frontend → http://localhost:5173
Backend API → http://localhost:3000/api
📦 Endpoints del backend (ejemplos)
•	GET /api/reservas
•	POST /api/reservas
•	DELETE /api/reservas/:id
•	GET /api/habitaciones
•	POST /api/clientes
🧠 Ideas para ampliar
•	Agregar sistema de login para administración
•	Conexión con Firebase o autenticación JWT
•	Notificaciones por email al crear reservas
•	Calendario visual (react-calendar, fullcalendar)
•	Dashboard con estadísticas y gráficas
📄 Licencia
MIT © 2025 - Desarrollado por [Tu Nombre]
