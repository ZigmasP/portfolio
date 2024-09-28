import { Routes, Route } from "react-router-dom";
import InvitePage from "./components/InvitePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitePage />} />
    </Routes>
  )
};

export default App;