import React from "react";
import ieltseducation from '../assets/ieltseducation.png';
import toeflscorecard from '../assets/toeflscorecard.png';
import { TfiBlackboard } from "react-icons/tfi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { IoShuffle } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa6";

const TOEFLPage = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${ieltseducation})` }}> 
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Best TOEFL Coaching in the Town</h1>
              <p className="mt-4">
                Trust India's most trusted TOEFL mentors to equip you with the knowledge and expertise you need to succeed.
              </p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-red-700">
                Book FREE Demo Class
              </button>
            </div>
          </div>
        </div>

        {/* Quick Facts Section */}
        <div className="py-12 bg-gray-50">
          <h2 className="text-center text-3xl font-bold mb-8">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">📋</div>
              <p className="font-semibold">Required for work/study in English-speaking countries</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">📜</div>
              <p className="font-semibold">Accepted by over 11,500 institutions globally</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">🔢</div>
              <p className="font-semibold">Scoring: 0–120</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">📅</div>
              <p className="font-semibold">Score Validity: 2 Years</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">💻</div>
              <p className="font-semibold">Mode of Examination: Internet-based (iBT)</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
              <div className="text-red-600 text-4xl mb-2">💰</div>
              <p className="font-semibold">Registration Fee: $195 (approx. ₹16,000)</p>
            </div>
          </div>
        </div>

        {/* TOEFL Exam Structure Section */}
        <div className="py-12 bg-blue-500 text-white">
          <h2 className="text-center text-3xl font-bold mb-8">TOEFL Exam Structure</h2>
          <div className="max-w-4xl mx-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Section</th>
                  <th className="px-4 py-2 border-b">Number of Tasks</th>
                  <th className="px-4 py-2 border-b">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Reading</td>
                  <td className="px-4 py-2 border-b">3–4 Passages</td>
                  <td className="px-4 py-2 border-b">54–72 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Listening</td>
                  <td className="px-4 py-2 border-b">28–39 Questions</td>
                  <td className="px-4 py-2 border-b">41–57 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Speaking</td>
                  <td className="px-4 py-2 border-b">4 Tasks</td>
                  <td className="px-4 py-2 border-b">17 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Writing</td>
                  <td className="px-4 py-2 border-b">2 Tasks</td>
                  <td className="px-4 py-2 border-b">50 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Scoring Explanation Section */}
        <div className="py-12 bg-gray-50">
          <h2 className="text-center text-3xl font-bold mb-8">How is TOEFL Test Scored?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-4">
              The TOEFL test is scored on a scale of 0–30 for each section (Reading, Listening, Speaking, and Writing).
              The total score is the sum of all section scores, with a maximum of 120.
            </p>
            <img src={toeflscorecard} alt="Score Chart" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TOEFLPage;
