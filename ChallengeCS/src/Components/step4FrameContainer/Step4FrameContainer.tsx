import { Logo } from "../CustomerScoopLogo/Logo";
import "./Step2FrameC.css";

export const Step4FrameContainer = () => {
  return (
    <div className='s2fContainer'>
      <img
        style={{ position: "relative", top: "-20px" }}
        src='./src/assets/step4/Frame.png'
        alt=''
      />
      <div style={{ position: "relative", top: "-20px", left: "80px" }}>
        <Logo />
      </div>
    </div>
  );
};
