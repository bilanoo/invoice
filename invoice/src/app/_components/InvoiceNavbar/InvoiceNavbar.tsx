import {
  AmountOfInvoices,
  Container,
  InvoiceText,
  TextContainer,
} from "./InvoiceNavbar.styles";

import { NavbarInteractions } from "./NavbarInteractions.client";

export const InvoiceNavbar = () => {
  return (
    <Container>
      <TextContainer>
        <InvoiceText>Invoice</InvoiceText>
        <AmountOfInvoices>No invoices</AmountOfInvoices>
      </TextContainer>
      <NavbarInteractions />
    </Container>
  );
};
