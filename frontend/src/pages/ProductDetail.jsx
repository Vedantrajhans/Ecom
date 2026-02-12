import { useParams, Link } from "react-router-dom";
import {
  FaCartPlus,
  FaHeart,
  FaRegHeart,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-text-light mb-4">
          Product not found
        </h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link to="/" className="text-primary-light hover:underline">
              Home
            </Link>
          </li>
          <li className="text-text-muted">/</li>
          <li>
            <Link to="/products" className="text-primary-light hover:underline">
              Products
            </Link>
          </li>
          <li className="text-text-muted">/</li>
          <li className="text-text-muted">{product.title}</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1e1e1e] rounded-xl p-6 border border-border-color">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[400px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div>
          <span className="inline-block bg-gray-600 text-white text-sm px-3 py-1 rounded mb-3">
            {product.category}
          </span>
          <h2 className="text-3xl font-bold text-text-light mb-4">
            {product.title}
          </h2>
          <h3 className="text-2xl font-bold text-primary-light mb-6">
            {product.price}
          </h3>

          <div className="mb-6">
            <h6 className="text-text-muted font-medium mb-2">Description</h6>
            <p className="text-text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <FaTruck className="text-primary-light" />
              <span className="text-text-light">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUndo className="text-primary-light" />
              <span className="text-text-light">7 Days Return Policy</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-primary-light" />
              <span className="text-text-light">1 Year Warranty</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              <FaCartPlus /> Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                inWishlist
                  ? "bg-red-500 text-white"
                  : "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {inWishlist ? <FaHeart /> : <FaRegHeart />}
              {inWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10"
          >
            <FaShoppingCart /> Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
