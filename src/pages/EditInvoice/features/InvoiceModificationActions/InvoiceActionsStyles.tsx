import { Button, styled } from "@mui/material";

export const EditInvoiceButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "73px",
    height: "48px",
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    textTransform: "none",
    borderRadius: "24px",
    color: theme.customPalette.blueYonderToWhite,
    backgroundColor: theme.customPalette.ghostWhiteToLightBlue,
  },
}));

export const DeleteInvoiceButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "89px",
    height: "48px",
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    textTransform: "none",
    borderRadius: "24px",
    color: theme.customPalette.white,
    backgroundColor: theme.customPalette.grapefruitRed,
  },
  "&:hover": {
    backgroundColor: theme.customPalette.lightSalmonPink,
  },
}));

export const MarkAsPaidButton = styled(Button)(({ theme }) => ({
  "&": {
    width: "131px",
    height: "48px",
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    textTransform: "none",
    borderRadius: "24px",
    color: theme.customPalette.white,
    backgroundColor: theme.customPalette.mainPurple,
    marginRight: "32px",
  },
  "&:hover": {
    backgroundColor: theme.customPalette.tropicalIndigo,
  },
}));
