// app.js
import { db } from "./firebaseConfig"; // Importa el objeto de la base de datos
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import addProductsToFirestore from "./addProductsToFirestore";
import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/Checkout";
import DataProvider from "./componets/Context/DataContext";
async function initializeFirebase(){
try {
  await db; // Espera a que se resuelva la promesa de db
  addProductsToFirestore(); // Llama a addProductsToFirestore después de que db esté disponible
}catch (error) {
  console.error("Error al inicializar Firebase:", error);
}
}

function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
