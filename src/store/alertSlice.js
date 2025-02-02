import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    options: {
      severity: "success",
      variant: "filled",
      open: false,
      message: "workspace deleted successfully",
    },
  },
  reducers: {
    updateAlert: (state, action) => {
      console.log(action);
      state.options = { ...state.options, ...action.payload };
      console.log("state ----------> ", state);
    },
  },
});

export const selectAlertOptions = (state) => state.alert.options;
export const { updateAlert } = alertSlice.actions;
export default alertSlice.reducer;