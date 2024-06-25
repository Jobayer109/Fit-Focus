const AboutSection = () => {
  return (
    <div className="mt-24">
      <div>
        <div className="text-center ">
          <h1 className="text-4xl font-Prata font-bold mt-24 text-orange-500">
            About Us
          </h1>
          <div className="h-2 w-56 mt-1  bg-orange-300 mx-auto blur-lg"></div>
        </div>
      </div>
      <section className="container rounded-xl mx-auto">
        <div className="container gap-10 flex flex-col justify-center items-center   sm:py-12  lg:flex-row lg:justify-evenly">
          <div className="flex items-center justify-center p-6 mt-3 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/tX3LkgS/about.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  bg-green-500 bg-blend-darken"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl text-gray-300 font-bold leading-none">
              A Fitness Tracker Website
            </h1>
            <p className="mt-6 text-gray-500 text-lg sm:mb-12 leading-tight">
              Welcome to FitFocus – your ultimate fitness companion! At
              FitFocus, we're dedicated to helping you achieve your fitness
              goals and lead a healthier lifestyle. Our platform provides
              intuitive tools and expert guidance to support you every step of
              the way. Join our community today and discover the power of
              focused fitness for a happier, healthier you.
            </p>
            {/* <button className="px-6 py-3 w-[100%] max-w-[35%] bg-orange-600 text-gray-200 text-sm font-semibold uppercase rounded-lg hover:opacity-85 focus:ring focus:ring-gray-300 inline-block tracking-wider">
              Learn More
            </button> */}
            <button className="px-6 py-3 w-full md:w-1/3 bg-orange-600 text-gray-200 text-sm font-semibold uppercase rounded-lg hover:opacity-85 focus:ring focus:ring-gray-300">
              Learn More
            </button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
