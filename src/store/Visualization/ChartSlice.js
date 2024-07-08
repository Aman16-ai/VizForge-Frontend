import { createSlice } from "@reduxjs/toolkit";

export const chartSlice = createSlice({
    name:"chart",
    initialState : {
        options : {
            xaxis : "",
            yaxis : "",
        },
        type: "bar"
    },
    reducers : {
        setChartOptions : (state,action) => {
            state.options = action.payload
        }
    }
})
export const selectChartOptions = (state) => state.chart.options
export const selectChartType = (state) => state.chart.type
export const {setChartOptions} = chartSlice.actions
export default chartSlice.reducer
