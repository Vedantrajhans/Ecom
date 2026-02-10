import { useCart } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  const bgColors = {
    success: "bg-green-500",
    danger: "bg-red-500",
    warning: "bg-yellow-500 text-gray-900",
    info: "bg-blue-500",
  };

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <div
        className={`${bgColors[toast.type] || bgColors.info} text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 min-w-[280px] animate-fade-in`}
      >
        <span className="flex-1">{toast.message}</span>
        <button className="hover:opacity-75">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
