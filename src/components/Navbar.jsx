import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";
const Navbar = () => {
  const { isAuthenticated, dispatch } = useAuthHook();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav>
        <div className="container-fluid mx-auto bg-primary py-5 md:py-0 px-8 w-full">
          {/* Toggle Button for Mobile Menu */}
          <div
            className="md:hidden flex items-center justify-between"
            onClick={handleClick}>
            {isOpen ? (
              <IoMdCloseCircle className="text-secondary text-4xl absolute right-2 top-2" />
            ) : (
              <GiHamburgerMenu className="text-secondary text-2xl" />
            )}
          </div>

          <ul
            className={`flex-col md:flex-row md:flex justify-center md:items-center text-secondary ${
              isOpen
                ? "md:hidden block text-center h-screen px-5 bg-primary"
                : "hidden"
            } md:flex md:static md:p-0 md:m-0`}>
            <li className="px-4 py-5 hover:bg-sorange">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white p-5 underline" : "p-5"
                }>
                {" "}
                HOME
              </NavLink>
            </li>
            <li className="px-4 py-5 hover:bg-sorange">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-white p-5 underline flex-nowrap" : "p-5"
                }>
                ABOUT US
              </NavLink>
            </li>
            <li className="px-4 py-5 hover:bg-sorange">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-white p-5 underline" : "p-5"
                }>
                CONTACT
              </NavLink>
            </li>
            <li
              className={`px-4 py-5 ${
                !isAuthenticated ? "hover:bg-sorange" : ""
              }`}>
              <NavLink
                to={isAuthenticated ? "/dash" : "/login"}
                className={({ isActive }) =>
                  `p-5 hover:bg-sorange ${
                    isActive ? "underline" : ""
                  }`
                }>
                {isAuthenticated ? "DASHBOARD" : "LOGIN"}
              </NavLink>
            </li>

            <li
              className={`px-4 py-5 ${
                !isAuthenticated ? "hover:bg-sorange" : ""
              }`}>
              {!isAuthenticated ? (
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `p-5 ${isActive ? "text-white underline" : ""}`
                  }>
                  SIGNUP
                  <MdOutlinePersonAddAlt className="inline-block text-xl pb-1 ml-2" />
                </NavLink>
              ) : (
                <div className=" flex flex-row items-center justify-center">
                  <button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    className="bg-sorange rounded-full md:ms-5 px-7 py-2 hover:bg-steal">
                    LOGOUT
                  </button>
                </div>
              )}
            </li>
            <div className="ms-5 overflow-hidden ">
              <div className="flex justify-center item-center space-x-5 md:ms-2 py-5 overflow-hidden">
                <FaFacebook className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
                <FaInstagram className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
                <FaTwitter className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
                <FaYoutube className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
