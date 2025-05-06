import { Box, styled } from "@mui/material";

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
    marginTop: "auto",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      display: "none",
    },
  },
}));
