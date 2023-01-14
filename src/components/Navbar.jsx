import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Navbar = () => {
  return (
    <div>
      <div>
        <h3>TreeRex Store</h3>
      </div>
      <div>
        <Link to={"/"}>Product</Link>
        <Link to={"/cart"}>
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </div>
  );
};
