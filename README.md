# Proyecto Inmobiliario

Este proyecto es una aplicación web para la gestión de propiedades inmobiliarias. Permite a los usuarios registrarse, iniciar sesión y buscar propiedades. Además permite que un propietario
ingrese una propiedad para arrendar.

## Requisitos

Antes de comenzar, tener instalado Node.js y npm en su máquina. 

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1. **Clona el repositorio**:
    ```bash
    git clone (https://github.com/waripex/Corredora_Propiedades.git)
    ```

2. **Navega al directorio del proyecto**:
    ```bash
    cd ...
    ```

3. **Instala las dependencias**:
    ```bash
    npm install
    ```

## Ejecución

1. **Inicia el servidor**:
    ```bash
    node app.js
    ```

2. **Abre tu navegador y navega a** `http://localhost:3000` **para ver la aplicación en funcionamiento**.

## Estructura del Proyecto 

- `/public`: Contiene los archivos HTML y CSS.
- `app.js`: Archivo principal del servidor Node.js.
- `database.db`: Archivo de la base de datos SQLite.
- `package.json`: Archivo de configuración de npm.

## Navegación

- **Menú**: En todas las páginas, el enlace "Menú" te llevará a la página de inicio.
- **Propiedades**: Lista de las propiedades en arriendo y en venta.
- **¿Quieres arrendar tu propiedad?**: Formulario para ingresar una propiedad.
- **Contacto**: Página de contacto.
- **Login**: Enlace para iniciar sesión.
- **Register**: Enlace para registrarse y que se guarde en la base de datos.
