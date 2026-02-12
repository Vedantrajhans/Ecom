import { Link } from "react-router-dom";
import { FaShoppingBag, FaPlay } from "react-icons/fa";
import Carousel2 from "../components/Carousel2";

export default function ProductsHero() {
  return (
    <div className="relative bg-bg-darker overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#198754" strokeOpacity=".3" d="M-15.227 702.342H1439.7" />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="#198754"
          strokeOpacity=".2"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="#198754"
          strokeOpacity=".2"
        />
        <path
          stroke="#198754"
          strokeOpacity=".3"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="#198754"
          strokeOpacity=".2"
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(25,135,84,0.15)_0%,transparent_60%)] pointer-events-none" />

      <section className="flex flex-col md:flex-row py-16 md:py-20 items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-primary/50 text-white text-xs">
            <div className="flex items-center">
              <img
                className="w-7 h-7 rounded-full border-2 border-primary object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="user1"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-primary object-cover -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="user2"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-primary object-cover -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="user3"
              />
            </div>
            <p className="-translate-x-2 text-text-muted">
              Join 12K+ happy customers
            </p>
          </div>

          <h1 className="text-center md:text-left text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-xl text-text-light mt-6 leading-tight">
            Discover Premium{" "}
            <span className="text-primary-light">Products</span>
          </h1>

          <p className="text-center md:text-left text-base md:text-lg text-text-muted max-w-lg mt-4">
            Shop thousands of premium products at unbeatable prices — from
            fashion and electronics to home essentials and more.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="#products-section"
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white active:scale-95 transition-all rounded-lg px-6 py-3 font-medium hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaShoppingBag /> Shop Now
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div className="text-center">
              <h5 className="text-xl font-bold text-white">12K+</h5>
              <p className="text-sm text-text-muted">Happy Customers</p>
            </div>
            <div className="text-center">
              <h5 className="text-xl font-bold text-white">4.8/5</h5>
              <p className="text-sm text-text-muted">Rating</p>
            </div>
            <div className="text-center">
              <h5 className="text-xl font-bold text-white">24/7</h5>
              <p className="text-sm text-text-muted">Support</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div
            id="deals-carousel"
            className="w-150 max-h-[700px] object-cover rounded-2xl shadow-2xl mx-auto"
          >
            <Carousel2 />
          </div>
        </div>
      </section>
    </div>
  );
}
