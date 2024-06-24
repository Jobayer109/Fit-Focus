const Loading = () => {
  return (
    <div className="bg-[#1E1743] h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <span className="text-white m-auto loading loading-spinner w-20"></span>
        <h1 className="mt-5 tracking-widest text-orange-600 font-Roboto font-extrabold text-5xl">
          FITFOCUS
        </h1>
      </div>
    </div>
  );
};

export default Loading;
