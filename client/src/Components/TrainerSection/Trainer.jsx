/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trainer = ({ trainer }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div>
        <div className="mt-10 h-[590px] font-Montserrat border border-[#d5dadf] rounded-lg shadow-sm w-[95%]  mx-auto">
          <div className="">
            <div className="card card-compact mb-3 lg:m-0">
              <img
                src={trainer.photoURL}
                alt={trainer.photoURL}
                loading="lazy"
                className="object-cover rounded-full h-36 w-36 mx-auto border-2 border-orange-500 relative"
              />
              {/* md:h-full w-full md:w-[40%] */}
              <div className="card-body mulish-font text-center rounded-lg">
                <div>
                  {trainer?.skills && trainer?.skills.length > 0 ? (
                    <span className="flex gap-2 items-center justify-center ">
                      <div className="bg-slate-200 p-1 text- font-bold">
                        {trainer.skills.join(", ")}
                      </div>
                    </span>
                  ) : (
                    <span>No skills listed</span>
                  )}
                </div>
                <hr className=" mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[90%] " />
                <h2 className="card-title">
                  {trainer.name}{" "}
                  <span className="text-base font-medium">
                    ({trainer.age} years)
                  </span>{" "}
                </h2>
                <h2 className=" absolute bg-[#0f9b02] text-white py-[2px] px-[4px] font-semibold rounded-md top-1 right-1">
                  Available
                </h2>
                <div className="flex justify-between">
                  <h1>Experience : {trainer.Experience} years</h1>
                  <h1>Available Time: {trainer.availableTime}</h1>
                </div>
                <p className="text-[#B09696] mb-2 text-left">
                  {showMore
                    ? trainer.otherInfo
                    : trainer.otherInfo.slice(0, 150)}
                  <span
                    className="text-[#1882FF] font-bold cursor-pointer ml-1"
                    onClick={toggleShowMore}
                  >
                    {showMore ? "See Less" : "See More"}
                  </span>
                </p>
                <div className="grid grid-cols-6 gap-0 text-base items-center justify-between text-left"></div>
                <hr className=" mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[100%] " />
                <div className="flex items-center">
                  <div className="flex w-full  justify-between items-center">
                    <div className="flex justify-center items-center  pt-3 space-x-4 align-center">
                      <FaFacebook size={20}></FaFacebook>
                      <FaInstagram size={20}></FaInstagram>
                      <FaLinkedin size={20}></FaLinkedin>
                    </div>
                    <div>
                      <Link to={`/trainers/${trainer._id}`}>
                        <button className="btn px-5 bg-[#12132D] hover:bg-[#434577] text-[#fff]">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
