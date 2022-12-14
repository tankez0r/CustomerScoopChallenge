import { FC } from "react";
import { WhiteBox } from "../WhiteBox/WhiteBox";

interface Props {}
export const ChurnAndRetailContainer: FC<Props> = ({}) => {
  return (
    <div>
      <WhiteBox boxType='Lead Conversion' />
      <WhiteBox boxType='Churn Rate' />
    </div>
  );
};
