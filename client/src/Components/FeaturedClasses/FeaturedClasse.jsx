/* eslint-disable react/prop-types */
import { GiBullseye } from "react-icons/gi";

const FeaturedClasse = ({ classData }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + ".";
  };

  return (
    <div className="flex flex-col md:flex-row justify-between h-auto md:h-60 lg:h-48 gap-6 mt-5 md:mt-6 lg:mt-0 xl:mt-0 items-center rounded-md shadow-md bg-slate-900 border border-orange-400">
      <img
        src={classData.image}
        alt={classData.className}
        loading="lazy"
        className="object-cover rounded-t-md md:rounded-l-md md:rounded-t-none h-48 md:h-full w-full md:w-[30%]"
      />

      <div className="flex flex-col justify-between p-6 space-y-4 md:space-y-8 w-full md:w-[70%]">
        <div className="space-y-2">
          <h2 className="text-xl md:text-xl text-gray-300 font-semibold tracking-tight">
            {classData.className}
          </h2>
          <div className="flex items-center justify-start font-bold">
            <GiBullseye className="text-orange-500" size={18} />
            <p className="text-slate-400 ml-1">
              Total book:{" "}
              <span className="text-orange-400">{classData.totalBook}</span>
            </p>
          </div>
          <p className="text-sm md:text-base text-gray-400 leading-tight">
            {truncateText(classData.details, 110)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClasse;
