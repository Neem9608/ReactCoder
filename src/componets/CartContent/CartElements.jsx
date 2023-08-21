// CartElements.jsx
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./ItemQuantitySelector y AddItemButton";
import Description from "../Description/Description";
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
    <h2 className="cartTotal">Detalles  de la compra</h2>
      {cart.map((product) => (
        <div className="cartContent" key={product.id}>
          <img src={product.img} alt="product-card" />

          <Description
          name={product.name}
          author={product.author}
          description={product.description}
        />
          <CartItemCounter product={product} />

          <h4 className="price">{product.price * product.quantity}</h4>

          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}
    </>
  );
};

export default CartElements;
