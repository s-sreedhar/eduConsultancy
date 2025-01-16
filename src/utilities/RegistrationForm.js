import React, { useState } from "react";
import { db, addDoc, collection, serverTimestamp } from "../firebaseConfig"; // Import Firestore methods
import { ToastContainer, toast } from "react-toastify"; // Correct imports for ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    surname: "",
    givenname: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }

    // Form validation (email format, phone format, etc.)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    try {
      // Add timestamp to form data
      const formDataWithTimestamp = {
        ...formData,
        submittedAt: serverTimestamp(),
      };

      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "registrations"), formDataWithTimestamp);
      console.log("The submitted form data is", docRef);
      toast.success("Form submitted successfully!");

      // Optionally clear form data after successful submission
      setFormData({
        surname: "",
        givenname: "",
        email: "",
        phone: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Error submitting the form.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-black">Register for more</h2>

        {/* Surname */}
        <div>
          <label htmlFor="surname" className="block text-sm text-gray-600">
            Surname *
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Given Name */}
        <div>
          <label htmlFor="givenname" className="block text-sm text-gray-600">
            Given Name *
          </label>
          <input
            type="text"
            id="givenname"
            name="givenname"
            value={formData.givenname}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-600">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Agree to Terms */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          style={{ backgroundColor: "#0F3A5E" }}
        >
          Apply
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default RegistrationForm;
