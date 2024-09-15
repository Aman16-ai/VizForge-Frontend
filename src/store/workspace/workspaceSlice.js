import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState: {
    workspace : null
  },
  reducers: {
    setWorkSpace : (state,action) => {
        state.workspace = action.payload
    }
  },
});

export const selectWorkspace = (state) => state.workspace.workspace;
export const { setWorkSpace } = workspaceSlice.actions;
export default workspaceSlice.reducer;