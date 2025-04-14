import { createSlice } from "@reduxjs/toolkit";

export const GlobalModalSlice = createSlice({
  name: "globalModal",
  initialState: {
    isOpen: false,
    type: null,
    data: null,
  },
  reducers: {
    openGlobalModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
    closeGlobalModal: (state) => {
      state.isOpen = false;
      state.type = null;
      state.data = null;
    },
  },
});

export const { openGlobalModal, closeGlobalModal } = GlobalModalSlice.actions;
export const selectGlobalModal = (state) => state.globalModal;  
export default GlobalModalSlice.reducer;
