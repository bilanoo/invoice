import { Invoice } from "../../../../../data";
import { GenericInputFieldWithHeading } from "../GenericInputFieldWithHeading/GenericInputFieldWithHeading";
import {
  Container,
  DeleteItemButton,
  ItemDetailsContainer,
  Total,
} from "./ItemStyles";
import {
  Container as GenericInputFieldContainer,
  Title,
} from "../GenericInputFieldWithHeading/InputFieldStyles";
import deleteIcon from "../../../../../assets/icon-delete.svg";
import { QuantitytOrPrice } from "./QuantityOrPrice/QuantityOrPrice";
import { useEffect } from "react";

interface ItemProps {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  itemTotal: number;
  index: number;
  setInvoiceForm: React.Dispatch<React.SetStateAction<Invoice>>;
}

export const Item = ({
  itemName,
  itemQuantity,
  itemPrice,
  itemTotal,
  index,
  setInvoiceForm,
}: ItemProps) => {
  useEffect(() => {
    setInvoiceForm((prevState) => {
      const updatedItem = [...prevState.items];
      updatedItem[index] = {
        ...updatedItem[index],
        total: (itemQuantity * itemPrice).toFixed(2).toString(),
      };

      return {
        ...prevState,
        items: updatedItem,
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });
  }, [itemPrice, itemQuantity]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const value = event.target.value;
    setInvoiceForm((prevState) => {
      const updatedItem = [...prevState.items];
      updatedItem[index] = {
        ...updatedItem[index],
        [event.target.name]: value,
      };

      return {
        ...prevState,
        items: updatedItem,
      };
    });
  };
  const handleDeleteItem = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setInvoiceForm((prevState) => {
      const updatedItem = [...prevState.items];
      updatedItem.splice(index, 1);

      return {
        ...prevState,
        items: updatedItem,
      };
    });
  };

  return (
    <Container>
      <GenericInputFieldWithHeading
        title="Item Name"
        value={itemName}
        fieldName="name"
        margin="0 16px 0px 0px"
        handleChange={handleChange}
      />
      <ItemDetailsContainer>
        <QuantitytOrPrice
          index={index}
          title="Qty."
          value={itemQuantity}
          fieldName="quantity"
          setInvoiceForm={setInvoiceForm}
        />
        <QuantitytOrPrice
          index={index}
          title="Price"
          value={itemPrice}
          fieldName="price"
          setInvoiceForm={setInvoiceForm}
        />

        <GenericInputFieldContainer
          margin={"0 20px 0px 0px"}
          minHeight={"73px"}
        >
          <Title textAlign={"start"}>Total</Title>
          <Total marginTop={"auto"} marginBottom={"auto"}>
            {itemTotal}
          </Total>
        </GenericInputFieldContainer>

        <DeleteItemButton onClick={handleDeleteItem}>
          <img src={deleteIcon} alt="delete item button" />
        </DeleteItemButton>
      </ItemDetailsContainer>
    </Container>
  );
};
