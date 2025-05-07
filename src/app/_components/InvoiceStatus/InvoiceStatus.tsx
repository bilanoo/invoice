import {
  Ball,
  InvoiceStatusContainer,
  StatusText,
} from "./InvoiceStatus.styles";

interface InvoiceStatusProps {
  status: string;
}

export const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
  return (
    <InvoiceStatusContainer status={status}>
      <Ball status={status} />
      <StatusText status={status}>{status}</StatusText>
    </InvoiceStatusContainer>
  );
};
