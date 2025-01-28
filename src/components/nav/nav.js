import logo from "../../assets/logo.png";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav_parent">
      <div className="nav_background">
        <div className="nav_container">
          <header className="nav_header">
            <h1>
              <a className="nav_logo">
                <img className="nav_img" src={logo} />
              </a>
            </h1>
          </header>
          <nav>
            <ul className="nav_ul">
              <li>
                <Link to="/cart" className="nav_link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="login" className="nav_link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="About" className="nav_link">
                  About
                </Link>
              </li>
              <li>
                <Link to="Shop" className="nav_link">
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
