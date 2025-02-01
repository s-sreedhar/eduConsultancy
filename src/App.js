import {React, useState, useEffect }from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import WhatsAppIcon from "./utilities/WhatsAppIcon";
import { MdKeyboardArrowDown } from "react-icons/md";
import csoverseaslogo from './assets/csoverseaslogo.png'
import ielts from './assets/ielts.png'
import gmatmini from './assets/gmatmini.png'
// import gmat from './assets/gmat.png' 
import etsgre from './assets/etsgre.png'
import etstoefl from './assets/etstoefl.png'
import duolingo from './assets/duolingo.png'
import pearsonpte from './assets/pearsonpte.png'
import ReactCountryFlag from "react-country-flag"
import Home from "./components/Home";
import BackToTopIcon from "./utilities/BackToTopIcon";
import RegistrationForm from "./utilities/RegistrationForm";
// import FloatingDemo from "./utilities/FloatingDemo";
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
import Copyright from "./components/Copyright";
const App = () => {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [overseasMenuOpen, setOverseasMenuOpen] = useState(false);
  const [learningPrepMenuOpen, setLearningPrepMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scrolling
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden"); // Ensure cleanup on unmount
    };
  }, []);

  const toggleOverseasMenu = () => {
    setOverseasMenuOpen(!overseasMenuOpen);
  };

  const toggleLearningPrepMenu = () => {
    setLearningPrepMenuOpen(!learningPrepMenuOpen);
  };
  
    // const countries = [
    //   {
    //     name: "USA",
    //     description: "Click to explore facts and university / study options.",
    //     details:
    //       "The USA offers world-class education, modern campuses, and diverse opportunities for international students.",
    //     mapColor: "text-blue-500",
    //   },
    //   {
    //     name: "UK",
    //     description: "Click to explore facts and university / study options.",
    //     details:
    //       "The UK offers a rich cultural history, prestigious universities, and globally recognized qualifications.",
    //     mapColor: "text-blue-500",
    //   },
    //   {
    //     name: "Europe",
    //     description: "Click to explore facts and university / study options.",
    //     details:
    //       "Europe is home to many ancient universities and offers affordable education with a wide variety of programs.",
    //     mapColor: "text-blue-500",
    //   },
    //   {
    //     name: "Australia",
    //     description: "Click to explore facts and university / study options.",
    //     details:
    //       "Australia promotes innovation, creativity, and independent thinking throughout its universities.",
    //     mapColor: "text-blue-600",
    //   },
    // ];
  
    // const [selectedCountry, setSelectedCountry] = useState("USA");
    // console.log("THe line 71 data is", selectedCountry)
    const [isVisible, setIsVisible] = useState(true); // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on component unmount
    };
  }, [lastScrollY]); // Dependency array to re-run effect when `lastScrollY` changes

  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
  };

  const closeDropdown1 = () => {
    setIsDropdownVisible1(false);
  };

    const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdownVisible2(!isDropdownVisible2);
  };

  const closeDropdown2 = () => {
    setIsDropdownVisible2(false);
  };

  return (
    <>
    <header className={`flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-10 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
  {/* Logo */}
  <div className="flex items-center">
  <div className="flex flex-col items-start mr-2" onClick={() => navigate('/')}> 
    <div className="text-xl font-bold text-blue"  style={{color:'#0F3A5E', cursor:'pointer'}}>CS Overseas</div>
    <p className="text-xs font-normal" style={{cursor:'pointer'}}>Study Abroad, Shape your Future</p> 
  </div>
  <img src={csoverseaslogo} style={{height:'40px', width:'40px', cursor:'default'}} alt="CS Overseas Logo" /> 
</div>
 <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-black-700 items-center">
        {/* Overseas Education */}
        
        <div className="relative">
      {/* Main Label */}
      <div className="group relative">
        <p
          className="flex items-center cursor-pointer"
          onMouseOver={toggleDropdown1}
          style={{ color: "#0F3A5E", fontWeight: "bold" }}
        >
          Overseas Education
          <MdKeyboardArrowDown className="ml-1" />
        </p>

        {/* Dropdown Menu */}
        {isDropdownVisible1 && (
          <div
            className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg transition-all duration-200"
            onMouseLeave={closeDropdown1} // Optional: Close dropdown when mouse leaves
          >
            <div className="p-4 space-y-2">
              <a
                href="/us"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{ width: "70px", height: "40px" }}
                />
                <span style={{ color: "#0F3A5E" }}>Study in USA</span>
              </a>
              <a
                href="/uk"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: "70px", height: "40px" }}
                />
                <span style={{ color: "#0F3A5E" }}>Study in UK</span>
              </a>
              <a
                href="/au"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag
                  countryCode="AU"
                  svg
                  style={{ width: "70px", height: "40px" }}
                />
                <span style={{ color: "#0F3A5E" }}>Study in Australia</span>
              </a>
              <a
                href="/eu"
                className="flex items-center space-x-2 hover:text-blue-500"
              >
                <ReactCountryFlag
                  countryCode="EU"
                  svg
                  style={{ width: "70px", height: "40px" }}
                />
                <span style={{ color: "#0F3A5E" }}>Study in Europe</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>

        {/* Learning Prep */}
        <div className="group relative">
          <p className="flex items-center cursor-pointer" onMouseOver={toggleDropdown2}>
            <span style={{ color: "#0F3A5E", fontWeight: "bold" , cursor:'pointer'}}>Learning Prep</span>
            <MdKeyboardArrowDown className="ml-1" />
          </p>
        {isDropdownVisible2 && 
           <div  className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg transition-all duration-200"
           onMouseLeave={closeDropdown2}>
           <div className="p-7 space-y-2">
             <a href="/ielts" className="hover:text-blue-500">
               <img src={ielts} alt="IELTS" className="w-20 h-20 mx-auto" />
             </a>
             <a href="/gmat" className="hover:text-blue-500">
               <img src={gmatmini} alt="GMAT" className="w-20 h-14 mx-auto" style={{marginTop:'-10px'}} />
             </a>
             <a href="/gre" className="hover:text-blue-500">
               <img src={etsgre} alt="GRE" className="w-15 h-12 mx-auto" />
             </a>
             <a href="/toefl" className="hover:text-blue-500">
               <img src={etstoefl} alt="TOEFL" className="w-20 h-16 mx-auto" />
             </a>
             <a href="/duolingo" className="hover:text-blue-500">
               <img src={duolingo} alt="Duolingo" className="w-20 h-20 mx-auto" />
             </a>
             <a href="/pte" className="hover:text-blue-500">
               <img src={pearsonpte} alt="PTE" className="w-20 h-16 mx-auto" />
             </a>
           </div>
         </div>}
        </div>

        {/* Other Links */}
        <a href="/services" className="hover:text-blue-500" style={{ color: "#0F3A5E", fontWeight: "bold" }}>
          Services
        </a>
        <a href="/about" className="hover:text-blue-500" style={{ color: "#0F3A5E", fontWeight: "bold" }}>
          About Us
        </a>
        <button onClick={handleFormToggle} className="hover:text-blue-500" style={{ color: "#0F3A5E", fontWeight: "bold" }}>
          Register Now
        </button>

        {/* Phone Icon */}
        <div className="relative group">
          <FaPhoneAlt size={20} style={{ marginTop: "3px", color: "#0F3A5E", cursor:'pointer' }} />
          <div className="absolute top-full mt-2 left-[-80%] transform translate-x-[-60%] px-3 py-1 bg-gray-700 text-white text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            +91 79972 22217
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative">
      {/* Hamburger Icon */}
      <div className="md:hidden flex justify-between items-center z-10">
        <button className="text-gray-700 text-2xl" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

  {/* Mobile Drawer */}
  <div
    className={`fixed top-20 right-0 h-screen w-64 bg-white shadow-lg transition-all duration-300 transform ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
    style={{ overflowX: "hidden", zIndex: 50 }}
  >
    <div className="p-6">
      {/* Menu Items */}
      <div>
        <div>
          <p
            className="flex items-center justify-between text-gray-800 font-bold cursor-pointer"
            onClick={toggleOverseasMenu}
            style={{ color: "#0F3A5E" }}
          >
            Overseas Education
            <MdKeyboardArrowDown
              className={`transform transition-transform duration-200 ${
                overseasMenuOpen ? "rotate-180" : ""
              }`}
            />
          </p>
          {overseasMenuOpen && (
            <div className="pl-6 mt-2 space-y-2" style={{ color: "#0F3A5E" }}>
              <a href="/us" className="block text-black hover:text-blue-500 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{ width: "24px", height: "16px" }}
                />
                <span>Study in USA</span>
              </a>
              <a href="/uk" className="block text-black hover:text-blue-500 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: "24px", height: "16px" }}
                />
                <span>Study in UK</span>
              </a>
              <a href="/au" className="block text-black hover:text-blue-500 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="AU"
                  svg
                  style={{ width: "24px", height: "16px" }}
                />
                <span>Study in Australia</span>
              </a>
              <a href="/eu" className="block text-black hover:text-blue-500 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode="EU"
                  svg
                  style={{ width: "24px", height: "16px" }}
                />
                <span>Study in Europe</span>
              </a>
            </div>
          )}
        </div>

        <div>
          <p
            className="flex items-center justify-between text-gray-800 font-bold cursor-pointer mt-3"
            onClick={toggleLearningPrepMenu}
            style={{ color: "#0F3A5E" }}
          >
            Learning Prep
            <MdKeyboardArrowDown
              className={`transform transition-transform duration-200 ${
                learningPrepMenuOpen ? "rotate-180" : ""
              }`}
            />
          </p>
          {learningPrepMenuOpen && (
            <div className="pl-6 mt-2 space-y-2 justify-center" style={{ color: "#0F3A5E" }}>
              <a href="/ielts" className="block text-black hover:text-blue-500">
                <img src={ielts} alt="IELTS" className="w-10 h-6 mx-auto" />
              </a>
              <a href="/gmat" className="block text-black hover:text-blue-500">
                <img src={gmatmini} alt="GMAT" className="w-10 h-6 mx-auto" />
              </a>
              <a href="/gre" className="block text-black hover:text-blue-500">
                <img src={etsgre} alt="GRE" className="w-10 h-6 mx-auto" />
              </a>
              <a href="/toefl" className="block text-black hover:text-blue-500">
                <img src={etstoefl} alt="TOEFL" className="w-10 h-6 mx-auto" />
              </a>
              <a href="/duolingo" className="block text-black hover:text-blue-500">
                <img src={duolingo} alt="Duolingo" className="w-10 h-6 mx-auto" />
              </a>
              <a href="/pte" className="block text-black hover:text-blue-500">
                <img src={pearsonpte} alt="PTE" className="w-10 h-6 mx-auto" />
              </a>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
        <a
          href="/services"
          className="block text-black hover:text-blue-500 mt-4"
          style={{ color: "#0F3A5E", fontWeight: "bold" }}
        >
          Services
        </a>
        <a
          href="/about"
          className="block text-black hover:text-blue-500 mt-4"
          style={{ color: "#0F3A5E", fontWeight: "bold" }}
        >
          About Us
        </a>
        <button
          className="block text-black hover:text-blue-500 mt-4"
          style={{ color: "#0F3A5E", fontWeight: "bold" }}
          onClick={handleFormToggle}
        >
          Register Now
        </button>
      </div>
    </div>
  </div>
</div>
    </nav>
  </header>

     {/* Routes Definition */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us" element={<Education country="USA"/>} />
        <Route path="/uk" element={<Education country="UK"/>} />
        <Route path="/au" element={<Education country="Australia"/>} />
        <Route path="/eu" element={<Education country="Europe"/>} />
        <Route path="/ielts" element={<IELTSPage/>} />
        <Route path="/gmat" element={<GMATPage/>} />
        <Route path="/gre" element={<GREPage/>} />
        <Route path="/toefl" element={<TOEFLPage/>} />
        <Route path="/duolingo" element={<DuolingoPage/>} />
        <Route path="/pte" element={<PTEPage/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/copyright" element={<Copyright/>} />
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
