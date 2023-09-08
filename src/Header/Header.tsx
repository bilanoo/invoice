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
import { useAppDispatch } from "../pages/hooks";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleDarkOrLightModeClick = () => {
    dispatch({ type: "darkOrLightMode/toggle" });
  };
  return (
    <Container>
      <InvoiceLogo src={Logo} alt="invoice-logo" />

      <DarkOrLightModeButton onClick={handleDarkOrLightModeClick}>
        <img src={Moon} alt="dark-or-light-mode-button" />
      </DarkOrLightModeButton>
      <Divider />
      <AvatarContainer>
        <UserAvatar src={Avatar} alt="user-avatar-image" />
      </AvatarContainer>
    </Container>
  );
};
