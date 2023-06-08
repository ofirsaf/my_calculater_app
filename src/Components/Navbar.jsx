// Navbar.js

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quote">
              Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
