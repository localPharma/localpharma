import React, { useContext, createContext, useReducer } from "react";
// import { FavouriteItems } from "../api/db";

const CartContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD TO CART':
      return [...state, action.item]
    // case "ADD TO FAV":
    //   return [...FavouriteItems, action.item]
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
