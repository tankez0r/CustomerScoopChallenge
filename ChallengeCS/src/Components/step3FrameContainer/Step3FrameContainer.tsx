import { Logo } from "../CustomerScoopLogo/Logo";
import "./Step2FrameC.css";

export const Step3FrameContainer = () => {
  return (
    <div className='s2fContainer'>
      <img
        style={{ position: "relative", top: "60px" }}
        src='./src/assets/step3/Frame.png'
        alt=''
      />
      <div style={{ position: "relative", top: "50px", left: "80px" }}>
        <Logo />
        <img
          style={{ position: "absolute", bottom:"150px", left:"-40px" }}
          src='./src/assets/step3/franky.png'
          alt=''
        />
      </div>
    </div>
  );
};
