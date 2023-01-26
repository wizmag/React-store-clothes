import React, { createContext } from 'react';

export const Cartcontext = createContext();

const CartProvider = ({ children }) => {
  const addItemToCart = (item) => {};

  const removeItemToCart = (id) => {};

  const cart = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return <Cartcontext.Provider value={cart}>{children}</Cartcontext.Provider>;
};

export default CartProvider;
