import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Step1 } from "../Pages/step1/Step1";
import { Step2 } from "../Pages/step2/Step2";
import { Step3 } from "../Pages/step3/Step3";
import { Step4 } from "../Pages/step4/Step4";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='step1' element={<Step1 />} />
        <Route path='/' element={<Navigate to='/step1' replace />} />
        <Route path='step2' element={<Step2 />} />
        <Route path='step3' element={<Step3 />} />
        <Route path='step4' element={<Step4 />} />
        <Route path='/*' element={<Navigate to='/step1' replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
