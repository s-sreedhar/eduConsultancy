import {  FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-10" style={{backgroundColor:'#0F3A5E'}}>
  <div className="container mx-auto px-4">
    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* About Section */}
      <div>
        <h2 className="text-xl font-bold">CSOverseas</h2>
        <p className="mt-4 text-sm">
          We are a top overseas education consultants in the town. Through expert guidance, personalized support, and a holistic approach, it offers end-to-end support for your study abroad journey.
        </p>
        {/* <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">Login</button> */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-white">Stay in Touch</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/share/14vcrfLqX6/?mibextid=wwXIfr" className="text-xl"><i className="fab fa-facebook"> <FaFacebook/></i></a>   
            <a href="https://www.instagram.com/csoverseasedu?igsh=MW56MG9paTFlNGo2MQ%3D%3D&utm_source=qr" className="text-xl"><i className="fab fa-instagram"><FaInstagram/></i></a>
            {/* <a href="#" className="text-xl"><i className="fab fa-youtube"><FaYoutube/></i></a>
            <a href="#" className="text-xl"><i className="fab fa-linkedin"><FaLinkedin/></i></a>
            <a href="#" className="text-xl"><i className="fab fa-x-twitter"><FaTwitter/></i></a> */}
          </div>
        </div>
        {/* Ratings */}
        <div className="mt-4">
          <div className="bg-white text-black p-2 rounded-md flex items-center space-x-2">
            {/* <img src="/google-rating.png" alt="Google Rating" className="h-6" /> */}
            <FaGoogle/>
            <span className="text-sm">4.7 on Google Ratings</span>
          </div>
          <div className="bg-white text-black p-2 rounded-md flex items-center space-x-2 mt-2">
            {/* <img src="/facebook-rating.png" alt="Facebook Rating" className="h-6" /> */}
            <FaFacebook/>
            <span className="text-sm">4.6 on Facebook Ratings</span>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <ul className="text-sm space-y-2">
          {/* <li><a href="#" className="hover:underline">Company</a></li>
          <li><a href="#" className="hover:underline">Leadership Team</a></li>
          <li><a href="#" className="hover:underline">Valmiki Foundation</a></li>
          <li><a href="#" className="hover:underline">For Partners</a></li>
          <li><a href="#" className="hover:underline">Life@Valmiki</a></li>
          <li><a href="#" className="hover:underline">Blogs</a></li> */}
          <li><a href="https://wa.me/7997222217" className="hover:underline">Contact Us</a></li>
          <li><a href="https://wa.me/7997222217" className="hover:underline">Feedback</a></li>
          {/* <li><a href="" className="hover:underline">Privacy Policy</a></li> */}
          {/* <li><a href="#" className="hover:underline">Terms & Conditions</a></li> */}
          {/* <li><a href="#" className="hover:underline">Careers</a></li> */}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Study Abroad</h3>
        <ul className="text-sm space-y-2">
          <li><a href="/us" className="hover:underline">Study in USA</a></li>
          <li><a href="/uk" className="hover:underline">Study in UK</a></li>
          <li><a href="/au" className="hover:underline">Study in Australia</a></li>
          <li><a href="/eu" className="hover:underline">Study in Europe</a></li>
          {/* <li><a href="#" className="hover:underline">Study in Canada</a></li>
          <li><a href="#" className="hover:underline">Study in New Zealand</a></li>
          <li><a href="#" className="hover:underline">Study in Ireland</a></li>
          <li><a href="#" className="hover:underline">Study in Singapore</a></li>
          <li><a href="#" className="hover:underline">Study in Dubai</a></li> */}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Offerings</h3>
        <ul className="text-sm space-y-2">
          <li><a href="/us" className="hover:underline">Overseas Education</a></li>
          {/* <li><a href="#" className="hover:underline">Immigration</a></li> */}
          <li><a href="/ielts" className="hover:underline">Learning Prep</a></li>
          {/* <li><a href="#" className="hover:underline">Tours & Travel</a></li> */}
          {/* <li><a href="#" className="hover:underline">EduFairs</a></li> */}
          {/* <li><a href="#" className="hover:underline">Spot Assessment & Seminars</a></li>
          <li><a href="#" className="hover:underline">Valmiki One</a></li> */}
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
      <div>
        <h3 className="text-lg font-bold">HQ - Tirupati</h3>
        <p className="text-sm mt-2">
        1-45,2nd floor, Karakambadi Road, Pillar No 1
 Near Suraksha Hospital,
 Tirupati,  
 Andhra Pradesh,
 517501
        </p>
      </div>
      {/* <div>
        <h3 className="text-lg font-bold">Somajiguda</h3>
        <p className="text-sm mt-2">
          Flat No.601, 6th floor, Sonthalia Emerald building, Rajbhavan road, Opp lane to Lenskart, Somajiguda, Hyderabad - 500082.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Jubilee Hills</h3>
        <p className="text-sm mt-2">
          H.no:8-2-293/82/a 86, Road No#70, Journalist Colony, Jubilee Hills, Hyderabad - 500033.
        </p>
      </div> */}
      <div>
        <h3 className="text-lg font-bold">Contact Us</h3>
        <p className="text-sm mt-2">
        7997222217, 7997222237<br />
          {/* 040 2789 9994, 040 2789 9995<br /> */}
          <a href="mailto:admissions@csoverseas.com" className="hover:underline">admissions@csoverseas.com</a>
        </p>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-10 text-center text-sm">
      © Copyright CS Overseas 2025. All rights reserved.
    </div>
  </div>
</footer>
    )
}

export default Footer;