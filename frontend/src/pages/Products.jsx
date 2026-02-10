import { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { products } from "../data/products";

export default function Products() {
  const [selectedCategories, setSelectedCategories] = useState([
    "Clothing",
    "Electronics",
  ]);
  const [priceRange, setPriceRange] = useState(300000);
  const [sortBy, setSortBy] = useState("default");

  const categories = ["Clothing", "Electronics"];
  const maxPrice = 300000;

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleReset = () => {
    setSelectedCategories(["Clothing", "Electronics"]);
    setPriceRange(300000);
    setSortBy("default");
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => {
      const categoryOk = selectedCategories.includes(p.category);
      const priceNum = Number(p.price.replace(/[^0-9.]/g, ""));
      return categoryOk && priceNum <= priceRange;
    });

    // Sort
    if (sortBy === "price-low") {
      filtered.sort(
        (a, b) =>
          Number(a.price.replace(/[^0-9.]/g, "")) -
          Number(b.price.replace(/[^0-9.]/g, "")),
      );
    } else if (sortBy === "price-high") {
      filtered.sort(
        (a, b) =>
          Number(b.price.replace(/[^0-9.]/g, "")) -
          Number(a.price.replace(/[^0-9.]/g, "")),
      );
    } else if (sortBy === "name-az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-za") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [selectedCategories, priceRange, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            maxPrice={maxPrice}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            onReset={handleReset}
          />

          {/* Add Product Button */}
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-all">
            <FaPlus /> Add New Product
          </button>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xl font-semibold text-text-light">
              All Products
            </h4>
            <span className="text-text-muted">
              {filteredProducts.length} products
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">
                No products match your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
