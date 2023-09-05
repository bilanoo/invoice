import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Menu,
  Typography,
  styled,
} from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    margin: "32px 24px 0 24px",
    display: "flex",
    fontFamily: "inherit",
  },
}));

export const TextContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
  },
}));

export const InvoiceText = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "inherit",
    letterSpacing: "-0.75px",
  },
}));

export const AmountOfInvoices = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.secondary,
    fontSize: "0.813rem",
    fontWeight: 500,
    fontFamily: "inherit",
  },
}));

export const FilterByText = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    alignSelf: "center",
    padding: "0",
    margin: "0 0 0 auto",
  },
}));

export const FilterDropdownButton = styled(IconButton)(() => ({
  "&": {
    marginLeft: "12px",
    marginRight: "10px",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const FilterMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: theme.customPalette.backgroundColor,
  },
}));

export const NewInvoiceButton = styled(Button)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    textTransform: "none",
    fontWeight: 700,
    backgroundColor: theme.customPalette.mainPurple,
    color: theme.customPalette.white,
    fontFamily: "inherit",
    borderRadius: "30px",
    minWidth: "100px",
    alignItems: "center",
  },
}));

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "&.Mui-checked": {
    color: theme.customPalette.mainPurple,
  },

  "&:hover": {
    color: theme.customPalette.mainPurple,
  },
}));

export const LabelInformation = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
}));
