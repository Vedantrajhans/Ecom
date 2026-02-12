import { Link } from "react-router-dom";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, cartAmount, removeFromCart, updateCartQuantity, clearCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-text-light mb-4">
            Your cart is empty
          </h4>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all"
          >
            <FaShoppingBag /> Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text-light">
          Your Shopping Cart
        </h2>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm"
        >
          <FaTrash /> Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item, index) => {
            const priceNum = Number(item.price.replace(/[^0-9.]/g, ""));
            const itemTotal = priceNum * (item.quantity || 1);

            return (
              <div
                key={item.id}
                className="bg-bg-darker border border-border-color rounded-xl p-4 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-lg bg-[#222]"
                    />
                  </div>

                  <div className="flex-1">
                    <h6 className="font-semibold text-text-light mb-1">
                      {item.title}
                    </h6>
                    <p className="text-text-muted text-sm">{item.category}</p>
                    <p className="text-primary-light font-medium">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateCartQuantity(index, (item.quantity || 1) - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border border-border-color rounded hover:border-primary transition-colors"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        updateCartQuantity(index, parseInt(e.target.value) || 1)
                      }
                      className="w-12 h-8 text-center bg-bg-darker border border-border-color rounded text-text-light"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        updateCartQuantity(index, (item.quantity || 1) + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border border-border-color rounded hover:border-primary transition-colors"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-text-light">
                      ₹{itemTotal.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition-all"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-bg-darker border border-border-color rounded-xl sticky top-24">
            <div className="p-4 border-b border-border-color">
              <h5 className="font-semibold text-text-light">Order Summary</h5>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between text-text-light">
                <span>Subtotal</span>
                <span>₹{cartAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Shipping</span>
                <span className="text-primary-light">FREE</span>
              </div>
              <hr className="border-border-color" />
              <div className="flex justify-between">
                <h5 className="font-semibold text-text-light">Total</h5>
                <h5 className="font-semibold text-primary-light">
                  ₹{cartAmount.toLocaleString("en-IN")}
                </h5>
              </div>

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-all mt-4"
              >
                <FaLock /> Proceed to Checkout
              </Link>
              <Link
                to="/products"
                className="w-full flex items-center justify-center gap-2 border border-white text-white py-3 rounded-lg font-medium transition-all hover:bg-white/10"
              >
                <FaArrowLeft /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
