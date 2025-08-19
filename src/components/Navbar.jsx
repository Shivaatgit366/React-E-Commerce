import { useState, useEffect } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Navlinks } from "../components";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    let newTheme;

    if (theme === themes.winter) {
      newTheme = themes.dracula;
    } else {
      newTheme = themes.winter;
    }

    setTheme(newTheme);
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* Hidden checkbox controls the toggle */}
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === themes.dracula}
            />

            {/* Sun icon shows when the checkbox is "on" */}
            <BsSunFill className="swap-on h-5 w-5 text-yellow-400" />

            {/* Moon icon shows when the checkbox is "off" */}
            <BsMoonFill className="swap-off h-5 w-5 text-gray-600" />
          </label>

          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                6
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
