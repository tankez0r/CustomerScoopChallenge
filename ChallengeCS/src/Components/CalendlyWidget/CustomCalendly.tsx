import { InlineWidget, PopupWidget } from "react-calendly";
import React from "react";

export const CustomCalendly = () => {
  return (
    <InlineWidget
      pageSettings={{}}
      styles={{
        width: "500px",
        height: "450px",
        position: "absolute",
        left: "2%",
        top:"2%"
      }}
      url='https://calendly.com/martintorres1992/30min'
    />
  );
};
