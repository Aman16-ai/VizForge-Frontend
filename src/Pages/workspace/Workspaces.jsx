import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import WorkspaceCard from "../../Components/workspace/WorkspaceCard";
import img from "../../assets/bg.jpg"
import { getUserAllWorkspaceService } from "../../service/workspace";
import { useDispatch,useSelector } from "react-redux";
import { addAllWorkspaces, selectWorkspaces } from "../../store/workspace/workspacesSlice";
export default function Workspaces() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const workspaces = useSelector(selectWorkspaces)
  const getAllWorkspaces = async() => {
    try {
      const allworks = await getUserAllWorkspaceService()
      dispatch(addAllWorkspaces(allworks))
    }
    catch(err) {
      alert(err)
    }
  }
  useEffect(() => {
    getAllWorkspaces()
  },[])
  return (
    <div className="w-full h-full flex flex-col">
      {/* <h3 className="font-semibold text-xl absolute top-[50%] left-[40%]">Your workspaces will show here.</h3> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
        workspaces?.map((w) => {
          return <WorkspaceCard
          name={w?.name}
          date={w?.createdAt}
          image={img}
          id={w?._id}
        />
        })
      }
      
    </div>
      <div className="w-auto h-auto absolute right-10 bottom-6 fixed">
        <Fab onClick={e => navigate("/uploadFile")} color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
      </div>
    </div>
  );
}
