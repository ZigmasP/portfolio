import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./productList.scss"; // Užtikrinkite, kad šiame faile būtų CSS stiliai

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
