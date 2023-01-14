import React from "react";
import { Porduct } from "./Porduct";
import { CartState } from "../contexts/CartContext";
import { Filter } from "./Filter";

export const Home = () => {
  const {
    state: { product },
  } = CartState();
  //   console.log(product);
  return (
    <div>
      <Filter />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "auto",
        }}
      >
        {product.map((item) => {
          return <Porduct key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
