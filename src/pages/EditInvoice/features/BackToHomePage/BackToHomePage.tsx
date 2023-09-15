import { Link } from "react-router-dom";
import {
  PreviousPageButton,
  PreviousPageContainer,
} from "./BackToHomePageStyles";
import BackArrow from "../../../../assets/back-arrow-icon.svg";

export const BackToHomePage = () => {
  return (
    <PreviousPageContainer>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <PreviousPageButton
          startIcon={<img src={BackArrow} alt="previous page button" />}
        >
          Go Back
        </PreviousPageButton>
      </Link>
    </PreviousPageContainer>
  );
};
