import "./Wave.css";

const WavySection = () => {
  return (
    <div className="relative overflow-hidden bg-blue-500 text-white">
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4">
            Experience the wavy animation effect with Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            d="M0,64L60,53.3C120,43,240,21,360,48C480,75,600,149,720,165.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WavySection;
