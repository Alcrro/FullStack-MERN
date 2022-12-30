import { Routes, Route, Link } from 'react-router-dom';
import Login from '../../form/Login';

const Test = () => {
  return (
    <Link to="/login" className="nav-link">
      Login
    </Link>
  );
};

export const LoginThick = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar pb-2 bg-white mb-3">
      <div className="container">
        <div className="navbar-brand-container">
          <a href="/" className="navbar-brand">
            ALCRRO
          </a>
        </div>
        <div className="navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
