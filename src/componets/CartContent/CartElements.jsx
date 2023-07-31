// CartElements.jsx
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

// Import from SweetAlert2
import Swal from "sweetalert2";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (productId) => {
    Swal.fire({
      title: "¿ Eliminar este producto?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((currentCart) => {
          return currentCart.filter((item) => item.id !== productId);
        });
      }
    });
  };

  return (
    <>
      {cart.map((product) => (
        <div className="cartContent" key={product.id}>
          <img src={product.img} alt="product-card" />

          <h3 className="name">{product.name}</h3>

          <CartItemCounter product={product} />

          <h4 className="price">{product.price * product.quantity}</h4>

          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}
    </>
  );
};

export default CartElements;