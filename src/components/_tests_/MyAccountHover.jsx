import React from "react";
import "../../assets/styles/_test_/MyAccountHover.css";

const MyAccountHover = () => {
  return (
    <div className="navbar-popup navbar-account-dropdown">
      <div className="navbar-account-auth dropdown-inner ">
        <div className="custom-dropdown-body">
          <i className="fa-regular fa-user "></i>
          <span className="">Intra in cel mai tare site ever!</span>
        </div>
        <ul className="auth-account-dropdown">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/">
              <i></i>
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAccountHover;
