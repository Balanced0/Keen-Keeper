import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import { FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto p-4 flex items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-white bg-[#244D3F]"
                        : "font-semibold text-[#64748B]"
                    }
                  >
                    <RiHome2Line size={20} />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-white bg-[#244D3F]"
                        : "font-semibold text-[#64748B]"
                    }
                  >
                    <FaRegClock /> Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-white bg-[#244D3F]"
                        : "font-semibold text-[#64748B]"
                    }
                  >
                    <TfiStatsUp /> Stats
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="text-xl flex gap-0">
              <span className="font-extrabold text-2xl">Keen</span>
              <span className="font-semibold text-2xl text-[#244D3F]">
                Keeper
              </span>
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-[#244D3F]"
                      : "font-semibold text-[#64748B]"
                  }
                >
                  <RiHome2Line size={20} />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/timeline"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-[#244D3F]"
                      : "font-semibold text-[#64748B]"
                  }
                >
                  <FaRegClock /> Timeline
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-white bg-[#244D3F]"
                      : "font-semibold text-[#64748B]"
                  }
                >
                  <TfiStatsUp /> Stats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
