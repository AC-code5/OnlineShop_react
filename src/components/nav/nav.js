import logo from "../../assets/logo_shop2.png";
import icone from "../../assets/searchicon.png";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_parent_container">
      <div className="nav_background">
        <div className="nav_container">
          <div className="nav_header">
            <Link to="/">
              <img className="nav_logo_img" src={logo} alt="Shop Logo" />
            </Link>
            <div className="search_wrapper">
              <input
                type="text"
                className="search_box"
                placeholder="Search products..."
              />
              <img className="search_icon" src={icone} alt="Search" />
            </div>
          </div>

          <nav>
            <ul className="nav_ul">
              <li>
                <Link to="/" className="nav_link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="nav_link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav_link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav_link">
                  Login
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
