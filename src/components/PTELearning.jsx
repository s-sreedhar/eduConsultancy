import {React, useState} from "react";
import ieltseducation from "../assets/ieltseducation.png";
import ptescorecard from "../assets/ptescorecard.png";
import { TfiBlackboard } from "react-icons/tfi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { IoShuffle } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa6";
import RegistrationForm from "../utilities/RegistrationForm";

const quickFacts = [
  { icon: "📋", text: "Required for work/study in English-speaking countries" },
  { icon: "📜", text: "Accepted by more than 3,000 universities worldwide" },
  { icon: "🔢", text: "Scoring: 10–90 scale" },
  { icon: "📅", text: "Score Validity: 2 Years" },
  { icon: "💻", text: "Mode of Examination: Computer-Based" },
  { icon: "💰", text: "Registration Fee: ₹14,700 (approx)" },
];

const features = [
  { icon: <FaChalkboardTeacher />, title: "Learn from The Best Trainers", text: "Receive guidance from expert PTE trainers." },
  { icon: <TbView360Number />, title: "360 Degree PTE Excellence", text: "Comprehensive coaching for all PTE sections." },
  { icon: <TfiBlackboard />, title: "Daily Doubt Solving Sessions", text: "Resolve queries with expert faculty daily." },
  { icon: <TfiWrite />, title: "Practice Tests", text: "Access over 50 mock tests for better preparation." },
  { icon: <IoShuffle />, title: "Flexible Options", text: "Choose between online and offline classes." },
  { icon: <FaRegPaperPlane />, title: "Personalized Feedback", text: "Improve performance with tailored guidance." },
];

// const programs = [
//   {
//     title: "PTE Online",
//     time: "8:30 AM to 9:30 AM",
//     batchStart: "01 Jan 2024",
//     duration: "30 Days",
//     features: [
//       "Certified and experienced faculty",
//       "Grammar practice",
//       "Sentence formation",
//       "Comprehension skills",
//       "Group discussions",
//       "Daily doubt-solving sessions",
//       "Tips and tricks for test prep",
//       "Personalized feedback",
//       "50+ full-length mock tests",
//     ],
//   },
//   {
//     title: "PTE Offline",
//     time: "8:30 AM to 9:30 AM",
//     batchStart: "01 Jan 2024",
//     duration: "30 Days",
//     features: [
//       "Certified and experienced faculty",
//       "Grammar practice",
//       "Sentence formation",
//       "Comprehension skills",
//       "Group discussions",
//       "Daily doubt-solving sessions",
//       "Tips and tricks for test prep",
//       "Personalized feedback",
//       "50+ full-length mock tests",
//     ],
//   },
// ];
const PTEPage = () => {
  const [showForm, setShowForm] = useState(false);
  const handleFormToggle = () =>{
    setShowForm(!showForm);
  }
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${ieltseducation})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Best PTE Coaching in the Town</h1>
              <p className="mt-4">Learn from India's most trusted PTE mentors for success.</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-red-700" style={{backgroundColor:'#0F3A5E'}} onClick={handleFormToggle}>
                Book FREE Demo Class
              </button>
            </div>
          </div>
        </div>

        {/* Quick Facts Section */}
        <div className="py-12 bg-gray-50">
          <h2 className="text-center text-3xl font-bold mb-8">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                <div className="text-red-600 text-4xl mb-2">{fact.icon}</div>
                <p className="font-semibold text-center">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PTE Exam Structure Section */}
        <div className="py-12 bg-blue-500 text-white" style={{backgroundColor:'#0F3A5E'}}>
          <h2 className="text-center text-3xl font-bold mb-8">PTE Exam Structure</h2>
          <div className="max-w-4xl mx-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Section</th>
                  <th className="px-4 py-2 border-b">Number of Questions</th>
                  <th className="px-4 py-2 border-b">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Speaking & Writing</td>
                  <td className="px-4 py-2 border-b">Varied</td>
                  <td className="px-4 py-2 border-b">77–93 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Reading</td>
                  <td className="px-4 py-2 border-b">Varied</td>
                  <td className="px-4 py-2 border-b">32–41 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Listening</td>
                  <td className="px-4 py-2 border-b">Varied</td>
                  <td className="px-4 py-2 border-b">45–57 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Scoring Explanation Section */}
        <div className="py-12 bg-gray-50">
          <h2 className="text-center text-3xl font-bold mb-8">How is the PTE Test Scored?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-4">
              The PTE test is scored on a scale of 10 to 90, reflecting communicative and enabling skills. Your overall score is an average of the section scores.
            </p>
            <img src={ptescorecard} alt="PTE Score Chart" className="w-full max-w-md mx-auto" />
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-white py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Crack PTE with 90+ Score in 30 Days</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  {feature.icon}
                  <h3 className="font-semibold mt-4">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Programs Section */}
            {/* <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Discover Our PTE Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gray-50 shadow-md">
                  <h4 className="text-xl font-semibold text-red-600 mb-4">{program.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">Time: {program.time}</p>
                  <p className="text-sm text-gray-700 mb-2">Batch Starts: {program.batchStart}</p>
                  <p className="text-sm text-gray-700 mb-4">Duration: {program.duration}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </div>
         {/* Registration Form Modal */}
         {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
              {/* Close Button */}
              <button
                onClick={handleFormToggle}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <RegistrationForm />
            </div>
          </div>
        )}
    </>
  );
};

export default PTEPage;
