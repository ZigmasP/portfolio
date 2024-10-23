import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../asstes/logo.webp";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <hedaer>
      <div className="logo">
        <img src={logo} alt="Zigmaswebdev logo" />
      </div>
      <nav className={isMenuOpen ? "open" : ""} aria-label="Main Navigation">
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Pagrindinis</Link>
          </li>
          <li>
            <Link to="/apie-mane" onClick={closeMenu}>Apie mane</Link>
          </li>
          <li>
            <Link to="/kontaktai" onClick={closeMenu}>Kontaktai</Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toogleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </hedaer>
  );
};

export default Header;