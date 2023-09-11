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
      grapefruitRed: string;
      lightSalmonPink: string;
      tropicalIndigo: string;
      backgroundColorDraftInvoice: string;
      backgroundColorPendingInvoice: string;
      backgroundColorPaidInvoice: string;
      ghostWhiteToLightBlue: string;
      darkBlueYonderToLavender: string;
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
      grapefruitRed?: string;
      lightSalmonPink?: string;
      tropicalIndigo?: string;
      backgroundColorDraftInvoice?: string;
      backgroundColorPendingInvoice?: string;
      backgroundColorPaidInvoice?: string;
      ghostWhiteToLightBlue?: string;
      darkBlueYonderToLavender?: string;
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
    darkBlueYonderToLavender: mode === "light" ? "#7E88C3" : "#DFE3FA",
    ghostWhiteToLightBlue: mode === "light" ? "#F9FAFE" : "#252945",
    grapefruitRed: "#EC5757",
    lightSalmonPink: "#FF9797",
    tropicalIndigo: "#9277FF",
    backgroundColorDraftInvoice: mode === "light" ? "#F4F4F5" : "#292C44",
    backgroundColorPendingInvoice: mode === "light" ? "#FFF9F1" : "#2B2736",
    backgroundColorPaidInvoice: mode === "light" ? "#F4FDFA" : "#1F2B3F",
  },
});
