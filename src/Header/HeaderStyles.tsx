import { Box, IconButton, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  "&": {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "72px",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (min-width: 992px)": {
    "&": {
      height: "auto",
      width: "103px",
      flexDirection: "column",
    },
  },
}));

export const InvoiceLogo = styled("img")(() => ({
  "@media (min-width: 992px)": {
    "&": {
      width: "100%",
    },
  },
}));
export const DarkOrLightModeButton = styled(IconButton)(() => ({
  marginLeft: "auto",
  marginRight: "24px",
  "@media (min-width: 992px)": {
    "&": {
      marginLeft: "0",
      alignSelf: "center",
      justifySelf: "center",
      marginTop: "auto",
      marginRight: "0",
      marginBottom: "24px",
    },
  },
}));

export const Divider = styled("div")(() => ({
  backgroundColor: "#494E6E",
  width: "1px",
  height: "100%",
  marginRight: "24px",
  "@media (min-width: 992px)": {
    "&": {
      height: "1px",
      width: "100%",
      marginRight: "0",
      marginBottom: "24px",
    },
  },
}));

export const AvatarContainer = styled(Box)(() => ({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginRight: "24px",
  justifyContent: "center",
  display: "flex",
  "@media (min-width: 992px)": {
    "&": {
      marginRight: "0",
      marginBottom: "24px",
    },
  },
}));

export const UserAvatar = styled("img")(() => ({
  borderRadius: "50%",
}));
