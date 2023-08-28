// app.js
import React, { useEffect } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import addProductsToFirestore from "./addProductsToFirestore";
import Home from "./componets/Home/Home";
import BookDetails from "./componets/BookDetails/BookDetails"; // Asegúrate de importar el componente BookDetails
import CartContent from "./componets/CartContent/Checkout";
import DataProvider from "./componets/Context/DataContext";

function App() {
  useEffect(() => {
    addProductsToFirestore();
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/book/:bookUrl" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
