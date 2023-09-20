import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "../../theme";
import { Container } from "../Homepage/HomepageStyles";
import { Header } from "../../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  ContentContainer,
  ModifyInvoiceActionContainer,
} from "./EditInvoiceStyles";
import { Navbar } from "./features/Navbar/Navbar";
import { InvoiceContent } from "./features/InvoiceContent/InvoiceContent";
import { InvoiceActionsForModification } from "./features/InvoiceModificationActions/InvoiceActionsForModification";
import { Invoice } from "../../data";
import { BackToHomePage } from "./features/BackToHomePage/BackToHomePage";
import { EditOrAddNewForm } from "./features/EditOrAddNewForm/EditOrAddNewForm";

export const EditInvoice = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allInvoicesData = useAppSelector((state) => state.invoice.value);
  const [invoice, setInvoice] = useState<Invoice>(
    allInvoicesData.find((invoice: Invoice) => invoice.id === id)!
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const handleEditInvoiceClick = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setInvoice(allInvoicesData.find((invoice: Invoice) => invoice.id === id)!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInvoicesData]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <ContentContainer>
          <BackToHomePage isDrawerOpen={false} />
          <Navbar
            handleEditInvoiceClick={handleEditInvoiceClick}
            status={invoice!.status}
            markInvoiceAsPaid={markInvoiceAsPaid}
            deleteInvoice={deleteInvoice}
          />

          <EditOrAddNewForm
            editingOrCreatingAnInvoice="edit"
            invoiceData={invoice}
            isDrawerOpen={isDrawerOpen}
            closeDrawer={closeDrawer}
          />
          <InvoiceContent invoice={invoice} />
        </ContentContainer>

        <ModifyInvoiceActionContainer>
          <InvoiceActionsForModification
            status={invoice.status}
            markInvoiceAsPaid={markInvoiceAsPaid}
            deleteInvoice={deleteInvoice}
            handleEditInvoiceClick={handleEditInvoiceClick}
          />
        </ModifyInvoiceActionContainer>
      </Container>
    </ThemeProvider>
  );
};
