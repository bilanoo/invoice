import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Header } from "./Header/Header";
import { useMemo, useState } from "react";
import { PaletteMode, createTheme } from "@mui/material";
import { getDesignTokens } from "./theme";

function App() {
  const [lightOrDarkMode, setLightOrDarkMode] = useState<PaletteMode>("light");

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>Invoice App</h1>
    </ThemeProvider>
  );
}

export default App;
