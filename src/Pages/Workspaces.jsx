import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
export default function Workspaces() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h3 className="font-semibold text-xl">Your workspaces will show here.</h3>
      <div className="w-auto h-auto absolute right-10 bottom-6 fixed">
        <Fab onClick={e => navigate("/uploadFile")} color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
      </div>
    </div>
  );
}
