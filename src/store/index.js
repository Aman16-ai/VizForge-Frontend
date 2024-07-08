import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alertSlice";
import attributesReducer from "./Visualization/attributesSlice";
import chartReducer from "./Visualization/ChartSlice";
import userReducer from "./User/userSlice";
export const store = configureStore({
    reducer: {
        alert : alertReducer,
        attributes:attributesReducer,
        chart:chartReducer,
        user : userReducer
    }
})