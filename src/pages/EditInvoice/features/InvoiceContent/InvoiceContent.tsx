import { InvoiceId } from "../../../Homepage/features/InvoicesDetail/Invoice/SingleInvoiceStyles";

import {
  ClientAddress,
  ContentContainer,
  Description,
  IdAndDescriptionContainer,
} from "./InvoiceContentStyles";

export const InvoiceContent = () => {
  return (
    <ContentContainer>
      <IdAndDescriptionContainer>
        <InvoiceId>
          <span style={{ color: "#7E88C3" }}>#</span>
          XM9141
        </InvoiceId>
        <Description>Graphic Design</Description>
      </IdAndDescriptionContainer>

      <ClientAddress>
        <Description>19 Union Terrace</Description>
        <Description>London</Description>
        <Description>E1 3EZ</Description>
        <Description>United Kingdom</Description>
      </ClientAddress>
    </ContentContainer>
  );
};
