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
    cursor: "pointer",
    marginBottom: "16px",
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

interface StatusProps {
  status: string;
}

export const InvoiceStatus = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusProps>(({ status }) => ({
  "&": {
    display: "flex",
    width: "104px",
    height: "40px",
    backgroundColor:
      status === "paid"
        ? "#F4FDFA"
        : status === "pending"
        ? "#FFF9F1"
        : status === "draft"
        ? "#F4F4F5"
        : null,
    borderRadius: "6px",
    marginLeft: "auto",
    marginRight: "24px",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Ball = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusProps>(({ status }) => ({
  "&": {
    width: "8px",
    height: "8px",
    backgroundColor:
      status === "paid"
        ? "#33D69F"
        : status === "pending"
        ? "#FF8F00"
        : status === "draft"
        ? "#373B53"
        : null,
    borderRadius: "50%",
  },
}));

export const StatusText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusProps>(({ status }) => ({
  "&": {
    color:
      status === "paid"
        ? "#33D69F"
        : status === "pending"
        ? "#FF8F00"
        : status === "draft"
        ? "#373B53"
        : null,
    fontSize: "0.938rem",
    fontFamily: "inherit",
    fontWeight: 700,
    marginLeft: "8px",
    textTransform: "capitalize",
  },
}));
