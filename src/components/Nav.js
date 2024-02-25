import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { FiShoppingCart } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Aaqib</span>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/cart"
                className="nav-link cart-trolley--link"
                onClick={() => setMenuIcon(false)}
              >
                <FiShoppingCart className="cart-trolley" />{" "}
                <span className="cart-total--item"> 10 </span>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
