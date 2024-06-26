import useTrainers from "../../Hook/useTrainers";
import Trainer from "./Trainer";

const AllTrainer = () => {
  const { data } = useTrainers();

  return (
    <div>
      <div className="lg:grid grid-cols-3 container mx-auto">
        {data?.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
