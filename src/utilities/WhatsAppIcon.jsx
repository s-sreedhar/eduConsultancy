import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/7997222217" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 transition-transform transform hover:scale-110"
    >
      <IoLogoWhatsapp size={22}/>
    </a>
  );
};

export default WhatsAppIcon;
