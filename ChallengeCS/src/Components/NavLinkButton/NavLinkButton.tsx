import { FC, ReactElement, SyntheticEvent, useState } from "react";
import { useCalendlyEventListener } from "react-calendly";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";

interface Props {
  text: string | ReactElement | ReactElement[];
  state?: object;
  to: string;
  buttonType: buttonType;
}

const NavLinkButton: FC<Props> = ({ text, state = {}, to, buttonType }) => {
  const [disable, setDisable] = useState(buttonType === "confirmButton");
  useCalendlyEventListener({
    onEventScheduled: () => {
      setDisable(false);
    },
  });

  const clickHandler = (event: SyntheticEvent) => {
    if (disable) event.preventDefault();
  };

  return (
    <NavLink onClick={clickHandler} to={to} state={state}>
      <Button buttonType={buttonType} onDisable={disable}>
        <span>{text}</span>
      </Button>
    </NavLink>
  );
};
export default NavLinkButton;
