import { Box, Typography, styled } from "@mui/material";

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

export const InvoiceConstBreakdownContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    borderRadius: "8px",
    backgroundColor: theme.customPalette.ghostWhiteToLightBlue,
    margin: "0 24px 24px 24px",
    alignItems: "center",
    justifyContent: "center",
    "& > :first-child": {
      marginTop: "24px",
    },
  },
}));

export const ItemContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px 24px 24px 24px",
    width: "100%",
  },
}));

export const InvoiceTotalContainer = styled(Box)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.mode === "light" ? "#373B53" : "#0C0E16",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
}));

export const AmountDueContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "74px",
    margin: "26px 24px 22px 24px",
    whiteSpace: "nowrap",
  },
}));

export const AmountDue = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.customPalette.white,
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
  },
}));

export const Total = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.customPalette.white,
    fontSize: "1.5rem",
    fontFamily: "inherit",
    fontWeight: 700,
  },
}));
