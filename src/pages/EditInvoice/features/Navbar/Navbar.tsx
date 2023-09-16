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
