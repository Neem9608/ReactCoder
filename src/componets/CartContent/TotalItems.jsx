// TotalItems.jsx
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);
console.log(cart);
  const total = cart.reduce((acc, el) => acc + el.quantity, 0);
  return <span className='cart-items-total'>{total}</span>;
};

export default TotalItems;