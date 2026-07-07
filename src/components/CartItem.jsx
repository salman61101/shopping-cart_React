import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.title}
        width="100"
      />

      <div>
        <h3>{item.title}</h3>

        <p>${item.price}</p>

        <p>Quantity: {item.quantity}</p>

        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        <button onClick={() => increaseQuantity(item.id)}>
          +
        </button>

        <button onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;