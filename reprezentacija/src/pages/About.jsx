import { FaReact, FaJs, FaNode, FaGlobe, FaWrench } from "react-icons/fa";
import logo from "../assets/CodeAcademy_logo.png";
import codeImage from "../assets/code2.jpg";

import "../index.scss";

const About = () => {
  return (
    <div className="about-services-container">
      <div className="about-container">
        <div className="about-text">
          <div className="content">
            <p>
              Sveiki! Esu pradedantysis web programuotojas. Baigiau{" "}
              <img
                src={logo}
                alt="CodeAcademy-logo"
                style={{ height: "2em", verticalAlign: "middle" }}
              />{" "}
              kursus.
            </p>
            <p>
              Šiuo metu pagrinde specializuojuosi frontend (
              <span className="icon-text">
                <FaReact className="icon" color="#61DBFB" /> React,
              </span>{" "}
              <span className="icon-text">
                <FaJs className="icon" color="#F0DB4F" /> JavaScript
              </span>
              ) technologijose. Po truputį gilinuosi ir į backend (
              <span className="icon-text">
                <FaNode className="icon" color="#68A063" /> Node.js
              </span>
              ).
            </p>
            <p>
              Galiu sukurti jums internetinę svetainę, kuri atspindėtų jūsų
              įmonės viziją, vertybes.
            </p>
            <p>
              Šiuo metu galiu parodyti tik kelis savo demo projektus
              (pavyzdiniai, neišbaigti darbai).
            </p>
            <p>
              Kadangi aš esu pradedantis web programuotojas, šiuo metu galiu
              pasiūlyti pradėti kurti tik naujus (ne kitų programuotojų)
              projektus.
            </p>
          </div>
        </div>
      </div>

      <div className="services-container">
        <img src={codeImage} alt="Code Background" className="background-image" />
        
        <h2>Paslaugos:</h2>
        <ul>
          <li>
            <FaGlobe className="service-icon" /> Svetainių kūrimas
          </li>
          <li>
            <FaWrench className="service-icon" /> Administravimas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
