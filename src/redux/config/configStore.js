import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../modules/modeSlice";

const store = configureStore({ reducer: { modeSlice } });

export default store;
