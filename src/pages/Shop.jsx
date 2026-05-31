import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <main>
      <section className="page-header">
        <h1>Shop Lamaati</h1>
        <p>Choose your favorite hair care products.</p>
      </section>

      <section className="shop-section">
        <div className="product-container">
          <ProductCard
            image="/images/scalp-oil.jpg"
            name="Scalp Oil"
            price="$12"
            description="A nourishing oil that helps care for your scalp and roots."
          />

          <ProductCard
            image="/images/hair-serum.jpg"
            name="Hair Serum"
            price="$15"
            description="A lightweight serum for smooth, shiny, and soft hair."
          />

          <ProductCard
            image="/images/hair-mask.jpg"
            name="Hair Mask"
            price="$18"
            description="A rich mask that deeply moisturizes dry hair."
          />

          <ProductCard
            image="/images/hair-mist.jpg"
            name="Hair Mist"
            price="$10"
            description="A fresh mist that leaves your hair smelling beautiful."
          />
        </div>
      </section>
    </main>
  );
}

export default Shop;