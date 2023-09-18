import { Invoice } from "../../../../../data";
import { Container, InputField, Title } from "./InputFieldStyles";

interface GenericInputFieldWithHeadingProps {
  title: string;
  value: string | number;
  fieldName: string;
  isFieldPartOfAddress: boolean;
  setInvoiceForm: React.Dispatch<React.SetStateAction<Invoice>>;
  addressType?: "senderAddress" | "clientAddress";
  margin: string;
}

export const GenericInputFieldWithHeading = ({
  title,
  value,
  fieldName,
  isFieldPartOfAddress,
  setInvoiceForm,
  addressType,
  margin,
}: GenericInputFieldWithHeadingProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (isFieldPartOfAddress) {
      setInvoiceForm((prevState) => ({
        ...prevState,
        [addressType!]: {
          ...prevState[addressType!],
          [event.target.name]: event.target.value,
        },
      }));
    } else {
      setInvoiceForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return (
    <Container margin={margin}>
      <Title>{title}</Title>
      <InputField value={value} onChange={handleChange} name={fieldName} />
    </Container>
  );
};
