import AOS from "aos";
import "aos/dist/aos.css"; // Optionally import AOS styles
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import UseAuth from "../../Hook/useAuth";
import Loading from "../../Shared/Loading";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  const { loading } = UseAuth();
  if (loading) {
    return <Loading />;
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
