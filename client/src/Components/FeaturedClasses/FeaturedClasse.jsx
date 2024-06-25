/* eslint-disable react/prop-types */
// import { useState } from "react";
import { GiBullseye } from "react-icons/gi";
const FeaturedClasse = ({ classData }) => {
  // const [showFullDetails, setShowFullDetails] = useState(false);

  // const toggleDetails = () => {
  //   setShowFullDetails(!showFullDetails);
  // };

  return (
    <div
      className="flex justify-between h-60 item-center rounded-md shadow-md bg-slate-900  border border-orange-400"
      data-aos="zoom-in"
    >
      <img
        src={classData.image}
        alt=""
        className="rounded-md h-full w-[30%] dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-gray-300 font-semibold tracking-">
            {classData.className}
          </h2>
          <div className="flex items-center justify-start font-bold ">
            <GiBullseye className="text-orange-500" size={18} />
            <p className="text-slate-400 ml-1">
              Total book:{" "}
              <span className="text-orange-400">{classData.totalBook}</span>
            </p>
          </div>
          <p className="text-sm text-gray-400 leading-tight">
            {classData.details}
          </p>
          {/* <p className="dark:text-gray-800 text-sm text-gray-400 leading-tight">
            {showFullDetails
              ? classData.details
              : classData.details.slice(0, 100)}
            <span
              className="text-[#1882FF]  text-sm ml-2 cursor-pointer "
              onClick={toggleDetails}
            >
              {showFullDetails ? "see less" : "see more"}
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedClasse;
