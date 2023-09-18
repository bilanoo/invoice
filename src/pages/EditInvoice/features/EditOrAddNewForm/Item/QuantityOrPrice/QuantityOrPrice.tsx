import { Invoice } from "../../../../../../data";
import {
  Container,
  Title,
} from "../../GenericInputFieldWithHeading/InputFieldStyles";
import { InputBox } from "./QuantityOrPriceStyles";

interface QuantityOrPriceProps {
  title: string;
  value: number;
  index: number;
  fieldName: string;
  setInvoiceForm: React.Dispatch<React.SetStateAction<Invoice>>;
}

export const QuantitytOrPrice = ({
  title,
  value,
  index,
  fieldName,
  setInvoiceForm,
}: QuantityOrPriceProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  return (
    <Container margin={"0"}>
      <Title>{title}</Title>
      <InputBox
        value={value}
        onChange={handleChange}
        name={fieldName}
        sx={{ maxWidth: fieldName === "quantity" ? "100px" : "auto" }}
      />
    </Container>
  );
};
