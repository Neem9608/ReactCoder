// addProductsToFirestore.js

import { collection, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addProductsToFirestore = async () => {
  const books = [
    {
      name: "On The Road",
      author: "Jack Kerouac",
      description: "Hola a todos yo soy el Leon",
      price: 10,
      quantity: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStI02j-ucMvVOARGDREfySnDtTOwbqEm6iK_s8OUUoruf71ix1HirXatizzIeq6L-DhxA&usqp=CAU",
    },
    {
      name: "The Subterraneans",
      author: "Jack Kerouac",
      description: "Hola a todos yo soy el Leon",
      price: 20,
      quantity: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgELTZnFmSBowVS4Q6h57GYVz4VD3DDk9sapCkwts02L0YeCR4flTlJ3p7E3RTaULCYM&usqp=CAU",
    },
    {
      name: "Indian Journals",
      author: "Allen Ginsberg",
      description: "Hola a todos yo soy el Leon",
      price: 27,
      quantity: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3Cn2O2dmrbuSPOvFv0NsDuYMvaq8d-ZMHfSRmyg2HPrimXtxpb7bpbuibTwhKWAgpKc&usqp=CAU",
    },
    {
      name: "Iron Horse",
      author: "Allen Ginsberg",
      description: "Hola a todos yo soy el Leon",
      price: 18,
      quantity: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnp4ECiLiU5FbFwCE5iGsL8_2rFKGtkkaLsQ&usqp=CAU",
    },
  ];

  const productsRef = collection(db, "products");

  books.forEach(async (book) => {
      try {
        await setDoc(productsRef.doc(book.name), book);
        console.log("Added/updated product: ", book.name);
      } catch (error) {
        console.error("Error adding/updating product: ", error);
      }
    });
    };

export default addProductsToFirestore;