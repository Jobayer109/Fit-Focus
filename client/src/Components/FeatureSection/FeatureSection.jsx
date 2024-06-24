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
    <>
      <div className="text-center px-8">
        <h1 className="text-4xl font-Prata font-bold mt-24">Services</h1>
        <p className="mt-2 mb-10 text-slate-500">
          Benefit from custom weight loss plans integrating exercise, diet, and
          ongoing support, guiding you <br /> towards safe and sustainable
          weight management.
        </p>
      </div>

      <div className="lg:grid gap-5 grid-cols-3 container mx-auto">
        {data?.map((feature) => (
          <div
            key={feature.id}
            className="scale-90 hover:scale-95 transition-transform duration-300 ease-in-out"
          >
            <section className="p-6 shadow-lg mb-5 h-[380px] bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
              <div className="container mx-auto text-center lg:grid-cols-3 flex justify-center items-center">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                  <p className="items-center flex justify-center">
                    <img src={feature.image} width={100} height={100} alt="" />
                  </p>
                  <p className="text-3xl font-Oswald font-bold mt-4">
                    {feature.name}
                  </p>
                  <p className="mt-3">{feature.description}</p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureSection;
