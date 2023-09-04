import {
  AvatarContainer,
  Container,
  DarkOrLightModeButton,
  Divide,
} from "./HeaderStyles";
import Logo from "../assets/logo-with-background.svg";
import Moon from "../assets/icon-moon.svg";
import Avatar from "../assets/image-avatar.jpg";

export const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="invoice-logo" />

      <DarkOrLightModeButton>
        <img src={Moon} alt="dark-or-light-mode-button" />
      </DarkOrLightModeButton>
      <Divide orientation="vertical" />
      <AvatarContainer>
        <img
          src={Avatar}
          alt="user-avatar-image"
          style={{ borderRadius: "50%" }}
        />
      </AvatarContainer>
    </Container>
  );
};
