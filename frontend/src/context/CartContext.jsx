import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.title} added to cart!`, "success");
  };

  const removeFromCart = (index) => {
    const removed = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast(`${removed.title} removed from cart`, "danger");
  };

  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Cart cleared!", "info");
  };

  const addToWishlist = (product) => {
    const existing = wishlist.find((item) => item.id === product.id);
    if (existing) {
      showToast(`${product.title} is already in wishlist!`, "warning");
      return;
    }
    setWishlist((prev) => [...prev, { ...product }]);
    showToast(`${product.title} added to wishlist!`, "success");
  };

  const removeFromWishlist = (index) => {
    const removed = wishlist[index];
    setWishlist((prev) => prev.filter((_, i) => i !== index));
    showToast(`${removed.title} removed from wishlist`, "danger");
  };

  const toggleWishlist = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      removeFromWishlist(index);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const moveToCart = (index) => {
    const item = wishlist[index];
    addToCart(item);
    removeFromWishlist(index);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const cartAmount = cart.reduce((total, item) => {
    const priceNum = Number(item.price.replace(/[^0-9.]/g, ""));
    return total + priceNum * (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        toast,
        cartTotal,
        cartAmount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        moveToCart,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
