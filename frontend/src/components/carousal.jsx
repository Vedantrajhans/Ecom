import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "https://i.pinimg.com/736x/66/7f/04/667f04dd1d13a29f645d7812bcdd197c.jpg",
    title: "FLASH SALE!",
    description: "Up to 50% OFF on selected items — Limited time only!",
  },
  {
    img: "https://i.pinimg.com/originals/5f/b1/f0/5fb1f09f53b5504ed99114c741612b99.gif",
    title: "Tech Mega Sale",
    description:
      "Gadgets & Electronics — Save big on smartphones, headphones & more",
  },
  {
    img: "https://i.pinimg.com/736x/6e/00/d4/6e00d40103b78e2657dd043f047d003b.jpg",
    title: "Summer Fashion Frenzy",
    description: "Trendy clothes & accessories — Up to 60% OFF this week!",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="my-20 bg-bg-darker border-t border-b border-border-color py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-primary-light mb-10">
          Hot Deals & Flash Sales
        </h2>

        <div className="relative overflow-hidden rounded-xl">
          {/* Slides */}
          <div className="relative h-[300px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-[0.85]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/65 backdrop-blur p-5 md:p-8 mx-4 mb-4 rounded-xl">
                  <h5 className="text-xl md:text-3xl font-extrabold text-primary-light mb-2">
                    {slide.title}
                  </h5>
                  <p className="text-sm md:text-lg text-gray-200">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary-light" : "bg-primary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
