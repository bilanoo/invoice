import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
    width: "100%",
    height: "auto",
    justifySelf: "center",
    alignSelf: "center",
    borderRadius: "8px",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      width: "93%",
    },
  },
}));

export const IdAndNameContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    margin: "25px 24px 24px 24px",
  },
}));

export const InvoiceId = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "0.938rem",
    fontFamily: "inherit",
    fontWeight: 700,
  },
}));

export const InvoicePaymentInformation = styled(Box)(() => ({
  "&": {
    display: "flex",
    marginBottom: "22px",
  },
}));

export const DueDateAndPaymentInformation = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
  },
}));

export const SmallInformationText = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.customPalette.blueYonderToWhite,
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 700,
    marginLeft: "auto",
  },
}));

export const DueDateText = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.customPalette.blueYonderToWhite,
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 700,
    alignSelf: "start",
    marginLeft: "24px",
  },
}));

export const InvoiceAmount = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "0.938rem",
    fontFamily: "inherit",
    fontWeight: 700,
    alignSelf: "start",
    marginLeft: "24px",
    marginTop: "9px",
  },
}));

export const InvoiceStatus = styled(Box)(() => ({
  "&": {
    display: "flex",
    width: "104px",
    height: "40px",
    backgroundColor: "#F4FDFA",
    borderRadius: "6px",
    marginLeft: "auto",
    marginRight: "24px",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Ball = styled(Box)(() => ({
  "&": {
    width: "8px",
    height: "8px",
    backgroundColor: "#33D69F",
    borderRadius: "50%",
  },
}));

export const StatusText = styled(Typography)(({ theme }) => ({
  "&": {
    color: "#33D69F",
    fontSize: "0.938rem",
    fontFamily: "inherit",
    fontWeight: 700,
    marginLeft: "8px",
  },
}));
