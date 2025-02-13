import React from "react";

const Testimonials = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const testimonials = [
  //   {
  //     name: "Venkata Santhosh",
  //     type: "Dubai Visit Visa",
  //     videoThumbnail: "https://via.placeholder.com/150",
  //   },
  //   {
  //     name: "Faizan Khan",
  //     type: "Canada Tourist Visa",
  //     videoThumbnail: "https://via.placeholder.com/150",
  //   },
  //   {
  //     name: "Ashish Doppa",
  //     type: "USA J1 Visa Success",
  //     videoThumbnail: "https://via.placeholder.com/150",
  //   },
  // ];

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     (prevIndex - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center" style={{cursor:'default'}}>
        <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{cursor:'default'}}>
          Students trust us for Uncompromised Service
        </h2>
        <p className="text-gray-600 mb-8" style={{cursor:'default'}}>
          Our track record of triumphs speaks for itself
        </p>
        {/* <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md mb-8">
          Witness our success stories
        </button> */}

        {/* <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <div className="flex items-center justify-center space-x-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-transform duration-300 ease-in-out ${
                  index === currentIndex ? "scale-100" : "scale-75 opacity-50"
                }`}
              >
                <div
                  className={`w-80 rounded-lg shadow-md p-4 ${
                    index === currentIndex ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
                  }`}
                >
                  <img
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
