import React, { useContext } from "react";
import { PRODUCTS } from "../data/products";
import { ShopContext } from "../context/shopContext";
import Product from "../components/shop/product";
import "../cart/cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    PRODUCTS.forEach((product) => {
      const cartItem = cartItems.find((item) => item.id === product.id);
      if (cartItem) {
        total += product.price * cartItem.count;
      }
    });
    return total;
  };

  return (
    <React.Fragment>
      <div className="cart_Topcontainer">
        <div className="cart_container">
          <h1>Your cart</h1>
          <div className="cart_wrapper">
            {PRODUCTS.map((p) => {
              if (cartItems.some((i) => i.id === p.id && i.count > 0))
                return <Product key={p.id} data={p}></Product>;
            })}
          </div>
          <div className="cart_total">
            <h2>Total Price: ${calculateTotal()}</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
