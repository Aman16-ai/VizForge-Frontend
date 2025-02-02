import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workspaces: []
};

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState,
    reducers: {
        addAllWorkspaces: (state, action) => {
            state.workspaces = action.payload;
        },
        addWorkspace: (state, action) => {
            state.workspaces.push(action.payload);
        },
        removeWorkspace: (state, action) => {
            console.log(action.payload)
            state.workspaces = state.workspaces.filter(workspace => workspace._id !== action.payload);
        },
        updateWorkspace: (state, action) => {
            const index = state.workspaces.findIndex(workspace => workspace._id === action.payload);
            if (index !== -1) {
                state.workspaces[index] = action.payload;
            }
        }
    }
});

export const { addAllWorkspaces,addWorkspace, removeWorkspace, updateWorkspace } = workspacesSlice.actions;
export const selectWorkspaces = state => state.workspaces.workspaces;

export default workspacesSlice.reducer;