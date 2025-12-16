import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-page__hero">
        <h1 className="home-page__title">
          <span className="home-page__title-gradient">AfterMart</span>
        </h1>
        <p className="home-page__tagline">
          Your one-stop shop for random goods and unique finds
        </p>
        <p className="home-page__description">
          Discover amazing products at unbeatable prices. From everyday
          essentials to extraordinary items, we've got everything you need.
        </p>
        <Link to="/shop" className="home-page__cta">
          Start Shopping
        </Link>
      </section>

      <section className="home-page__features">
        <div className="home-page__feature-card">
          <div className="home-page__feature-icon">🚚</div>
          <h3 className="home-page__feature-title">Fast Delivery</h3>
          <p className="home-page__feature-text">
            Quick and reliable shipping to get your items to you fast
          </p>
        </div>
        <div className="home-page__feature-card">
          <div className="home-page__feature-icon">💰</div>
          <h3 className="home-page__feature-title">Best Prices</h3>
          <p className="home-page__feature-text">
            Competitive pricing on all our products, guaranteed
          </p>
        </div>
        <div className="home-page__feature-card">
          <div className="home-page__feature-icon">✨</div>
          <h3 className="home-page__feature-title">Quality Assured</h3>
          <p className="home-page__feature-text">
            Every product is carefully selected for quality and value
          </p>
        </div>
      </section>
    </div>
  );
}
