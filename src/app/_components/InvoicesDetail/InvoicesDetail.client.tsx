"use client";

import Link from "next/link";
import { useAppSelector } from "../../../store/hooks";
import { Invoice } from "./Invoice/Invoice";
import { Container } from "./InvoicesDetail.styles";

export const InvoiceDetail = () => {
  const invoiceData = useAppSelector((state) => state.invoice.value);

  return (
    <Container>
      {invoiceData.map((invoice) => (
        <Link
          href={`/edit-invoice/${invoice.id}`}
          key={invoice.id}
          style={{
            textDecoration: "none",
          }}
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
