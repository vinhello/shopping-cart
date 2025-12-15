import { useState } from "react";

export function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.max(1, prev + 1));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    // Reset quantity to 1 after adding
    setQuantity(1);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h2 className="product-card__title">{product.title}</h2>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__quantity-controls">
          <button
            className="quantity-btn quantity-btn--decrease"
            aria-label="Descrease quantity"
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            className="quantity-input"
            aria-label="Quantity"
            onChange={handleQuantityChange}
          />
          <button
            className="quantity-btn quantity-btn--increase"
            aria-label="Increase quantity"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <button className="product-card__add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
