import { InvoiceStatus } from "../../InvoiceStatus/InvoiceStatus";
import {
  Container,
  DueDateAndPaymentInformation,
  DueDateText,
  IdAndNameContainer,
  InvoiceAmount,
  SmallText,
  InvoicePaymentInformation,
  SmallInformationText,
} from "./Invoice.styles";

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
        <SmallText>
          <span style={{ color: "#7E88C3" }}>#</span>
          {invoiceId}
        </SmallText>
        <SmallInformationText>{clientName}</SmallInformationText>
      </IdAndNameContainer>
      <InvoicePaymentInformation>
        <DueDateAndPaymentInformation>
          <DueDateText>Due {dueDate}</DueDateText>
          <InvoiceAmount>£ {invoiceAmount}</InvoiceAmount>
        </DueDateAndPaymentInformation>
        <InvoiceStatus status={status} />
      </InvoicePaymentInformation>
    </Container>
  );
};
