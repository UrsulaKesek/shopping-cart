import React, { useState } from "react";

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([0]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
