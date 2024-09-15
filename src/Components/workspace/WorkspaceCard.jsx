import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkspaceCard = ({ name, date, image,id }) => {
    const navigate = useNavigate()
  return (
    <div onClick={(e) => navigate(`/w/${id}/eda/`)} className="bg-white rounded-lg shadow-lg overflow-hidden w-64">
      <img className="w-full h-40 object-cover" src={image} alt="Workspace" />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
      
    </div>
  );
};

export default WorkspaceCard;
