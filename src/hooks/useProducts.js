import { fetchShopData } from "../utils/api";
import { useState, useEffect } from "react";

export function useProducts() {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchShopData();
        setProducts(data);
      } catch (error) {
        throw new Error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return { products, loading, error };
}
