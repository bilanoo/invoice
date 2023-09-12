import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },
  "@media only screen and (min-width: 600px)": {
    "&": {
      height: "100%",
    },
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      flexDirection: "row",
    },
  },
}));

export const InvoiceContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "auto",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
}));
