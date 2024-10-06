import React, { useEffect, useState } from "react";
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
import { getUserWorkspaceByIdService } from "../service/workspace";
import { selectSelectedChartTab } from "../store/Visualization/ChartsTabSlice";
import MaterialSelect from "../Components/ui/MaterialSelect";

const typesOfAggregation = {
  categorical: [
    { key: "value", value: "Value" },
    { key: "count", value: "Count" },
    { key: "distinct", value: "Distinct Count" },
  ],
  numerical: [
    { key: "sum", value: "Sum" },
    { key: "count", value: "Count" },
    { key: "min", value: "Minimum" },
    { key: "max", value: "Maximum" },
    { key: "avg", value: "Average" },
    { key: "median", value: "Median" },
  ],
};
export default function VizulisationDashboard() {
  const [xAggreationValue, setXAggreationValue] = useState('value');
  const [yAggreationValue, setYAggreationValue] = useState('sum');
  const dispatch = useDispatch();
  const selectedChartType = useSelector(selectSelectedChartTab);
  const { xaxis, yaxis } = useSelector(selectAttributes);
  const { fileId, workspaceID } = useParams();
  const [workspace, setWorkspace] = useState(null);
  const handleGenerateButton = async (e) => {
    const payload = {
      fileId: workspace?.file?._id,
      attributeX: xaxis,
      attributeY: yaxis,
      aggregationX:xAggreationValue,
      aggregationY:yAggreationValue,
      type: selectedChartType,
    };
    const result = await generateChartService(payload);
    console.log("chart options -> ", result.options);
    dispatch(setChartOptions(result.options));
  };
  const getWorkspace = async () => {
    try {
      const ws = await getUserWorkspaceByIdService(workspaceID);
      setWorkspace(ws);
      console.log("ws", ws);
    } catch (err) {
      console.log(err.toString());
    }
  };
  useEffect(() => {
    // fetchMetaData()
    getWorkspace();
  }, []);

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
          <div className="ml-2 w-[35%] flex justify-between">
            {/* <h4>
              X-Axis : <span className="font-semibold">{xaxis}</span>
            </h4> */}
            <MaterialSelect
              key={"x-axis select"}
              label={"X-Axis" + " : " + xaxis}
              items={typesOfAggregation.categorical}
              value={xAggreationValue}
              setValue={setXAggreationValue}
            />
            <MaterialSelect
              key={"y-axis select"}
              label={"Y-Axis" + " : " + yaxis}
              items={typesOfAggregation.numerical}
              value={yAggreationValue}
              setValue={setYAggreationValue}
            />
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
