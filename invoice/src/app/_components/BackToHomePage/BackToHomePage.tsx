import Link from "next/link";
import {
  PreviousPageButton,
  PreviousPageContainer,
} from "./BackToHomePage.styles";
import BackArrow from "../../../../public/back-arrow-icon.svg";
import Image from "next/image";

interface BackToHomePageProps {
  isDrawerOpen: boolean;
  handleBackButtonClick?: () => void;
}

export const BackToHomePage = ({
  isDrawerOpen,
  handleBackButtonClick,
}: BackToHomePageProps) => {
  return (
    <PreviousPageContainer>
      {!isDrawerOpen ? (
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <PreviousPageButton
            startIcon={<Image src={BackArrow} alt="Previous page button" />}
          >
            Go Back
          </PreviousPageButton>
        </Link>
      ) : (
        <PreviousPageButton
          onClick={handleBackButtonClick}
          startIcon={<Image src={BackArrow} alt="Previous page button" />}
        >
          Go Back
        </PreviousPageButton>
      )}
    </PreviousPageContainer>
  );
};
