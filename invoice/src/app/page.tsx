"use client";

import { Container, InvoiceContainer } from "./Homepage.styles";
import { Header } from "./_components/Header/Header.client";
import { InvoiceNavbar } from "./_components/InvoiceNavbar/InvoiceNavbar.client";
import { useAppSelector } from "@/store/hooks";
import { EmptyInvoice } from "./_components/EmptyInvoice/EmptyInvoice";
import { InvoiceDetail } from "./_components/InvoicesDetail/InvoicesDetail.client";

export default function Home() {
  const invoiceData = useAppSelector((state) => state.invoice.value);

  return (
    <Container>
      <Header />
      <InvoiceContainer>
        <InvoiceNavbar />
        {invoiceData.length === 0 ? <EmptyInvoice /> : <InvoiceDetail />}
      </InvoiceContainer>
    </Container>
  );
}
