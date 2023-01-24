import React from "react";
import "../../../assets/styles/_test_/layoutProductPage.css";
import { ShopContext } from "../../../context/shop-context";
import { Cart } from "../../../pages/cart/cart";
import CartItem from "../../../pages/cart/CartItem";
import { Shop } from "../../../pages/_test_/shop/shop";
import SideFilter from "./sideFilter";

const LayoutProductPage = () => {
  return (
    <>
      <div className="main-container-inner">
        <div className="main-container">
          <section className="page-section">
            <div className="container">
              <div className="page-header">Page Header</div>
              <div className="clearfix pad-btm-md">
                <div className="menu-container">
                  <div className="sidebar-container sidebar-tree-container">test</div>
                  <div className="sidebar-container sidebar-filter-container">
                    <SideFilter />
                  </div>
                </div>
                <div className="page-container">
                  <div className="listing-panel has-floating-listing-panel-footer">
                    <div className="listing-panel-heading">
                      <div className="listing-page-title js-head-title">
                        <h1 className="title-phrasing">Tablete</h1>
                      </div>
                    </div>
                  </div>
                  <div className="cart-collection">
                    <Shop />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="page-selection page-selection-light">
            <div className="container">
              <h2 className="page-section-title">Linkuri utile:</h2>
              <div className="pad-sep-xs">
                <div className="collapse-offset  in">
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 1
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 2
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 3
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 4
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 5
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 6
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 7
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Cel mai tare Link 7
                  </a>
                  <a href="/" className="btn btn-seo-links btn-sm">
                    Link 8
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LayoutProductPage;
