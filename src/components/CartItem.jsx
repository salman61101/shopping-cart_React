import PropTypes from "prop-types";

function CartItem({ item }) {
  return (
    <article>
      <img
        src={item.image}
        alt={item.title}
        width="100"
      />

      <h3>{item.title}</h3>

      <p>Quantity: {item.quantity}</p>

      <p>${item.price}</p>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;