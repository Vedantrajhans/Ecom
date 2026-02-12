import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FaPlus, FaTimes } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import ProductsHero from "../components/ProductsHero";
import { products } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

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
    setSearchParams({});
  };

  const clearSearch = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => {
      const categoryOk = selectedCategories.includes(p.category);
      const priceNum = Number(p.price.replace(/[^0-9.]/g, ""));
      const priceOk = priceNum <= priceRange;

      // Search filter
      const searchOk = searchQuery
        ? p.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      return categoryOk && priceOk && searchOk;
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
  }, [selectedCategories, priceRange, sortBy, searchQuery]);

  return (
    <div>
      <ProductsHero />

      <div id="products-section" className="container mx-auto px-4 py-8">
        {searchQuery && (
          <div className="flex items-center gap-3 mb-6 p-4 bg-bg-darker rounded-lg border border-border-color">
            <span className="text-text-light">
              Search results for:{" "}
              <strong className="text-primary-light">"{searchQuery}"</strong>
            </span>
            <button
              onClick={clearSearch}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30 transition-all"
            >
              <FaTimes /> Clear
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-6">
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

            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-all">
              <FaPlus /> Add New Product
            </button>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-semibold text-text-light">
                {searchQuery ? "Search Results" : "All Products"}
              </h4>
              <span className="text-text-muted">
                {filteredProducts.length} products
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text-muted text-lg">
                  {searchQuery
                    ? `No products found for "${searchQuery}"`
                    : "No products match your filters."}
                </p>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="mt-4 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all"
                  >
                    Clear Search
                  </button>
                )}
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
    </div>
  );
}
