import {React, useState} from "react";
// import { useNavigate } from 'react-router-dom';
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
// import newjerseyinstituteoftechnology from '../assets/newjerseyinstituteoftechnology.png'
import stevensinstituteoftechnology from '../assets/stevensinstituteoftechnology.png'
// import universityofnorthtexas from '../assets/universityofnorthtexas.png'
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

import FAQ from './FAQ'
import Testimonials from "./Testimonials";
const Home = () => {
    // const navigate = useNavigate();

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
      [
        { image: kentstateuniversity, name: "Kent State University" },
        { image: paceuniversity, name: "Pace University" },
        { image: saintlouisuniversity, name: "Saint Louis University" },
        { image: stevensinstituteoftechnology, name: "Stevens Institute of Technology" },
        { image: universityoftexasatarlington, name: "University of Texas at Arlington" },
        { image: stateuniversityofnewyork, name: "State University of New York" },
        { image: caltech, name: "California Institute of Technology (Caltech)" },
        { image: universityofgreenwhich, name: "University of Greenwich" },
        { image: conventryuniversity, name: "Coventry University" },
        { image: demontfortuniversity, name: "De Montfort University" },
        { image: northumbriauniversity, name: "Northumbria University" },
        { image: universityofeastlondon, name: "University of East London" },
        { image: birminghamuniversity, name: "University of Birmingham" },
        { image: middlesexuniversity, name: "Middlesex University" },
        { image: universityofroehampton, name: "University of Roehampton" }
      ]
    ];

    // const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % universities.length);
  //   }, 3000); // Change slides every 3 seconds
  //   return () => clearInterval(interval);
  // }, [universities.length]);

  // const handlePrev = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + universities.length) % universities.length
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % universities.length);
  // };

  const countries = [
    {
      name: "USA",
      image: statueofliberty,
      link: "/us"
    },
    {
      name: "UK",
      image: bigben,
      link: "/uk"
    },
    {
      name: "Australia",
      image: operahouse,
      link: "/au"
    },
    {
      name: "Europe",
      image: pisatower,
      link: "/eu"
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
          style={{dislay:'block'}}
          className="absolute inset-0 w-full h-full object-cover"
        //   style={{height:'700px'}}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          {/* Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{cursor:'default'}}>
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
          <p className="text-lg md:text-xl mb-6" style={{cursor:'default'}}>
           Fulfill your Study Abroad Dreams
          </p>
          <div className="flex space-x-4">
            {/* Join Now Button */}
            <button className="px-6 py-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600" style={{backgroundColor:'#0F3A5E'}}
            onClick={handleFormToggle}>
              Register Now
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
      {/* className="w-full h-1/8 object-cover"  */}
        <img src={studenthome} alt="Student" className="w-full h-1/8 object-cover"/> 
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4" style={{cursor:'default'}}>Making Dreams Possible</h2>
        <p className="text-gray-700" style={{cursor:'default'}}>Your gateway to global education. We guide you through every step of your study abroad journey, from choosing the right university to securing your visa.</p>
        {/* <button style={{marginTop : '1.5rem'}}
      onClick={() => navigate('/about')} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      Read More
    </button> */}
      </div>
    </section>
    
    <div className="text-center py-6">
      <h1 className="text-3xl font-bold mb-2" style={{cursor:'default'}}>One-Stop Destination for All Your Study Abroad Needs</h1>
      <p className="text-lg text-gray-500" style={{cursor:'default'}}>We make your entire study abroad journey a grand success.</p>
    </div>
    
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
      <img
        src={counselling}
        alt="Counselling"
        className="w-full h-full object-cover" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Counselling</p> 
      </div>
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold text-blue-800">Counselling</h3>
        <p className="text-sm text-gray-600 mt-2">Get expert advice tailored to your goals.</p>
      </div>
    </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg" >
    <img
      src={testpreparation}
      alt="Test Preparation"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Test Preparation</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Test Preparation</h3>
      <p className="text-sm text-gray-600 mt-2">Ace your tests with personalized coaching.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={courseselection}
      alt="Course Selection"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Course Selection</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Course Selection</h3>
      <p className="text-sm text-gray-600 mt-2">Find the perfect course for your career.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={universityselection}
      alt="University Selection"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>University Selection</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>University Selection</h3>
      <p className="text-sm text-gray-600 mt-2">Choose the best university for your needs.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={visaassistance}
      alt="Visa Assistance"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Visa Assistance</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Visa Assistance</h3>
      <p className="text-sm text-gray-600 mt-2">Simplify your visa process with our help.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={finance}
      alt="Financial Planning"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Financial Planning</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Financial Planning</h3>
      <p className="text-sm text-gray-600 mt-2">Plan your finances effectively for study abroad.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={accomodation}
      alt="Accommodation"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Accommodation</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Accommodation</h3>
      <p className="text-sm text-gray-600 mt-2">Find comfortable housing abroad with ease.</p>
    </div>
  </div>

  <div className="group relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg">
    <img
      src={tile1}
      alt="Post-Arrival Support"
      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
    />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-800/50 text-white text-center" style={{backgroundColor:'#0F3A5E'}}> 
        <p>Post-Arrival Support</p> 
      </div>
    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-lg font-bold text-gray-800" style={{color:'#0F3A5E'}}>Post-Arrival Support</h3>
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
      <h2 className="text-2xl font-bold mb-4" style={{cursor:'default'}}>Countries / Universities</h2>
      <p className="text-gray-600 mb-6" style={{cursor:'default'}}>
        To help you find your perfect destination, click through these countries and find out more about what it’s like to study and live there! If you already have a good idea about the destination, click further to explore university options. We have more than 700 partner universities that would love to invite international students like you!
      </p>
      <div className="flex justify-center flex-wrap gap-6">
      {countries.map((country, index) => (
      // <div key={index} className="text-center">
      // <img src={country.image} alt={country.name} className="w-60 h-60 mx-auto" style={{cursor:'default'}}/>
      // <p className="text-blue-700 font-medium mt-2" style={{color:'#0F3A5E', cursor:'default'}}>{country.name} </p>
      // </div>
      <div key={index} className="text-center">
      <a href={country.link} target="_parent" rel="noopener noreferrer">
        <img
          src={country.image}
          alt={country.name}
          className="w-60 h-60 mx-auto"
          style={{ cursor: 'pointer' }}
        />
      </a>
      <p className="text-blue-700 font-medium mt-2" style={{ color: '#0F3A5E', cursor: 'default' }}>
        {country.name}
      </p>
    </div>
      ))}
      </div>
    </div>

    <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Discover our Partner Universities</h1>
      <p className="text-center text-gray-600 mb-8">
      We’ve collaborated with <span className="text-blue-700 text-xl font-bold" style={{color:'#0F3A5E'}}>1000+</span> world-class universities to give wings to your study-abroad dreams.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Slides */}
        {/* <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {universities.map((group, index) => (
          <div key={index} className="flex justify-around">
          {group.map((university, idx) => (
          <img
          key={idx}
          src={university}
          alt={`University ${idx + 1}`}
          className="w-24 h-20 mx-auto object-cover" // Updated class
          />
          ))}
          </div>
          ))}
        </div> */}

<div className="grid grid-cols-5 gap-6 p-6">
  {universities.flat().map((university, idx) => (
    <div
      key={idx}
      className="relative group flex flex-col items-center"
    >
      <img
        src={university.image}
        alt={`University ${idx + 1}`}
        className="w-24 h-20 object-cover rounded-lg"
      />
      <div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
      >
        <span className="text-white text-sm font-semibold">
          {university.name}
        </span>
      </div>
    </div>
  ))}
</div>    
      </div>
    </div>

    
    <div className="bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center mb-4" style={{cursor:'default'}}>
        Crack Your Admission Tests With Confidence
      </h1>
      <p className="text-center text-gray-600 mb-8" style={{cursor:'default'}}>
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
        <button onClick={handleFormToggle} className="bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition" style={{backgroundColor:'#0F3A5E'}}>
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
