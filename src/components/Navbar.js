import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "./logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" id="navbar-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/teams" className="nav-links" onClick={closeMobileMenu}>
              Teams <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/rules" className="nav-links" onClick={closeMobileMenu}>
              Rules
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Schedule"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Stats" className="nav-links" onClick={closeMobileMenu}>
              Stats
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ec" className="nav-links" onClick={closeMobileMenu}>
              Executive Committee
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/photos" className="nav-links" onClick={closeMobileMenu}>
              Photos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
