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
import { useEffect, useRef, useState } from "react";
import { FormControlLabel, MenuItem } from "@mui/material";
import useWindowDimensions from "../utils";
import { useAppDispatch, useAppSelector } from "../pages/hooks";
import { EditOrAddNewForm } from "../pages/EditInvoice/features/EditOrAddNewForm/EditOrAddNewForm";

export const InvoiceNavbar = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const open = Boolean(anchorEl);

  const emptyInvoice = {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
    total: 0,
  };

  const invoiceData = useAppSelector((state) => state.invoice.value);

  const prevStateRef = useRef(invoiceData);

  const filterByStatus = ["Draft", "Pending", "Paid"];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      setFilter((prevState) => [...prevState, event.currentTarget.value]);
    } else {
      setFilter(
        filter.filter((status) => status !== event.currentTarget.value)
      );
    }
  };

  useEffect(() => {
    dispatch({
      type: "invoice/filter",
      payload: { filter, prevStateRef: prevStateRef },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  const handleNewInvoiceClick = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Container>
      <TextContainer>
        <InvoiceText>Invoice</InvoiceText>
        <AmountOfInvoices>No invoices</AmountOfInvoices>
      </TextContainer>
      <FilterByText>{width < 650 ? "Filter" : "Filter by status"}</FilterByText>
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
        {filterByStatus.map((status) => (
          <MenuItem key={status}>
            <FormControlLabel
              control={
                <CustomCheckbox
                  value={status.toLowerCase()}
                  onChange={handleFilterChange}
                  checked={filter.includes(status.toLowerCase())}
                />
              }
              label={<LabelInformation>{status}</LabelInformation>}
            />
          </MenuItem>
        ))}
      </FilterMenu>
      <NewInvoiceButton
        onClick={handleNewInvoiceClick}
        startIcon={<img src={PlusIcon} alt="Add new invoice icon" />}
      >
        {width < 650 ? "New" : "New Invoice"}
      </NewInvoiceButton>

      <EditOrAddNewForm
        isDrawerOpen={openDrawer}
        closeDrawer={handleCloseDrawer}
        invoiceData={emptyInvoice}
        editingOrCreatingAnInvoice="create"
      />
    </Container>
  );
};
