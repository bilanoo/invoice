import useWindowDimensions from "../../../../utils";
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
}

export const Navbar = ({ status }: NavbarProps) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusText>Status</StatusText>
      <InvoiceStatusContainer>
        <InvoiceStatus status={status} />
      </InvoiceStatusContainer>
      {width >= 768 && (
        <ModifyInvoiceContainer>
          <EditInvoiceButton>Edit</EditInvoiceButton>
          <DeleteInvoiceButton>Delete</DeleteInvoiceButton>
          <MarkAsPaidButton disabled={status === "paid"}>
            Mark as Paid
          </MarkAsPaidButton>
        </ModifyInvoiceContainer>
      )}
    </Container>
  );
};
