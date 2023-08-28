import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";
import Description from "../Description/Description";
import Swal from "sweetalert2";

import "./BookDetails.css";

const BookDetails = () => {
  const { bookUrl } = useParams();
  const { buyProducts } = useContext(dataContext);
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    const q = query(collection(db, "products"), where("url", "==", bookUrl));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      setBook(docData);
    } else {
      console.log("No se encontró el libro con la URL proporcionada.");
    }
  };

  useEffect(() => {
    fetchBook();
  }, [bookUrl]);

  if (!book) {
    return <div>Cargando detalles del libro...</div>;
  }

  const buyProduct = () => {
    buyProducts(book); // Utiliza la misma función del contexto
    Swal.fire({
      title: "Éxito",
      text: "Producto agregado",
      icon: "success",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="book-details">
        <h2>{book.name}</h2>
        <img src={book.img} alt={`${book.name} book cover`} />
        <Description author={book.author} description={book.description} />
        <button onClick={buyProduct}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default BookDetails;
