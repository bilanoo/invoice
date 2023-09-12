import { useMemo, useState } from "react";
import { useAppSelector } from "../hooks";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "../../theme";
import { Container } from "../Homepage/HomepageStyles";
import { Header } from "../../Header/Header";
import { Link, useParams } from "react-router-dom";
import {
  ContentContainer,
  ModifyInvoiceActionContainer,
  PreviousPageButton,
  PreviousPageContainer,
} from "./EditInvoiceStyles";
import BackArrow from "../../assets/back-arrow-icon.svg";
import { Navbar } from "./features/Navbar/Navbar";
import { InvoiceContent } from "./features/InvoiceContent/InvoiceContent";
import {
  DeleteInvoiceButton,
  EditInvoiceButton,
  MarkAsPaidButton,
} from "./features/Navbar/NavbarStyles";

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
        <ContentContainer>
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

          <InvoiceContent />
        </ContentContainer>

        <ModifyInvoiceActionContainer>
          <EditInvoiceButton>Edit</EditInvoiceButton>
          <DeleteInvoiceButton sx={{ marginTop: "21px", marginBottom: "22px" }}>
            Delete
          </DeleteInvoiceButton>
          <MarkAsPaidButton
            disabled={invoice!.status === "paid"}
            sx={{ marginRight: "0 !important" }}
          >
            Mark as Paid
          </MarkAsPaidButton>
        </ModifyInvoiceActionContainer>
      </Container>
    </ThemeProvider>
  );
};
