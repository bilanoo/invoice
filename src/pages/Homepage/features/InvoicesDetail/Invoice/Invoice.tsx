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

interface InvoiceProps {
  invoiceId: string;
  clientName: string;
  dueDate: string;
  invoiceAmount: number;
  status: string;
}

export const Invoice = ({
  invoiceId,
  clientName,
  dueDate,
  invoiceAmount,
  status,
}: InvoiceProps) => {
  return (
    <Container>
      <IdAndNameContainer>
        <InvoiceId>
          <span style={{ color: "#7E88C3" }}>#</span>
          {invoiceId}
        </InvoiceId>
        <SmallInformationText>{clientName}</SmallInformationText>
      </IdAndNameContainer>
      <InvoicePaymentInformation>
        <DueDateAndPaymentInformation>
          <DueDateText>Due {dueDate}</DueDateText>
          <InvoiceAmount>£ {invoiceAmount}</InvoiceAmount>
        </DueDateAndPaymentInformation>
        <InvoiceStatus status={status}>
          <Ball status={status} />
          <StatusText status={status}>{status}</StatusText>
        </InvoiceStatus>
      </InvoicePaymentInformation>
    </Container>
  );
};
