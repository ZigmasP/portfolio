import { FaMapMarkerAlt, FaTshirt } from "react-icons/fa";
import "./InvitePage.scss";

const InvitePage = () => {
  return (
    <div className="invite-container">
      <div className="invite-content">
        <h1>50 metų jubiliejus</h1>
        <p>Kviečiame į šventę, skirtą 50-osioms metinėms paminėti!</p>
        <div className="details">
          <div className="detail-item">
            <FaMapMarkerAlt /> <span>Adresas: Vilniaus g. 10, Vilnius</span>
          </div>
          <div className="detail-item">
            <FaTshirt /> <span>Dress kodas: Elegantiška</span>
          </div>
        </div>
        <a href="/add-quest" className="guest-link">Pridėti svečią</a>
      </div>
    </div>
  );
};

export default InvitePage;