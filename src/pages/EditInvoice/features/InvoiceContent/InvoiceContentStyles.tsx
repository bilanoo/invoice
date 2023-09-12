import { Box, styled } from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
    margin: "0 24px 56px 24px",
    borderRadius: "8px",
  },
}));

export const GenericTextContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    padding: "25px 0 30px 24px",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.darkBlueYonderToLavender,
  },
}));

export const ClientAddress = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    paddingLeft: "24px",
  },
}));

export const InvoiceDatesAndBillingInformationContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
}));

export const PaymentDatesContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
}));
