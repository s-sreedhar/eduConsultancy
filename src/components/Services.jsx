import services from '../assets/services.png';
import servicescountries from '../assets/servicescountries.png'
const Services = () => {
    return (
        <>
        <div className="relative overflow-hidden"> 
      <img 
        src={services} 
        alt="Services" 
        className="w-full h-screen object-cover" 
        style={{height:'400px'}}
      />
      {/* <div className="absolute inset-0 flex items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-red-700" style={{color:'#0F3A5E'}}>We Make Your Dreams Come True</h1> 
      </div> */}
    </div>
        {/* Section 2: Approach */}
    <div className="bg-white text-gray-800 py-10 px-6 md:px-20">
      <h2 className="text-gray-600 text-lg mb-6">
      We make your entire study abroad journey a grand success.
      </h2>
      <ul className="space-y-4">
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Counselling:</strong> Over 10
          Get expert advice tailored to your goals.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Test Preparation</strong>{" "}
          Ace your tests with personalized coaching.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Course Selection:</strong>{" "}
          Find the perfect course for your career.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>University Selection:</strong> Coached
          Choose the best university for your needs.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Visa Assistance:</strong>{" "}
          Simplify your visa process with our help.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Financial Planning:</strong>{" "}
          Plan your finances effectively for study abroad.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Accommodation:</strong>{" "}
          Find comfortable housing abroad with ease.
        </li>
        <li>
          <strong className="text-blue-600" style={{color:'#0F3A5E'}}>Post-Arrival Support:</strong>{" "}
          Settle in smoothly with our expert guidance.
        </li>
      </ul>
    </div>

    <div className="relative overflow-hidden"> 
      <img 
        src={servicescountries} 
        alt="Services" 
        className="w-full h-screen object-cover" 
        style={{height:'300px'}}
      />
      </div>
        </>
    )
}

export default Services