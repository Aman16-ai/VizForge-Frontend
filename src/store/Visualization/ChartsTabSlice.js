import { createSlice } from "@reduxjs/toolkit";

export const chartTabSlice = createSlice({
    name: 'chartTab',
    initialState : {
        chartTypesTabs : [
            'bar',
            'scatter'
        ],
        selectedChartTab : 'bar'
    },
    reducers : {
        setSelectedChartTab : (state,action) => {
            state.selectedChartTab = action.payload
        }
    }
})
export const selectSelectedChartTab = (state) => state.chartTab.selectedChartTab
export const selectChartTypesTabs = (state) => state.chartTab.chartTypesTabs
export const {setSelectedChartTab} = chartTabSlice.actions
export default chartTabSlice.reducer
