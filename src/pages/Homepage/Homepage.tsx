import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "../../theme";
import { Header } from "../../Header/Header";
import { Container, InvoiceContainer } from "./HomepageStyles";
import { InvoiceNavbar } from "../../InvoiceNavbar/InvoiceNavbar";
import { EmptyInvoice } from "../../EmptyInvoice/EmptyInvoice";
import { InvoiceDetail } from "./features/InvoicesDetail/InvoicesDetail";
import { useAppSelector } from "../hooks";

export const Homepage = () => {
  const lightOrDarkMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );

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
          {/* <EmptyInvoice /> */}
          <InvoiceDetail />
        </InvoiceContainer>
      </Container>
    </ThemeProvider>
  );
};
