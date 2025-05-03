import { Metadata } from "next";
import { Container, InvoiceContainer } from "./Homepage.styles";
import { Header } from "./_components/Header/Header.client";
import { InvoiceNavbar } from "./_components/InvoiceNavbar/InvoiceNavbar";

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Create, Read, Update, Delete invoices",
};
export default function Home() {
  return (
    <Container>
      <Header />
      <InvoiceContainer>
        <InvoiceNavbar />
      </InvoiceContainer>
    </Container>
  );
}
