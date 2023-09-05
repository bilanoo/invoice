import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme";
import { Header } from "../../Header/Header";
import { Container, InvoiceContainer } from "./HomepageStyles";
import { InvoiceNavbar } from "../../InvoiceNavbar/InvoiceNavbar";
import { EmptyInvoice } from "../../EmptyInvoice/EmptyInvoice";

export const Homepage = () => {
  const [lightOrDarkMode, setLightOrDarkMode] = useState<PaletteMode>("light");

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <InvoiceContainer>
          <InvoiceNavbar />
          <EmptyInvoice />
        </InvoiceContainer>
      </Container>
    </ThemeProvider>
  );
};
