
import { useNavigate } from "react-router-dom"; // Importuojame useNavigate
import './DressCode.scss'; // Stilių failas

const DressCode = () => {
  const navigate = useNavigate(); // Naudojame useNavigate funkciją

  // Funkcija paslėpti komponentą ir grąžinti į InvitePage
  const handleClose = () => {
    navigate("/"); // Nukreipiame vartotoją atgal į pagrindinį puslapį
  };

  return (
    <div className="dresscode-container">
      {/* Uždarymo mygtukas */}
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      
      <h1>Aprangos Kodas</h1>
      <p>Šventei skirtas aprangos kodas yra Smart Casual. Prašome laikytis šių nurodymų:</p>
      <ul>
        <li>Vyrai gali dėvėti švarką ar polo marškinius, be kaklaraiščio.</li>
        <li>Moterys gali dėvėti sukneles arba kelnes, su minimalistiniais aksesuarais.</li>
        <li>Atsisakykite sportinės aprangos ar labai oficialių kostiumų.</li>
      </ul>
    </div>
  );
};

export default DressCode;
