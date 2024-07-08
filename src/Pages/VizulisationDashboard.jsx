import React, { useEffect } from "react";
import SideToolbar from "../Components/Visualization/SideToolBar";
import { Outlet, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ChartCanvas from "../Components/Visualization/ChartCanvas";
import { useDispatch, useSelector } from "react-redux";
import { selectAttributes } from "../store/Visualization/attributesSlice";
import { generateChartService } from "../service/AnaylsisService";
import { setChartOptions } from "../store/Visualization/ChartSlice";
import { EventSourcePolyfill } from "event-source-polyfill";
import { BASE_URL } from "../service/Api";
export default function VizulisationDashboard() {
  const dispatch = useDispatch()
  const { xaxis, yaxis } = useSelector(selectAttributes);
  const {fileId} = useParams()
  const handleGenerateButton =async(e) => {
    const payload = {
      fileId: fileId,
      attributeX: xaxis,
      attributeY: yaxis,
      type: "bar",
    };
    const result = await generateChartService(payload)
    console.log('chart options -> ',result.options)
    dispatch(setChartOptions(result.options))
  };

  // useEffect(() => {
  //   if(xaxis !== "" && yaxis !== "") {
  //     const payload = {
  //       fileId: fileId,
  //       attributeX: xaxis,
  //       attributeY: yaxis,
  //       type: "bar",
  //     };
      
  //     const eventSource = new EventSource(`${BASE_URL}/analysis/streamData?fileId=${fileId}&attributeX=${xaxis}&attributeY=${yaxis}`)
  //     eventSource.onmessage = (event) => {
  //       console.log(JSON.parse(event.data))
  //     }
  //   }
  // },[xaxis,yaxis])
  return (
    <div className="w-full h-full flex">
      <SideToolbar />
      <div className="w-full h-full ml-5 shadow-2xl flex flex-col">
        <div className="w-full h-[50px] flex items-center shadow-md justify-between">
          <div className="ml-2 flex">
            <h4>
              X-Axis : <span className="font-semibold">{xaxis}</span>
            </h4>
            <h4 className="ml-2">
              Y-Axis : <span className="font-semibold">{yaxis}</span>
            </h4>
          </div>
          <Button
            variant="contained"
            style={{
              marginRight: "10px",
              textTransform: "none",
              backgroundColor: "rgb(55 65 81 / 1)",
            }}
            onClick={handleGenerateButton}
          >
            Generate
          </Button>
        </div>
        <div className="w-full h-full">
          <ChartCanvas />
        </div>
      </div>
    </div>
  );
}
