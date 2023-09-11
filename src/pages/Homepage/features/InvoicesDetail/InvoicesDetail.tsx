import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { Invoice } from "./Invoice/Invoice";
import { Container } from "./InvoicesDetailStyles";

export const InvoiceDetail = () => {
  const invoiceData = useAppSelector((state) => state.invoice.value);

  return (
    <Container>
      {invoiceData.map((invoice) => (
        <Link
          to={`/edit-invoice/${invoice.id}`}
          key={invoice.id}
          style={{ textDecoration: "none" }}
        >
          <Invoice
            key={invoice.id}
            invoiceId={invoice.id}
            clientName={invoice.clientName}
            dueDate={invoice.paymentDue}
            status={invoice.status}
            invoiceAmount={invoice.total}
          />
        </Link>
      ))}
    </Container>
  );
};
