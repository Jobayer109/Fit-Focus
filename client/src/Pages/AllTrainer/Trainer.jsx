/* eslint-disable react/prop-types */
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const Trainer = ({ trainer }) => {
  return (
    <section>
      <div className="flex justify-center items-center p-10 ">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-sm transform hover:scale-105 duration-200 ease-in">
          <div
            className="p-4 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${trainer.photoURL})` }}
          >
            <img
              src={trainer.photoURL}
              alt={trainer.name}
              loading="lazy"
              className="absolute left-1/2 transform -translate-x-1/2 -top-0 rounded-full h-32 w-32 border-4 border-white object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mt-20">
              {trainer.name}
            </h2>
            <h2 className="mt-2 inline-block bg-green-500 text-white text-sm font-bold px-2 rounded-md">
              Available
            </h2>
            <div className="mt-4">
              <p className="flex items-center justify-center gap-2 text-gray-500">
                <MdWorkHistory className="text-orange-500" />
                <span>{trainer.Experience} years experience</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-500">
                <IoTimeSharp className="text-orange-500" />
                <span>Available at {trainer.availableTime}</span>
              </p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <FaFacebook className="text-blue-600 cursor-pointer" size={20} />
              <FaInstagram
                className="text-orange-500 cursor-pointer"
                size={20}
              />
              <FaLinkedin className="text-blue-700 cursor-pointer" size={20} />
            </div>
            <div className="mt-6">
              <Link to={`/trainers/${trainer._id}`}>
                <button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold uppercase rounded-md hover:opacity-85 focus:ring focus:ring-orange-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
