import { useLocation } from "react-router-dom";
import AssetDecoration from "../../Components/AssetDecoration/AssetDecoration";
import { ChurnAndRetailContainer } from "../../Components/churn&retail/ChurnAndRetailContainer";
import { NavigationButton } from "../../Components/NavigationButtons/NavigationButton";
import { Step2FrameContainer } from "../../Components/step2FrameContainer/Step2FrameContainer";
import "./../step.css";
export const Step2 = () => {
  const { state } = useLocation();
  return (
    <div className='container greenBG'>
      <div className='ButtonsBlock'>
        <div className='textBlock'>
          <h4>Fantástico!</h4>
          <span>
            <>{console.log(state)}</>
            Mira el churn Rate 2022 y el Lead Conversion Rate de tu industria:
          </span>
          <h3 className='whiteTittle'>{state.name}</h3>
        </div>
        <ChurnAndRetailContainer />
        <AssetDecoration />
        <NavigationButton to="/step3" text="Agendar Demo"/>
      </div>
      <Step2FrameContainer />
    </div>
  );
};
