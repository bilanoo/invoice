import { Metadata } from "next";
import { Container, InvoiceContainer } from "./Homepage.styles";
import { Header } from "./_components/Header/Header.client";

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Create, Read, Update, Delete invoices",
};
export default function Home() {
  return (
    <Container>
      <Header />
      <InvoiceContainer>
        <h3>num of invoices</h3>
      </InvoiceContainer>
    </Container>
  );
}
