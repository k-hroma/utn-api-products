# UTN API Products

Este proyecto es una API REST con frontend que permite gestionar productos. 
Se ha agregado una nueva funcionalidad: **búsqueda de productos por nombre**, que permite filtrar los productos mostrados en pantalla en función del texto ingresado.
Se añadió efectivamente el middleware (protect) a la ruta api/products que se encontraba definido pero no utilizado para los métodos: post, patch, delete. De esta manera únicamente un usuario con un token generado, podrá borrar, agregar o modificar productos en el dashboard.
## 🛠 Tecnologías utilizadas

- **Backend:**

  - Node.js
  - Express
  - Mongoose (MongoDB)
  - TypeScript

- **Frontend:**
  - React
  - Vite
  - JavaScript
  - CSS Nativo

## 🚀 Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/k-hroma/utn-api-products.git
cd utn-api-products
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con valores reales
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Editar .env con la URL del backend
npm run dev
```

## 🔎 Nueva funcionalidad: búsqueda de productos

### Descripción

Se añadió un input en el frontend que permite buscar productos por nombre. Al escribir, se realiza una búsqueda parcial e insensible a mayúsculas/minúsculas, sin necesidad de presionar un botón.

### Ejemplo de uso

1. Al escribir `lap`, se mostrarán productos como:

   - Laptop HP
   - Lápiz óptico
   - Adaptador laptop

2. Si no hay coincidencias, se muestra el mensaje: `Producto no encontrado`.

## 📁 Variables de entorno

### Backend - `.env.example`

```env
PORT=
MONGO_URI=
```

### Frontend - `.env.example`

```env
VITE_API_URL=
```

---

Esta funcionalidad se desarrolló manteniendo la estructura del proyecto y respetando las capas de modelo, controlador y rutas en el backend, así como la conexión con MongoDB mediante Mongoose.

## ⭐ Mejora adicional Back y Front

Se añadió efectivamente el middleware a la ruta api/products que se encontraba definido pero no utilizado para los métodos: post, patch, delete. De esta manera únicamente un usuario con un token generado, podrá borrar, agregar o modificar productos en el dashboard.
