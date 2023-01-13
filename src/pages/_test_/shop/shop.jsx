import React from "react";
import { CardData } from "../../../products";
import Product from "./product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>ALCRRO Shop</h1>
      </div>
      <div className="products">
        {CardData.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
