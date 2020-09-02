import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart, clearCart } = value;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
      <Link to="/">
        <button
          className="btn btn-outline-danger text-uppercase md-3 px-5"
          type="button"
          onClick={() => clearCart()}
        >clear all cart</button>
      </Link>

    </div>
  );
}
