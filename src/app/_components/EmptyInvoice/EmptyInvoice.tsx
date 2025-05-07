import EmptyIllustrator from "../../../../public/illustration-empty.svg";
import {
  Container,
  CreateNewInvoiceText,
  EmptyIllustratorImage,
  NoContentText,
} from "./EmptyInvoice.styles";

export const EmptyInvoice = () => {
  return (
    <Container>
      <EmptyIllustratorImage src={EmptyIllustrator} alt="No invoices to show" />
      <NoContentText>There is nothing here</NoContentText>
      <CreateNewInvoiceText>
        Create an invoice by clicking the{" "}
        <span style={{ fontWeight: "bold" }}>New</span> button and get started
      </CreateNewInvoiceText>
    </Container>
  );
};
