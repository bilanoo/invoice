import { Box, TableCell, TableRow, Typography, styled } from "@mui/material";

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

export const ClientInformationContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
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
  "@media only screen and (min-width: 768px)": {
    "&": {
      marginLeft: "auto",
      margin: "25px 32px 0 0",
    },
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

export const PaymentDueContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    padding: "0 0 30px 24px",
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

    "@media only screen and (max-width: 767px)": {
      "& > div:nth-of-type(2)": {
        marginTop: "24px !important",
      },
    },
  },
}));

export const QuantityAndCost = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 700,
    color: theme.customPalette.darkBlueYonderToLavender,
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      display: "none",
    },
  },
}));

export const ItemHeading = styled(TableCell)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.darkBlueYonderToLavender,
    marginBottom: "32px",
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
    justifyContent: "space-between",
    gap: "74px",
    margin: "26px 16px 22px 16px",
    whiteSpace: "nowrap",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      justifyContent: "space-between",
    },
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

export const CityOrPostCode = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.darkBlueYonderToLavender,
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      textAlign: "end",
    },
  },
}));

export const SentToContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    textAlign: "start",
    padding: "0px 0 30px 24px",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      marginLeft: "auto",
      marginRight: "132px",
      paddingTop: "25px",
    },
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

export const TableHeading = styled(TableCell)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.darkBlueYonderToLavender,
    borderBottom: "none",
  },
}));

export const ItemTableCell = styled(TableCell)(() => ({
  "&": {
    borderBottom: "none",
  },
}));

export const GenericTableCell = styled(TableCell)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "0.938rem",
    fontFamily: "inherit",
    fontWeight: 700,
    textAlign: "end",
    borderBottom: "none",
  },
  "@media only screen and (max-width: 767px)": {
    "&": {
      display: "none",
    },
  },
}));

export const HeadingRow = styled(TableRow)(() => ({
  "@media only screen and (max-width: 767px)": {
    "&": {
      display: "none",
    },
  },
}));
