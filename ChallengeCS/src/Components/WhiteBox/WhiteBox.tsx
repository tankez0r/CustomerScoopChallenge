import { FC } from "react";
import { useLocation } from "react-router-dom";
import "./whiteBox.css";
type boxType = string | "Churn Rate" | "Lead Conversion";

interface Props {
  boxType: boxType;
}
export const WhiteBox: FC<Props> = ({ boxType }) => {
  const { state } = useLocation();
  const options: dataOptions = { ...state };
  return (
    <div className='whiteboxContainer'>
      <h4>{boxType}</h4>
      <div className='rateContainer'>
        <img src='./src/assets/step2/speedometer.png' alt='' />
        <span>
          {boxType == "Lead Conversion"
            ? options.leadConvertion
            : options.churnRate}
        </span>
      </div>
    </div>
  );
};
