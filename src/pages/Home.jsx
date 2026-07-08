import { Link } from "react-router-dom";
import hero from "../assets/image.png";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-text">
          <h1>Welcome to ShopCart</h1>

          <p>
            Discover premium fashion products at unbeatable prices.
            Shop the latest trends with confidence.
          </p>

          <Link to="/shop" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-image">
          <img
            src={hero}
            alt="Shopping Hero"
          />
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Delivered to your doorstep quickly.</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payments</h3>
          <p>100% safe and secure checkout.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Premium Quality</h3>
          <p>Carefully selected premium products.</p>
        </div>

      </section>
    </>
  );
}

export default Home;