import { Box, Typography, styled } from "@mui/material";

interface StatusProps {
  status: string;
}

export const InvoiceStatusContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<StatusProps>(({ theme, status }) => ({
  "&": {
    display: "flex",
    width: "104px",
    height: "40px",
    backgroundColor:
      status === "paid"
        ? theme.customPalette.backgroundColorPaidInvoice
        : status === "pending"
        ? theme.customPalette.backgroundColorPendingInvoice
        : status === "draft"
        ? theme.customPalette.backgroundColorDraftInvoice
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
