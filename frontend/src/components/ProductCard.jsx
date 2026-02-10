import { FaHeart, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="relative w-full max-w-[220px] min-h-[320px] mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl flex flex-col group">
      {/* Wishlist Button */}
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur transition-all ${
            inWishlist
              ? "bg-red-500 text-white"
              : "bg-black/70 text-white hover:bg-red-500/90 hover:scale-110"
          }`}
          title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          {inWishlist ? (
            <FaHeart className="animate-heartbeat" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-[180px] bg-[#222] flex items-center justify-center p-3 overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300?text=Image+Error";
            }}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-200 line-clamp-2 min-h-[40px] mb-1 hover:text-primary-light transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-lg font-bold text-primary-light mb-2">
          {product.price}
        </p>

        {/* Add to Cart Button */}
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2 px-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
