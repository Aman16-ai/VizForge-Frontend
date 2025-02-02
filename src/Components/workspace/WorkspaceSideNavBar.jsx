import React, { useState } from "react";

import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import { CiSquarePlus, CiFileOn,CiViewTable,CiDatabase   } from "react-icons/ci";
import { PiChartLineUp } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


const WorkSpaceSideNavBar = () => {
  const [activeTab, setActiveTab] = useState('Explorer');
  const navigate = useNavigate()
  const handleTabClick = (tab) => {
    if(tab === 'Explorer') {
      navigate('')
    }
    setActiveTab(tab);
  };

  return (
    <div className="bg-black text-white h-full w-[5vw] py-6 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <div className="mb-6 h-10 w-14 flex flex-col items-center justify-center bg-blue-500">
          <GoPlus className="text-2xl" />
        </div>
        <nav className="w-full">
          <ul className="space-y-4 m-1">
            <li
              className={`cursor-pointer p-2 flex flex-col items-center ${
                activeTab === 'Explorer' ? 'bg-blue-500 rounded-md' : ''
              }`}
              onClick={() => handleTabClick('Explorer')}
            >
              <CiFileOn className="text-xl" />
              <span className="text-xs mt-1">Explorer</span>
            </li>
            <li
              className={`w-full p-2 cursor-pointer flex flex-col items-center ${
                activeTab === 'Dashboards' ? 'bg-blue-500 rounded-md' : ''
              }`}
              onClick={() => handleTabClick('Dashboards')}
            >
              <CiViewTable className="text-xl" />
              <span className="text-xs mt-1">Dashboards</span>
            </li>
            <li
              className={`cursor-pointer p-2 flex flex-col items-center ${
                activeTab === 'Reports' ? 'bg-blue-500 rounded-md' : ''
              }`}
              onClick={() => handleTabClick('Reports')}
            >
              <PiChartLineUp className="text-xl" />
              <span className="text-xs mt-1">Reports</span>
            </li>
            <li
              className={`cursor-pointer p-2 flex flex-col items-center ${
                activeTab === 'Data' ? 'bg-blue-500 rounded-md' : ''
              }`}
              onClick={() => handleTabClick('Data')}
            >
              <CiDatabase  className="text-xl" />
              <span className="text-xs mt-1">Data</span>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <FaEllipsisH className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default WorkSpaceSideNavBar