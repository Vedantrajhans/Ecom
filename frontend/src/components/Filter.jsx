import { FaFilter, FaRedo } from "react-icons/fa";

export default function Filter({
  categories,
  selectedCategories,
  onCategoryChange,
  maxPrice,
  priceRange,
  onPriceChange,
  onReset,
}) {
  return (
    <div className="sticky top-24 bg-bg-darker border border-border-color rounded-xl p-5 text-text-muted">
      <h5 className="flex items-center gap-2 text-primary-light font-bold text-lg mb-5">
        <FaFilter /> Filters
      </h5>

      {/* Category Filter */}
      <div className="mb-6">
        <h6 className="text-white font-semibold mb-3 text-sm">Category</h6>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 mb-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="w-4 h-4 rounded bg-bg-darker border-border-color text-primary focus:ring-primary/25 cursor-pointer"
            />
            <span
              className={`text-sm transition-colors ${selectedCategories.includes(category) ? "text-primary-light font-medium" : "text-text-muted"}`}
            >
              {category}
            </span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h6 className="text-white font-semibold mb-3 text-sm">Price Range</h6>
        <input
          type="range"
          min="0"
          max={maxPrice}
          step="1000"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm">
          <span>₹0</span>
          <span className="text-primary-light">
            ₹{priceRange.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-primary-light text-primary-light rounded-lg text-sm font-medium transition-all hover:bg-primary-light hover:text-bg-darker"
      >
        <FaRedo /> Reset Filters
      </button>
    </div>
  );
}
