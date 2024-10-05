import { Routes, Route } from "react-router-dom";
import InvitePage from "./components/InvitePage";
import DressCode from "./components/DressCode";
import './index.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitePage />} />
      <Route path="/dress-code" element={<DressCode />} />
    </Routes>
  );
};

export default App;
