import { MenuItem, Select, styled } from "@mui/material";

export const DropdownSelect = styled(Select)(({ theme }) => ({
  "&": {
    borderRadius: "8px",
    width: "100%",
  },
}));

export const Option = styled(MenuItem)(({ theme }) => ({
  "&": {
    fontFamily: "inherit",
    fontSize: "0.938rem",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  "&:hover": {
    color: theme.customPalette.mainPurple,
  },
}));
