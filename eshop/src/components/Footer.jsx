import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Apie mus</h4>
          <p>Santechnikos pasaulis - Jūsų patikimas partneris santechnikos srityje</p>
        </div>
        <div className="footer-section">
          <h4>Kontaktai</h4>
          <p>Tel.: +370 600 00000</p>
          <p>Email: info@santechnika.lt</p>
          <p>Adresas: Vilnius, Lietuva</p>
        </div>
        <div className="footer-section">
          <h4>Naudingos nuorodos</h4>
          <Link to="/delivery-returns">Pristatymas ir grąžinimas</Link>
          <Link to="/terms">Privatumo politika</Link>
          <Link to="/faq">DUK</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Santechnikos Pasaulis. Visos teisės saugomos</p>
      </div>
    </footer>
  );
};

export default Footer;