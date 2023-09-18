import {
  Container,
  Title,
} from "../GenericInputFieldWithHeading/InputFieldStyles";
import { DropdownSelect, Option } from "./PaymentTermsStyles";
import { useAppSelector } from "../../../../hooks";

export const PaymentTermsDropdown = () => {
  const darkOrLightMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );
  return (
    <Container margin="25px 24px 24px 24px" gap={"8px"} flexGrow={1}>
      <Title>Payment Terms</Title>
      <DropdownSelect
        MenuProps={{
          sx: {
            "&& .MuiList-root": {
              backgroundColor:
                darkOrLightMode === "light" ? "#FFFFFF" : "#252945",
              paddingTop: "0px",
              paddingBottom: "0px",
            },
            "&& .MuiButtonBase-root": {
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <Option>Net 1 Day</Option>
        <Option>Net 7 Days</Option>
        <Option>Net 14 Days</Option>
        <Option>Net 30 Days</Option>
      </DropdownSelect>
    </Container>
  );
};
