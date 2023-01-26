import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
// import Shop from "./shop";
import "../../../assets/styles/_test_/product-card.css";
import { CardData } from "../../../products";

const Gigel = () => {};

const Product = (props) => {
  const { id, itemCategory } = props.data;
  // console.log(props.data);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="card-container m-1 border border-2">
      {props.itemDescription &&
        props.itemDescription.map((item, index) => {
          return (
            <div key={index}>
              <div className="card-img-container">
                <div className="card-img ">
                  <img src={item.img} alt="" width="200px" height="200px" className="images" />
                </div>
              </div>
              <div className="description">
                <p>
                  <b className="">{`${itemCategory} ${item.brand} ${item.model} ${item.DiagonalaDisplay}-inch, ${item.TehnologiiDisplay}, ${item.tipprocesor} - ${item.nrNucleeProcesor} nuclee CPU si ${item.nrNucleePlacaVideo} nuclee GPU, ${item.CapacitateMemorie}GB, ${item.capacitateStocare}GB ${item.TipStocare}`}</b>
                </p>
              </div>
              0 0.
              {item.Culoare.map((culoare) => {
                // console.log(culoare);
              })}
              <div className="price-container">
                <div>$ {item.Pret}</div>
              </div>
              <div className="button-container">
                <button className="addToCardBtn" onClick={() => addToCart(id)}>
                  Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
