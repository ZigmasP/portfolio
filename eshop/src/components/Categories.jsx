import { Link } from "react-router-dom";
import "./categories.scss";

//Importuojamame nuotraukas kaip modulius
import maisytuvaiImg from "./assets/maišytuvai.jpg";
import voniaImg from "./assets/vonia.jpg";
import dusasImg from "./assets/dušas.jpg";
import unitazasImg from "./assts/unitazas.jpg";
import kriaukleImg from "./assets/kriauklė.jpg";

const Categories = () => {
  const categories = [
    { name: "Maišytuvai", url: "/category/maisytuvai", image: maisytuvaiImg },
    { name: "Voniai", url: "/category/voniai", image: voniaImg },
    { name: "Dušui", url: "/category/dusui", image: dusasImg },
    { name: "Unitazai", url: "/category/unitazai", image: unitazasImg },
    { name: "Kriauklės", url: "/category/kriaukles", image: kriaukleImg },
  ];

  return (
    <div className="categories">
      <h2>Prekių kategorijos</h2>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} className="categories-item">
            <Link to={category.url} className="categories-link">
              <div
                className="categories-image"
                style={{ backgroundImage: `url(${category.image})`}}
              ></div>
            </Link>     
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Categories;