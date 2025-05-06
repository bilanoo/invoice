import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    margin: "0 24px 0 24px",
    textAlign: "start",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontWeight: 500,
    fontFamily: "inherit",
    color: theme.customPalette.genericInputFieldTextColor,
  },
}));
