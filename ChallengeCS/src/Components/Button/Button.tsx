import { FC, ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactElement | ReactElement[] | string;
  onClick?: () => void;
  buttonType: buttonType;
  onDisable?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  buttonType,
  onDisable,
}) => {
  return (
    <button
      className={`Btn ${buttonType} ${onDisable ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled
    >
      {children}
    </button>
  );
};
