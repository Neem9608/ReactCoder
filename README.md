# Proyecto de tienda de libros

Este proyecto es una tienda de libros desarrollada con React.js. Permite a los usuarios ver una lista de libros disponibles, agregar libros al carrito de compras y realizar compras.

## Instalación

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias del proyecto.

## Configuración de Firebase

1. Crea un proyecto en Firebase desde [https://console.firebase.google.com/](https://console.firebase.google.com/).
2. Copia la configuración del proyecto (apiKey, authDomain, projectId, etc.) y pégala en el archivo `firebaseConfig.js`.

## Datos de prueba

El proyecto incluye un script para agregar productos de prueba a la base de datos de Firestore. Para ejecutar el script, sigue estos pasos:

1. Asegúrate de haber configurado correctamente tu proyecto de Firebase.
2. Abre la terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el comando `npm run add-products` para agregar los productos de prueba a la base de datos.

## Ejecutar el proyecto

Para ejecutar el proyecto, utiliza el siguiente comando:
`npm start`
Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.


## Funcionalidades

La aplicación Books Shop tiene las siguientes funcionalidades:


1. Catálogo de Libros: Los usuarios pueden ver una lista de libros disponibles en el catálogo de la librería.
2. Agregar al carrito: Los usuarios pueden agregar libros al carrito de compras haciendo clic en el botón "Comprar" en la tarjeta de cada libro. Si un libro ya está en el carrito, la cantidad se actualizará.
3. Eliminar del carrito: Los usuarios pueden eliminar libros del carrito de compras haciendo clic en el botón "Eliminar" en la lista del carrito. Aparecerá una confirmación antes de eliminar el libro.
4. Los usuarios pueden ajustar la cantidad de cada libro en el carrito antes de completar la compra.
5. `Checkout`: El carrito muestra el detalle de los productos seleccionados, incluyendo la imagen, nombre, cantidad, precio unitario y total. También muestra el monto total de la compra.
6. Confirmación de Compra: Al completar la compra, se muestra una ventana emergente con un resumen de los productos comprados y el monto total.
7. Mensajes de confirmación: Cuando se agrega un libro al carrito, se muestra un mensaje de éxito. Del mismo modo, cuando se elimina un libro del carrito, se muestra un mensaje de confirmación.
7. Datos de prueba: El proyecto incluye un script para agregar productos de prueba a la base de datos de Firebase. Esto permite tener una lista de libros para probar la funcionalidad del carrito de compras.

## Estructura del proyecto

La estructura del proyecto es la siguiente:

- `public`: Contiene archivos públicos como el ícono de la aplicación y el archivo HTML base.
- `src`: Contiene el código fuente de la aplicación.
  - `components`: Contiene los componentes reutilizables de la aplicación.
  - `Context`: Contiene el contexto y el proveedor de datos para manejar el carrito de compras.
  - `firebaseConfig.js`: Configuración de Firebase.
  - `App.js`: Componente principal de la aplicación que define las rutas.
  - `index.js`: Punto de entrada de la aplicación.
 

## Componentes

Mis disculpas por la confusión. Parece que hay una confusión en los términos. `addProductsToFirestore.js` no es un componente, es un archivo que contiene funciones para agregar productos a la base de datos Firestore.

En cuanto a los componentes principales del proyecto, aquí están:

### `App.js`

Este es el componente principal de la aplicación y define las rutas principales utilizando React Router. Configura el contexto de datos global a través de `DataProvider`.

### `Home.js`

Representa la página de inicio de la tienda de libros. Muestra una barra de navegación (`Navbar.js`) y un banner promocional (`Banner.js`). También muestra una lista de productos utilizando el componente `Products.js`.

### `Checkout`

1. Se muestra el detalle de la compra con cada producto en el carrito.
2. El total se calcula y muestra correctamente.
3. El botón "Completar Compra" está presente.

### `Navbar.js`

Es la barra de navegación superior de la aplicación. Contiene un enlace al carrito de compras (`CartContent.js`) y muestra la cantidad de elementos en el carrito utilizando el componente `TotalItems.js`.

### ` itemListContainer(products)`

Muestra una lista de productos disponibles para su compra. Utiliza el contexto de datos global para agregar productos al carrito de compras al hacer clic en el botón "Comprar". Cada producto se muestra como un componente `ProductCard.js`.

### `CartElements.js`

Representa los elementos del carrito de compras. Utiliza el contexto de datos global para mostrar los productos agregados al carrito y permite eliminar productos del carrito.

### `CartItemCounter.js`

Es un subcomponente utilizado dentro de `CartElements.js`. Permite aumentar o disminuir la cantidad de un producto en el carrito utilizando botones de más y menos.

### `CartTotal.js`

Muestra el monto total a pagar en el carrito de compras, sumando el precio de cada producto multiplicado por su cantidad.

### `TotalItems.js`

Es un subcomponente utilizado dentro de `Navbar.js`. Muestra la cantidad total de productos en el carrito.

Estos son los componentes principales del proyecto que se encargan de la interfaz de usuario y la lógica de la aplicación. Además, `addProductsToFirestore.js` es un archivo que contiene funciones para agregar productos a la base de datos Firestore, pero no es un componente visual.

## Dependencias principales

- React: Biblioteca para construir interfaces de usuario.
- Firebase: Plataforma para el desarrollo de aplicaciones web y móviles.
- SweetAlert2: Biblioteca para mostrar mensajes de alerta personalizados.
- react-router-dom: Biblioteca para manejar la navegación y las rutas en una aplicación React.

## Contribución

Si encuentras algún error o tienes sugerencias para mejorar el proyecto, ¡siéntete libre de abrir un issue o un pull request!

### Env Variables
REACT_APP_FIREBASE_API_KEY = AIzaSyB1uRZoQHZiAzB7k-HZz8n4Zf-ykfosIBo
REACT_APP_FIREBASE_MEASURE_ID =G-84D31FXRLY

### Feedback
Aguardo su buen feedback ¡Gracias totales!
- `Entrega Final` -` Escobar`