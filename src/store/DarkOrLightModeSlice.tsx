"use client";

import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface DarkOrLightModeState {
  value: PaletteMode;
}

const initialState: DarkOrLightModeState = {
  value: "light",
};

export const darkOrLightModeSlice = createSlice({
  name: "darkOrLightMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = darkOrLightModeSlice.actions;

export const selectMode = (state: RootState) => state.darkOrLightMode.value;

export default darkOrLightModeSlice.reducer;
