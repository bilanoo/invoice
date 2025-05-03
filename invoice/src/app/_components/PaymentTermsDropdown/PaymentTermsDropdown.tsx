"use client";

import { Container, Title } from "../InputFieldWithHeading/InputField.styles";
import { DropdownSelect, Option } from "./PaymentTerms.styles";
import { useAppSelector } from "../../../store/hooks";
import { SelectChangeEvent } from "@mui/material/Select";

interface PaymentTermsDropdownProps {
  paymentTerms: number;
  setPaymentTerms: React.Dispatch<React.SetStateAction<number>>;
}

export const PaymentTermsDropdown = ({
  paymentTerms,
  setPaymentTerms,
}: PaymentTermsDropdownProps) => {
  const darkOrLightMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPaymentTerms(event.target.value as number);
  };

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
        value={paymentTerms}
        onChange={handleChange}
      >
        <Option value={1}>Net 1 Day</Option>
        <Option value={7}>Net 7 Days</Option>
        <Option value={14}>Net 14 Days</Option>
        <Option value={30}>Net 30 Days</Option>
      </DropdownSelect>
    </Container>
  );
};
