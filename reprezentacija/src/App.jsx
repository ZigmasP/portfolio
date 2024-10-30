
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import "./index.scss"


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apie-mane" element={<About />} />
        <Route path="/kontaktai" element={<Contacts />} /> 
        <Route path="/atsiliepimai" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
