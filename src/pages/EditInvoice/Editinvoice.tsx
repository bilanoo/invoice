import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "../../theme";
import { Container } from "../Homepage/HomepageStyles";
import { Header } from "../../Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ContentContainer,
  ModifyInvoiceActionContainer,
  PreviousPageButton,
  PreviousPageContainer,
} from "./EditInvoiceStyles";
import BackArrow from "../../assets/back-arrow-icon.svg";
import { Navbar } from "./features/Navbar/Navbar";
import { InvoiceContent } from "./features/InvoiceContent/InvoiceContent";
import { InvoiceActionsForModification } from "./features/InvoiceModificationActions/InvoiceActionsForModification";
import { Invoice } from "../../data";

export const EditInvoice = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allInvoicesData = useAppSelector((state) => state.invoice.value);
  const [invoice, setInvoice] = useState<Invoice>(
    allInvoicesData.find((invoice) => invoice.id === id)!
  );

  const lightOrDarkMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );
  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(getDesignTokens(lightOrDarkMode)),
    [lightOrDarkMode]
  );

  const markInvoiceAsPaid = () => {
    setInvoice((prevState) => ({
      ...prevState,
      status: "paid",
    }));
  };

  const deleteInvoice = () => {
    dispatch({ type: "invoice/delete", payload: id });
    navigate("/");
  };

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
          <Navbar
            status={invoice!.status}
            markInvoiceAsPaid={markInvoiceAsPaid}
            deleteInvoice={deleteInvoice}
          />

          <InvoiceContent invoice={invoice} />
        </ContentContainer>

        <ModifyInvoiceActionContainer>
          <InvoiceActionsForModification
            status={invoice.status}
            markInvoiceAsPaid={markInvoiceAsPaid}
            deleteInvoice={deleteInvoice}
          />
        </ModifyInvoiceActionContainer>
      </Container>
    </ThemeProvider>
  );
};
