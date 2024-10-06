// SideToolbar.js

import React from "react";
import { FiLayers, FiBarChart2, FiEdit, FiFilter } from "react-icons/fi"; // Import icons from react-icons library
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SideToolbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileId } = useParams();
  const isButtonActivate = (url) => {
    if (location.pathname.endsWith(url)) {
      return true;
    }
    return false;
  };
  return (
    <div className="h-full bg-white w-[340px] shadow-xl flex flex-col items-center justify-between p-2">
      <div className=" flex w-full justify-around shadow-md p-2">
        <button
          className={`${
            isButtonActivate(fileId)
              ? "text-white bg-gray-700 rounded-md p-2"
              : "text-black bg-white"
          } flex flex-col items-center justify-center hover:text-gray-300 focus:outline-none`}
          onClick={(e) => navigate("")}
        >
          <FiLayers className="text-xl" />
          <span className="text-xs mt-1">Attributes</span>
        </button>
        <button
          className={`${
            isButtonActivate("chart-types")
              ? "text-white bg-gray-700 rounded-md p-2"
              : "text-black bg-white"
          } flex flex-col items-center justify-center hover:text-gray-300 focus:outline-none`}
          onClick={(e) => navigate("chart-types")}
        >
          <FiBarChart2 className="text-xl" />
          <span className="text-xs mt-1">Charts</span>
        </button>
        <button
          className={`${
            isButtonActivate("editor")
              ? "text-white bg-gray-700 rounded-md p-2"
              : "text-black bg-white"
          } flex flex-col items-center justify-center hover:text-gray-300 focus:outline-none`}
          onClick={(e) => navigate("editor")}
        >
          <FiEdit className="text-xl" />
          <span className="text-xs mt-1">Editor</span>
        </button>
        <button
          className={`${
            isButtonActivate("filter")
              ? "text-white bg-gray-700 rounded-md p-2"
              : "text-black bg-white"
          } flex flex-col items-center justify-center hover:text-gray-300 focus:outline-none`}
          onClick={(e) => navigate("filter")}
        >
          <FiFilter className="text-xl" />
          <span className="text-xs mt-1">Filter</span>
        </button>
      </div>
      <div className="w-full h-full shadow-lg overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default SideToolbar;
