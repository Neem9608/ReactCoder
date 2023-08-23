import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; // Agrega esta línea para importar la función 'query'
import { db } from "../../firebaseConfig";
import { dataContext} from "../Context/DataContext"; // Asegúrate de importar el contexto del carrito
import Navbar from "../Navbar/Navbar";
import Description from "../Description/Description";
import Swal from "sweetalert2";

import "./BookDetails.css"; // Asegúrate de tener el archivo de estilos correspondiente

const BookDetails = () => {
  const { bookUrl } = useParams(); 
  const { buyProducts } = useContext(dataContext); // Obtiene la función buyProducts del contexto
  const [book, setBook] = useState(null);
  // const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const buyProduct = () => {
    buyProducts(book); // Agregar el libro al carrito usando el contexto
    Swal.fire({
      title: "Éxito",
      text: "Producto agregado",
      icon: "success",
    });
  };

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
    <div> <Navbar />
    <div className="book-details">
    
      <h2>{book.name}</h2>
      <img src={book.img} alt={`${book.name} book cover`} />
      <Description
          author={book.author}
          description={book.description}
        />
      {/* Agrega otros detalles del libro aquí si es necesario */}
    
          {/* <div className="quantity">
          <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div> */}
        <button onClick={buyProduct}>Agregar al carrito</button>
      </div>
      </div>
  );
};

export default BookDetails;
