export async function fetchShopData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    // Handle fetch errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error: ", error);
  }
}
