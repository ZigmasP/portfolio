import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import EventDetails from "./components/EventDetails";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (values) => {
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
        <Route path="/register" element={<RegistrationForm onSubmit={handleRegister} />} />
        <Route path="/confirmation" element={<div>Sėkmingai užsiregistravote!</div>} />
      </Routes>
    </div>
  );
}

export default App;
