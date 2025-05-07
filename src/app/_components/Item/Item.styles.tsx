import { Box, IconButton, Typography, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    margin: "22px 24px 0px 24px",
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      flexDirection: "row",
      alignItems: "end",
      justifyContent: "end",
    },
  },
}));

export const ItemDetailsContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    marginTop: "25px",
    gap: "16px",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export const Total = styled(Typography)(() => ({
  "&": {
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    color: "#888EB0",
  },
}));

export const DeleteItemButton = styled(IconButton)(() => ({
  "&": {
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
  },
}));
