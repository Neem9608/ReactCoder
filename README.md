# Proyecto de tienda de libros

Este proyecto es una tienda de libros desarrollada con React.js. Permite a los usuarios ver una lista de libros disponibles, agregar libros al carrito de compras y realizar compras.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
4. Inicia la aplicación con el siguiente comando: npm install
5. Abre tu navegador y visita `http://localhost:3000` para ver la tienda de libros.

## Funcionalidades

- **Rutas y navegación:** La aplicación utiliza React Router para manejar las rutas y la navegación entre las páginas principales, como la página de inicio y el carrito de compras.

- **Estado global:** Se utiliza el contexto de React para gestionar el estado global de la aplicación, lo que permite compartir datos como el carrito de compras entre diferentes componentes.

- **Efectos y Hooks:** Se utilizan los efectos de React y los hooks para realizar llamadas a la API y actualizar el estado de la aplicación de manera reactiva.

## Componentes

### `App.js`

Este componente es el punto de entrada de la aplicación y contiene las rutas principales utilizando React Router. También configura el contexto de datos global a través de `DataProvider`.

### `Home.js`

Este componente representa la página de inicio de la tienda de libros. Muestra una barra de navegación y un banner promocional. También muestra una lista de productos utilizando el componente `Products`.

### `CartContent.js`

Este componente representa la página del carrito de compras. Muestra una barra de navegación y los elementos del carrito utilizando el componente `CartElements`. También muestra el total a pagar utilizando el componente `CartTotal`.

### `Navbar.js`

Este componente representa la barra de navegación superior de la aplicación. Contiene un enlace al carrito de compras y muestra la cantidad de elementos en el carrito utilizando el componente `TotalItems`.

### `Products.js`

Este componente muestra una lista de productos disponibles para su compra. Utiliza el contexto de datos global para agregar productos al carrito de compras al hacer clic en el botón "buy".

### Otros componentes

- `Banner.js`: Componente que muestra el banner promocional en la página de inicio.
- `CartElements.js`: Componente que muestra los elementos del carrito de compras.
- `CartItemCounter.js`: Componente que permite aumentar o disminuir la cantidad de un producto en el carrito.
- `CartTotal.js`: Componente que muestra el total a pagar en el carrito de compras.
- `TotalItems.js`: Componente que muestra la cantidad total de elementos en el carrito de compras en la barra de navegación.
### Feedback
Aguardo su buen feedback
- `preEntrega2` Escobar