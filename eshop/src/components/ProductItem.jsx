import PropTypes from "prop-types";
import "./productItem.scss"; // Užtikrinkite, kad šiame faile būtų CSS stiliai

const ProductItem = ({ name, description, image, price }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price} €</p>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
