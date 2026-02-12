import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "https://i.pinimg.com/736x/3c/7e/da/3c7edae4a35368b002343e32349dd25d.jpg",
    title: "FLASH SALE!",
  },
  {
    img: "https://i.pinimg.com/originals/5f/b1/f0/5fb1f09f53b5504ed99114c741612b99.gif",
    title: "Tech Mega Sale",
  },
  {
    img: "https://i.pinimg.com/736x/6e/00/d4/6e00d40103b78e2657dd043f047d003b.jpg",
    title: "Summer Fashion Frenzy",
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

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="py-12 bg-bg-dark">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-primary w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
