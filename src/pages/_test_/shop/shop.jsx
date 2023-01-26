import React from "react";
import Navbar from "../../../components/ui/_test_/Navbar";
import { CardData } from "../../../products";
import Product, { Gigel } from "./product";

export const Shop = () => {
  // console.log(CardData);
  return (
    <div className="container ">
      <div className="shopTitle">
        <h1>ALCRRO Shop</h1>
      </div>
      <div className="products">
        {CardData.map((product, index) => (
          <Product data={product} key={index} itemDescription={product.itemDescription} />
        ))}
      </div>
    </div>
  );
};
