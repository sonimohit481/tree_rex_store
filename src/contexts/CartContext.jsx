import { createContext, useContext, useReducer } from "react";
import data from "../user.json";
import { CartReducer } from "./CartReducer";
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const Product = data.data;
  const [state, dispatch] = useReducer(CartReducer, {
    product: Product,
    cart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const CartState = () => {
  return useContext(CartContext);
};
