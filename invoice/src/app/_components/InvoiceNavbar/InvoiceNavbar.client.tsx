"use client";

import { useAppSelector } from "../../../../public/hooks";
import {
  AmountOfInvoices,
  Container,
  InvoiceText,
  TextContainer,
} from "./InvoiceNavbar.styles";

import { NavbarInteractions } from "./NavbarInteractions.client";

export const InvoiceNavbar = () => {
  const invoiceData = useAppSelector((state) => state.invoice.value);
  return (
    <Container availableInvoices={invoiceData.length !== 0}>
      <TextContainer>
        <InvoiceText>Invoice</InvoiceText>
        <AmountOfInvoices>{invoiceData.length} invoices</AmountOfInvoices>
      </TextContainer>
      <NavbarInteractions />
    </Container>
  );
};
