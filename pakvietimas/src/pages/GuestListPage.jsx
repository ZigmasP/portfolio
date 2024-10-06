import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GuestListPage.scss";

const GuestListPage = () => {
  const [guestList, setGuestList] = useState([]);

  // Gauname svečių sąrašą iš localStorage
  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem("guestList")) || [];
    setGuestList(storedGuests);
  }, []);

  return (
    <div className="guest-list-page">
      <h1>Svečių sąrašas</h1>
      {guestList.length > 0 ? (
        <ul>
          {guestList.map((guest, index) => (
            <li key={index}>
              {guest.name} ({guest.attendees} suaugusieji, {guest.children} vaikai)
            </li>
          ))}
        </ul>
      ) : (
        <p>Svečių sąrašas tuščias.</p>
      )}
      <Link to="/">Atgal į kvietimo puslapį</Link>
    </div>
  );
};

export default GuestListPage;
