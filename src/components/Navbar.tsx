import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";
import logo from "../assets/images/donat_logo.svg";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const hoverEffect = `relative before:absolute before:-bottom-[2px] before:left-0
  before:h-0.5 before:w-0 before:bg-txc before:transition-all before:duration-300 before:ease-out before:content-[''] hover:!filter-none hover:before:w-full group-hover:blur-[0.7px]`;

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

  return (
    <nav className="md:flex md:justify-between md:p-5">
      <DarkMode />
      <div
        className={`absolute inset-0 flex justify-center px-4 pb-3 pt-12 md:static md:inset-auto md:block md:bg-transparent md:bg-opacity-100 md:p-0 ${showNav ? "visible bg-txc bg-opacity-25 backdrop-blur-sm" : "invisible"}`}
      >
        <i
          className={`${showNav ? "fa-solid fa-xmark" : "fa-regular fa-bars"} visible absolute right-0 top-0 flex cursor-pointer justify-end p-4 md:opacity-0`}
          onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
        ></i>
        <div
          className={`${showNav ? "opacity-100" : "opacity-0"} w-[550px] transition-opacity duration-300 ease-in-out sm:duration-0 md:opacity-100`}
        >
          <div className="h-full rounded-lg bg-bgc px-5 pt-3 md:bg-transparent md:p-0">
            <ul
              className="group font-kollektif md:visible md:flex md:justify-end lg:text-xl

              "
            >
              <li className="my-3 mr-[6em] md:my-6">
                <Link to={"/"} className={`${hoverEffect}`}>
                  Dashboard
                </Link>
              </li>
              <li className="my-3 mr-[6em] md:my-6">
                <Link to={"/announcements"} className={`${hoverEffect}`}>
                  Announcement
                </Link>
              </li>
              <li className="my-3 mr-[6em] md:my-6">
                <Link to={"/officers"} className={`${hoverEffect}`}>
                  Officers
                </Link>
              </li>
              <li className="my-3 mr-[6em] md:my-6">
                <Link to={"/history"} className={`${hoverEffect}`}>
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Logo />
    </nav>
  );
}

const Logo = () => {
  return (
    <div className="absolute right-5 z-50 hidden lg:block">
      <img src={logo} className="w-20" />
    </div>
  );
};

export default Navbar;
