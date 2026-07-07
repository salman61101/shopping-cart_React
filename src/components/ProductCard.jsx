import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  function addToCart() {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button onClick={addToCart}>
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