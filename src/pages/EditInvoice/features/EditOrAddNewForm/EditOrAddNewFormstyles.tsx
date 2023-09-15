import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    fontFamily: "inherit",
    backgroundColor: theme.palette.mode === "light" ? "#FFF" : "#141625",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontFamily: "inherit",
    textAlign: "start",
    marginLeft: "24px",
    marginBottom: "22px",
  },
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    color: theme.customPalette.mainPurple,
    fontWeight: 700,
    fontFamily: "inherit",
    textAlign: "start",
    marginLeft: "24px",
    marginBottom: "24px",
  },
}));

export const CityAndPostCodeContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    boxSizing: "border-box",
    marginTop: "25px",
    marginBottom: "25px",
  },
}));
