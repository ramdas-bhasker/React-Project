import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
    <div className="main-nav">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 mt-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/infra">
                  Infrastructure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="menu-btn">
                <NavLink to="/" className="phone-btn">
                    <i className="bx bxs-phone"></i> +040 6668 0683
                </NavLink>
            </div>
          </div>
      </nav>
      </div>
      </div>
    </>
  );
};
export default Header;
