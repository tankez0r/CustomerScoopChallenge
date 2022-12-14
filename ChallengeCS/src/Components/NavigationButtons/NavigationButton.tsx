import { FC } from "react";
import { useNavigate } from "react-router-dom";
import NavLinkButton from "../NavLinkButton/NavLinkButton";
import { BackwardBtn } from "./BackwardBtn";
import "./NavigationButton.css";

interface Props {
  to: string;
  text: string;
  buttonType: buttonType;
}

export const NavigationButton: FC<Props> = ({
  to,
  text,
  buttonType = "YellowButton",
}) => {
  return (
    <div>
      <BackwardBtn />
      <div className='CNavigationButtonContainer'>
        <NavLinkButton
          to={to}
          text={
            <span>
              {text}
              {buttonType === "confirmButton" ? null : (
                <img
                  src='./arrow-right-solid.svg'
                  alt=''
                  style={{
                    height: "14px",
                    width: "50px",
                    position: "absolute",
                    bottom: "14px",
                    right: "-9px",
                  }}
                />
              )}
            </span>
          }
          buttonType={buttonType}
        />
      </div>
    </div>
  );
};
