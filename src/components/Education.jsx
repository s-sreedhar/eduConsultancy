import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag"
const countries = [
  {
    name: "USA",
    details:
      "The USA is one of the top destinations for international students, offering world-class education and cutting-edge research facilities. Universities like Harvard, Stanford, and MIT are globally recognized for their academic excellence and innovation. The country provides a diverse range of programs across various fields such as engineering, business, healthcare, and liberal arts. Students can benefit from numerous scholarships and funding opportunities. The USA is also known for its vibrant campus life, cultural diversity, and networking opportunities with global leaders and organizations. Optional Practical Training (OPT) allows students to gain work experience after graduation. With over 4,000 institutions, the USA caters to every academic interest and career goal. Flexible curriculums and hands-on learning environments ensure a comprehensive education. Studying in the USA opens doors to global opportunities.",
    mapColor: "text-blue-500",
    countryCode : 'US'
  },
  {
    name: "UK",
    details:
      "The UK boasts a rich history of academic excellence, with universities like Oxford and Cambridge leading the global rankings. Offering globally recognized degrees, the UK is a hub for disciplines like arts, humanities, engineering, and business. Shorter course durations (three years for undergraduate and one year for postgraduate) help students save time and costs. Scholarships such as Chevening and Commonwealth provide financial support for deserving students. The UK’s diverse student population fosters cultural exchange and global networking opportunities. Practical learning and strong industry ties ensure students are prepared for the job market. The UK also allows students to work part-time during their studies, adding to their professional experience. The Graduate Route offers two years of post-study work opportunities. With a blend of tradition and innovation, the UK is an ideal destination for aspiring learners.",
    mapColor: "text-blue-500",
    countryCode : 'GB'
  },
  {
    name: "Australia",
    details:
      "Australia is a preferred destination for students seeking quality education in a safe and welcoming environment. Renowned institutions like the University of Melbourne and Australian National University rank among the world’s best. The country offers excellent programs in fields like environmental sciences, healthcare, IT, and engineering. Australian universities emphasize research and practical learning, preparing students for real-world challenges. The country’s post-study work visa options make it easier for students to gain valuable work experience. With a strong economy and multicultural society, Australia provides ample job opportunities. Scholarships and financial aid are available for deserving international students. Australia’s stunning natural landscapes and outdoor lifestyle enhance the overall student experience. The education system focuses on critical thinking and creativity, ensuring holistic development. Known for its high quality of life, Australia is an ideal place to study and live.",
    mapColor: "text-blue-500",
    countryCode : 'AU'
  },
  {
    name: "Europe",
    details:
      "Europe is known for its ancient universities and modern education systems. Countries like Germany, France, and Sweden offer affordable or even tuition-free education at public universities. Europe provides a wide variety of programs in English, catering to international students. Renowned for disciplines such as engineering, medicine, and arts, Europe offers a multicultural environment that enhances the student experience. With a strong focus on research and innovation, universities provide opportunities to work on groundbreaking projects. The Erasmus+ program supports student mobility, offering unique opportunities to study in multiple countries. Europe’s rich cultural heritage and picturesque landscapes make it a delightful destination for learning and exploration. Many universities have partnerships with industries, ensuring excellent internship and job prospects. Affordable living costs and robust healthcare systems make Europe a practical choice for students worldwide.",
    mapColor: "text-blue-500",
    countryCode : 'EU'
  }
];

const Education = ({country}) => {
  const countryThruProp = countries?.find((c) => c.name === country);
  const [selectedCountry, setSelectedCountry] = useState(countryThruProp)
    console.log("THe country selected tru prop is", country, selectedCountry)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 mt-[-10%]"> {/* Added mt-0 to remove top margin */}
          <h1 className="text-3xl font-bold text-center mb-8">Countries / Universities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-6">
                {countries.map((countryMap, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-4 rounded-lg hover:bg-gray-300 transition`}
                    onClick={() => {
                      setSelectedCountry(countryMap)
                    } }
                  >
                    <div
                      className={`w-16 h-16 flex items-center justify-center ${countryMap.mapColor}`}
                    >
                      {/* Replace with actual SVG/Icons for countries */}
                      <p className="font-bold" style={{color:'#0F3A5E'}}>{countryMap.name}</p>
                    </div>
                    {/* <p className="mt-2 text-center text-gray-700">{country.name}</p> */}
                    <ReactCountryFlag key={countryMap.countryCode} countryCode={countryMap.countryCode} svg style={{ height:'40px', width:'70px'}}/>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Selected Country Data */}
            <div
              className={`p-6 bg-white shadow-md rounded-lg transform transition-all ${
                selectedCountry ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <h2 className="text-2xl font-bold text-blue-600" style={{color:'#0F3A5E'}}>{selectedCountry.name}</h2>
              {/* <p className="text-sm text-blue-500 mt-2">{selectedCountry.description}</p> */}
              {/* <ReactCountryFlag key={selectedCountry.countryCode} countryCode={selectedCountry.countryCode} svg /> */}
              <p className="text-gray-700 mt-4">{selectedCountry.details}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
