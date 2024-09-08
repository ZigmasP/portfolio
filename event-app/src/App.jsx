import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import PurchaseForm from "./components/PurchaseForm";
import EventDetails from "./components/EventDetails";
import Ticket from "./components/Ticket";
import PropTypes from "prop-types";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handlePurchase = (values) => {
    setUser(values); // Nustatome vartotojo duomenis
    navigate('/confirmation'); // Nukreipiame į "Confirmation" puslapį
  };

  const handleLogout = () => {
    setUser(null); // Išvalome vartotojo duomenis
    navigate('/'); // Grąžiname į pagrindinį puslapį
  };

  const eventDetails = {
    name: "Pop Muzikos Koncertas",
    date: "2024-10-15",
    location: "Vilniaus arena",
    price: 50,
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EventDetails />} />
        <Route path="/purchase" element={<PurchaseForm onSubmit={handlePurchase} />} />
        <Route 
          path="/confirmation" 
          element={user ? <ConfirmationMessage user={user} eventDetails={eventDetails} /> : <p>Klaida: nėra vartotojo duomenų!</p>} 
        />
      </Routes>
    </div>
  );
}

export default App;

const ConfirmationMessage = ({ user, eventDetails }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Nukreipimas po 5 sekundžių

    return () => clearTimeout(timer); // Išvaloma kai komponentas išmontuojamas
  }, [navigate]);

  return (
    <div>
      <p>Pirkimas sėkmingas! Bilietas išsiųstas į el. paštą: {user.email}</p>

      {/* Generuojame ir rodome bilietą */}
      <Ticket user={user} eventDetails={eventDetails} />

      <p>Grįžimas į pagrindinį puslapį po 5 sekundžių...</p>
    </div>
  );
};

// PropTypes validacija
ConfirmationMessage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthYear: PropTypes.number.isRequired,
  }).isRequired,
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
