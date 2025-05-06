"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ThemeProvider, createTheme } from "@mui/material";

import { redirect, useParams } from "next/navigation";
import {
  ContentContainer,
  ModifyInvoiceActionContainer,
} from "./EditInvoice.styles";
import { Invoice } from "../../../data";
import { getDesignTokens } from "@/theme/theme";
import { Container } from "@/app/Homepage.styles";
import { Header } from "@/app/_components/Header/Header.client";
import { BackToHomePage } from "@/app/_components/BackToHomePage/BackToHomePage";
import { EditOrAddNewForm } from "@/app/_components/EditOrAddNewInvoiceForm/EditOrAddNewForm";
import { InvoiceContent } from "@/app/_components/InvoiceContent/InvoiceContent";
import { InvoiceActionsForModification } from "@/app/_components/InvoiceModificationActions/InvoiceActionsForModification";
import { Navbar } from "@/app/_components/Navbar/Navbar";

export default function Page() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = redirect;

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
    navigate("/");
    dispatch({ type: "invoice/delete", payload: id });
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
}
