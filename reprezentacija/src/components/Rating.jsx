import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Rating.scss";

const reviews = [
    { name: "Jonas", rating: 5, comment: "Puiki patirtis!" },
    { name: "Aistė", rating: 4, comment: "Labai gerai, bet galėtų būti geresnis aptarnavimas." },
    { name: "Karolis", rating: 5, comment: "Rekomenduoju visiems!" },
];

const averageRating = Math.round(
  reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
);

const Rating = () => (
  <div className="average-rating">
    <Link to="/atsiliepimai" className="reviews-link">Atsiliepimai:</Link>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < averageRating ? "filled" : "empty"} />
      ))}
    </div>
  </div>
);

export default Rating;