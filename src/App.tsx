import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Header } from "./Header/Header";
import { useMemo, useState } from "react";
import { Box, PaletteMode, createTheme } from "@mui/material";
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
      <div className="content-container">
        <Header />
        <h1>Invoice App</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
