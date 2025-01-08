import React, { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";  // Importing Upward Arrow icon

const BackToTopIcon = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // Show button only after scrolling past 100px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup function
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 left-4 bg-blue-500 p-2 rounded-full shadow-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-110 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <AiOutlineUp size={20} />
    </button>
  );
};

export default BackToTopIcon;