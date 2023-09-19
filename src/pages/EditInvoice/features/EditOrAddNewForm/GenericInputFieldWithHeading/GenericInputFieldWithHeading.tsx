import { Container, InputField, Title } from "./InputFieldStyles";

interface GenericInputFieldWithHeadingProps {
  title: string;
  value: string | number;
  fieldName: string;
  margin: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const GenericInputFieldWithHeading = ({
  title,
  value,
  fieldName,
  margin,
  handleChange,
}: GenericInputFieldWithHeadingProps) => {
  return (
    <Container margin={margin}>
      <Title>{title}</Title>
      <InputField
        value={value}
        onChange={handleChange}
        name={fieldName}
        error={value === "" || value === 0}
      />
    </Container>
  );
};
