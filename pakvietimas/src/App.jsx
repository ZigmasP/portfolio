import { Routes, Route } from "react-router-dom";
import InvitePage from "./pages/InvitePage";
import DressCode from "./pages/DressCode";
import GuestListPage from "./pages/GuestListPage";
import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitePage />} />
      <Route path="/dress-code" element={<DressCode />} />
      <Route path="/guest-list-page" element={<GuestListPage />} />
    </Routes>
  );
};

export default App;
