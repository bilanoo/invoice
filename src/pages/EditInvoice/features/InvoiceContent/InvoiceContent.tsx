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
} from "./InvoiceContentStyles";

export const InvoiceContent = () => {
  return (
    <ContentContainer>
      <GenericTextContainer>
        <SmallText>
          <span style={{ color: "#7E88C3" }}>#</span>
          XM9141
        </SmallText>
        <Description>Graphic Design</Description>
      </GenericTextContainer>

      <ClientAddress>
        <Description>19 Union Terrace</Description>
        <Description>London</Description>
        <Description>E1 3EZ</Description>
        <Description>United Kingdom</Description>
      </ClientAddress>

      <InvoiceDatesAndBillingInformationContainer>
        <PaymentDatesContainer>
          <GenericTextContainer>
            <Description sx={{ marginBottom: "13px" }}>
              Invoice Date
            </Description>
            <SmallText>21 Aug 2021</SmallText>
          </GenericTextContainer>
          <GenericTextContainer sx={{ paddingTop: "0 !important" }}>
            <Description sx={{ marginBottom: "13px" }}>Payment Due</Description>
            <SmallText>20 Sep 2021</SmallText>
          </GenericTextContainer>
        </PaymentDatesContainer>

        <GenericTextContainer sx={{ marginLeft: "62px" }}>
          <Description sx={{ marginBottom: "13px" }}>Bill To</Description>
          <SmallText sx={{ marginBottom: "7px" }}>Alex Grim</SmallText>
          <Description>84 Church Way</Description>
          <Description>Bradford</Description>
          <Description>BD1 9PB</Description>
          <Description>United Kingdom</Description>
        </GenericTextContainer>

        <GenericTextContainer sx={{ paddingTop: "0 !important" }}>
          <Description sx={{ marginBottom: "13px" }}>Sent to</Description>
          <SmallText>alexgrim@mail.com</SmallText>
        </GenericTextContainer>
      </InvoiceDatesAndBillingInformationContainer>

      <InvoiceConstBreakdownContainer>
        <ItemContainer>
          <GenericTextContainer
            sx={{ padding: "0 !important", marginLeft: "24px" }}
          >
            <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
            <Description sx={{ fontWeight: "700 !important" }}>
              1 x £ 156.00
            </Description>
          </GenericTextContainer>
          <SmallText sx={{ marginRight: "24px" }}>£ 156.00</SmallText>
        </ItemContainer>
        <ItemContainer>
          <GenericTextContainer
            sx={{ padding: "0 !important", marginLeft: "24px" }}
          >
            <SmallText sx={{ marginBottom: "8px" }}>Banner Design</SmallText>
            <Description sx={{ fontWeight: "700 !important" }}>
              1 x £ 156.00
            </Description>
          </GenericTextContainer>
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
