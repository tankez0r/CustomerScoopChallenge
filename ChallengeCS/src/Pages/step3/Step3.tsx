import { useLocation } from "react-router-dom";
import { CustomCalendly } from "../../Components/CalendlyWidget/CustomCalendly";
import { NavigationButton } from "../../Components/NavigationButtons/NavigationButton";
import { Step3FrameContainer } from "../../Components/step3FrameContainer/Step3FrameContainer";
export const Step3 = () => {
  const { state } = useLocation();
  return (
    <div className='container'>
      <CustomCalendly />
      <div className="navigationbuttonsContainer">
        <NavigationButton to={"/step4"} text='Confirmar' buttonType="confirmButton" />
      </div>
      <div className='greenBG extendsHeight'>
        <Step3FrameContainer />
      </div>
    </div>
  );
};
