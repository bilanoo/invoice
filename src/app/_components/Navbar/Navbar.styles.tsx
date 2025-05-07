import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
    boxSizing: "border-box",
    margin: "0 24px 16px 24px",
    borderRadius: "8px",
  },
}));

export const StatusText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.blueYonderToWhite,
    textAlign: "start",
    padding: "37px 0 37px 24px",
    width: "fit-content",
  },
}));

export const InvoiceStatusContainer = styled(Box)(() => ({
  "&": {
    marginLeft: "auto",
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      marginRight: "auto",
      marginLeft: "0",
      paddingLeft: "20px",
    },
  },
}));

export const ModifyInvoiceContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    gap: "8px",
    boxSizing: "border-box",
    marginRight: "24px",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      paddingLeft: "198px",
      alignItems: "center",
    },
  },
  "@media only screen and (max-width: 767px)": {
    "&": {
      display: "none",
    },
  },
}));
