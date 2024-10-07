import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Importuojame axios
import "./GuestListPage.scss";

const GuestListPage = () => {
  const [guestList, setGuestList] = useState([]);
  const [error, setError] = useState(null); // Pridėkime klaidos būseną

  // Gauname svečių sąrašą iš serverio
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/guests'); // Pakeiskite URL, jei reikia
        setGuestList(response.data);
      } catch (err) {
        console.error('Klaida gaunant svečių sąrašą:', err);
        setError('Nepavyko gauti svečių sąrašo.'); // Nustatome klaidą, jei ji įvyksta
      }
    };

    fetchGuests();
  }, []);

  return (
    <div className="guest-list-page">
      <h1>Svečių sąrašas</h1>
      {error && <p className="error">{error}</p>} {/* Rodyti klaidą, jei yra */}
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
