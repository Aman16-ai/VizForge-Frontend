import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaChartArea,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectWorkspace } from "../../../store/workspace/workspaceSlice";
import { closeGlobalModal } from "../../../store/workspace/GlobalModalSlice";
import { useDispatch } from "react-redux";

export default function ItemList() {
  const navigate = useNavigate();
  const { workspaceID } = useParams();
  const workspace = useSelector(selectWorkspace);
  const dispatch = useDispatch();
  const tabs = [
    {
      name: "Chart",
      icon: <FaChartPie size={24} />,
      path: `/w/${workspaceID}/vizulisation/` + workspace?.file?._id,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="flex p-2 gap-10 py-6 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {
            navigate(tab.path);
            dispatch(closeGlobalModal());
          }}
          className={`w-24 h-24 flex flex-col justify-center items-center text-white rounded-xl shadow-md hover:scale-105 transition-all duration-200 ${tab.color}`}
        >
          {tab.icon}
          <span className="text-sm mt-1 font-medium">{tab.name}</span>
        </button>
      ))}
    </div>
  );
}
