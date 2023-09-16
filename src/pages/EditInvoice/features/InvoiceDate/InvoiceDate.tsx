import { DatePicker } from "@mui/x-date-pickers";
import { Container, DescriptionText } from "./InvoiceDateStyles";
import { Dayjs } from "dayjs";

interface InvoiceDateProps {
  invoiceDate: Dayjs;
  handleChange: (value: Dayjs | null) => void;
}

export const InvoiceDate = ({
  invoiceDate,
  handleChange,
}: InvoiceDateProps) => {
  return (
    <Container>
      <DescriptionText>Invoice Date</DescriptionText>
      <DatePicker value={invoiceDate} onChange={handleChange} disabled />
    </Container>
  );
};
