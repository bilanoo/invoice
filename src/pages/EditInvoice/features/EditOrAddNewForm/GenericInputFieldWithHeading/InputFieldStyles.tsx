import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface ContainerProps {
  margin: string;
}

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "margin",
})<ContainerProps>(({ margin }) => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    fontFamily: "inherit",
    margin: margin,
    flexGrow: 1,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: theme.customPalette.genericInputFieldTextColor,
    textAlign: "start",
  },
}));

export const InputField = styled(TextField)(({ theme }) => ({
  "&": {},
  "& .MuiInputBase-root": {
    fontSize: "0.938rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontFamily: "inherit",
  },
}));
