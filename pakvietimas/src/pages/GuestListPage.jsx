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
        <table className="guest-table">
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Suaugę</th>
              <th>Vaikai</th>
              <th>Telefonas</th>
            </tr>
          </thead>
          <tbody>
            {guestList.map((guest, index) => (
              <tr key={index}>
                <td>{guest.name}</td>
                <td>{guest.adults}</td>
                <td>{guest.children}</td>
                <td>{guest.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Svečių sąrašas tuščias.</p>
      )}
      <Link to="/">Atgal į kvietimo puslapį</Link>
    </div>
  );
};

export default GuestListPage;
