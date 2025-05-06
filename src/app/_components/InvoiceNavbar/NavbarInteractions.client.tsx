"use client";

import { FormControlLabel, MenuItem } from "@mui/material";
import {
  CustomCheckbox,
  FilterByText,
  FilterDropdownButton,
  FilterMenu,
  LabelInformation,
  NewInvoiceButton,
} from "./InvoiceNavbar.styles";
import DropdownArrow from "../../../../public/icon-arrow-down.svg";
import PlusIcon from "../../../../public/plus-icon.svg";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { EditOrAddNewForm } from "../EditOrAddNewInvoiceForm/EditOrAddNewForm";

export const NavbarInteractions = () => {
  const dispatch = useAppDispatch();
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
    const formValue = event.currentTarget.value; // this line
    if (checked) {
      setFilter((prevState) => [...prevState, formValue]);
    } else {
      setFilter(filter.filter((status) => status !== formValue));
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
    <>
      <FilterByText>
        <span className="mobile-text-content">Filter</span>
        <span className="desktop-text-content">Filter by status</span>
      </FilterByText>
      <FilterDropdownButton onClick={handleClick}>
        <Image src={DropdownArrow} alt="Dropdown icon to filter invoices" />
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
        startIcon={<Image src={PlusIcon} alt="Icon to add a new invoice" />}
      >
        <span className="mobile-text-content">New</span>
        <span className="desktop-text-content">New Invoice</span>
      </NewInvoiceButton>
      <EditOrAddNewForm
        isDrawerOpen={openDrawer}
        closeDrawer={handleCloseDrawer}
        invoiceData={emptyInvoice}
        editingOrCreatingAnInvoice="create"
      />
    </>
  );
};
