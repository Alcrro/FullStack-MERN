import React from "react";
import "../../../assets/styles/_test_/NavbarProduct.css";

const NavbarProduse = () => {
  return (
    <div className="navbar-aux-product-menu">
      <div className="megamenu">
        <div className="megamenu-list-container ">
          <ul className="megamenu-list ">
            <li className="">
              <a href="/">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <span>Laptop, Tablete & Telefoane</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa-solid fa-computer-mouse"></i>
                <span>PC, Periferice & Software</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="megamenu-details">
          <div className="megamenu-details-departament" data-id=""></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarProduse;
