import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isShow: false };

export const showModalNavbarSlice = createSlice({
  name: "showModalNavbar",
  initialState: initialStateValue,
  reducers: {
    setIsShowModalNavbar: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const showModalNavbarActions = showModalNavbarSlice.actions;

export default showModalNavbarSlice.reducer;
