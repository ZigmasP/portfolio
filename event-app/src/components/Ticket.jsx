// ticket.jsx
import { QRCodeCanvas } from "qrcode.react";
import Barcode from "react-barcode";
import PropTypes from "prop-types";
import "./ticket.scss";

const Ticket = ({ user, eventDetails }) => {
  const ticketNumber = Math.floor(Math.random() * 1000000000);
  const qrValue = `${user.firstName} ${user.lastName}, Renginys: ${eventDetails.name}, Data: ${eventDetails.date}, Vieta: ${eventDetails.location}, Bilieto nr.: ${ticketNumber}`;

  return (
    <div className="ticket">
      <h2>Bilietas</h2>
      <div className="ticket-details">
        <p><strong>Vardas:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Gimimo data:</strong> {user.birthDate.toLocaleDateString()}</p>
        <p><strong>Renginys:</strong> {eventDetails.name}</p>
        <p><strong>Data:</strong> {eventDetails.date}</p>
        <p><strong>Vieta:</strong> {eventDetails.location}</p>
        <p><strong>Kaina:</strong> {eventDetails.price} €</p>
        <p><strong>Bilieto numeris:</strong> {ticketNumber}</p>

        <div className="qr-code">
          <h3>QR kodas</h3>
          <QRCodeCanvas value={qrValue} />
        </div>

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
    birthDate: PropTypes.instanceOf(Date).isRequired, // Pakeista į Date
  }).isRequired,
  eventDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Ticket;
