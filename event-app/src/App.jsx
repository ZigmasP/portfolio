import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import PurchaseForm from "./components/PurchaseForm";
import EventDetails from "./components/EventDetails";
import PropTypes from "prop-types"; // Importuojame PropTypes

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handlePurchase = (values) => {
    setUser(values);
    navigate('/confirmation');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
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

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Nukreipimas po 5 sekundžių

    return () => clearTimeout(timer); // Išvaloma kai komponentas išmontuojamas
  }, [navigate]);

  return (
    <div>
      <p>Pirkimas Sėkmingas! Bilietas išsiųstas į nurodytą el. paštą: {user?.email}</p>
      <p>Grįžimas į pagrindinį puslapį po 3 sekundžių...</p>
    </div>
  );
};

// Pridedame PropTypes validaciją ConfirmationMessage komponentui
ConfirmationMessage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired, // Tikimasi, kad user turės email, kuris yra stringas ir privalomas
  }).isRequired,
};
