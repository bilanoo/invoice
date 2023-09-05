import EmptyIllustrator from "../assets/illustration-empty.svg";
import {
  Container,
  CreateNewInvoiceText,
  EmptyIllustratorImage,
  NoContentText,
} from "./EmptyInvoiceStyles";

export const EmptyInvoice = () => {
  return (
    <Container>
      <EmptyIllustratorImage src={EmptyIllustrator} alt="no invoices to show" />
      <NoContentText>There is nothing here</NoContentText>
      <CreateNewInvoiceText>
        Create an invoice by clicking the{" "}
        <span style={{ fontWeight: "bold" }}>New</span> button and get started
      </CreateNewInvoiceText>
    </Container>
  );
};
