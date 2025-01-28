import React, { useContext } from "react";
import { PRODUCTS } from "../data/products";
import { ShopContext } from "../context/shopContext";
import Product from "../components/shop/product";
import "../cart/cart.css";
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <React.Fragment>
      <div className="cart_container">
        <h1>Your cart</h1>
        <div className="cart_wrapper">
          {PRODUCTS.map((p) => {
            if (cartItems.some((i) => i.id === p.id && i.count > 0))
              return <Product key={p.id} data={p}></Product>;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
