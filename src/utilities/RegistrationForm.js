import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    surname:"",
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
      alert("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-700">Register for more</h2>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-600">
          Surname *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.surname}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-600">
          Given Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.givenname}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
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
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-600">
          Phone Number *
        </label>
        <input
          type="tel" // Specify type as tel for phone number input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply
      </button>
    </form>
  )}

  export  default RegistrationForm