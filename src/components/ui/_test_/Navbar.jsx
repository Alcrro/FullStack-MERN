import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavbarData = [
  {
    id: 0,
    logo: "ALCRRO",
  },
  {
    id: 0 - 1,
    menu: "menu",
    children: [
      {
        key: 0 - 1 - 1,
        label: "Home",
      },
      {
        key: 0 - 1 - 2,
        label: "About",
      },
      {
        key: 0 - 1 - 3,
        label: "My Account",
        children: [
          {
            key: 0 - 1 - 3 - 1,
            label: "Login",
          },
          {
            key: 0 - 1 - 3 - 2,
            label: "Create account",
          },
        ],
      },
      {
        key: 0 - 1 - 4,
        label: "Favorite",
        children: [
          {
            key: 0 - 1 - 4 - 1,
            label: "FavProduct",
          },
        ],
      },
      {
        key: 0 - 1 - 4,
        label: "My Cart",
        children: "myCartProduct",
      },
    ],
  },
];

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
