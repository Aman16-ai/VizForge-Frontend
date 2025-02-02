import { ThreeDotsMenu } from "../ui/ThreeDotsMenu";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { deleteUserWorkspaceService } from "../../service/workspace";
import { useDispatch } from "react-redux";
import { removeWorkspace } from "../../store/workspace/workspacesSlice";
import { updateAlert } from "../../store/alertSlice";
const WorkspaceCard = ({ name, date, image, id }) => {
  const navigate = useNavigate();
  const defaultImage = "path_to_default_image.jpg";
  const dispatch = useDispatch();

  const handleDelete = async() => {
    try {
      const result = await deleteUserWorkspaceService(id);
      if(result) {
        dispatch(removeWorkspace(id))
        dispatch(updateAlert({open:true,severity:'success',message:'Workspace deleted successfully'}))
      }
      else {
        console.log(result)
        dispatch(updateAlert({open:true,severity:'error',message:'Workspace not deleted successfully'}))
      }
    }
    catch(err)  {
      console.log(err)
      dispatch(updateAlert({open:true,severity:'error',message:'Workspace not deleted successfully'}))
    }
    finally {
      setTimeout(() => {
        dispatch(updateAlert({open:false}))
      }, 3000)
    }
  }

  const menuItems = [
    { label: 'Edit', onClick: () => console.log('Edit clicked') },
    { label: 'Delete', onClick: () => handleDelete() },
    { label: 'Settings', onClick: () => console.log('Settings clicked') }
  ];

  return (
    <div 
      onClick={() => navigate(`/w/${id}/eda/`)}
      className="bg-white rounded-lg shadow-lg overflow-visible w-64 cursor-pointer hover:shadow-xl transition-shadow"
    >
      <img 
        className="w-full h-40 object-cover" 
        src={image || defaultImage} 
        alt="Workspace" 
      />
      <div className="flex justify-between p-4">
        <div>
          <h3 className="text-gray-900 font-medium text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{date}</p>
        </div>
        <ThreeDotsMenu items={menuItems} />
      </div>
    </div>
  );
};

export default WorkspaceCard;