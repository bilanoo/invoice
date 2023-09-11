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
