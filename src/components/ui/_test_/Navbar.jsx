import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MyAccountHover from "../../_tests_/MyAccountHover";
import "../../../assets/styles/_test_/Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-container-outer">
      <nav className="navbar  bg-white p-1">
        <div className="container navbar-container">
          <div className="navbar-brand-container">
            <a href="/" className="navbar-brand">
              {props.logo}
            </a>
          </div>
          <div className="navbar-expand">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/about" className="nav-link active fs-6">
                  <i className="fa-solid fa-info pe-1"></i>
                  <span>{props.navbarMenu.about}</span>
                </Link>
              </li>
              <li className="nav-item hidden-xs">
                <a href="/" className="nav-link active fs-6 ">
                  <i className="fa-regular fa-user pe-1"></i>
                  <span>{props.navbarMenu.account}</span>
                  <i className="fa-solid fa-caret-down ps-1"></i>
                </a>
                <MyAccountHover />
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active fs-6">
                  <i className="fa-regular fa-heart pe-1"></i>
                  <span>{props.navbarMenu.favorite}</span>
                  <i className="fa-solid fa-caret-down ps-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active fs-6">
                  <i className="fa-solid fa-cart-shopping pe-1"></i>
                  <span>{props.navbarMenu.cart}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  logo: "ALCRRO",
  navbarMenu: {
    about: "About",
    account: "My Account",
    favorite: "Favorite",
    cart: "My Cart",
    login: "Login",
    register: "register",
  },
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  //Shape is used for PropTypes objects
  navbarMenu: PropTypes.shape({
    about: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    favorite: PropTypes.string.isRequired,
    cart: PropTypes.string.isRequired,
  }),
};

export default Navbar;
