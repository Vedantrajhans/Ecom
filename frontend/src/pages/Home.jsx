import { Link } from "react-router-dom";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(25,135,84,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                Shopping Made Simple, Fast & Fun
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-8 max-w-lg mx-auto lg:mx-0">
                Discover thousands of premium products at unbeatable prices —
                from fashion and electronics to home essentials and more.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-lg font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <FaShoppingBag /> Shop Now
                </Link>
                <a
                  href="#deals-carousel"
                  className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg text-lg font-medium transition-all hover:bg-white/10"
                >
                  <FaStar /> Explore Deals
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-8 mt-10">
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

            <div className="text-center mt-8 lg:mt-0">
              <img
                src="https://i.pinimg.com/736x/f2/f5/a7/f2f5a771253fb12461eba32153fdb643.jpg"
                alt="Happy online shopping"
                className="w-100 max-h-[700px] object-cover rounded-2xl shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <div id="deals-carousel">
        <Carousel />
      </div>
    </div>
  );
}
