import "./shop.css";
import { PRODUCTS } from "../../data/products";
import React from "react";
import Product from "./product";

const Shop = () => {
  return (
    <React.Fragment>
      <h1 className="title_shop"> This shop </h1>
      <div className="shop_wrapper">
        {PRODUCTS.map((productdata) => {
          return <Product key={productdata.id} data={productdata} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Shop;
