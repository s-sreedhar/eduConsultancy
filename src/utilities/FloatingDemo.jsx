import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const FloatingDemo = ({ onButtonClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      onButtonClick(); 
    }
  };

  return (
    <div className="fixed bottom-6 right-6 m-5"> {/* Adjusted positioning */}
      <button
        className={`bg-blue-500 text-white rounded-full p-3 shadow-md hover:bg-blue-600 ${
          isExpanded ? 'hidden' : 'block'
        }`}
        onClick={handleButtonClick}
      >
        <FaPhoneAlt size={20} />
      </button>

      <div
        className={`absolute top-0 right-0 bg-white p-4 rounded-lg shadow-md transform translate-y-full transition-all duration-300 ${
          isExpanded ? 'translate-y-0 opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-center">Get a Free Counseling Demo Now</p>
      </div>
    </div>
  );
};

export default FloatingDemo;