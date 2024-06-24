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
  const { data, isLoading, error, refetch } = useUserByEmail();

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
    <div className="">
      <div className="shadow-2xl w-full font-Roboto  mx-auto">
        <div className="m-0 p-0 shadow-2xl z-10">
          <Navbar fluid rounded>
            <Navbar.Brand href="#">
              <img
                src="https://i.ibb.co/zXvSWPK/logo-removebg-preview.png"
                className="w-15 mr-5 lg:ml-10 h-15 sm:h-9"
                alt="PlateswapLogo"
              />
              <span className="self-center uppercase whitespace-nowrap text-2xl font-semibold dark:text-white italic">
                FitFocus
              </span>
            </Navbar.Brand>
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
                    className="align-middle mr-auto select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-600 border text-[#fff] hover:bg-orange-700 focus:ring focus:ring-gray-300 active:opacity-85"
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
              )}
              <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
              <NavLink
                to="/"
                className="font-normal text-base"
                activeClassName="active"
              >
                <div className="flex items-center justify-center">
                  <span>Home</span>
                </div>
              </NavLink>

              <NavLink
                to="/trainers"
                className="font-normal text-base"
                activeClassName="active"
              >
                <div className="flex items-center gap-1 justify-center">
                  <span>All Trainer Page</span>
                </div>
              </NavLink>

              <NavLink
                to="/allclass"
                className="font-normal text-base"
                activeClassName="active"
              >
                <div className="flex items-center gap-1 justify-center">
                  <span>All Classes Page</span>
                </div>
              </NavLink>

              <NavLink
                to="/community"
                className="font-normal text-base"
                activeClassName="active"
              >
                <div className="flex items-center gap-1 justify-center">
                  <span>Community</span>
                </div>
              </NavLink>

              {user &&
                (userData?.role === "trainer" ||
                  userData?.role === "admin") && (
                  <>
                    <NavLink
                      to="/deshboard"
                      className="font-normal text-base"
                      activeClassName="active"
                    >
                      <div className="flex items-center gap-1 justify-center">
                        <span>Dashboard</span>
                      </div>
                    </NavLink>
                  </>
                )}

              {user && (
                <NavLink
                  to="/profile"
                  className="font-normal text-base"
                  activeClassName="active"
                >
                  <div className="flex items-center gap-1 justify-center">
                    <span>Profile</span>
                  </div>
                </NavLink>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
