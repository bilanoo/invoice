import { Button, Drawer, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const DrawerContainer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    fontFamily: "inherit",
    backgroundColor: theme.palette.mode === "light" ? "#FFF" : "#141625",
    backgroundImage: "none",
  },

  "@media only screen and (min-width: 768px)": {
    "& .MuiPaper-root": {
      width: "60%",
    },
  },
  "@media only screen and (min-width: 992px)": {
    "& .MuiPaper-root": {
      width: "45%",
    },
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontFamily: "inherit",
    textAlign: "start",
    marginLeft: "24px",
    marginBottom: "22px",
  },
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    color: theme.customPalette.mainPurple,
    fontWeight: 700,
    fontFamily: "inherit",
    textAlign: "start",
    marginLeft: "24px",
    marginBottom: "24px",
  },
}));

export const GenericContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  "@media only screen and (min-width: 768px)": {
    "&": {
      flexDirection: "row",
      alignItems: "center",
    },
  },
}));

export const CityAndPostCodeContainer = styled(Box)(() => ({
  "&": {
    display: "flex",
    boxSizing: "border-box",
  },
}));

export const ItemList = styled(Typography)(() => ({
  "&": {
    fontSize: "1.125rem",
    fontWeight: 700,
    fontFamily: "inherit",
    color: "#777F98",
    marginLeft: "24px",
  },
}));

export const AddNewItemButton = styled(Button)(({ theme }) => ({
  "&": {
    fontSize: "0.938rem",
    fontWeight: 700,
    fontFamily: "inherit",
    color: "#888EB0",
    margin: "30px 24px 24px 24px",
    borderRadius: "24px",
    textTransform: "none",
    backgroundColor: theme.customPalette.ghostWhiteToLightBlue,
  },
  "&:hover": {
    backgroundColor: "#DFE3FA",
  },
}));
