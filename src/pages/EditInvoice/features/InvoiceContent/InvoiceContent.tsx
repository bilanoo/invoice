import { Box } from "@mui/material";
import { SmallText } from "../../../Homepage/features/InvoicesDetail/Invoice/SingleInvoiceStyles";

import {
  ClientAddress,
  ContentContainer,
  Description,
  GenericTextContainer,
  InvoiceDatesAndBillingInformationContainer,
  InvoiceConstBreakdownContainer,
  ItemContainer,
  PaymentDatesContainer,
  InvoiceTotalContainer,
  Total,
  AmountDue,
  AmountDueContainer,
  ClientInformationContainer,
  CityOrPostCode,
  SentToContainer,
  PaymentDueContainer,
  ItemInformationContainer,
  QuantityAndCost,
  ItemHeading,
  HeadingsContainer,
  ItemName,
  QuantityHeading,
  PriceHeading,
  TotalHeading,
  PriceValue,
  QuantityValue,
} from "./InvoiceContentStyles";

export const InvoiceContent = () => {
  return (
    <ContentContainer>
      <ClientInformationContainer>
        <GenericTextContainer sx={{ width: "fit-content" }}>
          <SmallText>
            <span style={{ color: "#7E88C3" }}>#</span>
            XM9141
          </SmallText>
          <Description>Graphic Design</Description>
        </GenericTextContainer>

        <ClientAddress>
          <Description>19 Union Terrace</Description>
          <CityOrPostCode>London</CityOrPostCode>
          <CityOrPostCode>E1 3EZ</CityOrPostCode>
          <Description>United Kingdom</Description>
        </ClientAddress>
      </ClientInformationContainer>

      <InvoiceDatesAndBillingInformationContainer>
        <PaymentDatesContainer>
          <GenericTextContainer>
            <Description sx={{ marginBottom: "13px" }}>
              Invoice Date
            </Description>
            <SmallText>21 Aug 2021</SmallText>
          </GenericTextContainer>
          <PaymentDueContainer>
            <Description sx={{ marginBottom: "13px" }}>Payment Due</Description>
            <SmallText>20 Sep 2021</SmallText>
          </PaymentDueContainer>
        </PaymentDatesContainer>

        <GenericTextContainer sx={{ marginLeft: "62px" }}>
          <Description sx={{ marginBottom: "13px" }}>Bill To</Description>
          <SmallText sx={{ marginBottom: "7px" }}>Alex Grim</SmallText>
          <Description>84 Church Way</Description>
          <Description>Bradford</Description>
          <Description>BD1 9PB</Description>
          <Description>United Kingdom</Description>
        </GenericTextContainer>

        <SentToContainer>
          <Description sx={{ marginBottom: "13px" }}>Sent to</Description>
          <SmallText>alexgrim@mail.com</SmallText>
        </SentToContainer>
      </InvoiceDatesAndBillingInformationContainer>

      <InvoiceConstBreakdownContainer>
        <HeadingsContainer>
          <ItemName>Item Name</ItemName>
          <QuantityHeading>QTY.</QuantityHeading>
          <PriceHeading>Price</PriceHeading>
          <TotalHeading>Total</TotalHeading>
        </HeadingsContainer>
        <ItemContainer>
          <ItemInformationContainer>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
              <QuantityAndCost>1 x £ 156.00</QuantityAndCost>
            </Box>
            <QuantityValue>1</QuantityValue>
            <PriceValue>£ 156.00</PriceValue>
            <SmallText sx={{ marginRight: "32px" }}>£ 156.00</SmallText>
          </ItemInformationContainer>
        </ItemContainer>
        <ItemContainer>
          <ItemInformationContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
              <QuantityAndCost>1 x £ 156.00</QuantityAndCost>
            </div>
            <QuantityValue>1</QuantityValue>
            <PriceValue>£ 156.00</PriceValue>
            <SmallText sx={{ marginRight: "32px" }}>£ 156.00</SmallText>
          </ItemInformationContainer>
        </ItemContainer>

        <InvoiceTotalContainer>
          <AmountDueContainer>
            <AmountDue>Amount Due</AmountDue>
            <Total>£ 560.00</Total>
          </AmountDueContainer>
        </InvoiceTotalContainer>
      </InvoiceConstBreakdownContainer>
    </ContentContainer>
  );
};
