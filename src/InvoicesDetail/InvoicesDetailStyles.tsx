import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginTop: "32px",
  },
}));
