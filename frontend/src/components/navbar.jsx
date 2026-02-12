import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserPlus,
  FaClipboardList,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartTotal, wishlist } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-bg-darker border-b border-border-color shadow-lg py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-text-light"
          >
            <img
              src="https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png"
              alt="Shopify"
              className="w-10 h-8"
            />
            Shopify
          </Link>

          <button
            className="lg:hidden text-text-light text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:static top-16 left-0 right-0 bg-bg-darker lg:bg-transparent p-4 lg:p-0 gap-4 lg:gap-6 items-center lg:flex-1 lg:justify-between z-50`}
          >
            <ul className="flex flex-col lg:flex-row gap-2 lg:gap-1 lg:ml-8">
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive("/")
                      ? "text-primary-light bg-primary/10"
                      : "text-text-light hover:text-primary-light hover:bg-primary/10"
                  }`}
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive("/products")
                      ? "text-primary-light bg-primary/10"
                      : "text-text-light hover:text-primary-light hover:bg-primary/10"
                  }`}
                >
                  <FaBox /> Products
                </Link>
              </li>
            </ul>

            <form
              className="flex w-full lg:w-auto lg:flex-1 lg:max-w-md lg:mx-8"
              onSubmit={handleSearch}
            >
              <div className="flex w-full">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 bg-white/10 border border-border-color rounded-l-lg text-text-light placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 backdrop-blur-lg transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-transparent border border-l-0 border-primary-light text-primary-light rounded-r-lg hover:bg-primary hover:text-white transition-all"
                >
                  <FaSearch />
                </button>
              </div>
            </form>

            <ul className="flex items-center gap-4">
              <li>
                <Link
                  to="/wishlist"
                  className="relative flex items-center gap-2 px-3 py-2 text-text-light hover:text-primary-light transition-all"
                  title="Wishlist"
                >
                  <FaHeart />
                  <span className="lg:hidden">Wishlist</span>
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 lg:top-0 lg:right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-badge">
                      {wishlist.length > 99 ? "99+" : wishlist.length}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="relative flex items-center gap-2 px-3 py-2 text-text-light hover:text-primary-light transition-all"
                  title="Cart"
                >
                  <FaShoppingCart />
                  <span className="lg:hidden">Cart</span>
                  {cartTotal > 0 && (
                    <span className="absolute -top-1 -right-1 lg:top-0 lg:right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-badge">
                      {cartTotal > 99 ? "99+" : cartTotal}
                    </span>
                  )}
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-text-light hover:text-primary-light transition-all"
                >
                  <FaUser />
                  <span className="lg:hidden">Account</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-bg-darker border border-border-color rounded-lg shadow-xl z-50">
                    <Link
                      to="#"
                      className="flex items-center gap-2 px-4 py-3 text-text-light hover:bg-primary/10 transition-all"
                    >
                      <FaSignInAlt /> Login
                    </Link>
                    <hr className="border-border-color" />
                    <Link
                      to="#"
                      className="flex items-center gap-2 px-4 py-3 text-text-light hover:bg-primary/10 transition-all"
                    >
                      <FaUserPlus /> Register
                    </Link>
                    <hr className="border-border-color" />
                    <Link
                      to="#"
                      className="flex items-center gap-2 px-4 py-3 text-text-light hover:bg-primary/10 transition-all"
                    >
                      <FaClipboardList /> My Orders
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
