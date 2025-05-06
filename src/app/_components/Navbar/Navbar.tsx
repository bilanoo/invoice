import { InvoiceActionsForModification } from "../InvoiceModificationActions/InvoiceActionsForModification";
import { InvoiceStatus } from "../InvoiceStatus/InvoiceStatus";
import {
  Container,
  InvoiceStatusContainer,
  ModifyInvoiceContainer,
  StatusText,
} from "./Navbar.styles";

interface NavbarProps {
  status: string;
  markInvoiceAsPaid: () => void;
  deleteInvoice: () => void;
  handleEditInvoiceClick: () => void;
}

export const Navbar = ({
  status,
  markInvoiceAsPaid,
  deleteInvoice,
  handleEditInvoiceClick,
}: NavbarProps) => {
  return (
    <Container>
      <StatusText>Status</StatusText>
      <InvoiceStatusContainer>
        <InvoiceStatus status={status} />
      </InvoiceStatusContainer>

      <ModifyInvoiceContainer>
        <InvoiceActionsForModification
          handleEditInvoiceClick={handleEditInvoiceClick}
          status={status}
          markInvoiceAsPaid={markInvoiceAsPaid}
          deleteInvoice={deleteInvoice}
        />
      </ModifyInvoiceContainer>
    </Container>
  );
};
