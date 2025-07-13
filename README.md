# 🛏️ *Sistema de Reservas Online (React + Node.js)*

Este proyecto consiste en el desarrollo de un sistema de reservas online enfocado en negocios como hoteles, hostales, consultorios o servicios que requieren agendar reservas o citas a través de internet. El sistema está dividido en dos partes: **frontend con React** y **backend con Node.js + Express**, comunicándose mediante una API REST.

---

## 🎯 Objetivo

Construir una aplicación web moderna, modular y funcional, que permita gestionar reservas, habitaciones y clientes.  
> Esta versión **no incluye login**, lo que permite centrarse en la lógica principal del sistema y su integración entre frontend y backend.

---

## 🧩 Características del sistema

- 📅 **Reservas**: Crear, listar y cancelar reservas.
- 🛏️ **Habitaciones**: Crear, editar, eliminar y visualizar estado de habitaciones.
- 👤 **Clientes**: Registro y consulta de historial de huéspedes.
- 💰 **Pagos (opcional)**: Registrar pagos y consultar totales.
- 🌐 **API RESTful** con Node.js + SPA en React + diseño responsivo.

---

## 🛠️ Tecnologías utilizadas

| Tecnología       | Rol                                 |
|------------------|--------------------------------------|
| React            | Interfaz de usuario (frontend)       |
| Vite             | Entorno de desarrollo rápido         |
| React Router     | Navegación entre páginas             |
| Node.js          | Entorno backend                      |
| Express          | API REST backend                     |
| MongoDB / MySQL  | Base de datos (a elección)           |
| Axios / Fetch    | Comunicación HTTP                    |

---

## 📁 Estructura del proyecto

```
sistema-reservas/
├── client/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas del sistema
│   │   ├── services/        # Conexión a la API
│   │   └── App.jsx          # Componente raíz
│   └── vite.config.js       # Configuración de Vite
├── server/                  # Backend (Node.js + Express)
│   ├── controllers/         # Lógica de negocio por recurso
│   ├── models/              # Esquemas o modelos de datos
│   ├── routes/              # Rutas de la API
│   ├── config/              # Configuraciones generales (DB, etc.)
│   └── index.js             # Punto de entrada del servidor
├── package.json             # Configuración general del proyecto
└── README.md                # Documentación del sistema
```

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/sistema-reservas.git
cd sistema-reservas
```

2. Instala dependencias del backend:

```bash
cd server
npm install
```

3. Instala dependencias del frontend:

```bash
cd ../client
npm install
```

---

## 🚀 Ejecución

Inicia el backend:

```bash
cd server
npm run dev
```

Inicia el frontend:

```bash
cd ../client
npm run dev
```

La aplicación se abrirá en:

- Frontend → [http://localhost:5173](http://localhost:5173)
- Backend API → [http://localhost:3000/api](http://localhost:3000/api)

---

## 📦 Endpoints del backend (ejemplos)

- `GET /api/reservas`
- `POST /api/reservas`
- `DELETE /api/reservas/:id`
- `GET /api/habitaciones`
- `POST /api/clientes`

---

## 🧠 Ideas para ampliar

- Agregar sistema de login para administración
- Conexión con Firebase o autenticación JWT
- Notificaciones por email al crear reservas
- Calendario visual (react-calendar, fullcalendar)
- Dashboard con estadísticas y gráficas
- Exportación a PDF / Excel

---

## 📸 Capturas de pantalla (recomendado)

> Agrega aquí imágenes de la interfaz (dashboard, formulario de reserva, listado de habitaciones, etc.)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!  
Puedes hacerlo así:

```bash
1. Haz un fork del proyecto
2. Crea una nueva rama: git checkout -b mejora-x
3. Realiza tus cambios y haz commit
4. Haz push a tu rama: git push origin mejora-x
5. Abre un Pull Request
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  
Desarrollado por [Tu Nombre].
