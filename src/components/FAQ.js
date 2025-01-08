import React, { useState } from "react";

const FAQ = () => {
  // Array of questions and answers
  const faqs = [
    {
      question: "How can CS Overseas Consultancy assist in my study abroad plans?",
      answer: "CS Overseas Consultancy helps with university selection, application processes, visa guidance, and more.",
    },
    {
      question: "What services does CS Overseas Consultancy offer to students seeking overseas education?",
      answer: "The services include career counseling, test preparation, application assistance, and post-admission support.",
    },
    {
      question: "Can CS Overseas Consultancy help me with visa processing for my chosen study destination?",
      answer: "Yes, they provide expert guidance and support for visa applications.",
    },
    {
      question: "How do I schedule a consultation session with CS Overseas Consultancy?",
      answer: "You can book a consultation through their website or by contacting their support team.",
    },
    {
      question: "How can CS Overseas Consultancy assist students with test preparation for study abroad?",
      answer: "They offer training for tests like IELTS, GRE, TOEFL, and others.",
    },
    {
      question: "What sets CS Overseas Consultancy apart from other study abroad consultants?",
      answer: "Their personalized approach and extensive experience in overseas education consultancy make them stand out.",
    },
  ];

  // State to track expanded questions
  const [expanded, setExpanded] = useState(null);

  // Toggle function
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b-2 border-blue-500">
          <button
            onClick={() => toggleExpand(index)}
            className="w-full flex justify-between items-center py-2 text-left text-lg font-medium text-gray-800"
          >
            {faq.question}
            <span className="text-blue-500">{expanded === index ? "-" : "+"}</span>
          </button>
          {expanded === index && (
            <div className="mt-2 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
