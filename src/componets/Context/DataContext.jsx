// DataContext.jsx
import { createContext, useState } from "react";
export const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const buyProducts = (product) => {
    let price = parseFloat(product.price);

    if (isNaN(price)) {
      console.error("Invalid price");
      return;
    }

    // Usa una función de actualización para asegurar que las actualizaciones sean correctas
    setCart((currentCart) => {
      const productInCart = currentCart.find((item) => item.url === product.url);
      
      if (productInCart) {
        // Actualizar cantidad si ya está en el carrito
        return currentCart.map((item) =>
          item.url === product.url
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Agregar nuevo al carrito
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <dataContext.Provider value={{ cart, setCart, buyProducts }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
