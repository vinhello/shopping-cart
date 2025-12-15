import { useState } from "react";
import { CartContext } from "./CartContext";

// Provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, quantity = 1) {
    // TODO: Implement add to cart logic
    setCartItems((prevItems) => {
      // Check if item exists
      const existingItem = prevItems.find((item) => item.id === product.id);
      // If exists, update quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        // If not, add new item
      } else {
        return [...prevItems, { ...product, quantity: quantity }];
      }
    });
  }

  function removeFromCart(productId) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId);
    });
  }

  function updateQuantity(productId, newQuantity) {
    // If newQuantity <= 0, remove item
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    // Otherwise, update quantity for matching productId
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  }

  function getTotalItems() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
