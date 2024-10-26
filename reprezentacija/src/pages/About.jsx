import { FaReact, FaJs, FaNode } from "react-icons/fa";
import "../index.scss";

const About = () => {
   return (
     <div className="about-container">
       <div className="about-text">
         <div className="content">
          <p>Sveiki! Esu pradedentis web programuotojas. Baigiau CodeAcademy kursus.</p>
          <p>Šiuo metu pagrinde specializuojuosi frontend (<span className="icon-text">
                <FaReact className="icon" color="#61DBFB" /> React,
              </span>
              <span className="icon-text">
                <FaJs className="icon" color="#F0DB4F" /> JavaScript
              </span>) technologijuose. Po truputį gilinuosi ir į backend (<span className="icon-text">
                <FaNode className="icon" color="#68A063" /> Node.js
              </span>).</p>
          <p>Galiu sukurti jums internetinę svetainę, kuri atspindėtų jūsų įmonės viziją, vertybes.</p>
          <p>Šiuo metu galiu parodyti tik kelis savo demo projektus (pavyzdiniai, neišbaigti darbai).</p>
          <p>Kadangi aš esu pradedantis web programuotojas, šiuo metu galiu pasiųlyti pradėti kurti tik naujus (ne kitų programuotojų) projektus.</p>
         </div>
       </div>
     </div>
   );
};

export default About;