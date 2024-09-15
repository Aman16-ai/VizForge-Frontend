import React from "react";
import { Outlet, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";
import { useSelector } from "react-redux";
import { selectAlertOptions } from "../store/alertSlice";
import { Alert } from "@mui/material";
import { useLocation } from "react-router-dom";
import SideToolbar from "./Visualization/SideToolBar";
import WorkspaceNavbar from "./workspace/WorkspaceNavbar";
import { setWorkSpace } from "../store/workspace/workspaceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserWorkspaceByIdService } from "../service/workspace";
export default function WorkspaceLayout() {
  const location = useLocation();
  const dispatch = useDispatch()
  const { open, severity, variant, message } = useSelector(selectAlertOptions);
  const {workspaceID} = useParams()
  const getWorkspace = async () => {
    try {
      const ws = await getUserWorkspaceByIdService(workspaceID);
      console.log('workspace layout------>',ws)
      dispatch(setWorkSpace(ws))
    } catch (err) {
      console.log(err.toString());
    }
  };
  useEffect(() => {
    // fetchMetaData()
    getWorkspace();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-auto h-auto">
        <WorkspaceNavbar />
      </div>
      <div className="w-full h-[90%] flex">
        <div className="w-auto h-auto border-t-2"></div>
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
  );
}
