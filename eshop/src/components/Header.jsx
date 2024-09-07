import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaSearch, FaSignOutAlt } from "react-icons/fa";

const Header = ({ user, onLoginClick, onRegisterClick, onLogoutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funkcija atidarymui ir uždarymui
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Funkcija meniu uždarymui
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={`header ${isMenuOpen ? "open" : ""}`} role="banner">
      <div className="logo-menu-wrapper">
        <div className="logo">
          Santechnikos Pasaulis
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}  // Pridedame funkciją, kad veiktų meniu atidarymas ir uždarymas
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <FaBars />
        </button>
      </div>

      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Ieškoti prekių..."
          className="search-input"
          aria-label="Search"
        />
        <button className="search-button" aria-label="Search">
          <FaSearch />
        </button>
      </div>

      <nav
        id="main-navigation"
        className={`nav ${isMenuOpen ? "open" : ""}`}  // Pridėjome sąlygą, kad meniu atidarytų
        role="navigation"
        aria-label="Main navigation"
      >
        <Link to="/" onClick={closeMenu}>Pagrindinis</Link>
        <Link to="/delivery" onClick={closeMenu}>Pristatymas Grąžinimas</Link>
        <Link to="/cart" className="nav-cart" onClick={closeMenu}>
          <FaShoppingCart aria-hidden="true" /> Krepšelis
        </Link>

        <div className="nav-auth">
          {user ? (
            <>
              <FaUser className="nav-user-icon" aria-hidden="true" />
              <span className="nav-username"> {user.name}</span>
              <button
                onClick={() => {
                  onLogoutClick();
                  closeMenu();
                }}
                className="nav-logout"
                aria-label="Log out"
              >
                <FaSignOutAlt aria-hidden="true" />
              </button>
            </>
          ) : (
            <>
              <FaUser className="nav-user-icon" aria-hidden="true" />
              <div className="nav-auth-actions">
                <a href="#!" onClick={(e) => {e.preventDefault(); onLoginClick(); closeMenu();}} className="nav-login">
                  Prisijungti
                </a>
                <a href="#!" onClick={(e) => {e.preventDefault(); onRegisterClick(); closeMenu();}} className="nav-register">
                  Registruotis
                </a>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  onLoginClick: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default Header;
