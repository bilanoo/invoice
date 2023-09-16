import { Link } from "react-router-dom";
import {
  PreviousPageButton,
  PreviousPageContainer,
} from "./BackToHomePageStyles";
import BackArrow from "../../../../assets/back-arrow-icon.svg";

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
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <PreviousPageButton
            startIcon={<img src={BackArrow} alt="previous page button" />}
          >
            Go Back
          </PreviousPageButton>
        </Link>
      ) : (
        <PreviousPageButton
          onClick={handleBackButtonClick}
          startIcon={<img src={BackArrow} alt="previous page button" />}
        >
          Go Back
        </PreviousPageButton>
      )}
    </PreviousPageContainer>
  );
};
