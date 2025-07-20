# 🛏️ *Sistema de Reservas Online (React + Vite + Node.js)*

Este proyecto consiste en el desarrollo de un sistema de reservas online enfocado en negocios como hoteles, hostales, consultorios o servicios que requieren agendar reservas o citas a través de internet. El sistema está dividido en dos partes: **frontend con React** y **backend con Node.js + Express**, comunicándose mediante una API REST.

---

## 🎯 Objetivo

Construir una aplicación web moderna, modular y funcional, que permita gestionar reservas, habitaciones y clientes.  

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
---
3. Instala dependencias del frontend:

```bash
cd ../client
npm install
```
---

//================construccion del proyecto===================//
```
https://www.figma.com/design/MyTJq6mhkli0nJTazmtlKE/Desarrollo_de_un_Sistema_de_Reservas_Online?t=HMOqd1HZia3I1ZbR-1
```
