import { Button } from "../../Components/Button/Button";
import NavLinkButton from "../../Components/NavLinkButton/NavLinkButton";
import { Step4FrameContainer } from "../../Components/step4FrameContainer/Step4FrameContainer";
import "./../step.css";
export const Step4 = () => {
  return (
    <div className='container greenBG'>
      <div className='ButtonsBlock'>
        <div className='textBlock'>
          <h4>Muchas Gracias!</h4>
          <span>Por ser parte de la familia Scoopers</span>
          <br />
          <br />
          <span>
            <i>Nos vemos pronto!</i>
          </span>
          <div style={{position:'relative', left:"160px", top:"30px"}}>
            <NavLinkButton
              to='/step1'
              buttonType='darkButton'
              text='Finalizar'
            />
          </div>
        </div>
        <br />
      </div>
      <Step4FrameContainer />
    </div>
  );
};
