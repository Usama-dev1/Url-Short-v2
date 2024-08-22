import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-scroll md:flex-row">
      <div className="w-full md:w-1/4 lg:w-1/5 bg-slight p-4 md:p-6">
        <ul className="flex flex-col text-md md:text-lg text-white justify-center items-center space-y-4 md:space-y-3">
          <li className="w-full">
            <NavLink
              to="/dash/"
              className="block sm:w-full text-center py-4 text-white shadow-md bg-sorange hover:bg-steal font-bold">
              Dashboard
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dash/short"
              className="block w-full text-center py-2 text-primary shadow-2xl bg-secondary hover:bg-steal font-bold">
              Shorten
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/dash/urls"
              className="block w-full text-center py-2 text-primary shadow-2xl bg-secondary hover:bg-steal font-bold">
              View URL
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content area with Outlet */}
      <div className="flex-grow bg-sorange overflow-auto">
        <Outlet /> {/* Child routes will render here */}
      </div>
    </div>
  );
};

export default Dashboardlayout;
