import React, { useContext } from "react";
import { CardData } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import "../../assets/styles/_test_/cartItem.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="container cart">
      {totalAmount > 0 ? (
        <>
          <div>
            <h1>My Cart</h1>
          </div>
          <div className="cart-products-sell">
            <h4>Produse vandute si livrate de ALCRRO</h4>
            <div className="cart-items">
              {CardData.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem data={product} key={product.id} />;
                }
              })}
              <div className="container total-price">
                <div className="emg-right vendor-summary-totals emg-col3">
                  <div className="vendor-summary-line">
                    <span className="alcrro-left">Cost produse:</span>
                    <span className="emg-right vendor-summary-items-price">
                      <span className="money-int">69.69</span>
                      <sup className="money-decimal">
                        <small className="mf-decimal">,</small>
                        99
                      </sup>
                      <span className="money-currency"> Lei</span>
                    </span>
                  </div>
                  <div className="vendor-summary-line"></div>
                  <div className="vendor-summary-line"></div>
                </div>
              </div>
            </div>
            <div className="checkout text-center">
              <h3 className="">Total: ${totalAmount}</h3>
              <button className="p-1 m-1" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
              <button className="p-1 m-1">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="cart-empty text-center">
          <h2>Your cart is empty,please add items and come back.</h2>
          <button onClick={() => navigate("/")}>Back to Magazin</button>
        </div>
      )}
    </div>
  );
};
