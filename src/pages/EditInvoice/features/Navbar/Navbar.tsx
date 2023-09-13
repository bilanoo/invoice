import { InvoiceStatus } from "../../../Homepage/features/InvoiceStatus/InvoiceStatus";
import {
  Container,
  DeleteInvoiceButton,
  EditInvoiceButton,
  InvoiceStatusContainer,
  MarkAsPaidButton,
  ModifyInvoiceContainer,
  StatusText,
} from "./NavbarStyles";

interface NavbarProps {
  status: string;
  markInvoiceAsPaid: () => void;
}

export const Navbar = ({ status, markInvoiceAsPaid }: NavbarProps) => {
  return (
    <Container>
      <StatusText>Status</StatusText>
      <InvoiceStatusContainer>
        <InvoiceStatus status={status} />
      </InvoiceStatusContainer>

      <ModifyInvoiceContainer>
        <EditInvoiceButton>Edit</EditInvoiceButton>
        <DeleteInvoiceButton>Delete</DeleteInvoiceButton>
        <MarkAsPaidButton
          disabled={status === "paid"}
          onClick={markInvoiceAsPaid}
        >
          Mark as Paid
        </MarkAsPaidButton>
      </ModifyInvoiceContainer>
    </Container>
  );
};
