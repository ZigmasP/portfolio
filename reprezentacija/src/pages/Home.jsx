import { useState, useEffect } from "react";
import Rating from "../components/Rating";
import "../index.scss";

const Home = () => {
  const [showContactBox, setShowContactBox] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactBox(true);
    }, 2300);
    return () => clearTimeout(timer);
  }, []);

  // Atnaujinkite vidutinį reitingą
  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    const reviews = savedReviews ? JSON.parse(savedReviews) : [];
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    setAverageRating(reviews.length > 0 ? Math.round(totalRating / reviews.length) : 0);
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Sveiki atvykę į ZigmasWebDev.lt</h1>
        <p>Kuriu modernias svetaines</p>
        {showContactBox && (
          <div className="contact-box">
            <p>Susisiekime. +37060627573</p>
          </div>
        )}
        <Rating averageRating={averageRating} />
      </section>
    </div>
  );
};

export default Home;
