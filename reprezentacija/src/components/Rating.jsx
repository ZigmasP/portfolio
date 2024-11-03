import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Rating.scss";

const Rating = ({ averageRating }) => (
  <div className="average-rating">
    <Link to="/atsiliepimai" className="reviews-link">Atsiliepimai:</Link>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < averageRating ? "filled" : "empty"} />
      ))}
    </div>
  </div>
);

Rating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};

export default Rating;
