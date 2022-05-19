import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isShow: false };

export const showModalHelpSlice = createSlice({
  name: "showModalHelp",
  initialState: initialStateValue,
  reducers: {
    setIsShowModalHelp: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const showModalHelpActions = showModalHelpSlice.actions;

export default showModalHelpSlice.reducer;
