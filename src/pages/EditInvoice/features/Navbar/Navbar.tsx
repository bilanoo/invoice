import { InvoiceStatus } from "../../../Homepage/features/InvoiceStatus/InvoiceStatus";
import { InvoiceActionsForModification } from "../InvoiceModificationActions/InvoiceActionsForModification";
import {
  Container,
  InvoiceStatusContainer,
  ModifyInvoiceContainer,
  StatusText,
} from "./NavbarStyles";

interface NavbarProps {
  status: string;
  markInvoiceAsPaid: () => void;
  deleteInvoice: () => void;
}

export const Navbar = ({
  status,
  markInvoiceAsPaid,
  deleteInvoice,
}: NavbarProps) => {
  return (
    <Container>
      <StatusText>Status</StatusText>
      <InvoiceStatusContainer>
        <InvoiceStatus status={status} />
      </InvoiceStatusContainer>

      <ModifyInvoiceContainer>
        <InvoiceActionsForModification
          status={status}
          markInvoiceAsPaid={markInvoiceAsPaid}
          deleteInvoice={deleteInvoice}
        />
      </ModifyInvoiceContainer>
    </Container>
  );
};
