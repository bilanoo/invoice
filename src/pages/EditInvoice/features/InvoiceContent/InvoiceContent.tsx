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
        <ItemContainer>
          <ItemInformationContainer>
            <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
            <QuantityAndCost>1 x £ 156.00</QuantityAndCost>
          </ItemInformationContainer>
          <SmallText sx={{ marginRight: "24px" }}>£ 156.00</SmallText>
        </ItemContainer>
        <ItemContainer>
          <ItemInformationContainer>
            <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
            <QuantityAndCost>1 x £ 156.00</QuantityAndCost>
          </ItemInformationContainer>
          <SmallText sx={{ marginRight: "24px" }}>£ 156.00</SmallText>
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
