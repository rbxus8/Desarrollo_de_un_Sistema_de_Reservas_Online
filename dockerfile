# Etapa 1: construir el proyecto
FROM node:20-slim AS builder

WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias con limpieza
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Compilar la app (Vite genera /dist)
RUN npm run build

# Etapa 2: usar Nginx para servir
FROM nginx:stable-alpine

# Copiar build generado
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Arranque
CMD ["nginx", "-g", "daemon off;"]
