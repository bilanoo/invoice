import { DatePicker } from "@mui/x-date-pickers";
import { Container, DescriptionText } from "./InvoiceDateStyles";
import { Dayjs } from "dayjs";

interface InvoiceDateProps {
  invoiceDate: Dayjs;
  handleChange: (value: Dayjs | null) => void;
  disabled: boolean;
}

export const InvoiceDate = ({
  invoiceDate,
  handleChange,
  disabled,
}: InvoiceDateProps) => {
  return (
    <Container>
      <DescriptionText>Invoice Date</DescriptionText>
      <DatePicker
        value={invoiceDate}
        onChange={handleChange}
        disabled={disabled}
      />
    </Container>
  );
};
