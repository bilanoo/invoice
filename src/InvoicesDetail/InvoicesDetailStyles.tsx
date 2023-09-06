import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: "32px 24px 0 24px",
  },
}));
