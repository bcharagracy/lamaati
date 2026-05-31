import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Lamaati</h1>
          <p>Natural hair care for soft, shiny, and healthy hair.</p>

          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="intro">
        <h2>Your shine starts here</h2>
        <p>
          Lamaati offers simple hair care products made to nourish your roots,
          smooth your strands, and add a natural glow to your hair routine.
        </p>
      </section>
    </main>
  );
}

export default Home;