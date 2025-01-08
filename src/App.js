import {React, useState }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import WhatsAppIcon from "./utilities/WhatsAppIcon";
import { MdKeyboardArrowDown } from "react-icons/md";
import csoverseaslogo from './assets/csoverseaslogo.png'
import ielts from './assets/ielts.png'
import gmatmini from './assets/gmatmini.png'
import gmat from './assets/gmat.png' 
import etsgre from './assets/etsgre.png'
import etstoefl from './assets/etstoefl.png'
import duolingo from './assets/duolingo.png'
import pearsonpte from './assets/pearsonpte.png'
import ReactCountryFlag from "react-country-flag"
import Home from "./components/Home";
import BackToTopIcon from "./utilities/BackToTopIcon";
import RegistrationForm from "./utilities/RegistrationForm";
import FloatingDemo from "./utilities/FloatingDemo";
import Footer from './components/Footer'
import About from "./components/About";
import { GiHamburgerMenu } from "react-icons/gi";
import Services from './components/Services'
import Education from "./components/Education";
import IELTSPage from "./components/IELTSLearning";
import GMATPage from "./components/GMATLearning";
import GREPage from "./components/GRELearning";
import TOEFLPage from "./components/TOEFLPage";
import DuolingoPage from "./components/DuolingoLearning";
import PTEPage from "./components/PTELearning";
const App = () => {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  
    const countries = [
      {
        name: "USA",
        description: "Click to explore facts and university / study options.",
        details:
          "The USA offers world-class education, modern campuses, and diverse opportunities for international students.",
        mapColor: "text-blue-500",
      },
      {
        name: "Canada",
        description: "Click to explore facts and university / study options.",
        details:
          "Canada is known for its high-quality education, welcoming atmosphere, and excellent research facilities.",
        mapColor: "text-blue-500",
      },
      {
        name: "UK",
        description: "Click to explore facts and university / study options.",
        details:
          "The UK offers a rich cultural history, prestigious universities, and globally recognized qualifications.",
        mapColor: "text-blue-500",
      },
      {
        name: "Europe",
        description: "Click to explore facts and university / study options.",
        details:
          "Europe is home to many ancient universities and offers affordable education with a wide variety of programs.",
        mapColor: "text-blue-500",
      },
      {
        name: "Asia",
        description: "Click to explore facts and university / study options.",
        details:
          "Asia provides a unique blend of traditional values and modern education with rapidly growing institutions.",
        mapColor: "text-blue-500",
      },
      {
        name: "Australia",
        description: "Click to explore facts and university / study options.",
        details:
          "Australia promotes innovation, creativity, and independent thinking throughout its universities.",
        mapColor: "text-blue-600",
      },
    ];
  
    const [selectedCountry, setSelectedCountry] = useState(countries[1]);
    

  return (
    <>
    <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10">
  {/* Logo */}
  <div className="flex items-center">
  <div className="flex flex-col items-start mr-2"> 
    <div className="text-xl font-bold text-blue" onClick={() => navigate('/')}>CS Overseas</div>
    <p className="text-xs font-normal">Study Abroad, Shape your Future</p> 
  </div>
  <img src={csoverseaslogo} style={{height:'40px', width:'40px'}} alt="CS Overseas Logo" /> 
</div>

    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-6 text-black-700 relative">
       {/* Main Link */}
       <div className="group relative">
            <a href="/education" className="flex items-center hover:text-blue-500"> 
            <span>Overseas Education</span> 
            <MdKeyboardArrowDown className="ml-1" /> 
          </a>

          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200">
            <div className="p-4 space-y-2">

                 {/* Study in USA */}
                 <a
                href="/education"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag countryCode="US"svg style={{width:'70px', height:'40px'}}/>
                <span>Study in USA</span>
              </a>

              {/* Study in UK */}
              <a
                href="/education"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag countryCode="GB" svg style={{width:'70px', height:'40px'}}/>
                <span>Study in UK</span>
              </a>

              {/* Study in Australia */}
              <a
                href="/education"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag countryCode="AU" svg style={{width:'70px', height:'40px'}}/>
                <span>Study in Australia</span>
              </a>

                 {/* Study in Europe*/}
                 <a
                href="/education"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag countryCode="EU" svg style={{width:'70px', height:'40px'}}/>
                <span>Study in Europe</span>
              </a>
            </div>
          </div>
        </div>
        <div className="group relative">
        <a href="/learning" className="flex items-center hover:text-blue-500"> 
            <span>Learning Prep</span> 
            <MdKeyboardArrowDown className="ml-1" /> 
          </a>

       {/* Dropdown Menu */}
       <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200">
            <div className="p-7 space-y-2">
              {/* IELTS */}
              <a
                href="/ielts"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={ielts}
                  alt="IELTS"
                  // className="w-6 h-6 object-cover rounded-full"
                  className="w-10 h-9 mx-auto"
                />
                {/* <span>IELTS</span> */}
              </a>

              {/* GMAT */}
              <a
                href="/gmat"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={gmatmini}

                  alt="Statue of Liberty"
                  // className="w-6 h-6 object-cover rounded-full"
                  className="w-14 h-9 mx-auto"
                />
                {/* <span>GMAT</span> */}
              </a>
              
              {/* ETS GRE*/}
              <a
                href="/gre"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={etsgre}
                  alt="Statue of Liberty"
                  // className="w-6 h-6 object-cover rounded-full"
                  className="w-15 h-8 mx-auto"
                />
                {/* <span>GRE </span> */}
              </a>

              
              {/* ETS TOEFL */}
              <a
                href="/toefl"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={etstoefl}
                  alt="Statue of Liberty"
                  // className="w-6 h-6 object-cover rounded-full"
                  className="w-20 h-19 mx-auto"
                />
                {/* <span>TOEFL </span> */}
              </a>

               {/* DUOLINGO */}
               <a
                href="/duolingo"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={duolingo}

                  alt="Statue of Liberty"
                  className="w-6 h-10 object-cover rounded-full"
                  // className="w-24 h-24 mx-auto"
                />
                {/* <span>Duolingo </span> */}
              </a>

                 {/* PEARSON PTE */}
                 <a
                href="/pte"
                className="flex items-center space-x-2 hover:text-blue-500"
                style={{ height: '40px', width: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={pearsonpte}
                  alt="Statue of Liberty"
                  // className="w-6 h-6 object-cover rounded-full"
                  className="w-20 h-10 mx-auto"
                />
                {/* <span>PTE </span> */}
              </a>
            </div>
          </div>
      </div>
      <a href="/services" className="hover:text-blue-500">
        Services 
      </a>
      {/* <a href="/immigration" className="hover:text-blue-500">
        Immigration
      </a> */}
      <a href="/about" className="hover:text-blue-500">
        About Us
      </a>
      <button
            className="hover:text-blue-500"
            onClick={handleFormToggle}
          >
            Apply Now
          </button>
      {/* <a href="" className="hover:text-blue-500">
        <FaPhoneAlt size={20} style={{marginTop:'3px'}}/>
      </a> */}
      {/* Phone Icon with Tooltip */}
      <div className="relative group">
            <div className="flex items-center space-x-1">
              {/* <span className="material-icons text-gray-500 cursor-pointer group-hover:text-blue-500">
                phone
              </span> */}
              <FaPhoneAlt size={20} style={{marginTop:'3px'}}/>
            </div>
            {/* Tooltip */}
            <div className="absolute top-full mt-2 left-[-60%] transform translate-x-[-50%] px-3 py-1 bg-gray-700 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              7997222217
            </div>
          </div>
    </nav>

    {/* Mobile Menu */}
    <div className="md:hidden">
      <button className="text-gray-700 text-2xl">
        <i className="fas fa-bars"><GiHamburgerMenu /></i>
      </button>
    </div>
  </header>

     {/* Routes Definition */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/ielts" element={<IELTSPage/>} />
        <Route path="/gmat" element={<GMATPage/>} />
        <Route path="/gre" element={<GREPage/>} />
        <Route path="/toefl" element={<TOEFLPage/>} />
        <Route path="/duolingo" element={<DuolingoPage/>} />
        <Route path="/pte" element={<PTEPage/>} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/immigration" element={<Immigration />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Footer and Utilities */}
      <Footer />
      {/* <FloatingDemo handleFormToggle={handleFormToggle} /> */}
      <BackToTopIcon />
      <WhatsAppIcon />

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

export default App;
