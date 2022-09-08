import React, { useContext, createContext, useReducer } from "react";
const CartContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  let quantity = 0
  switch (action.type) {
    case 'ADD TO CART':
      return [...state, action.item]
    case 'INCREASE':
      return [...state, quantity + 1]
    case "DECREASE": 
      return [...state, action.item - 1]
    default:
      throw new Error("Failed...");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
