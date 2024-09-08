import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="logo">
      <h1>Pop Muzikos Koncertas</h1>
    </div>
    <nav>
      <Link to="/">Pradžia</Link>
      {user ? (
        <div className="user-info">
          <FaUser /> {user.name}
          <button onClick={onLogout}>Atsijungti</button>
        </div>
      ) : (
        <Link to="/login">Prisijungti</Link>
      )}
    </nav>
  </header>
);

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
