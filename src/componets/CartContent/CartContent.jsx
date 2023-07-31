// cartcontent.js
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements cart={cart} />
          <CartTotal cart={cart} />
        </>
      ) : (
        <h2 className="cart-message-center">Agregue un Libro</h2>
      )}
    </>
  );
};

export default CartContent;
