import useClasses from "../../Hook/useClasses";
import SkeletonLoader from "../../Shared/SkeletonLoader";
import FeaturedClasse from "./FeaturedClasse";

const FeaturedClasses = () => {
  const { classes, classesLoading } = useClasses();

  return (
    <section className="mt-36 px-10">
      <div className="text-center">
        <div>
          <div className="text-center ">
            <h1 className="text-4xl font-Prata font-bold text-orange-500">
              Popular Categories
            </h1>
            <div className="h-2 w-96 mt-1 bg-orange-300 mx-auto blur-lg"></div>
          </div>
          <p className="mt-4 mb-16 text-slate-400">
            Benefit from custom weight loss plans integrating exercise,
            <span className="block">
              diet, and ongoing support, guiding you towards safe and
              sustainable weight management.
            </span>
          </p>
        </div>
      </div>
      <div className="container mx-auto lg:grid grid-cols-2 gap-10 w-full">
        {classesLoading ? (
          // Display skeleton loaders while data is loading
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          classes &&
          classes
            .slice(0, 6)
            .map((classData) => (
              <FeaturedClasse key={classData.id} classData={classData} />
            ))
        )}
      </div>
    </section>
  );
};

export default FeaturedClasses;
