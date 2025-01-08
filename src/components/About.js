import React from "react";
import studentabout from '../assets/studentabout.png'
const About = () => {
  return (
    <>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
          At CS Overseas, we are committed to provide services in a transparent, personalized, and
 exceptional way. Our mission is to guide students through every step of their academic journey
 with honesty and integrity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
          We specialize in offering the best services to achieve their educational goals, whether it's
 choosing the right program or university. Our team will be providing clear, accurate, and
 up-to-date information to ensure informed decision-making.
          </p>
          <p className="text-gray-700 leading-relaxed">
          Transparency is at the core of everything we do. From discussing possibilities to navigating
 admissions and visa processes, we keep you informed every step of the way. At CS Overseas,
 your success is our best path, and we strive to deliver the best service and outcomes for each
 Student.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2">
          <img
            src={studentabout} // Replace with your image URL
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-12">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">2023</h3>
            <p className="text-gray-600">Founding Year</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600">University Partners</p>
          </div>
          {/* <div>
            <h3 className="text-4xl font-bold text-blue-600">2,300</h3>
            <p className="text-gray-600">Agency Partners</p>
          </div> */}
          {/* <div>
            <h3 className="text-4xl font-bold text-blue-600">90,000</h3>
            <p className="text-gray-600">Applications Annually</p>
          </div> */}
        </div>

        {/* Leaders */}
        <div className="text-center">
          <div>
             {/* <h4 className="text-xl font-bold">Lorem Ipsum</h4>
            <p className="text-gray-600">Founder / Managing Director</p>
            <p className="text-gray-600">University of New Haven - MBA</p> */}
            <p className="text-gray-900 text-xl font-bold text-center mt-4">
            Choose us to make your study abroad journey into reality with trust, expertise, and excellence.
            </p>
          </div>
{/* 
          <div>
            <h4 className="text-xl font-bold">Manisha Zaveri</h4>
            <p className="text-gray-600">Joint Managing Director</p>
            <p className="text-gray-600">
              UC Berkeley - E Business Management, PGD
            </p>
            <p className="text-gray-700 text-justify mt-4">
              Manisha heads the operations for Strategy, Marketing, Agency
              Network, and Service Delivery. She is a regular exhibitor at
              NAFSA and presenter at AIRC & ICEF, also having served as
              Co-Chair of the AIRC Task Force for its strategic goals. Under her
              leadership, using technology and AI to bolster the path of
              sustained growth, today we cater to the student recruitment goals
              of more than 900 University Partners, managing their marketing
              campaigns and advising students via tech-driven operations.
            </p>
          </div> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
