import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customPalette: {
      mainPurple: string;
      white: string;
      backgroundColor: string;
    };
  }
  interface ThemeOptions {
    customPalette?: {
      mainPurple?: string;
      white?: string;
      backgroundColor?: string;
    };
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: mode === "light" ? "#F8F8FB" : "#141625",
      paper: "#373B53",
    },
    text: {
      primary: mode === "light" ? "#0C0E16" : "#FFF",
      secondary: mode === "light" ? "#888EB0" : "#DFE3FA",
    },
  },
  customPalette: {
    mainPurple: "#7C5DFA",
    white: "#FFF",
    backgroundColor: mode === "light" ? "#FFF" : "#252945",
  },
});
