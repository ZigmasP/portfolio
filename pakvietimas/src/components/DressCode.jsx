import { FaTshirt, FaSuitcase, FaUserTie, FaCocktail } from "react-icons/fa"; // Importuojame piktogramas
import { useNavigate } from "react-router-dom";
import './DressCode.scss'; 

const DressCode = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); 
  };

  return (
    <div className="dresscode-container">
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <h1>Aprangos Kodas</h1>
      <div className="dresscode-wrapper">
        {/* Smart Casual */}
        <div className="dresscode-content">
          <FaTshirt size={50} color="#007bff" />
          <h2>Smart Casual</h2>
          <p>Šventei skirtas aprangos kodas yra Smart Casual. Tai neformali, tačiau elegantiška apranga:</p>
          <ul>
            <li>Vyrai: Švarkas ar polo marškiniai, be kaklaraiščio.</li>
            <li>Moterys: Suknelės arba kelnės su minimalistiniais aksesuarais.</li>
            <li>Venkite sportinės aprangos ar per daug oficialių kostiumų.</li>
          </ul>
        </div>

        {/* Business Casual */}
        <div className="dresscode-content">
          <FaSuitcase size={50} color="#28a745" />
          <h2>Business Casual</h2>
          <p>Šis aprangos kodas dažniausiai taikomas darbo aplinkoje, tačiau leidžia šiek tiek daugiau laisvės:</p>
          <ul>
            <li>Vyrai: Švarkas, marškiniai, nereikalaujama kaklaraiščio.</li>
            <li>Moterys: Suknelės, kelnės ar sijonai, paprasti aksesuarai.</li>
          </ul>
        </div>

        {/* Black Tie */}
        <div className="dresscode-content">
          <FaUserTie size={50} color="#6f42c1" />
          <h2>Black Tie</h2>
          <p>Labai formalus aprangos kodas, dažnai taikomas ypatingoms progoms, pavyzdžiui, vestuvėms ar apdovanojimams:</p>
          <ul>
            <li>Vyrai: Smokingas arba oficialus kostiumas su kaklaraiščiu.</li>
            <li>Moterys: Ilgos suknelės arba elegantiški kostiumai.</li>
          </ul>
        </div>

        {/* Cocktail */}
        <div className="dresscode-content">
          <FaCocktail size={50} color="#ff5733" />
          <h2>Cocktail</h2>
          <p>Šis aprangos kodas dažniausiai taikomas vakariniams renginiams, reikalaujant elegancijos ir šiek tiek kūrybingumo:</p>
          <ul>
            <li>Vyrai: Kostiumas arba švarkas su marškiniais.</li>
            <li>Moterys: Trumpesnės kokteilinės suknelės ar elegantiški sijonai.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
