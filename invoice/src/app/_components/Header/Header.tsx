"use client";

import {
  AvatarContainer,
  Container,
  DarkOrLightModeButton,
  Divider,
  InvoiceLogo,
  UserAvatar,
} from "./HeaderStyles";
import Logo from "../../../../public/logo-with-background.svg";
import Moon from "../../../../public/icon-moon.svg";
import Sun from "../../../../public/icon-sun.svg";
import Avatar from "../../../../public/image-avatar.jpg";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Image from "next/image";

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleDarkOrLightModeClick = () => {
    dispatch({ type: "darkOrLightMode/toggle" });
  };
  const lightOrDarkMode = useAppSelector(
    (state) => state.darkOrLightMode.value
  );
  return (
    <Container>
      <InvoiceLogo
        src={Logo}
        alt="Picture of the invoice app logo"
        sizes="(max-width: 768px) 70px, (max-width: 1200px) 100vw, 1200px"
        style={{ height: "auto" }}
      />

      <DarkOrLightModeButton onClick={handleDarkOrLightModeClick}>
        <Image
          src={lightOrDarkMode === "light" ? Moon : Sun}
          alt="Button to turn the theme to dark or light mode"
          width={20}
          height={20}
        />
      </DarkOrLightModeButton>
      <Divider />
      <AvatarContainer>
        <UserAvatar src={Avatar} alt="Profile picture" width={40} height={40} />
      </AvatarContainer>
    </Container>
  );
};
