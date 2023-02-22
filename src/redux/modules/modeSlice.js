import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "FOLD" };

const modeSlice = createSlice({
  name: "modeSlice",
  initialState,
  reducers: {
    modeChange(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { modeChange } = modeSlice.actions;
export default modeSlice.reducer;
