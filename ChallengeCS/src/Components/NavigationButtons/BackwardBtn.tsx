import { useNavigate } from 'react-router-dom';
import './NavigationButton.css'

export const BackwardBtn = () => {
  const navigation = useNavigate()
  return (
    <a className="backwardcontainer" onClick={()=>{navigation(-1)}}>
      <img
        src='./arrow-left-solid.svg'
        alt=''    style={{height:"14px", width:'50px'}}  />
    </a>
  );
};
