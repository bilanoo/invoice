import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: "32px 24px 0 24px",
    gap: "16px",
  },
  "@media only screen and (min-width: 992px)": {
    "&": {
      width: "100%",
      margin: "32px 0 0 0",
      padding: "0 55px 0 55px",
      gap: "30px",
    },
  },
}));
