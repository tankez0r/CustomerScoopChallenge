import { Step1ImgContainer } from "../../Components/Step1ImgContainer/Step1ImgContainer";
import { TopicButtons } from "../../Components/TopicButtons/TopicButtons";
import "./../step.css";

export const Step1 = () => {
  return (
    <div className='container'>
      <div className='ButtonsBlock'>
        <div className="textBlock">
          <h4>Ahora te vamos a sorprender...</h4>
          <span>¿A cual industria pertenece tu empresa?</span>
        </div>
        <TopicButtons />
      </div>
      <Step1ImgContainer />
    </div>
  );
};
