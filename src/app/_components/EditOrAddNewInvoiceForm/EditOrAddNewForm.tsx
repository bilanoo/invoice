"use client";

import { useEffect, useState } from "react";
import { Invoice, Item as ItemInterface } from "../../../data";
import {
  GenericContainer,
  CityAndPostCodeContainer,
  DrawerContainer,
  Heading,
  Subheading,
  ItemList,
  AddNewItemButton,
} from "./EditOrAddNewForm.styles";
import { BackToHomePage } from "../BackToHomePage/BackToHomePage";
import { GenericInputFieldWithHeading } from "../InputFieldWithHeading/GenericInputFieldWithHeading";
import { InvoiceDate } from "../InvoiceDate/InvoiceDate";
import dayjs, { Dayjs } from "dayjs";
import { PaymentTermsDropdown } from "../PaymentTermsDropdown/PaymentTermsDropdown";
import { Item } from "../Item/Item.client";

import { useAppDispatch } from "../../../store/hooks";
import { FormActionsButtons } from "../FormActionsButtons/FormActionsButtons";

interface EditOrAddNewFormProps {
  invoiceData: Invoice;
  isDrawerOpen: boolean;
  editingOrCreatingAnInvoice: "edit" | "create";
  closeDrawer: () => void;
}

export const EditOrAddNewForm = ({
  invoiceData,
  isDrawerOpen,
  closeDrawer,
  editingOrCreatingAnInvoice,
}: EditOrAddNewFormProps) => {
  const [invoiceForm, setInvoiceForm] = useState<Invoice>(invoiceData);
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState(invoiceForm.paymentTerms);

  const date = dayjs(invoiceForm.createdAt, "YYYY-MM-DD");
  const dispatch = useAppDispatch();

  const handleChangeDate = (value: Dayjs | null) => {
    setInvoiceForm((prevState) => ({
      ...prevState,
      createdAt: value!.format("YYYY-MM-DD"),
    }));
  };

  const changeAddressDetails =
    (addressType: "senderAddress" | "clientAddress") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInvoiceForm((prevState) => ({
        ...prevState,
        [addressType!]: {
          ...prevState[addressType!],
          [event.target.name]: event.target.value,
        },
      }));
    };

  const handleValueChange =
    () =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInvoiceForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    };
  const handleAddNewItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setInvoiceForm((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
          id: crypto.randomUUID(),
        },
      ],
    }));
  };

  const handleClose = () => {
    closeDrawer();
    setInvoiceForm(invoiceData);
  };

  const handleSaveChangesClick = () => {
    const newInvoice = {
      ...invoiceForm,
      status: "pending",
      paymentTerms: paymentTerms,
    };
    const updatedInvoice = { ...invoiceForm, paymentTerms: paymentTerms };
    if (editingOrCreatingAnInvoice === "create") {
      dispatch({ type: "invoice/addNewInvoice", payload: newInvoice });
    } else {
      dispatch({
        type: "invoice/updateInvoice",
        payload: updatedInvoice,
      });
    }

    closeDrawer();
  };

  const handleSaveAsDraftOnClick = () => {
    const draftInvoiceForm = {
      ...invoiceData,
      status: "draft",
      paymentTerms: paymentTerms,
    };
    dispatch({
      type: "invoice/addNewInvoice",
      payload: draftInvoiceForm,
    });

    closeDrawer();
  };

  useEffect(() => {
    const propertiesToCheck = Object.entries(invoiceForm).filter(
      ([key, value]) => {
        // Exclude properties you don't want to check
        return (
          key !== "id" &&
          key !== "createdAt" &&
          key !== "status" &&
          (value !== "" || key === "items")
        );
      }
    );

    setAreAllFieldsFilled(
      propertiesToCheck.every(([key, value]) => {
        if (key === "items") {
          return (
            value.length > 0 &&
            value.every(
              (eachItem: ItemInterface) =>
                eachItem.name !== "" &&
                eachItem.quantity !== 0 &&
                eachItem.price !== 0 &&
                eachItem.total.toString() !== "0.00"
            )
          );
        }
        return value !== "";
      })
    );
  }, [invoiceForm]);

  return (
    <DrawerContainer open={isDrawerOpen} onClose={handleClose}>
      <BackToHomePage
        isDrawerOpen={isDrawerOpen}
        handleBackButtonClick={handleClose}
      />
      <Heading>
        {editingOrCreatingAnInvoice === "edit" ? (
          <>
            Edit <span style={{ color: "#888EB0" }}>#</span>
            {invoiceForm.id}{" "}
          </>
        ) : (
          "New Invoice"
        )}
      </Heading>

      <Subheading>Bill From</Subheading>

      <GenericInputFieldWithHeading
        title="Street Address"
        value={invoiceForm.senderAddress.street}
        fieldName="street"
        handleChange={changeAddressDetails("senderAddress")}
        margin="0 24px 24px 24px"
      />
      <GenericContainer>
        <CityAndPostCodeContainer>
          <GenericInputFieldWithHeading
            title="City"
            value={invoiceForm.senderAddress.city}
            fieldName="city"
            handleChange={changeAddressDetails("senderAddress")}
            margin="0 24px 24px 24px"
          />
          <GenericInputFieldWithHeading
            title="Post Code"
            value={invoiceForm.senderAddress.postCode}
            fieldName="postCode"
            handleChange={changeAddressDetails("senderAddress")}
            margin="0 24px 24px 0px"
          />
        </CityAndPostCodeContainer>

        <GenericInputFieldWithHeading
          title="Contry"
          value={invoiceForm.senderAddress.country}
          fieldName="country"
          handleChange={changeAddressDetails("senderAddress")}
          margin="0 24px 24px 24px"
        />
      </GenericContainer>

      <Subheading sx={{ marginTop: "41px" }}>Bill To</Subheading>

      <GenericInputFieldWithHeading
        handleChange={handleValueChange()}
        title="Client's Name"
        value={invoiceForm.clientName}
        fieldName="clientName"
        margin="0 24px 24px 24px"
      />

      <GenericInputFieldWithHeading
        handleChange={handleValueChange()}
        title="Client's Email"
        value={invoiceForm.clientEmail}
        fieldName="clientEmail"
        margin="0 24px 24px 24px"
      />

      <GenericInputFieldWithHeading
        title="Street Address"
        value={invoiceForm.clientAddress.street}
        fieldName="street"
        handleChange={changeAddressDetails("clientAddress")}
        margin="0 24px 24px 24px"
      />

      <GenericContainer>
        <CityAndPostCodeContainer>
          <GenericInputFieldWithHeading
            title="City"
            value={invoiceForm.clientAddress.city}
            fieldName="city"
            handleChange={changeAddressDetails("clientAddress")}
            margin="0 24px 24px 24px"
          />
          <GenericInputFieldWithHeading
            title="Post Code"
            value={invoiceForm.clientAddress.postCode}
            fieldName="postCode"
            handleChange={changeAddressDetails("clientAddress")}
            margin="0 24px 24px 0px"
          />
        </CityAndPostCodeContainer>

        <GenericInputFieldWithHeading
          title="Contry"
          value={invoiceForm.clientAddress.country}
          fieldName="country"
          handleChange={changeAddressDetails("clientAddress")}
          margin="0 24px 24px 24px"
        />
      </GenericContainer>

      <GenericContainer>
        <InvoiceDate
          invoiceDate={date}
          handleChange={handleChangeDate}
          disabled={editingOrCreatingAnInvoice === "edit" ? true : false}
        />

        <PaymentTermsDropdown
          paymentTerms={paymentTerms}
          setPaymentTerms={setPaymentTerms}
        />
      </GenericContainer>

      <GenericInputFieldWithHeading
        handleChange={handleValueChange()}
        title="Project Description"
        value={invoiceForm.description}
        fieldName="description"
        margin="0 24px 24px 24px"
      />

      <ItemList>Item List</ItemList>
      {invoiceForm.items.map((item, index) => (
        <Item
          key={item.id}
          index={index}
          itemName={item.name}
          itemQuantity={item.quantity}
          itemPrice={item.price}
          itemTotal={item.total}
          setInvoiceForm={setInvoiceForm}
        />
      ))}

      <AddNewItemButton onClick={handleAddNewItem}>
        + Add New Item
      </AddNewItemButton>

      <FormActionsButtons
        handleSaveChangesClick={handleSaveChangesClick}
        editingOrCreatingAnInvoice={editingOrCreatingAnInvoice}
        handleCancelOnClick={handleClose}
        isUserAbleToSave={areAllFieldsFilled}
        handleSaveAsDraftClick={handleSaveAsDraftOnClick}
      />
    </DrawerContainer>
  );
};
