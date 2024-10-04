import { useState } from "react";
import { FaMapMarkerAlt, FaTshirt, FaClock } from "react-icons/fa";
import React from "react";
import { Oval } from "react-loader-spinner";  //Importuojame spinner
import "./InvitePage.scss";

// Dinaminis komponento importavimas
const GuestForm = React.lazy(() => import("./GuestForm"));

// Funkcija pritaikyti linksnius
const applyLithuanianVocative = (name) => {
  if (name.endsWith("as")) {
    return name.slice(0, -2) + "ai"; // Pvz., "Zigmas" -> "Zigmai"
  } else if (name.endsWith("is")) {
    return name.slice(0, -2) + "i"; // Pvz., "Marius" -> "Mariau"
  } else if (name.endsWith("ė")) {
    return name.slice(0, -1) + "e"; // Moteriški vardai su galūne "ė" lieka nepakitę
  } else if (name.endsWith("us")) {
    return name.slice(0, -2) + "au"; // Pvz., "Jonas" -> "Jonai"
  }
  // Galime pridėti daugiau taisyklių pagal poreikį
  return name; // Grąžiname originalų vardą, jei nesutampa su jokiu modeliu
};

const InvitePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [guestName, setGuestName] = useState(""); // Nauja būsena vardui
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  // Funkcija, kuri bus iškviečiama pateikus formą
  const handleFormSubmit = (values) => {
    console.log('Form submitted with values:', values);
    setGuestName(applyLithuanianVocative(values.name)); // Išsaugome vardą su tinkamu linksniu
    setIsFormVisible(false); // Uždaro formą po pateikimo
    setShowThanksMessage(true); // Rodo "Ačiū" pranešimą

    // Po 3 sekundžių paslepia "Ačiū" pranešimą
    setTimeout(() => {
      setShowThanksMessage(false);
    }, 5000);
  };

  return (
    <div className="invite-container">
      <div className="invite-content">
        <h1>50 metų jubiliejus</h1>
        <p>Kviečiame į šventę, skirtą 50-osioms metinėms paminėti!</p>
        <p>Prašau patvirtinti dalyvavimą iki gruodžio 15 d.</p>
        <div className="details">
          <div className="detail-item">
            <FaMapMarkerAlt color="red" /> <span>Adresas: Vilniaus g. 10, Vilnius</span>
          </div>
          <div className="detail-item">
            <FaClock color="green" /> <span>Data: 2024 m. gruodžio 31 d., 18:00 val.</span>
          </div>
          <div className="detail-item">
            <FaTshirt color="gold" /> <span>Dress kodas: Smart Casual</span>
          </div>
        </div>

        {!isFormVisible && !showThanksMessage && (
          <button onClick={() => setIsFormVisible(true)} className="guest-link">
            Dalyvausiu
          </button>
        )}

        {showThanksMessage && (
          <div className="thanks-message">
            <p>
              Ačiū {guestName}, kad sutikote dalyvauti! Susitiksime šventėje.
            </p>
          </div>
        )}

        {isFormVisible && (
          <div className="modal-overlay">
            <div className="modal">
              {/* Įkeliame formą tik tada, kai ji yra matoma */}
              <React.Suspense fallback={<Oval color="00BFFF" height={100} width={100} />}>
                <GuestForm onSubmit={handleFormSubmit} />
              </React.Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitePage;
