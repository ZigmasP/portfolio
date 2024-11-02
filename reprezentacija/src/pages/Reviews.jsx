import { useState, useEffect } from "react"; 
import { FaStar } from "react-icons/fa";
import ReviewForm from "../components/ReviewForm";
import "../index.scss";

const Reviews = () => {
  const loadReviews = () => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  };

  const [reviews, setReviews] = useState(loadReviews());
  const [showForm, setShowForm] = useState(false);

  // Atnaujina reitingus Home puslapyje
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedReviews = loadReviews();
      setReviews(updatedReviews);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleReviewSubmit = (newReview) => {
    const updatedReviews = [
      ...reviews,
      { ...newReview, date: new Date().toLocaleDateString() },
    ];
    setReviews(updatedReviews);
    setShowForm(false);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Pranešame apie atsiliepimų atnaujinimą
    window.dispatchEvent(new Event("reviews-updated")); 
  };

  const handleReviewDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Pranešame apie atsiliepimų atnaujinimą
    window.dispatchEvent(new Event("reviews-updated"));
  };

  return (
    <div className="reviews-container">
      <h2>Klientų atsiliepimai</h2>
      
      <button onClick={() => setShowForm(true)} className="leave-review-button">
        Palikite atsiliepimą
      </button>
      
      {showForm && <ReviewForm onSubmit={handleReviewSubmit} />}

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
          <p>{review.date}</p>
          <button onClick={() => handleReviewDelete(index)} className="delete-button">
            Ištrinti
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
