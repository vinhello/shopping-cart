import { useCart } from "../hooks/useCart";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Calculate total price
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  // Handle increase quantity
  const handleIncreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  // Handle decrease quantity
  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  // Handle remove item
  const handleRemoveItem = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      removeFromCart(productId);
    }
  };

  // Show empty cart message if cart empty
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-page__title">Cart</h1>
        <div className="cart-page__empty">
          <p>Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__items">Cart</h1>
      {/* Map over cartItems and display each item */}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item__image-container">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item__image"
            />
          </div>

          {/* Display product info */}
          <div className="cart-item__info">
            <h2 className="cart-item__title">{item.title}</h2>
            <p className="cart-item__price">${item.price.toFixed(2)}</p>
          </div>

          {/* Display quantity controls */}
          <div className="cart-item__quantity-controls">
            <button
              className="quantity-btn quantity-btn--decrease"
              aria-label="Decrease quantity"
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </button>
            <span className="cart-item__quantity">{item.quantity}</span>
            <button
              className="quantity-btn quantity-btn--increase"
              aria-label="Increase quantity"
              onClick={() => handleIncreaseQuantity(item.id)}
            >
              +
            </button>
          </div>

          {/* Display item subtotal */}
          <div>${(item.price * item.quantity).toFixed(2)}</div>

          {/* Add remove item button */}
          <button
            className="cart-item__remove-btn"
            aria-label="Remove item"
            onClick={() => handleRemoveItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Display total price */}
      <div className="cart-page__summary">
        <div className="cart-page__total">
          <span className="cart-page__total-label">Total:</span>
          <span className="cart-page__total-amount">
            ${calculateTotal().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
