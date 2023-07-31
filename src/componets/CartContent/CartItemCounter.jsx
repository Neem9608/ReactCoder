// CartItemCounter.jsx
import { useContext } from "react";
import {  dataContext } from "../Context/DataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartItemCounter = ({ product }) => {
  const { setCart } = useContext(dataContext);
  const increase = () => {
    let quantity = parseInt(product.quantity);

    if (isNaN(quantity)) {
      // Si la cantidad es NaN, establecemos la cantidad inicial en 1
      quantity = 1;
    } else {
      quantity++;
    }

    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity };
        }

        return item;
      })
    );
  };

  const decrease = () => {
    let quantity = parseInt(product.quantity);

    if (isNaN(quantity)) {
      // Si la cantidad es NaN, establecemos la cantidad inicial en 1
      quantity = 1;
    } else {
      quantity--;
    }

    // Asegurémonos de que la cantidad no sea menor que 1
    quantity = Math.max(quantity, 1);


    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity };
        }

        return item;
      })
    );
  };

  return (
    <>
    <button onClick={decrease}>
    <FontAwesomeIcon icon={faMinus} size="2xl" />
    </button>

      <span>{product.quantity}</span>
      
      <button onClick={increase}>
       <FontAwesomeIcon icon={faPlus}  fade size="2xl" />
      </button>
    </>
  );
};

export default CartItemCounter;
