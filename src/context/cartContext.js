import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    totalCartItems: "",
    totalCartPrice: "",
    color: "",
    quantity: "",
    stock: "",
    shipping_fee: 50000,
    price: "",
    image: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, color, quantity, singleproduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, singleproduct } });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("localCart");
    if (!localCartData) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE&ITEMS" });
    localStorage.setItem("localCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ ...state, AddToCart, clearCart, removeItem, setDecrease, setIncrease }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
