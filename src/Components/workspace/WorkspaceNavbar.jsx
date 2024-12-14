import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserWorkspaceByIdService, updateUserWorkspace } from "../../service/workspace";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../../store/workspace/workspaceSlice";
import useDebounce from "../../hooks/useDebounce";
import lo from "../../assets/lo3.png"
import { MdOutlineShare } from "react-icons/md";
import { PiExport } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
function WorkspaceNavbar() {
  const [activeTab, setActiveTab] = useState("feature-engineering");
  const [name, setName] = useState('');
  const deboucedName = useDebounce(name, 1000);
  const navigate = useNavigate();
  const { workspaceID } = useParams();
  const workspace = useSelector(selectWorkspace)

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "visualization") {
      navigate(`/w/${workspaceID}/vizulisation/` + workspace?.file?._id);
    } else if (tab === "feature-engineering") {
      navigate(`/w/${workspaceID}/eda/`);
    }
  };

  useEffect(() => {
    if(workspace) {
      setName(workspace?.name)
    }
  },[workspace])

  useEffect(() => {
    if(deboucedName) {
      updateUserWorkspace(workspaceID,{name:name})
      console.log(deboucedName)
    }
  },[deboucedName])

  return (
    <div className="flex items-center justify-between bg-gray-900 text-white border-b border-gray-700 px-4">
      {/* Left-side actions */}
      <div className="flex items-center">
        <img
          className="h-8 w-8"
          src={lo}
          alt="Workflow"
          onClick={e => navigate("/dashboard/")}
        />
        <div className="flex-col ml-4">
          <div className="flex-grow font-medium">
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="bg-gray-900 text-white" />
          </div>
          <div className="space-x-4">
            <button className="text-gray-400 text-sm hover:text-white">
              File
            </button>
            <button className="text-gray-400 text-sm hover:text-white">
              Edit
            </button>
            <button className="text-gray-400 text-sm hover:text-white">
              View
            </button>
          </div>
          {/* ... other left-side actions */}
        </div>
      </div>

      {/* Center-aligned title and tabs */}
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <button
            className={`text-gray-400 ${
              activeTab === "feature-engineering"
                ? "border-b-2 border-white"
                : ""
            }`}
            onClick={() => handleTabClick("feature-engineering")}
          >
            Feature Engineering
          </button>
          <button
            className={`text-gray-400 ${
              activeTab === "visualization" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => handleTabClick("visualization")}
          >
            Visualization
          </button>
          <button
            className={`text-gray-400 ${
              activeTab === "model-training" ? "border-b-2 border-white" : ""
            }`}
            onClick={() => handleTabClick("model-training")}
          >
            Model Training
          </button>
        </div>
      </div>

      {/* Right-side actions */}
      <div className="flex space-x-4">
        <MdOutlineShare size={28} className=" text-white hover:text-white hover:cursor-pointer"/>
        <PiExport size={28} className="text-white hover:text-white hover:cursor-pointer" />
        <BiComment size={28} className="text-white hover:text-white hover:cursor-pointer" />
        <IoMdMore size={28} className="text-white hover:text-white hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default WorkspaceNavbar;