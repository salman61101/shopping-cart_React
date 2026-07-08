import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

function Cart() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>

        <p>Looks like you haven't added anything yet.</p>

        <Link to="/shop" className="shop-btn">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-items">

        <h1>Shopping Cart</h1>

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

      <aside className="cart-summary">

        <h2>Cart Summary</h2>

        <div className="summary-row">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="summary-row">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

      </aside>

    </div>
  );
}

export default Cart;