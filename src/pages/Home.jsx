import { Link } from "react-router-dom";
import hero from "../assets/image.png";
import "../styles/home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Shop Smarter, Live Better</h1>

        <p>
          Discover high-quality products at unbeatable prices.
          Build your perfect shopping cart with ease.
        </p>

        <Link to="/shop">
          <button>Start Shopping</button>
        </Link>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Shopping" />
      </div>
    </section>
  );
}

export default Home;