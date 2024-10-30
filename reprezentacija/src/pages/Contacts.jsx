import { FaAt, FaPhone, FaGithub } from "react-icons/fa"; 
import photo from "../assets/photo.webp"; 
import "../index.scss";

const Contacts = () => { 
  return ( 
    <div className="contacts-page"> 
      <h2>Kontaktai</h2> 
      <img src={photo} alt="profile-photo" className="profile-photo" /> 
      <div className="contacts-container"> 
        <div className="contact-info"> 
          <div className="contact-item"> 
            <FaAt className="icon email-icon" /> 
            <span>zigmas.1@gmail.com</span> 
          </div> 
          <div className="contact-item"> 
            <FaPhone className="icon phone-icon" /> 
            <span>+37060627573</span> 
          </div>
          <div className="contact-item">
          <a href="https://github.com/ZigmasP/portfolio" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github-icon" /> 
            <span>Portfolio</span>
          </a>
          </div>
        </div> 
      </div> 
    </div> 
  ); 
};

export default Contacts;
