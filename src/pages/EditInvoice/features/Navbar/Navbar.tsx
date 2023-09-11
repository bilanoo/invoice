import { InvoiceStatus } from "../../../Homepage/features/InvoiceStatus/InvoiceStatus";
import { Container, StatusText } from "./NavbarStyles";

interface NavbarProps {
  status: string;
}

export const Navbar = ({ status }: NavbarProps) => {
  return (
    <Container>
      <StatusText>Status</StatusText>
      <InvoiceStatus status={status} />
    </Container>
  );
};
