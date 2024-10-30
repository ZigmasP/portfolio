import { FaReact, FaJs, FaNode, FaGithub, FaFacebook } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <div className="icon">
          <FaReact />
        </div>
        <div className="icon">
          <FaJs />
        </div>
        <div className="icon">
          <FaNode />
        </div>
        <div className="icon">
          <FaGithub />
        </div>
        <div className="icon">
          <FaFacebook />
        </div>
      </div>
      <p>&copy; 2024 zigmaswebdev.lt. Visos teisės saugomos.</p>
    </div>
  );
};

export default Footer;
