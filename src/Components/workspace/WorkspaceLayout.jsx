import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import SideNavBar from "../SideNavBar";
import { useSelector } from "react-redux";
import { selectAlertOptions } from "../../store/alertSlice";
import { Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import SideToolbar from "../Visualization/SideToolBar";
import WorkspaceNavbar from "./WorkspaceNavbar";
import { setWorkSpace } from "../../store/workspace/workspaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserWorkspaceByIdService } from "../../service/workspace";
import { uploadFileInUserSessionService } from "../../service/AnaylsisService";
import CircularSpinner from "../ui/CircularSpinner";
import { setSessionId } from "../../store/User/userSlice";

import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { CiSquarePlus, CiFileOn,CiViewTable,CiDatabase   } from "react-icons/ci";
import { PiChartLineUp } from "react-icons/pi";
export default function WorkspaceLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { open, severity, variant, message } = useSelector(selectAlertOptions);
  const { workspaceID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const getWorkspaceAndUploadUserFileInSession = async () => {
    try {
      setIsLoading(true);
      const ws = await getUserWorkspaceByIdService(workspaceID);
      dispatch(setWorkSpace(ws));
      const data = await uploadFileInUserSessionService(ws.file.path);
      console.log(data);
      const sessionID = data?.Response?.sessionID;
      console.log("sessionID", sessionID);
      dispatch(setSessionId(sessionID))
    } catch (err) {
      console.log(err.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchMetaData()

    getWorkspaceAndUploadUserFileInSession();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="w-screen h-screen flex flex-col">
          <div className="w-auto h-auto">
            <WorkspaceNavbar />
          </div>
          <div className="w-full h-[90%] flex">
            <div className="w-auto h-auto border-t-2">
              <WorkSpaceSideNavBar/>

            </div>
            <div className="w-full h-full p-5 overflow-y-scroll">
              <Outlet />
              <div className="w-auto h-auto absolute right-0 bottom-2 mr-2 fixed">
                {open ? (
                  <Alert variant={variant} severity={severity}>
                    {message}
                  </Alert>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SetupWorkspace />
      )}
    </>
  );
}

const SetupWorkspace = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">
        Setting up your workspace...
      </h1>
      <CircularSpinner size={80} color="blue" />
    </div>
  );
};

const WorkSpaceSideNavBar = () => {
  const [activeTab, setActiveTab] = useState('Explorer');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-[5vw] px-4 py-6 flex flex-col justify-between items-center">
      <div>
        <div className="mb-6 h-10 flex flex-col items-center justify-center bg-blue-500">
          <CiSquarePlus className="text-2xl" />
        </div>
        <nav>
          <ul className="space-y-6">
            <li
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === 'Explorer' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleTabClick('Explorer')}
            >
              <CiFileOn className="text-xl" />
              <span className="text-xs mt-1">Explorer</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === 'Dashboards' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleTabClick('Dashboards')}
            >
              <CiViewTable className="text-xl" />
              <span className="text-xs mt-1">Dashboards</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === 'Reports' ? 'text-blue-500' : ''
              }`}
              onClick={() => handleTabClick('Reports')}
            >
              <PiChartLineUp className="text-xl" />
              <span className="text-xs mt-1">Reports</span>
            </li>
            <li
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === 'Data' ? 'text-blue-500' : ''
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
