import React, { useState } from "react";
import { uploadFile } from "../service/UploadFileService";
import { useNavigate } from "react-router-dom";
import { createUserWorkspaceService } from "../service/workspace";
const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    // Your upload logic here
    console.log("Uploading file:", selectedFile);
    const formData = new FormData();
    formData.append("xl-file", selectedFile);
    const result = await uploadFile(formData);

    //create workspace 
    const payload = {
      'name' : new Date().getMilliseconds().toString(),
      'file' : result?.data?.fileId
    }
    const workspace = await createUserWorkspaceService(payload)
    const workspaceID = workspace?._id
    console.log(result)
    if (result.success === true) {
      const fileId = result?.data?.fileId;
      navigate(`/dashboard/${workspaceID}/eda/`,{state:{filePath:result?.data?.filePath}});
    } else {
      alert("file not uploaed");
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="w-[25%] bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white mb-4">Upload a File</h1>
        <label htmlFor="file-upload" className="mb-4 cursor-pointer">
          <div className="w-[196px] h-[150px] flex justify-center items-center border border-dashed border-white rounded-lg">
            <span className="text-white text-4xl">+</span>
          </div>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {selectedFile && (
          <div className="text-white mb-4">
            Selected File: {selectedFile.name}
          </div>
        )}
        <button
          onClick={handleUpload}
          className="w-[196px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
