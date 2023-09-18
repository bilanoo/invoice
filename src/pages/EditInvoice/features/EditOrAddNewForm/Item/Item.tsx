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
        total: itemQuantity * itemPrice,
      };

      return {
        ...prevState,
        items: updatedItem,
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });
  }, [itemPrice, itemQuantity]);
  return (
    <Container>
      <GenericInputFieldWithHeading
        title="Item Name"
        value={itemName}
        fieldName="name"
        isFieldPartOfAddress={false}
        setInvoiceForm={setInvoiceForm}
        margin="0 16px 0px 0px"
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
          margin={"0 45px 0px 0px"}
          minHeight={"73px"}
        >
          <Title textAlign={"start"}>Total</Title>
          <Total marginTop={"auto"} marginBottom={"auto"}>
            {itemTotal}
          </Total>
        </GenericInputFieldContainer>

        <DeleteItemButton>
          <img src={deleteIcon} alt="delete item button" />
        </DeleteItemButton>
      </ItemDetailsContainer>
    </Container>
  );
};
