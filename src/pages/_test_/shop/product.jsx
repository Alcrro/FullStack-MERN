import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
// import Shop from "./shop";
import "../../../assets/styles/_test_/product-card.css";

const Product = (props) => {
  const { id, img, title, description, rating, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="card-container m-1 border border-2 ">
      <div className="card-img-container">
        <div className="card-img">
          <img src={img} alt="" width="200px" height="200px" className="images" />
        </div>
      </div>
      <div className="description ">
        <p>
          <b>{description}</b>
        </p>
      </div>
      <div className="price-container">
        <div>$ {price}</div>
      </div>
      <div className="button-container">
        <button className="addToCardBtn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
