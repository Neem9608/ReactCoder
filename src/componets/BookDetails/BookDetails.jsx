import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; // Agrega esta línea para importar la función 'query'
import { db } from "../../firebaseConfig";
import React, { useState, useEffect } from "react";
// import "./BookDetails.css"; // Asegúrate de tener el archivo de estilos correspondiente

const BookDetails = () => {
  const { bookUrl } = useParams(); 

  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const q = query(collection(db, 'products'), where('url', '==', bookUrl));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setBook(docData);
      } else {
        console.log("No se encontró el libro con la URL proporcionada.");
      }
    };

    fetchBook();
  }, [bookUrl]);

  if (!book) {
    return <div>Cargando detalles del libro...</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.name}</h2>
      <img src={book.img} alt={`${book.name} book cover`} />
      <p>Autor: {book.author}</p>
      <p>Precio: {book.price}</p>
      <p>Descripción: {book.description}</p>
      {/* Agrega otros detalles del libro aquí si es necesario */}
    </div>
  );
};

export default BookDetails;
