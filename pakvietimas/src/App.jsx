import { Routes, Route } from "react-router-dom";
import InvitePage from "./components/InvitePage";
import GuestForm from "./components/GuestForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitePage />} />
      <Route path="/add-guest" element={<GuestForm />} />
    </Routes>
  )
};

export default App;