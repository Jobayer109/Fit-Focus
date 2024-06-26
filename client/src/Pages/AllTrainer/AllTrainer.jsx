import useTrainers from "../../Hook/useTrainers";
import Trainer from "./Trainer";

const AllTrainer = () => {
  const { data } = useTrainers();

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="text-center mb-10">
        <div className="text-center ">
          <h1 className="text-4xl font-Prata font-bold text-orange-500">
            Our All Trainers
          </h1>
          <div className="h-2 w-60 mt-1  bg-orange-300 mx-auto blur-lg"></div>
        </div>
        <p className="mt-2 text-slate-400">
          Benefit from custom weight loss plans integrating exercise,
          <span className="block">
            diet, and ongoing support, guiding you towards safe and sustainable
            weight management.
          </span>
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
