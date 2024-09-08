import { Link } from "react-router-dom";

const EventDetails = () => {
    return (
      <div className="event-details">
        <h2>Pop Muzikos Koncertas</h2>
        <p>Data: 2024-10-15</p>
        <p>Vieta: Vilniaus arena</p>
        <p>Kaina: 50 €</p>
        <Link to="/purchase">
          <button>Pirkti</button>
        </Link>
      </div>
    );
  };
  
  export default EventDetails;