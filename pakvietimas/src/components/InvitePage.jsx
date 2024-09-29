import { useState } from "react";
import { FaMapMarkerAlt, FaTshirt } from "react-icons/fa";
import GuestForm from "./GuestForm";
import "./InvitePage.scss";

const InvitePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Funkcija, kuri bus iškviečiama pateikus formą
  const handleFormSubmit = () => {
    setIsFormVisible(false); //Uždaroma forma
    setIsSubmitted(true); // Parodomas pranešimas
  };

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

        {!isFormVisible && !isSubmitted && (
          <button onClick={() => setIsFormVisible(true)} className="guest-link">
            Pridėti svečią
          </button>
        )}

        {isSubmitted && (
          <div className="thanks-message">
            <p>Ačiū, kad sutikote dalyvauti!</p>
          </div>
        )}

        {isFormVisible && (
          <div className="modal-overlay">
            <div className="modal">
              <GuestForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitePage;