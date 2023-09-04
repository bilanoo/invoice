import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: mode === "light" ? "#F8F8FB" : "#141625",
      paper: "#373B53",
    },
    text: {
      primary: mode === "light" ? "#0C0E16" : "#FFF",
    },
  },
});
