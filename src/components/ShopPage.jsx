import { ProductCard } from "./ProductCard";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";

export default function ShopPage() {
  // Fetch products on component mount
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Handle "Add to Cart" functionality
  const handleAddToCart = (product, quantity) => {
    // Call addToCart with product and quality
    addToCart(product, quantity);
  };

  // Display loading spinner while fetching
  if (loading) {
    return (
      <div className="shop-page">
        <h1>Shop</h1>
        <div className="loading-spinner">
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  // Display error message if fetch fails
  if (error) {
    return (
      <div className="shop-page">
        <h1>Shop</h1>
        <div className="error-message">
          <p>Error loading products: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <h1>Shop</h1>

      {/* Map products to ProductCard components */}
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}
