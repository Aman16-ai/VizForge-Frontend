import { createSlice } from "@reduxjs/toolkit";

export const attributesSlice = createSlice({
    name:"attributes",
    initialState : {
        options : {
            xaxis : "",
            yaxis : "",
        }
    },
    reducers : {
        setAttributeValue : (state,action) => {
            state.options = {...state.options,[action.payload.name]:action.payload.value}
            console.log('att slice state',state.options)
        }
    }
})
export const selectAttributes = (state) => state.attributes.options
export const {setAttributeValue} = attributesSlice.actions
export default attributesSlice.reducer
