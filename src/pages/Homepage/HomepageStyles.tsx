import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      flexDirection: "row",
    },
  },
}));
