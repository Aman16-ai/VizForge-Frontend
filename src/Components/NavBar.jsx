import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../store/User/userSlice";
import lo from "../assets/lo3.png"
export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const handleTryNow = (e) => {
    if(isAuthenticated) {
      navigate("/dashboard")
    }
    else {
      navigate("/login")
    }
  }
  const renderDashboardNavBarContent = () => {
    return (
      <div className="flex-grow flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-md px-4 focus:outline-none focus:ring focus:ring-indigo-300 w-[600px] h-12"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 5h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  const renderHomeNavBarContent = () => {
    return (

      <div className="flex-grow ml-10 flex">
        <Link className={`${getColor().text} text-s p-2`}>Why VizForge</Link>
        <Link className={`${getColor().text} text-s p-2 ml-3 `}>Product</Link>
        <Link className={`${getColor().text} text-s p-2 ml-3`}>Solutions</Link>
      </div>
    );
  }

  const renderNavBarContent = () => {
    const url = location.pathname.startsWith("/dashboard")
    return url ? renderDashboardNavBarContent() : renderHomeNavBarContent()
  }
  const getColor = () => {
    const url = location.pathname.startsWith("/dashboard")
    const colors = {
      'bg' : "bg-gray-800",
      'text': "text-white"
    }
    if(!url) {
      colors['bg'] = "bg-white";
      colors['text'] = 'text-black'
    }
    return colors;
  }
  return (
    <nav className={`${getColor().bg} ${getColor().text} p-2 pl-4 pr-4 flex justify-between items-center`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-8 w-8"
            src={lo}
            alt="Workflow"
          />
        </div>
        <div className={`ml-1 ${getColor().text} text-xl font-semibold`}>
          VizForge
        </div>
      </div>
      {
        renderNavBarContent()
      }
      <div className="flex items-center hover:bg-gray-700 pr-2 cursor-pointer hover:rounded-md">
        {location.pathname.startsWith('/dashboard')?<><div className="flex-shrink-0">
          <div className="rounded-full h-10 w-10  bg-gray-700 flex items-center justify-center">
            <span className="text-white">AS</span>
          </div>
        </div>
        <div className="ml-4 text-white">Aman Saxena</div></>:<Button variant="contained" onClick={handleTryNow}  sx={{ backgroundColor: "rgb(55 65 81 / 1)",textTransform:"none"}}>Try Vizforge</Button>}
      </div>
    </nav>
  );
}
