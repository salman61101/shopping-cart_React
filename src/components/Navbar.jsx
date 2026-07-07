import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav>
      <h2>ShopCart</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            🛒 Cart ({totalItems})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;