import { ProductCard } from "./ProductCard";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";

export default function ShopPage() {
  // Fetch products on component mount
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  // Handle "Add to Cart" functionality
  const handleAddToCart = (product, quantity) => {
    // CODE
  };

  // Display loading spinner while fetching

  // Display error message if fetch fails

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
