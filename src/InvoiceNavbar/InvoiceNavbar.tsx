import {
  AmountOfInvoices,
  Container,
  FilterByText,
  FilterDropdownButton,
  InvoiceText,
  NewInvoiceButton,
  TextContainer,
} from "./InvoiceNavbarStyles";
import DropdownArrow from "../assets/icon-arrow-down.svg";
import PlusIcon from "../assets/plus-icon.svg";

export const InvoiceNavbar = () => {
  return (
    <Container>
      <TextContainer>
        <InvoiceText>Invoice</InvoiceText>
        <AmountOfInvoices>No invoices</AmountOfInvoices>
      </TextContainer>
      <FilterByText>Filter</FilterByText>
      <FilterDropdownButton>
        <img src={DropdownArrow} alt="filter-dropdown-button" />
      </FilterDropdownButton>
      <NewInvoiceButton
        startIcon={<img src={PlusIcon} alt="Add new invoice icon" />}
      >
        New
      </NewInvoiceButton>
    </Container>
  );
};
