import { FaStar } from "react-icons/fa";
import "../index.scss";

const reviews = [
    { name: "Jonas", rating: 5, comment: "Puiki patirtis!" },
    { name: "Aistė", rating: 4, comment: "Labai gerai, bet galėtų būti geresnis aptarnavimas." },
    { name: "Karolis", rating: 5, comment: "Rekomenduoju visiems!" },
  ];
  
  const Reviews = () => (
    <div className="reviews-container">
      <h2>Klientų atsiliepimai</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.name}</h3>
          <div className="stars">
            {[...Array(5)].map((star, i) => (
              <FaStar
                key={i}
                className={i < review.rating ? "filled" : "empty"}
              />
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
  
  export default Reviews;