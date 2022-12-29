import React from 'react';
import '../../assets/_test_/card.css';
import AddCartButton from './addToCartButton/AddCartButton';

function Card({ item }) {
  return (
    <>
      <div className="card-item">
        <div className="card">
          {/* <div className="card-toolbox">
            <button type="button" className="btn add-to-favorite">
              <i className="em em-fav em-fav-bold"></i>
            </button>
            <button type="button" className="btn add-to-favorite">
              <i className="em em-fav em-fav-bold"></i>
            </button>
          </div> */}
          <div className="card-info">
            <a href="/" className="card-thumb">
              <div className="card-thumb-inner">
                <img src={item.img} width={'220px'} height={'220px'} className="" />
              </div>
            </a>
            <div className="card-description">
              <a href="/" className="card-title">
                {item.description}
              </a>

              <div className="card-rating">
                <a href="/" className="card-rating-container">
                  <div className="star-rating">
                    <div className="star-rating-inner">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="star-rating-text">
                      <span className="average-rating">5</span>
                      <span className="hidden-xs"></span>
                      <span className="visible-xs-inline-block">(169)</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="list-view">
              <div className="card-content">
                <div className="card-pricing">
                  <div className="product-price">
                    {item.price}
                    <sup>
                      <small>99</small>
                    </sup>
                    <span> Lei</span>
                  </div>
                </div>
                <AddCartButton />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card-content">
              <div className="card-pricing">
                <div className="product-price">
                  {item.price}
                  <sup>
                    <small>99</small>
                  </sup>
                  <span> Lei</span>
                </div>
              </div>
              <AddCartButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
