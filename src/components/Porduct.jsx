import React from "react";
import { CartState } from "../contexts/CartContext";

export const Porduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div
      key={item.id}
      style={{ border: "1px solid red", padding: "10px", width: "20%" }}
    >
      <div>
        <img src={item.imageURL} alt={item.name} style={{ width: "100%" }} />
      </div>
      <h1>{item.name}</h1>
      <h1>{item.type}</h1>
      <h1>{item.price}</h1>
      {cart.some((ele) => ele.id === item.id) ? (
        <>
          <button>+</button>
          {1}
          <button>-</button>
        </>
      ) : (
        <button> Add to cart</button>
      )}
    </div>
  );
};
