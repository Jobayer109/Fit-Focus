import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import Loading from "../../Shared/Loading";

const FeatureSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Features"],
    queryFn: async () => {
      const res = await axiosSecure.get("/features");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="px-10 font-Prata">
      <div className="text-center ">
        <h1 className="text-4xl font-Prata font-bold mt-24 text-orange-500">
          Services
        </h1>
        <div className="h-2 w-56 mt-1 mb-5 bg-orange-300 mx-auto blur-lg"></div>
        <p className="mt-2 text-slate-400">
          Benefit from custom weight loss plans integrating exercise,
          <span className="block">
            diet, and ongoing support, guiding you towards safe and sustainable
            weight management.
          </span>
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-24 lg:px-0 ">
        {data?.map((feature) => (
          <div
            key={feature.id}
            className="transform hover:scale-105 transition-transform duration-300 ease-in-out relative"
          >
            <section
              className=" shadow-lg h-[270px] mb-12 rounded-lg border border-gray-400 hover:border-orange-300"
              data-aos="flip-right"
            >
              <div className="text-center relative">
                <div className="flex justify-center">
                  <img
                    src={feature.image}
                    className="rounded-full h-20 w-20 border-2 p-1 bg-black border-orange-500 absolute -top-10 "
                  />
                </div>

                <div className="flex justify-center flex-col mt-12 p-5">
                  <p className="text-2xl font-semibold mb-2 text-orange-400">
                    {feature.name}
                  </p>
                  <p className="text-gray-400 leading-tight dark:text-gray-300 mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
