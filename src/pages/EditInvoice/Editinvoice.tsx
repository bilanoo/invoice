import { useMemo, useState } from "react";
import { useAppSelector } from "../hooks";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "../../theme";
import { Container } from "../Homepage/HomepageStyles";
import { Header } from "../../Header/Header";
import { useParams } from "react-router-dom";

export const EditInvoice = () => {
  const { id } = useParams();

  const allInvoicesData = useAppSelector((state) => state.invoice.value);
  const [invoice, setInvoice] = useState(
    allInvoicesData.find((invoice) => invoice.id === id)
  );

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
      </Container>
    </ThemeProvider>
  );
};
