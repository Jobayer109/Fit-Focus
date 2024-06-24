import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import useUserByEmail from "../../Hook/useUserByEmail";
import "../../Styles/Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();

  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { data } = useUserByEmail();

  useEffect(() => {
    if (data) {
      setUserData(data);
    } else {
      setUserData(null);
    }
  }, [data]);

  const handleLogout = () => {
    logOut();
    setUserData(null);
    navigate("/");
  };

  return (
    <div>
      <div className="shadow-xl w-full mx-auto md:px-6 lg:px-6 xl:px-6">
        <div className="m-0 p-0 shadow-2xl z-10">
          <Navbar fluid rounded>
            <Link to="/">
              <Navbar.Brand>
                <img
                  src="https://i.ibb.co/L8XczTq/logo.png"
                  className="w- mr-1  h-15 h-9"
                  alt="logo"
                />
                <span className="self-center text-orange-500 whitespace-nowrap text-2xl font-bold dark:text-white">
                  FiTFOCUS
                </span>
              </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
              {user ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      img={user.photoURL}
                      rounded
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user.displayName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <button
                    className="align-middle  mr-auto select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-md bg-orange-500 border text-[#fff] hover:bg-orange-600 focus:ring focus:ring-gray-300 active:opacity-85"
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
              )}
              <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-semibold">
                <NavLink to="/" className="text-base" activeClassName="active">
                  <div className="">
                    <span>Home</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/trainers"
                  className="text-base"
                  activeClassName="active"
                >
                  <div>
                    <span>Trainers</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/allclass"
                  className=" text-base"
                  activeClassName="active"
                >
                  <div>
                    <span>Courses</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/community"
                  className="text-base"
                  activeClassName="active"
                >
                  <div>
                    <span>Community</span>
                  </div>
                </NavLink>
                {user &&
                  (userData?.role === "trainer" ||
                    userData?.role === "admin") && (
                    <>
                      <NavLink
                        to="/deshboard"
                        className=" text-base"
                        activeClassName="active"
                      >
                        <div>
                          <span>Dashboard</span>
                        </div>
                      </NavLink>
                    </>
                  )}
                {user && (
                  <NavLink
                    to="/profile"
                    className="text-base"
                    activeClassName="active"
                  >
                    <div>
                      <span>Profile</span>
                    </div>
                  </NavLink>
                )}
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
