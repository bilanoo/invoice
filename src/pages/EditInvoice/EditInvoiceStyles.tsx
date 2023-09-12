import { Box, Button, styled } from "@mui/material";

export const PreviousPageContainer = styled(Box)(() => ({
  "&": {
    margin: "33px auto 31px 24px",
  },
}));

export const PreviousPageButton = styled(Button)(({ theme }) => ({
  "&": {
    alignItems: "center",
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    color: theme.palette.text.primary,
    textTransform: "none",
    borderRadius: "6px",
  },
  ".MuiButton-startIcon": {
    width: "14px",
    height: "14px",
  },
}));

export const NavBar = styled(Box)(() => ({
  "&": {
    margin: "33px auto 31px 24px",
  },
}));

export const ContentContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export const ModifyInvoiceActionContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    boxSizing: "border-box",
    gap: "8px",
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
}));
