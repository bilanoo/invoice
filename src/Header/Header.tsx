import {
  AvatarContainer,
  Container,
  DarkOrLightModeButton,
  Divider,
  InvoiceLogo,
  UserAvatar,
} from "./HeaderStyles";
import Logo from "../assets/logo-with-background.svg";
import Moon from "../assets/icon-moon.svg";
import Avatar from "../assets/image-avatar.jpg";

export const Header = () => {
  return (
    <Container>
      <InvoiceLogo src={Logo} alt="invoice-logo" />

      <DarkOrLightModeButton>
        <img src={Moon} alt="dark-or-light-mode-button" />
      </DarkOrLightModeButton>
      <Divider />
      <AvatarContainer>
        <UserAvatar src={Avatar} alt="user-avatar-image" />
      </AvatarContainer>
    </Container>
  );
};
