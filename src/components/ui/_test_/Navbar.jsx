import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar pb-2 bg-white mb-3">
      <div className="container navbar-container">
        <div className="navbar-brand-container">
          <a href="/about" className="navbar-brand">
            {props.logo}
          </a>
        </div>
        <div className="navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                {props.navbarMenu.about}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link active">
                {props.navbarMenu.account}
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link active">
                {props.navbarMenu.favorite}
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link active">
                {props.navbarMenu.cart}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  logo: "ALCRRO",
  navbarMenu: {
    about: "About",
    account: "My Account",
    favorite: "Favorite",
    cart: "My Cart",
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
