import { FC } from "react";
import NavLinkButton from "../NavLinkButton/NavLinkButton";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import "./topicButtons.css";

interface TopicButtonsProps {}

export const TopicButtons: FC<TopicButtonsProps> = () => {
  const { data, error } = useSWR<dataOptions[], Error>(
    "http://localhost:3040/options",
    fetcher
  );

  return (
    <div className='buttonsContainer'>
      {data?.map((state) => (
        <NavLinkButton key={state._id} to='/step2' buttonType="whiteButton" text={state.name} state={state} />
      ))}
    </div>
  );
};
