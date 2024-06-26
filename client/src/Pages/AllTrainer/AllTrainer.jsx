import useTrainers from "../../Hook/useTrainers";
import Trainer from "./Trainer";

const AllTrainer = () => {
  const { data } = useTrainers();

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 container ">
        {data?.map((trainer) => (
          <Trainer key={trainer._id} trainer={trainer}></Trainer>
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
