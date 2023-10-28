import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setName, reset } = appSlice.actions;
export default appSlice.reducer;
