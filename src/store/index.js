import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alertSlice";
import attributesReducer from "./Visualization/attributesSlice";
import chartReducer from "./Visualization/ChartSlice";
import userReducer from "./User/userSlice";
import chartTabReducer from "./Visualization/ChartsTabSlice"
import workspaceReducer from "./workspace/workspaceSlice";
import workspacesReducer from "./workspace/workspacesSlice";
export const store = configureStore({
    reducer: {
        alert : alertReducer,
        attributes:attributesReducer,
        chart:chartReducer,
        user : userReducer,
        chartTab : chartTabReducer,
        workspace : workspaceReducer,
        workspaces : workspacesReducer
    }
})