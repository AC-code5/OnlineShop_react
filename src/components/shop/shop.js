import "./shop.css";
import { PRODUCTS } from "../../data/products";
import React from "react";
import Product from "./product";

const Shop = () => {
  return (
    <div className="shop_container">
      <h1 className="title_shop">Our Products</h1>
      <div className="shop_wrapper">
        {PRODUCTS.map((productdata) => (
          <Product key={productdata.id} data={productdata} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
