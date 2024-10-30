import { useState, useEffect } from "react";
import "../index.scss";

const Home = () => {
  const [showContactBox, setShowContactBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactBox(true);
    }, 2300);
    return () => clearTimeout(timer);
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
       </section>
      </div>
    );
  };
  
  export default Home;
  