import { Box, Divider, IconButton, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  height: "72px",
  alignItems: "center",
}));

export const DarkOrLightModeButton = styled(IconButton)(() => ({
  marginLeft: "auto",
  marginRight: "24px",
}));

export const Divide = styled(Divider)(() => ({
  backgroundColor: "#494E6E",
  width: "1px",
  height: "100%",
  marginRight: "24px",
}));

export const AvatarContainer = styled(Box)(() => ({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginRight: "24px",
  justifyContent: "center",
  display: "flex",
}));
