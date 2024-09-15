import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserWorkspaceByIdService, updateUserWorkspace } from "../../service/workspace";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../../store/workspace/workspaceSlice";
import useDebounce from "../../hooks/useDebounce";

function WorkspaceNavbar() {
  const [activeTab, setActiveTab] = useState("feature-engineering");
  const [name,setName] = useState('')
  const deboucedName = useDebounce(name,1000);
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
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 ">
      {/* Left-side actions */}
      <div className="flex items-center">
        <img
          className="h-8 w-8"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
          onClick={e => navigate("/dashboard/")}
        />
        <div className="flex-col ml-4">
          <div className="flex-grow text-gray-800 font-medium">
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="space-x-4">
            <button className="text-gray-600 text-sm hover:text-gray-800">
              File
            </button>
            <button className="text-gray-600 text-sm hover:text-gray-800">
              Edit
            </button>
            <button className="text-gray-600 text-sm hover:text-gray-800">
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
            className={`text-gray-600 ${
              activeTab === "feature-engineering"
                ? "border-b-2 border-gray-700"
                : ""
            }`}
            onClick={() => handleTabClick("feature-engineering")}
          >
            Feature Engineering
          </button>
          <button
            className={`text-gray-600  ${
              activeTab === "visualization" ? "border-b-2 border-gray-700" : ""
            }`}
            onClick={() => handleTabClick("visualization")}
          >
            Visualization
          </button>
          <button
            className={`text-gray-600 ${
              activeTab === "model-training" ? "border-b-2 border-gray-700" : ""
            }`}
            onClick={() => handleTabClick("model-training")}
          >
            Model Training
          </button>
        </div>
      </div>

      {/* Right-side actions */}
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Share</button>
        <button className="text-gray-600 hover:text-gray-800">Export</button>
        <button className="text-gray-600 hover:text-gray-800">Comment</button>
        {/* ... other right-side actions */}
        <button className="text-gray-600 hover:text-gray-800">More</button>
      </div>
    </div>
  );
}

export default WorkspaceNavbar;
