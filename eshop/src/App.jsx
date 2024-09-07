import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Categories from "./components/Categories";
import Delivery from "./pages/Delivery";
import Cart from "./pages/Cart";
import MaisytuvaiPage from "./pages/MaisytuvaiPage";
import VoniaiPage from "./pages/VoniaiPage";
import DusuiPage from "./pages/DusuiPage";
import UnitazaiPage from "./pages/UnitazaiPage";
import KriauklesPage from "./pages/KriauklesPage";
import "./index.scss";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Header
        user={user}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogoutClick={handleLogout}
      />
      {showLoginForm && 
        <LoginForm
          onLogin={handleLogin}
          onRegisterClick={handleRegisterClick}
          onClose={handleCloseLoginForm}
        />
      }
      {showRegisterForm && 
        <RegisterForm onClose={handleCloseRegisterForm} />
      }
      
      <main>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/maisytuvai" element={<MaisytuvaiPage />} />
          <Route path="/category/voniai" element={<VoniaiPage />} />
          <Route path="/category/dusui" element={<DusuiPage />} />
          <Route path="/category/unitazai" element={<UnitazaiPage />} />
          <Route path="/categorykriaukles" element={<KriauklesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
