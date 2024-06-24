import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import UseAuth from "../../Hook/useAuth";
import Loading from "../../Shared/Loading";

const Root = () => {
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
