import React from "react";

export const Porduct = ({ item }) => {
  const [isAddToCart, setIsAddToCart] = React.useState(true);
  const [counter, setCounter] = React.useState(1);
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
      {isAddToCart ? (
        <button onClick={() => setIsAddToCart(false)}> Add to cart</button>
      ) : (
        <div>
          {counter < 1 ? (
            (setIsAddToCart(true), setCounter(1))
          ) : (
            <>
              <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
              {counter}
              <button onClick={() => setCounter((pre) => pre - 1)}>-</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
