import React, { useEffect, useState } from "react";
import PreviewTable from "./PreviewTable";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserWorkspaceByIdService } from "../../service/workspace";
import PromptSearchBar from "../../Components/Prompt/PromptSearchBar";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { selectSessionId } from "../../store/User/userSlice";
// now i have workspace id so i will fetch the file id and file path using workspace and remove the file if from the urls
// file_path : "http://localhost:5000/uploads/excel-files/1715310467058crop_production.xlsx",
export default function EDAPage() {
  const [metaData, setMetaData] = useState({});
  const [attribute, setAttributes] = useState([]);
  const [workspace, setWorkspace] = useState(null);
  const { fileId, workspaceID } = useParams();
  const { state } = useLocation();
  const sessionId = useSelector(selectSessionId)
  console.log("path --------> ", state);
  function cleanUrl(url) {
    // Use the URL constructor to parse the URL
    let parsedUrl = new URL(url);

    // Replace all backslashes with forward slashes in the pathname
    parsedUrl.pathname = parsedUrl.pathname.replace(/\\/g, "/");

    // Return the cleaned URL as a string
    return parsedUrl.toString();
  }
  const navigate = useNavigate();


  const fetchMetaData = async () => {
    try {

      console.log("session_id --------------", sessionId);
      const url = "http://127.0.0.1:8000/fetchFileMetaData/"+sessionId;
      const response = await fetch(url);
      const data = await response.json();
      const obj = data?.message.head[0];
      const attributes = Object.keys(obj);
      console.log(attributes);
      setAttributes(attributes);
      setMetaData({ ...data?.message });
    } catch (err) {
      console.log(err);
    }
  };

  const getWorkspace = async () => {
    try {
      const ws = await getUserWorkspaceByIdService(workspaceID);
      setWorkspace(ws);
    } catch (err) {
      console.log(err.toString());
    }
  };
  useEffect(() => {
    // fetchMetaData()
    getWorkspace();
  }, []);
  useEffect(() => {
    if (workspace !== null) {
      // fetchMetaData();
      fetchMetaData()
    }
  }, [workspace]);
  useEffect(() => {
    console.log(metaData);
  }, [metaData]);
  const handleClick = () => {
    navigate(`/w/${workspaceID}/vizulisation/` + workspace?.file?._id);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="h-[70%] overflow-y-scroll">
        {"head" in metaData ? (
          <div className="flex flex-col">
            <div className="w-full p-2 items-center flex justify-between mb-2">
              <h3 className="font-bold">Dataset Preview</h3>
            </div>
            <PreviewTable attributes={attribute} data={metaData?.head} />
            <div className="w-full flex flex-col justify-center h-auto p-2 shadow-md mt-5 ">
              <h4>
                <span className="font-bold">Rows</span> and{" "}
                <span className="font-bold">Columns</span> :{" "}
                {metaData?.shape[0]}, {metaData?.shape[1]}
              </h4>
              <hr />
              <h2 className="mt-7 font-bold text-l">Null values</h2>
              <hr />
              <div className="w-full flex flex-col">
                {metaData?.totalNAvalues.map((t, i) => {
                  return (
                    <div className="flex w-[200px] justify-between">
                      <h4 className="font-semibold">{attribute[i]}</h4>
                      <h4>{t}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
      <div className="w-full py-5">
        <PromptSearchBar />
      </div>
    </div>
  );
}
