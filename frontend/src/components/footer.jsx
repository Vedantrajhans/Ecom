import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-bg-darker text-white pt-12 pb-8 border-t border-border-color mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h5 className="flex items-center gap-2 font-bold text-xl mb-4">
              <img
                src="https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png"
                alt="Shopify"
                className="w-10 h-8"
              />
              Shopify
            </h5>
            <p className="text-text-muted">
              Your one-stop destination for all shopping needs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-primary-light">Links</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-text-muted hover:text-primary-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-text-muted hover:text-primary-light transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-text-muted hover:text-primary-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-primary-light">
              Contact
            </h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-muted">
                <FaMapMarkerAlt className="text-primary-light" />
                Netleap, Chh. Sambhajinagar
              </li>
              <li className="flex items-center gap-2 text-text-muted">
                <FaPhone className="text-primary-light" />
                +91 8549983455
              </li>
              <li className="flex items-center gap-2 text-text-muted">
                <FaEnvelope className="text-primary-light" />
                amitrippin@shopify.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border-color mb-6" />

        <div className="text-center md:text-left">
          <p className="text-text-muted">
            &copy; 2026 Shopify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
