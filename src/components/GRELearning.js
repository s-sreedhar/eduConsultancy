import React from "react";
import ieltseducation from '../assets/ieltseducation.png'
import ieltsscorecard from '../assets/ieltsscorecard.png'
import { TfiBlackboard } from "react-icons/tfi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { IoShuffle } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa6";
const GREPage = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${ieltseducation})` }}> 
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Best GRE Coaching in the Town</h1>
            <p className="mt-4">
              Trust India's most trusted GRE mentors to equip you with the knowledge and expertise you need to succeed.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-red-700" style={{backgroundColor:'#0F3A5E'}}>
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
            <p className="font-semibold">Accepted by more than 10,000 universities</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <div className="text-red-600 text-4xl mb-2">🔢</div>
            <p className="font-semibold">Scoring: Bands (0–9)</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <div className="text-red-600 text-4xl mb-2">📅</div>
            <p className="font-semibold">Score Validity: 2 Years</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <div className="text-red-600 text-4xl mb-2">💻</div>
            <p className="font-semibold">Mode of Examination: Paper/Computer</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
            <div className="text-red-600 text-4xl mb-2">💰</div>
            <p className="font-semibold">Registration Fee: ₹15,500</p>
          </div>
        </div>
      </div>

      {/* GRE Exam Structure Section */}
      <div className="py-12 bg-blue-500 text-white" style={{backgroundColor:'#0F3A5E'}}>
        <h2 className="text-center text-3xl font-bold mb-8">GRE Exam Structure</h2>
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
                <td className="px-4 py-2 border-b">Reading</td>
                <td className="px-4 py-2 border-b">40</td>
                <td className="px-4 py-2 border-b">60 minutes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Writing</td>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">60 minutes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Listening</td>
                <td className="px-4 py-2 border-b">40</td>
                <td className="px-4 py-2 border-b">30 minutes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Speaking</td>
                <td className="px-4 py-2 border-b">3 parts</td>
                <td className="px-4 py-2 border-b">11–14 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scoring Explanation Section */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-8">How is GRE Test Scored Calculated?</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            The GRE test is scored on a band scale of 0–9 in each section (listening, reading, writing, and speaking),
            measured in band scores. The overall band score is an average of these scores. The band scale ranges from
            non-user (0) to expert (9).
          </p>
          <img src={ieltsscorecard} alt="Score Chart" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
   
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Crack GRE with 7+ Bands in 30 Days With us
        </h2>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          <div className="text-center">
            {/* <img src="/icons/trainers.png" alt="Trainers" className="mx-auto mb-4" /> */}
            <FaChalkboardTeacher className="mx-auto mb-4"/>
            <h3 className="font-semibold">Learn from The Best Trainers</h3>
            <p className="text-sm text-gray-600">
              Receive guidance from the finest GRE trainers to excel in your preparation.
            </p>
          </div>

          <div className="text-center">
            {/* <img src="/icons/360-degree.png" alt="360 Excellence" className="mx-auto mb-4" /> */}
            <TbView360Number className="mx-auto mb-4"/>
            <h3 className="font-semibold">360 Degree GRE Excellence</h3>
            <p className="text-sm text-gray-600">
              Over 30 hours of coaching to master every aspect of GRE.
            </p>
          </div>

          <div className="text-center">
            {/* <img src="/icons/doubt-solving.png" alt="Doubt Sessions" className="mx-auto mb-4" /> */}
            <TfiBlackboard className="mx-auto mb-4"/>
            <h3 className="font-semibold">Daily Doubt Solving Sessions</h3>
            <p className="text-sm text-gray-600">
              Extra sessions for resolving queries with our online faculty every day.
            </p>
          </div>

          <div className="text-center">
            {/* <img src="/icons/practice-tests.png" alt="Practice Tests" className="mx-auto mb-4" /> */}
            <TfiWrite className="mx-auto mb-4"/>
            <h3 className="font-semibold">Practice Tests</h3>
            <p className="text-sm text-gray-600">
              Benefit from 50+ mock tests to simulate real exam conditions.
            </p>
          </div>

          <div className="text-center">
            {/* <img src="/icons/flexible-option.png" alt="Flexible Option" className="mx-auto mb-4" /> */}
            <IoShuffle className="mx-auto mb-4"/>
            <h3 className="font-semibold">Convenient and Flexible Option</h3>
            <p className="text-sm text-gray-600">
              Choose between online and offline classes that fit your schedule.
            </p>
          </div>

          <div className="text-center">
            {/* <img src="/icons/test-prep.png" alt="Test Prep" className="mx-auto mb-4" /> */}
            <FaRegPaperPlane className="mx-auto mb-4"/>
            <h3 className="font-semibold">Ace Your Test Prep</h3>
            <p className="text-sm text-gray-600">
              Get personalized feedback to improve your performance effectively.
            </p>
          </div>
        </div>

        {/* Programs Section */}
        {/* <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Discover Our GRE Programs
        </h3> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
          {/* Program Card */}
          {/* <div className="border rounded-lg p-6 bg-gray-50 shadow-md">
            <h4 className="text-xl font-semibold text-red-600 mb-4">GRE Online</h4>
            <p className="text-sm text-gray-700 mb-2">Time: 8:30 AM to 9:30 AM</p>
            <p className="text-sm text-gray-700 mb-2">Batch Starts: 01 Jan 2024</p>
            <p className="text-sm text-gray-700 mb-4">Duration: 30 Days</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Certified and experienced faculty</li>
              <li>Grammar practice</li>
              <li>Sentence formation</li>
              <li>Leading comprehension skills</li>
              <li>Group discussions</li>
              <li>Daily doubt-solving sessions</li>
              <li>Tips and tricks for test prep</li>
              <li>Personalized feedback</li>
              <li>50+ full-length mock tests</li>
            </ul>
          </div> */}

          {/* Duplicate Program Card */}
          {/* <div className="border rounded-lg p-6 bg-gray-50 shadow-md">
            <h4 className="text-xl font-semibold text-red-600 mb-4">GRE Offline</h4>
            <p className="text-sm text-gray-700 mb-2">Time: 8:30 AM to 9:30 AM</p>
            <p className="text-sm text-gray-700 mb-2">Batch Starts: 01 Jan 2024</p>
            <p className="text-sm text-gray-700 mb-4">Duration: 30 Days</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Certified and experienced faculty</li>
              <li>Grammar practice</li>
              <li>Sentence formation</li>
              <li>Leading comprehension skills</li>
              <li>Group discussions</li>
              <li>Daily doubt-solving sessions</li>
              <li>Tips and tricks for test prep</li>
              <li>Personalized feedback</li>
              <li>50+ full-length mock tests</li>
            </ul>
          </div> */}

          {/* Duplicate Program Card */}
          {/* <div className="border rounded-lg p-6 bg-gray-50 shadow-md">
            <h4 className="text-xl font-semibold text-red-600 mb-4">GRE Online</h4>
            <p className="text-sm text-gray-700 mb-2">Time: 8:30 AM to 9:30 AM</p>
            <p className="text-sm text-gray-700 mb-2">Batch Starts: 01 Jan 2024</p>
            <p className="text-sm text-gray-700 mb-4">Duration: 30 Days</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Certified and experienced faculty</li>
              <li>Grammar practice</li>
              <li>Sentence formation</li>
              <li>Leading comprehension skills</li>
              <li>Group discussions</li>
              <li>Daily doubt-solving sessions</li>
              <li>Tips and tricks for test prep</li>
              <li>Personalized feedback</li>
              <li>50+ full-length mock tests</li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </section>
    </>
  );
};

export default GREPage;
