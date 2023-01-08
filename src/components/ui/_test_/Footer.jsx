import React from "react";
import "../../../assets/styles/Footer.css";

const Footer = () => {
  return (
    <div className="auth-footer text-center ">
      <ul className="footer-links font-weight-semibold">
        <li>
          <a href="/" className="text-gray">
            Cont Client ALCRRO
          </a>
        </li>
        <li>
          <a href="/" className="text-gray">
            Date cu caracter personal
          </a>
        </li>
        <li>
          <a href="/" className="text-gray">
            ANPC
          </a>
        </li>
        <li>
          <a href="/" className="text-gray">
            ALCRRO foloseste cookie-uri
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
