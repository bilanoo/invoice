import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      flexDirection: "column",
    },
  },
}));

export const EmptyIllustratorImage = styled(Image)(() => ({
  "&": {
    width: "190px",
    height: "auto",
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      width: "300px",
    },
  },
}));

export const NoContentText = styled(Typography)(({ theme }) => ({
  "&": {
    color: theme.palette.text.primary,
    fontSize: "1.5rem",
    fontWeight: 700,
    marginTop: "42px",
    fontFamily: "inherit",
  },
}));

export const CreateNewInvoiceText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontWeight: 500,
    marginTop: "23px",
    fontFamily: "inherit",
    color: theme.palette.text.secondary,
    width: "180px",
  },
}));
