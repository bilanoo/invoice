import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customPalette: {
      mainPurple: string;
      lightPurple: string;
      white: string;
      backgroundColor: string;
      invoiceBackgroundColor: string;
      blueYonderToWhite: string;
    };
  }
  interface ThemeOptions {
    customPalette?: {
      mainPurple?: string;
      lightPurple?: string;
      white?: string;
      backgroundColor?: string;
      invoiceBackgroundColor?: string;
      blueYonderToWhite?: string;
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
    lightPurple: "#9277FF",
    invoiceBackgroundColor: mode === "light" ? "#FFF" : "#1E2139",
    blueYonderToWhite: mode === "light" ? "#858BB2" : "#FFF",
  },
});
