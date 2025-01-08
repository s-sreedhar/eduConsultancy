import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag"
const countries = [
  {
    name: "USA",
    // description: "Click to explore facts and university / study options.",
    details:
      "The USA is one of the top destinations for international students, offering world-class education and cutting-edge research facilities. Universities like Harvard, Stanford, and MIT are globally recognized for their academic excellence and innovation. The country provides a diverse range of programs across various fields such as engineering, business, healthcare, and liberal arts. Students can benefit from numerous scholarships and funding opportunities. The USA is also known for its vibrant campus life, cultural diversity, and networking opportunities with global leaders and organizations. Optional Practical Training (OPT) allows students to gain work experience after graduation. With over 4,000 institutions, the USA caters to every academic interest and career goal. Flexible curriculums and hands-on learning environments ensure a comprehensive education. Studying in the USA opens doors to global opportunities.",
    mapColor: "text-blue-500",
    countryCode : 'US'
  },
  // {
  //   name: "Canada",
  //   // description: "Canada is a popular choice for students seeking affordable yet high-quality education. Renowned institutions such as the University of Toronto and McGill University are known for their strong research focus. Canada is a leader in fields like artificial intelligence, healthcare, and environmental sciences. The country offers post-study work permits, making it easier for graduates to gain professional experience. Canada is also famous for its safe, inclusive, and welcoming environment, with diverse communities and multicultural cities. International students enjoy access to world-class facilities, modern campuses, and support services. Canadian universities emphasize a practical, industry-oriented approach, ensuring graduates are job-ready. Affordable tuition fees and living costs make it a viable option for students worldwide. With breathtaking landscapes and a high quality of life, Canada is ideal for students seeking a balanced lifestyle.",
  //   details:
  //     "Canada is a popular choice for students seeking affordable yet high-quality education. Renowned institutions such as the University of Toronto and McGill University are known for their strong research focus. Canada is a leader in fields like artificial intelligence, healthcare, and environmental sciences. The country offers post-study work permits, making it easier for graduates to gain professional experience. Canada is also famous for its safe, inclusive, and welcoming environment, with diverse communities and multicultural cities. International students enjoy access to world-class facilities, modern campuses, and support services. Canadian universities emphasize a practical, industry-oriented approach, ensuring graduates are job-ready. Affordable tuition fees and living costs make it a viable option for students worldwide. With breathtaking landscapes and a high quality of life, Canada is ideal for students seeking a balanced lifestyle.",
  //   mapColor: "text-blue-500",
  //   countryCode : 'CA'
  // },
  {
    name: "UK",
    // description: "Click to explore facts and university / study options.",
    details:
      "The UK boasts a rich history of academic excellence, with universities like Oxford and Cambridge leading the global rankings. Offering globally recognized degrees, the UK is a hub for disciplines like arts, humanities, engineering, and business. Shorter course durations (three years for undergraduate and one year for postgraduate) help students save time and costs. Scholarships such as Chevening and Commonwealth provide financial support for deserving students. The UK’s diverse student population fosters cultural exchange and global networking opportunities. Practical learning and strong industry ties ensure students are prepared for the job market. The UK also allows students to work part-time during their studies, adding to their professional experience. The Graduate Route offers two years of post-study work opportunities. With a blend of tradition and innovation, the UK is an ideal destination for aspiring learners.",
    mapColor: "text-blue-500",
    countryCode : 'GB'
  },
  {
    name: "Australia",
    // description: "Click to explore facts and university / study options.",
    details:
      "Australia is a preferred destination for students seeking quality education in a safe and welcoming environment. Renowned institutions like the University of Melbourne and Australian National University rank among the world’s best. The country offers excellent programs in fields like environmental sciences, healthcare, IT, and engineering. Australian universities emphasize research and practical learning, preparing students for real-world challenges. The country’s post-study work visa options make it easier for students to gain valuable work experience. With a strong economy and multicultural society, Australia provides ample job opportunities. Scholarships and financial aid are available for deserving international students. Australia’s stunning natural landscapes and outdoor lifestyle enhance the overall student experience. The education system focuses on critical thinking and creativity, ensuring holistic development. Known for its high quality of life, Australia is an ideal place to study and live.",
    mapColor: "text-blue-600",
    countryCode : 'AU'
  },
  {
    name: "Europe",
    // description: "Click to explore facts and university / study options.",
    details:
      "Europe is known for its ancient universities and modern education systems. Countries like Germany, France, and Sweden offer affordable or even tuition-free education at public universities. Europe provides a wide variety of programs in English, catering to international students. Renowned for disciplines such as engineering, medicine, and arts, Europe offers a multicultural environment that enhances the student experience. With a strong focus on research and innovation, universities provide opportunities to work on groundbreaking projects. The Erasmus+ program supports student mobility, offering unique opportunities to study in multiple countries. Europe’s rich cultural heritage and picturesque landscapes make it a delightful destination for learning and exploration. Many universities have partnerships with industries, ensuring excellent internship and job prospects. Affordable living costs and robust healthcare systems make Europe a practical choice for students worldwide.",
    mapColor: "text-blue-500",
    countryCode : 'EU'
  }
  // {
  //   name: "Asia",
  //   // description: "Click to explore facts and university / study options.",
  //   details:
  //     "Asia is an emerging hub for higher education, with countries like China, India, Japan, and Singapore gaining global recognition. Universities such as the National University of Singapore and Tsinghua University offer world-class programs in technology, medicine, and business. Asia is known for its affordable tuition fees and cost of living, making it accessible to students from all economic backgrounds. Strong government investments in education and research have placed Asian institutions on the global map. The region provides a unique blend of traditional knowledge and modern advancements. Asia’s diverse cultures and languages offer an enriching experience for international students. The booming economies in Asia present numerous job opportunities for graduates. Many Asian universities have collaborations with global institutions, ensuring quality education. Scholarships and funding options are widely available, supporting meritorious students. Asia is an excellent choice for students seeking academic excellence and career growth.",
  //   mapColor: "text-blue-500",
  //   countryCode : 'CN'
  // }
];

const Education = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto px-4 mt-[-10%]"> {/* Added mt-0 to remove top margin */}
          <h1 className="text-3xl font-bold text-center mb-8">Countries / Universities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-6">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-4 rounded-lg hover:bg-gray-300 transition`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <div
                      className={`w-16 h-16 flex items-center justify-center ${country.mapColor}`}
                    >
                      {/* Replace with actual SVG/Icons for countries */}
                      <p className="font-bold">{country.name}</p>
                    </div>
                    {/* <p className="mt-2 text-center text-gray-700">{country.name}</p> */}
                    <ReactCountryFlag key={country.countryCode} countryCode={country.countryCode} svg style={{ height:'40px', width:'70px'}}/>
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
              <h2 className="text-2xl font-bold text-blue-600">{selectedCountry.name}</h2>
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
