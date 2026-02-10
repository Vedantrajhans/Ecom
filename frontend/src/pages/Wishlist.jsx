import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag, FaCartPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, moveToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <FaHeart className="text-6xl text-text-muted mx-auto mb-4 opacity-50" />
          <h4 className="text-2xl font-semibold text-text-light mb-2">
            Your wishlist is empty
          </h4>
          <p className="text-text-muted mb-6">
            Save items you love by clicking the heart icon.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all"
          >
            <FaShoppingBag /> Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-text-light mb-6">Your Wishlist</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((item, index) => (
          <div
            key={item.id}
            className="bg-bg-darker border border-border-color rounded-xl overflow-hidden hover:border-primary transition-all group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h6 className="font-semibold text-text-light mb-2 line-clamp-2">
                {item.title}
              </h6>
              <p className="text-primary-light font-bold mb-4">{item.price}</p>
              <div className="space-y-2">
                <button
                  onClick={() => moveToCart(index)}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-sm font-medium transition-all"
                >
                  <FaCartPlus /> Move to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(index)}
                  className="w-full flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg text-sm font-medium transition-all"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
