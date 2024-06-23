import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../../public/bg1.gif";
import bg2 from "../../../public/bg2.gif";
import "../../Styles/SwiperSlide.css";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>FitFocus | Home</title>
      </Helmet>
      <div className="container mx-auto max-w-screen-xl">
        <div className="relative font-Poppins">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-gradient-to-r from-slate-900 to-black">
              <div
                className="bg-cover bg-center bg-no-repeat h-[580px] relative"
                style={{
                  backgroundImage: `url(${bg1})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center">
                  <div className="text-white text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-200">
                      Shape Your Future with{" "}
                      <span className="text-orange-600">FitFocus</span>
                    </h1>
                    <p className="text-lg lg:text-xl md:text-md sm:text-sm mb-6  text-gray-300">
                      Your Ultimate Destination for Health, Wellness, and
                      Fitness
                    </p>
                    <Link to="/trainers">
                      <button className="px-6 py-3 bg-orange-600 text-white font-semibold uppercase rounded-lg hover:opacity-85 focus:ring focus:ring-gray-300 inline-block">
                        See Our Trainers →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-r from-slate-900 to-black">
              <div
                className="bg-cover bg-center h-[580px] relative"
                style={{
                  backgroundImage: `url(${bg2})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center">
                  <div className="text-white text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-200">
                      Shape Your Future with{" "}
                      <span className="text-orange-600">FitFocus</span>
                    </h1>
                    <p className="text-lg lg:text-xl mb-6 text-gray-300">
                      Your Ultimate Destination for Health, Wellness, and
                      Fitness
                    </p>
                    <Link to="/trainers">
                      <button className="px-6 py-3 bg-orange-600 text-white font-semibold uppercase rounded-lg hover:opacity-85 focus:ring focus:ring-gray-300 inline-block">
                        See Our Trainers →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
