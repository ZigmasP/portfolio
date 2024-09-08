import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import PurchaseForm from "./components/PurchaseForm";
import EventDetails from "./components/EventDetails";
import Ticket from "./components/Ticket"; // Importuojame Ticket komponentą
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

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EventDetails />} />
        <Route path="/purchase" element={<PurchaseForm onSubmit={handlePurchase} />} />
        <Route 
          path="/confirmation" 
          element={<ConfirmationMessage user={user} />} 
        />
      </Routes>
    </div>
  );
}

// Pridedame PropTypes validaciją
App.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

export default App;

const ConfirmationMessage = ({ user }) => {
  const navigate = useNavigate();

  const eventDetails = {
    name: "Pop Muzikos Koncertas",
    date: "2024-10-15",
    location: "Vilniaus arena",
    price: 50,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Nukreipimas po 5 sekundžių

    return () => clearTimeout(timer); // Išvaloma kai komponentas išmontuojamas
  }, [navigate]);

  return (
    <div>
      <h2>Pirkimas sėkmingas!</h2>
      <p>Bilietas išsiųstas į el. paštą: {user?.email}</p>

      {/* Generuojame ir rodome bilietą */}
      <Ticket user={user} eventDetails={eventDetails} />

      <p>Grįžimas į pagrindinį puslapį po 5 sekundžių...</p>
    </div>
  );
};

ConfirmationMessage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthYear: PropTypes.number.isRequired,
  }).isRequired,
};
