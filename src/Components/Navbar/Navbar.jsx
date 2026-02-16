import React from "react";
import { NavLink } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import logo from "../../../src/assets/blog-app-images/Novation.svg";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link kliklənəndə menyunu bağla
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
      <div className="navbar-container">
        <div className="logo-container">
          <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
            <img src={logo} alt="Novation Logo" className="logo-img" />
          </NavLink>
        </div>

        <div className={`nav-links-container ${isOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>
            About Us
          </NavLink>
          {/* <NavLink to="/news" className="nav-link" onClick={handleLinkClick}>
            Xəbərlər
          </NavLink> */}
          <NavLink to="/contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>

        {/* <div className="navbar-search-container">
          <CiSearch className="search-icon" />
          <input placeholder="Axtarış" />
        </div> */}

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "☰"}
        </div>
      </div>
    </>
  );
};

export default Navbar;
