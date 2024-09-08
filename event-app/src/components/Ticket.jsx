import Barcode from "react-barcode";
import PropTypes from "prop-types";
import "./ticket.scss";

const Ticket = ({ user, eventDetails }) => {
  const ticketNumber = Math.floor(Math.random() * 1000000000);

  return (
    <div className="ticket">
      <h2>Bilietas</h2>
      <div className="ticket-details">
        <p><strong>Vardas:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Gimimo metai:</strong> {user.birthYear}</p>
        <p><strong>Renginys:</strong> {eventDetails.name}</p>
        <p><strong>Data:</strong> {eventDetails.date}</p>
        <p><strong>Vieta:</strong> {eventDetails.location}</p>
        <p><strong>Kaina:</strong> {eventDetails.price} €</p>
        <p><strong>Bilieto numeris:</strong> {ticketNumber}</p>

       

        <div className="barcode">
          <h3>Brūkšninis kodas</h3>
          <Barcode value={ticketNumber.toString()} />
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthYear: PropTypes.number.isRequired,
  }).isRequired,
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ticket;
