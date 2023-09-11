import { useMemo, useState } from "react";
import { useAppSelector } from "../hooks";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "../../theme";
import { Container } from "../Homepage/HomepageStyles";
import { Header } from "../../Header/Header";
import { Link, useParams } from "react-router-dom";
import { PreviousPageButton, PreviousPageContainer } from "./EditInvoiceStyles";
import BackArrow from "../../assets/back-arrow-icon.svg";
import { Navbar } from "./features/Navbar/Navbar";

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

  console.log(invoice);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <PreviousPageContainer>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <PreviousPageButton
              startIcon={<img src={BackArrow} alt="previous page button" />}
            >
              Go Back
            </PreviousPageButton>
          </Link>
        </PreviousPageContainer>
        <Navbar status={invoice!.status} />
      </Container>
    </ThemeProvider>
  );
};
