// SkeletonLoader.js
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row justify-between h-auto md:h-60 lg:h-48 gap-6 mt-5 md:mt-6 lg:mt-0 xl:mt-0 items-center rounded-md shadow-md bg-slate-700 border border-orange-300 p-4">
      <div className="bg-gray-300 h-48 md:h-full w-full md:w-[30%] rounded-t-md md:rounded-l-md md:rounded-t-none"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
