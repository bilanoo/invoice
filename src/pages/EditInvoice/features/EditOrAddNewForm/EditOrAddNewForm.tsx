import { useEffect, useState } from "react";
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
import { useAppDispatch } from "../../../hooks";

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
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState(invoiceForm.paymentTerms);

  const date = dayjs(invoiceForm.createdAt, "YYYY-MM-DD");
  const dispatch = useAppDispatch();

  const handleChangeDate = (value: Dayjs | null) => {
    setInvoiceForm((prevState) => ({
      ...prevState,
      paymentDue: value!.format("YYYY-MM-DD"),
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

  const handleSacheChangesClick = () => {
    dispatch({
      type: "invoice/updateInvoice",
      payload: invoiceForm,
    });
    closeDrawer();
  };

  useEffect(() => {
    setAreAllFieldsFilled(
      Object.values(invoiceForm).every((value) => value !== "") &&
        invoiceForm.items.length > 0 &&
        Object.values(invoiceForm.items).every(
          (eachItem) =>
            eachItem.name !== "" &&
            eachItem.quantity !== 0 &&
            eachItem.price !== 0 &&
            eachItem.total.toString() !== "0.00"
        )
    );
  }, [invoiceForm]);

  return (
    <DrawerContainer open={isDrawerOpen} onClose={handleClose}>
      <BackToHomePage
        isDrawerOpen={isDrawerOpen}
        handleBackButtonClick={handleClose}
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
        <InvoiceDate invoiceDate={date} handleChange={handleChangeDate} />

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
        handleSaveChangesClick={handleSacheChangesClick}
        editingOrCreatingAnInvoice="edit"
        handleCancelOnClick={handleClose}
        isUserAbleToSave={areAllFieldsFilled}
      />
    </DrawerContainer>
  );
};
