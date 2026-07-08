import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {
    addToCart({
      ...product,
      quantity,
    });

    setQuantity(1);
  }

  return (
    <article className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <div className="rating">
        ⭐⭐⭐⭐☆
        <span> ({product.rating.rate})</span>
      </div>

      <p className="price">
        ${product.price.toFixed(2)}
      </p>

      <div className="quantity-controls">

        <button onClick={decreaseQuantity}>
          −
        </button>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(Number(e.target.value))
          }
        />

        <button onClick={increaseQuantity}>
          +
        </button>

      </div>

      <button
        className="add-btn"
        onClick={handleAddToCart}
      >
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
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;