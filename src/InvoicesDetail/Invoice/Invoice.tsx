import {
  Ball,
  Container,
  DueDateAndPaymentInformation,
  DueDateText,
  IdAndNameContainer,
  InvoiceAmount,
  InvoiceId,
  InvoicePaymentInformation,
  InvoiceStatus,
  SmallInformationText,
  StatusText,
} from "./SingleInvoiceStyles";

export const Invoice = () => {
  return (
    <Container>
      <IdAndNameContainer>
        <InvoiceId>
          <span style={{ color: "#7E88C3" }}>#</span>
          RT3080
        </InvoiceId>
        <SmallInformationText>Jensen huang</SmallInformationText>
      </IdAndNameContainer>
      <InvoicePaymentInformation>
        <DueDateAndPaymentInformation>
          <DueDateText>Due 20 Sep 2021</DueDateText>
          <InvoiceAmount>£ 1,800.90</InvoiceAmount>
        </DueDateAndPaymentInformation>
        <InvoiceStatus>
          <Ball />
          <StatusText>Paid</StatusText>
        </InvoiceStatus>
      </InvoicePaymentInformation>
    </Container>
  );
};
