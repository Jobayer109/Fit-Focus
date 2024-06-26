import useTrainers from "../../Hook/useTrainers";
import Trainer from "./Trainer";

const AllTrainer = () => {
  const { data } = useTrainers();

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
