"use client";

import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const PreviousPageContainer = styled(Box)(() => ({
  "&": {
    position: "relative",
    marginRight: "auto",
    marginLeft: "24px",
    paddingBottom: "24px",
  },
}));

export const PreviousPageButton = styled(Button)(({ theme }) => ({
  "&": {
    alignItems: "center",
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    color: theme.palette.text.primary,
    textTransform: "none",
    borderRadius: "6px",
  },
  ".MuiButton-startIcon": {
    width: "14px",
    height: "14px",
  },
}));
