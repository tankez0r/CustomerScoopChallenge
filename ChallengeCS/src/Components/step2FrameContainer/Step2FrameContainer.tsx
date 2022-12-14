import { FrameTexts2 } from "./FrameTexts2";
import "./Step2FrameC.css";

export const Step2FrameContainer = () => {
  return (
    <div className='s2fContainer'>
      <img className='s2frame' src='./src/assets/step2/Frame.png' alt='' />
      <div className='s2textContainer'>
        <h3 className='s2Tittle'>Te puede ayudar a:</h3>
        <FrameTexts2 />
      </div>
    </div>
  );
};
