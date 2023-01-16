import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, img, title, description, rating, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const valueInp = cartItems[id];
  const inputValue = (event) => {
    const updateValue = event.id.value;
  };
  return (
    <>
      <div className="cartItem">
        <div className="container-cartItem">
          <div className="cart-item-description">
            <div className="main-product">
              <div className="main-product-image-container alcrro-left">
                <img src={img} alt="" width={"120px"} />
              </div>
            </div>
            <div className="description-cartItem">
              <p>
                <b>{description}</b>
              </p>
              <div className="alte-iteme">bla bla1</div>
              <div className="alte-iteme">bla bla2</div>
              <div className="alte-iteme">bla bla3</div>
              <div className="alte-iteme">bla bla4</div>
            </div>
            <div className="main-product-details-container alcrro-right">
              <div className="price-container">
                <p>${price}</p>
              </div>
              <div className="countHandler ">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input
                  value={cartItems[id]}
                  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                  className="input-value"
                />
                <button onClick={() => addToCart(id)}> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
