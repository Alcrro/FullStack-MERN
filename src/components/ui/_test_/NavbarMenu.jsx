import React from "react";
import "../../../assets/styles/_test_/NavbarMenu.css";
import NavbarProduse from "./NavbarProduse";

const NavbarMenu = () => {
  return (
    <div className="navbar-menu-aux-outer">
      <nav className="navbar navbar-aux">
        <div className="container">
          <div className="navbar-menu-content navbar-menu-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li className="main-megamenu-trigger">
                <div className="navbar-aux-content-departments">
                  <i className="fa-solid fa-bars pe-2"> </i>
                  Produse
                </div>
                <div className="white-space"></div>
                <NavbarProduse />
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-left ">
              <li>
                <a href="/">Avem varza murata</a>
              </li>
              <li>
                <a href="/">Varza resigilata</a>
              </li>
              <li>
                <a href="/">Manele pe sistem</a>
              </li>
              <li>
                <a href="/">Philips Hue</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right ">
              <li>
                <a href="/">ALCRRO Help</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMenu;
