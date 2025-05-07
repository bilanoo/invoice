import { TextField, styled } from "@mui/material";

export const InputBox = styled(TextField)(({ theme }) => ({
  "&": {},
  "& .MuiInputBase-root": {
    fontSize: "0.938rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontFamily: "inherit",
  },

  "@media only screen and (min-width: 768px)": {
    "&": {
      maxWidth: "auto",
    },
  },
}));
