import { Box, Button, styled } from "@mui/material";

export const ActionsContainer = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    alignitems: "center",
    justifyContent: "center",
    marginTop: "24px",
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
    boxShadow:
      theme.palette.mode === "light" &&
      "0px -4px 20px rgba(202, 197, 197, 0.75)",
  },
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    borderRadius: "24px",
    textTransform: "none",
    padding: "12px 24px",
    color: theme.customPalette.darkBlueYonderToLavender,
    backgroundColor: theme.customPalette.ghostWhiteToLightBlue,
    border: "none",
    margin: "21px 8px 21px auto",
  },
  "&:hover": {
    border: "none",
  },
}));

export const SaveChangesButton = styled(Button)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    borderRadius: "24px",
    textTransform: "none",
    padding: "12px 24px",
    color: theme.customPalette.white,
    backgroundColor: theme.customPalette.mainPurple,
    border: "none",
    margin: "21px 24px 21px 0px",
  },

  "&:hover": {
    backgroundColor: theme.customPalette.lightPurple,
  },
}));

export const SaveAsDraftButton = styled(Button)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    borderRadius: "24px",
    textTransform: "none",
    padding: "12px 24px",
    color: theme.palette.text.secondary,
    backgroundColor: "#373B53",
    border: "none",
    margin: "21px 7px 21px 7px",
  },

  "&:hover": {
    backgroundColor: "#1E2139",
  },
}));
