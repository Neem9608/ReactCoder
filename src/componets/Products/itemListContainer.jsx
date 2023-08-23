// itemListContainer.jsx
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Description from "../Description/Description";
import { Link } from "react-router-dom"; // Importa Link

import "./Products.css";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { buyProducts } = useContext(dataContext);

  const fetchProducts = async () => {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef);

    const productsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const buyProduct = (product) => {
    buyProducts(product);

    Swal.fire({
      title: "Éxito",
      text: "Producto agregado",
      icon: "success",
    });
  };

  return (
    <>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link to={`/book/${product.url}`}>
            <img src={product.img} alt={`${product.name} book cover`} />
          </Link>
          
            <Description
              name={product.name}
              author={product.author}
              description={product.description}
            />
          
          <p>{product.price}</p>
          <button onClick={() => buyProduct(product)}>Comprar</button>
        </div>
      ))}
    </>
  );
};


export default Products;
