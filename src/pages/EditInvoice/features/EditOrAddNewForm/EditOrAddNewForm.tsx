import { useState } from "react";
import { Invoice } from "../../../../data";
import {
  GenericContainer,
  CityAndPostCodeContainer,
  DrawerContainer,
  Heading,
  Subheading,
  ItemList,
  AddNewItemButton,
} from "./EditOrAddNewFormstyles";
import { BackToHomePage } from "../BackToHomePage/BackToHomePage";
import { GenericInputFieldWithHeading } from "./GenericInputFieldWithHeading/GenericInputFieldWithHeading";
import { InvoiceDate } from "../InvoiceDate/InvoiceDate";
import dayjs, { Dayjs } from "dayjs";
import { PaymentTermsDropdown } from "./PaymentTermsDropdown/PaymentTermsDropdown";
import { Item } from "./Item/Item";
import { FormActionsButtons } from "./FormActionsButtons/FormActionsButtons";

interface EditOrAddNewFormProps {
  invoiceData: Invoice;
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

export const EditOrAddNewForm = ({
  invoiceData,
  isDrawerOpen,
  closeDrawer,
}: EditOrAddNewFormProps) => {
  const [invoiceForm, setInvoiceForm] = useState<Invoice>(invoiceData);

  const date = dayjs(invoiceForm.paymentDue, "YYYY-MM-DD");

  console.log(invoiceForm);
  console.log(date);

  const handleChangeDate = (value: Dayjs | null) => {
    setInvoiceForm((prevState) => ({
      ...prevState,
      paymentDue: value!.format("YYYY-MM-DD"),
    }));
  };
  return (
    <DrawerContainer open={isDrawerOpen} onClose={closeDrawer}>
      <BackToHomePage
        isDrawerOpen={isDrawerOpen}
        handleBackButtonClick={closeDrawer}
      />
      <Heading>
        Edit <span style={{ color: "#888EB0" }}>#</span>
        {invoiceForm.id}
      </Heading>

      <Subheading>Bill From</Subheading>

      <GenericInputFieldWithHeading
        title="Street Address"
        value={invoiceForm.senderAddress.street}
        fieldName="street"
        isFieldPartOfAddress={true}
        setInvoiceForm={setInvoiceForm}
        addressType="senderAddress"
        margin="0 24px 24px 24px"
      />
      <GenericContainer>
        <CityAndPostCodeContainer>
          <GenericInputFieldWithHeading
            title="City"
            value={invoiceForm.senderAddress.city}
            fieldName="city"
            isFieldPartOfAddress={true}
            setInvoiceForm={setInvoiceForm}
            addressType="senderAddress"
            margin="0 24px 24px 24px"
          />
          <GenericInputFieldWithHeading
            title="Post Code"
            value={invoiceForm.senderAddress.postCode}
            fieldName="postCode"
            isFieldPartOfAddress={true}
            setInvoiceForm={setInvoiceForm}
            addressType="senderAddress"
            margin="0 24px 24px 0px"
          />
        </CityAndPostCodeContainer>

        <GenericInputFieldWithHeading
          title="Contry"
          value={invoiceForm.senderAddress.country}
          fieldName="country"
          isFieldPartOfAddress={true}
          setInvoiceForm={setInvoiceForm}
          addressType="senderAddress"
          margin="0 24px 24px 24px"
        />
      </GenericContainer>

      <Subheading sx={{ marginTop: "41px" }}>Bill To</Subheading>

      <GenericInputFieldWithHeading
        title="Client's Name"
        value={invoiceForm.clientName}
        fieldName="clientName"
        isFieldPartOfAddress={false}
        setInvoiceForm={setInvoiceForm}
        margin="0 24px 24px 24px"
      />

      <GenericInputFieldWithHeading
        title="Client's Email"
        value={invoiceForm.clientEmail}
        fieldName="clientEmail"
        isFieldPartOfAddress={false}
        setInvoiceForm={setInvoiceForm}
        margin="0 24px 24px 24px"
      />

      <GenericInputFieldWithHeading
        title="Street Address"
        value={invoiceForm.clientAddress.street}
        fieldName="street"
        isFieldPartOfAddress={true}
        setInvoiceForm={setInvoiceForm}
        margin="0 24px 24px 24px"
      />

      <GenericContainer>
        <CityAndPostCodeContainer>
          <GenericInputFieldWithHeading
            title="City"
            value={invoiceForm.clientAddress.city}
            fieldName="city"
            isFieldPartOfAddress={true}
            setInvoiceForm={setInvoiceForm}
            addressType="senderAddress"
            margin="0 24px 24px 24px"
          />
          <GenericInputFieldWithHeading
            title="Post Code"
            value={invoiceForm.clientAddress.postCode}
            fieldName="postCode"
            isFieldPartOfAddress={true}
            setInvoiceForm={setInvoiceForm}
            addressType="senderAddress"
            margin="0 24px 24px 0px"
          />
        </CityAndPostCodeContainer>

        <GenericInputFieldWithHeading
          title="Contry"
          value={invoiceForm.clientAddress.country}
          fieldName="country"
          isFieldPartOfAddress={true}
          setInvoiceForm={setInvoiceForm}
          addressType="senderAddress"
          margin="0 24px 24px 24px"
        />
      </GenericContainer>

      <GenericContainer>
        <InvoiceDate invoiceDate={date} handleChange={handleChangeDate} />

        <PaymentTermsDropdown />
      </GenericContainer>

      <GenericInputFieldWithHeading
        title="Project Description"
        value={invoiceForm.description}
        fieldName="description"
        isFieldPartOfAddress={false}
        setInvoiceForm={setInvoiceForm}
        margin="0 24px 24px 24px"
      />

      <ItemList>Item List</ItemList>
      {invoiceForm.items.map((item, index) => (
        <Item
          key={item.name}
          index={index}
          itemName={item.name}
          itemQuantity={item.quantity}
          itemPrice={item.price}
          itemTotal={item.total}
          setInvoiceForm={setInvoiceForm}
        />
      ))}

      <AddNewItemButton>+ Add New Item</AddNewItemButton>

      <FormActionsButtons editingOrCreatingAnInvoice="create" />
    </DrawerContainer>
  );
};
