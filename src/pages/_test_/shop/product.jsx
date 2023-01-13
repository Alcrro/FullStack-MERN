import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import Shop from "./shop";

const Product = (props) => {
  const { title } = props.data;
  console.log(title);
  return <div>{title}</div>;
};

export default Product;
