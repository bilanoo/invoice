import { useAppSelector } from "../../../hooks";
import { Invoice } from "./Invoice/Invoice";
import { Container } from "./InvoicesDetailStyles";

export const InvoiceDetail = () => {
  const invoiceData = useAppSelector((state) => state.invoice.value);
  return (
    <Container>
      {invoiceData.map((invoice) => (
        <Invoice
          key={invoice.id}
          invoiceId={invoice.id}
          clientName={invoice.clientName}
          dueDate={invoice.paymentDue}
          status={invoice.status}
          invoiceAmount={invoice.total}
        />
      ))}

      {/* <Invoice
        invoiceId={"2"}
        clientName={"blal"}
        dueDate={"2021-08-19"}
        status={"paid"}
        invoiceAmount={100}
      /> */}
    </Container>
  );
};
