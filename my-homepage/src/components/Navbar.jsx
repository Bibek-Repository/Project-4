import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/ai_solutions_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="AI Solutions Logo"
            className="logo-img"
          />
        </Link>

        {/* Hamburger */}
        <div
          className={menuOpen ? "menu-icon active" : "menu-icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/About" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/Reviews" onClick={closeMenu}>
              Customer Ratings & Feedbacks
            </Link>
          </li>

          <li>
            <Link to="/Contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/GalleryBlog" onClick={closeMenu}>
              Photo Galleries and Blogs
            </Link>
          </li>

          <li>
            <Link to="/Events" onClick={closeMenu}>
              Events Timeline
            </Link>
          </li>

          <li>
            <Link to="/FinalServices" onClick={closeMenu}>
              Provided Software Solutions
            </Link>
          </li>

          <li>
            <Link to="/admin/login" onClick={closeMenu}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>

      {/* Background Overlay */}
      <div
        className={menuOpen ? "menu-overlay active" : "menu-overlay"}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;