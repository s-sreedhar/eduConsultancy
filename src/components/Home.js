import {React, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import globe from '../assets/globe.png'
import { ReactTyped } from "react-typed";
import RegistrationForm from "../utilities/RegistrationForm";
import studenthome from '../assets/studenthome.png'
import tile1 from '../assets/tile1.png'
import counselling from '../assets/counselling.png'
import testpreparation from '../assets/testpreparation.png'
import courseselection from '../assets/courseselection.png'
import universityselection from '../assets/universityselection.png'
import visaassistance from '../assets/visaassistance.png'
import finance from '../assets/finance.png'
import accomodation from '../assets/accomodation.png'
import ielts from '../assets/ielts.png'
import duolingo from '../assets/duolingo.png'
import pearsonpte from '../assets/pearsonpte.png'
import gmat from '../assets/gmat.png'
import etsgre from '../assets/etsgre.png'
import etstoefl from  '../assets/etstoefl.png'
import caltech from '../assets/caltech.png'
import kentstateuniversity from '../assets/kentstateuniversity.png'
import paceuniversity from '../assets/paceuniversity.png'
import saintlouisuniversity from '../assets/saintlouisuniversity.png'
import stateuniversityofnewyork from '../assets/stateuniversityofnewyork.png'
import newjerseyinstituteoftechnology from '../assets/newjerseyinstituteoftechnology.png'
import stevensinstituteoftechnology from '../assets/stevensinstituteoftechnology.png'
import universityofnorthtexas from '../assets/universityofnorthtexas.png'
import universityoftexasatarlington from '../assets/universityoftexasatarlington.png'
import statueofliberty from '../assets/statueofliberty.png'
import bigben from '../assets/bigben.png'
import operahouse from '../assets/operahouse.png'
import pisatower from '../assets/pisatower.png'
import conventryuniversity from '../assets/coventryuniversity.png'
import northumbriauniversity from '../assets/northumbriauniversity.png'
import demontfortuniversity from '../assets/deformontuniversity.png'
import middlesexuniversity from '../assets/middlesexuniversity.png'
import universityofeastlondon from '../assets/universityofeastlondon.png'
import birminghamuniversity from '../assets/birminghamuniversity.png'
import universityofroehampton from '../assets/roehamptonuniversity.png'
import universityofgreenwhich from '../assets/universityofgreenwhich.png'

import FAQ from '../components/FAQ'
import Testimonials from "./Testimonials";
const Home = () => {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
      const handleFormToggle = () => {
        setShowForm(!showForm);
      };

    const tests = [
      { name: "IELTS", image: ielts },
      { name: "GMAT", image: gmat },
      { name: "GRE", image: etsgre },
      { name: "TOEFL", image: etstoefl },
      { name: "Duolingo", image: duolingo },
      { name: "PTE", image: pearsonpte }
    ];
    const universities = [
      [kentstateuniversity, paceuniversity, saintlouisuniversity, newjerseyinstituteoftechnology],
      [stevensinstituteoftechnology , universityoftexasatarlington, universityofnorthtexas, stateuniversityofnewyork],
      [caltech, conventryuniversity, northumbriauniversity, demontfortuniversity],
      [middlesexuniversity, universityofeastlondon, birminghamuniversity, universityofroehampton, universityofgreenwhich]
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % universities.length);
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, [universities.length]);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + universities.length) % universities.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % universities.length);
  };

  const countries = [
    {
      name: "USA",
      image: statueofliberty,
    },
    {
      name: "UK",
      image: bigben,
    },
    {
      name: "Australia",
      image: operahouse,
    },
    {
      name: "Europe",
      image: pisatower,
    },
  ];


  return (
    <>
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Fullscreen Background Image */}
        <img
          src={globe}
          alt="Education"
          className="absolute inset-0 w-full h-full object-cover"
        //   style={{height:'700px'}}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          {/* Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <ReactTyped
              strings={[
                "Education Beyond Boundaries",
                "Empowering Your Future",
                "Achieve Your Dreams",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <p className="text-lg md:text-xl mb-6">
           Fulfill your Study Abroad Dreams
          </p>
          <div className="flex space-x-4">
            {/* Join Now Button */}
            <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600"
            onClick={handleFormToggle}>
              Apply Now
            </button>
            {/* Watch Video Button */}
            {/* <a
              href="#"
              className="px-6 py-3 bg-gray-800 rounded-lg text-white font-medium flex items-center hover:bg-gray-700"
            >
              <i className="fas fa-play mr-2"></i> Watch Video
            </a> */}
          </div>
        </div>
      </section>
    </main>

    <section className="flex flex-row items-center justify-between"> 
      <div className="w-1/2"> 
        <img src={studenthome} alt="Student" className="w-full h-1/6 object-cover"/> 
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Making Dreams Possible</h2>
        <p className="text-gray-700">Your gateway to global education. We guide you through every step of your study abroad journey, from choosing the right university to securing your visa.</p>
        <button style={{marginTop : '1.5rem'}}
      onClick={() => navigate('/about')} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      Read More
    </button>
      </div>
    </section>
    
    <div className="text-center py-6">
      <h1 className="text-3xl font-bold mb-2">One-Stop Destination for All Your Study Abroad Needs</h1>
      <p className="text-lg text-gray-500">We make your entire study abroad journey a grand success.</p>
    </div>
    
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
      <img
        src={counselling}
        alt="Counselling"
        className="w-full h-full object-cover" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Counselling</p> 
      </div>
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold text-blue-800">Counselling</h3>
        <p className="text-sm text-gray-600 mt-2">Get expert advice tailored to your goals.</p>
      </div>
    </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={testpreparation}
      alt="Test Preparation"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Test Preparation</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Test Preparation</h3>
      <p className="text-sm text-gray-600 mt-2">Ace your tests with personalized coaching.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={courseselection}
      alt="Course Selection"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Course Selection</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Course Selection</h3>
      <p className="text-sm text-gray-600 mt-2">Find the perfect course for your career.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={universityselection}
      alt="University Selection"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>University Selection</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">University Selection</h3>
      <p className="text-sm text-gray-600 mt-2">Choose the best university for your needs.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={visaassistance}
      alt="Visa Assistance"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Visa Assistance</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Visa Assistance</h3>
      <p className="text-sm text-gray-600 mt-2">Simplify your visa process with our help.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={finance}
      alt="Financial Planning"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Financial Planning</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Financial Planning</h3>
      <p className="text-sm text-gray-600 mt-2">Plan your finances effectively for study abroad.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={accomodation}
      alt="Accommodation"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Accommodation</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Accommodation</h3>
      <p className="text-sm text-gray-600 mt-2">Find comfortable housing abroad with ease.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={tile1}
      alt="Post-Arrival Support"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center"> 
        <p>Post-Arrival Support</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800">Post-Arrival Support</h3>
      <p className="text-sm text-gray-600 mt-2">Settle in smoothly with our expert guidance.</p>
    </div>
  </div>
</section>

{/* <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Discover Your Dream Study Destination with CSOverseas
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Gain insights into the premier universities, scholarships, living
        expenses, post-study employment opportunities, and much more.
      </p>
      <div className="grid grid-cols-4 gap-6 px-4 md:px-10">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="h-20 w-20 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {destination.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
         */}
    <div className="text-center p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Countries / Universities</h2>
      <p className="text-gray-600 mb-6">
        To help you find your perfect destination, click through these countries and find out more about what it’s like to study and live there! If you already have a good idea about the destination, click further to explore university options. We have more than 700 partner universities that would love to invite international students like you!
      </p>
      <div className="flex justify-center flex-wrap gap-6">
      {countries.map((country, index) => (
      <div key={index} className="text-center">
      <img src={country.image} alt={country.name} className="w-24 h-24 mx-auto" />
      <p className="text-blue-700 font-medium mt-2">{country.name}</p>
      </div>
      ))}
      </div>
    </div>

    <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Discover our Partner Universities</h1>
      <p className="text-center text-gray-600 mb-8">
        We’ve collaborated with 350+ world-class universities to give wings to your study-abroad dreams.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {universities.map((group, index) => (
            <div key={index} className="flex justify-around min-w-full">
              {group.map((university, idx) => (
                <img
                  key={idx}
                  src={university}
                  alt={`University ${idx + 1}`}
                  // className="h-16 w-auto object-contain"
                  className="w-24 h-20 mx-auto"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          {/* Previous Arrow */}
          <button
            className="bg-white p-2 shadow-lg rounded-full hover:bg-gray-200"
            onClick={handlePrev}
          >
            &#8592;
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {universities.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            className="bg-white p-2 shadow-lg rounded-full hover:bg-gray-200"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>

    
    <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Crack Your Admission Tests With Confidence
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Elevate your chances of studying abroad with our expert coaching.
      </p>
      <div className="grid grid-cols-3 gap-6 px-6 md:px-20">
        {tests.map((test, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-gray-300 shadow-md rounded-lg p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={test.image}
              alt={test.name}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Start Prep Now
        </button>
      </div>
    </div>

    <Testimonials/>
    <FAQ />

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

export default Home;
