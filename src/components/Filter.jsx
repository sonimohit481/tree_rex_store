import React from "react";

export const Filter = () => {
  return (
    <div>
      <p>color</p>
      <input type="checkbox" name="Red" id="type_red" onChange={() => {}} />
      <label htmlFor="type_red">Red</label>
      <input type="checkbox" name="Blue" id="type_blue" onChange={() => {}} />
      <label htmlFor="type_blue">Blue</label>
      <input type="checkbox" name="Green" id="type_green" onChange={() => {}} />
      <label htmlFor="type_green">Green</label>
      <p>Gender</p>
      <input type="checkbox" name="Male" id="type_male" onChange={() => {}} />
      <label htmlFor="type_male">Male</label>
      <input
        type="checkbox"
        name="Femail"
        id="type_female"
        onChange={() => {}}
      />

      <label htmlFor="type_female">Femail</label>
      <p>price</p>
      <input type="checkbox" name="R1" id="type_price1" onChange={() => {}} />
      <label htmlFor="type_price1">₹0-₹250</label>
      <input type="checkbox" name="R2" id="type_price2" onChange={() => {}} />
      <label htmlFor="type_price2">₹251-₹450</label>
      <input type="checkbox" name="R3" id="type_price3" onChange={() => {}} />
      <label htmlFor="type_price3">₹451</label>
      <p>Type</p>
      <input type="checkbox" name="Polo" id="type_polo" onChange={() => {}} />
      <label htmlFor="type_polo">Polo</label>
      <input
        type="checkbox"
        name="Hoodie"
        id="type_hoodie"
        onChange={() => {}}
      />
      <label htmlFor="type_hoodie">Hoodie</label>
      <input type="checkbox" name="Basic" id="type_basic" onChange={() => {}} />
      <label htmlFor="type_basic">Basic</label>
    </div>
  );
};
