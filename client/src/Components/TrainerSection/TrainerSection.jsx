import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTrainers from "../../Hook/useTrainers";
import Loading from "../../Shared/Loading";
import Trainer from "./Trainer";

const TrainerSection = () => {
  const { data, isLoading } = useTrainers();

  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="mt-44">
      <div>
        <div className="text-center">
          <div className="text-center ">
            <h1 className="text-4xl font-Prata font-bold text-orange-500">
              Our Trainers
            </h1>
            <div className="h-2 w-60 mt-1  bg-orange-300 mx-auto blur-lg"></div>
          </div>
          <p className="mt-2 text-slate-400">
            Benefit from custom weight loss plans integrating exercise,
            <span className="block">
              diet, and ongoing support, guiding you towards safe and
              sustainable weight management.
            </span>
          </p>
        </div>
        <div className="lg:grid gap-3 grid-cols-3 container mx-auto ">
          {data?.slice(0, 3).map((trainer) => (
            <Trainer key={trainer._id} trainer={trainer}></Trainer>
          ))}
        </div>
      </div>
      <div className="float-end  w-64 mt-3 container mx-auto ">
        <Link to={`/trainers`}>
          <button className=" flex items-center  justify-center gap-2 px-4 py-2 bg-orange-600 border border-orange-500 text-sm text-gray-300 font-semibold uppercase rounded-lg hover:opacity-85 focus:ring focus:ring-gray-300 tracking-wider">
            See More <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainerSection;
