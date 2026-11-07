
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Testeminoals() {
  const sliderRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Craig Bator",
      role: "CEO & Co Founder",
      company: "Zendesk",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      review:
        "The overall experience was excellent. Everything feels smooth, professional and easy to use. I would definitely recommend it.",
    },
    {
      name: "Martin Dorwart",
      role: "Product Manager",
      company: "Orbit",
      image: "https://i.pravatar.cc/150?img=11",
      rating: 4,
      review:
        "A fantastic experience from start to finish. The design is clean, the features are useful and everything works perfectly.",
    },
    {
      name: "Alexandra Lee",
      role: "Lead Developer",
      company: "TechNova",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      review:
        "I really appreciate the attention to detail. The interface looks modern and the overall quality is impressive.",
    },
    {
      name: "Jason Wu",
      role: "Product Designer",
      company: "InnovateX",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      review:
        "A beautiful experience with a professional look. Everything feels carefully designed and easy to navigate.",
    },
  ];

  return (
    <section style={{backgroundColor:"orange"}} className=" py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">

          <div data-aos="fade-right">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
              Testimonials
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              What Our
              <span className="text-blue-600"> Customers </span>
              Say
            </h2>

            <p className="text-gray-500 text-lg mt-5 leading-relaxed">
              Real feedback and experiences from people who have used our
              products and services.
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center text-xl"
                aria-label="Previous testimonials"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center justify-center text-xl shadow-lg shadow-blue-200"
                aria-label="Next testimonials"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="lg:col-span-2 min-w-0"
            data-aos="fade-left"
          >
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-5"
              style={{ scrollbarWidth: "none" }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[calc(50%-10px)] snap-start"
                >
                  <div className="h-full min-h-[310px] rounded-3xl border border-gray-100 bg-gray-50 p-7 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300">

                    <div className="flex items-center justify-between mb-7">
                      <div className="flex gap-1 text-yellow-400 text-xl">
                        {"★".repeat(item.rating)}
                        <span className="text-gray-300">
                          {"★".repeat(5 - item.rating)}
                        </span>
                      </div>

                      <span className="text-5xl text-blue-100 font-serif leading-none">
                        “
                      </span>
                    </div>

                    <p className="text-gray-600 text-base leading-7 mb-8">
                      {item.review}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.role} at{" "}
                          <span className="text-blue-600 font-semibold">
                            {item.company}
                          </span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testeminoals;
