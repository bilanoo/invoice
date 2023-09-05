import {
  AmountOfInvoices,
  Container,
  CustomCheckbox,
  FilterByText,
  FilterDropdownButton,
  FilterMenu,
  InvoiceText,
  LabelInformation,
  NewInvoiceButton,
  TextContainer,
} from "./InvoiceNavbarStyles";
import DropdownArrow from "../assets/icon-arrow-down.svg";
import PlusIcon from "../assets/plus-icon.svg";
import { useState } from "react";
import { FormControlLabel, MenuItem } from "@mui/material";

export const InvoiceNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <TextContainer>
        <InvoiceText>Invoice</InvoiceText>
        <AmountOfInvoices>No invoices</AmountOfInvoices>
      </TextContainer>
      <FilterByText>Filter</FilterByText>
      <FilterDropdownButton onClick={handleClick}>
        <img src={DropdownArrow} alt="filter-dropdown-button" />
      </FilterDropdownButton>
      <FilterMenu
        id="filter-menu"
        aria-labelledby="filter-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem>
          <FormControlLabel
            control={<CustomCheckbox />}
            label={<LabelInformation>Draft</LabelInformation>}
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<CustomCheckbox />}
            label={<LabelInformation>Pending</LabelInformation>}
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<CustomCheckbox />}
            label={<LabelInformation>Paid</LabelInformation>}
          />
        </MenuItem>
      </FilterMenu>
      <NewInvoiceButton
        startIcon={<img src={PlusIcon} alt="Add new invoice icon" />}
      >
        New
      </NewInvoiceButton>
    </Container>
  );
};
