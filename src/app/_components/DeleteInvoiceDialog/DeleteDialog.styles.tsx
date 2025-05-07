import { Box, Button, Dialog, Typography, styled } from "@mui/material";

export const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& > .MuiDialog-container > .MuiPaper-root": {
    backgroundColor: theme.customPalette.invoiceBackgroundColor,
  },
}));

export const DeleteConfirmationText = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "1.5rem",
    fontFamily: "inherit",
    fontWeight: 700,
    color: theme.palette.text.primary,
    margin: "34px 0px 8px 32px",
  },
}));

export const DelitionDescription = styled(Typography)(() => ({
  "&": {
    fontSize: "0.813rem",
    fontFamily: "inherit",
    fontWeight: 500,
    color: "#888EB0",
    margin: "0px 32px 22px 32px",
  },
}));

export const ActionsContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    gap: "8px",
    justifyContent: "flex-end",
    margin: "0px 32px 32px 0px",
  },
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "91px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: theme.customPalette.ghostWhiteToLightBlue,
    color: theme.customPalette.darkBlueYonderToLavender,
    textTransform: "none",
    fontWeight: 700,
    fontFamily: "inherit",
    fontSize: "0.938rem",
  },
}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "89px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: theme.customPalette.grapefruitRed,
    color: theme.customPalette.white,
    textTransform: "none",
    fontWeight: 700,
    fontFamily: "inherit",
    fontSize: "0.938rem",
  },

  ":hover": {
    backgroundColor: theme.customPalette.lightSalmonPink,
  },
}));
