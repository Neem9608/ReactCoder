// CartTotal.jsx

import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price);

    if (isNaN(price)) return acc;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cartTotal">
      <h3>Total: {total.toFixed(2)}</h3>
    </div>
  );
};

export default CartTotal;
