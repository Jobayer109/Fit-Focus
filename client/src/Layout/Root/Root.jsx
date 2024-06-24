import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import UseAuth from "../../Hook/useAuth";

const Root = () => {
  const { loading } = UseAuth();
  if (loading) {
    // set loading
    return (
      <div className="bg-[#1E1743] h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="text-white m-auto loading loading-spinner w-20"></span>
          <h1 className="mt-5 tracking-widest text-orange-600 font-Prata font-extrabold text-5xl">
            FITFOCUS
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Header className="w-full "></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
