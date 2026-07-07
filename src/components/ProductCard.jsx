import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;