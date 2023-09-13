import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SmallText } from "../../../Homepage/features/InvoicesDetail/Invoice/SingleInvoiceStyles";

import {
  ClientAddress,
  ContentContainer,
  Description,
  GenericTextContainer,
  InvoiceDatesAndBillingInformationContainer,
  InvoiceConstBreakdownContainer,
  PaymentDatesContainer,
  InvoiceTotalContainer,
  Total,
  AmountDue,
  AmountDueContainer,
  ClientInformationContainer,
  CityOrPostCode,
  SentToContainer,
  PaymentDueContainer,
  QuantityAndCost,
  ItemTableCell,
  TableHeading,
  HeadingRow,
  GenericTableCell,
  TotalValueTableCell,
} from "./InvoiceContentStyles";
import { Invoice } from "../../../../data";

interface InvoiceContentProps {
  invoice: Invoice;
}

export const InvoiceContent = ({ invoice }: InvoiceContentProps) => {
  return (
    <ContentContainer>
      <ClientInformationContainer>
        <GenericTextContainer sx={{ width: "fit-content" }}>
          <SmallText>
            <span style={{ color: "#7E88C3" }}>#</span>
            {invoice.id}
          </SmallText>
          <Description>{invoice.description}</Description>
        </GenericTextContainer>

        <ClientAddress>
          <Description>{invoice.clientAddress.street}</Description>
          <CityOrPostCode>{invoice.clientAddress.city}</CityOrPostCode>
          <CityOrPostCode>{invoice.clientAddress.postCode}</CityOrPostCode>
          <CityOrPostCode>{invoice.clientAddress.country}</CityOrPostCode>
        </ClientAddress>
      </ClientInformationContainer>

      <InvoiceDatesAndBillingInformationContainer>
        <PaymentDatesContainer>
          <GenericTextContainer>
            <Description sx={{ marginBottom: "13px" }}>
              Invoice Date
            </Description>
            <SmallText>{invoice.createdAt}</SmallText>
          </GenericTextContainer>
          <PaymentDueContainer>
            <Description sx={{ marginBottom: "13px" }}>Payment Due</Description>
            <SmallText>{invoice.paymentDue}</SmallText>
          </PaymentDueContainer>
        </PaymentDatesContainer>

        <GenericTextContainer sx={{ marginLeft: "62px" }}>
          <Description sx={{ marginBottom: "13px" }}>Bill To</Description>
          <SmallText sx={{ marginBottom: "7px" }}>
            {invoice.clientName}
          </SmallText>
          <Description>{invoice.senderAddress.street}</Description>
          <Description>{invoice.senderAddress.city}</Description>
          <Description>{invoice.senderAddress.postCode}</Description>
          <Description>{invoice.senderAddress.country}</Description>
        </GenericTextContainer>

        <SentToContainer>
          <Description sx={{ marginBottom: "13px" }}>Sent to</Description>
          <SmallText>{invoice.clientEmail}</SmallText>
        </SentToContainer>
      </InvoiceDatesAndBillingInformationContainer>

      <InvoiceConstBreakdownContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <HeadingRow>
                <TableHeading>Item Name</TableHeading>
                <TableHeading align="right">QTY.</TableHeading>
                <TableHeading align="right">Price</TableHeading>
                <TableHeading align="right">Total</TableHeading>
              </HeadingRow>
            </TableHead>
            <TableBody>
              {invoice.items.map((item) => (
                <TableRow key={item.name}>
                  <ItemTableCell>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "inherit",
                      }}
                    >
                      <SmallText sx={{ marginBottom: "8px" }}>
                        {item.name}
                      </SmallText>
                      <QuantityAndCost>1 x £ {item.price}</QuantityAndCost>
                    </Box>
                  </ItemTableCell>
                  <GenericTableCell align="right">
                    {item.quantity}
                  </GenericTableCell>
                  <GenericTableCell align="right">
                    £ {item.price}
                  </GenericTableCell>
                  <TotalValueTableCell>£ {item.total}</TotalValueTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <InvoiceTotalContainer>
          <AmountDueContainer>
            <AmountDue>Amount Due</AmountDue>
            <Total>£ {invoice.total}</Total>
          </AmountDueContainer>
        </InvoiceTotalContainer>
      </InvoiceConstBreakdownContainer>
    </ContentContainer>
  );
};
