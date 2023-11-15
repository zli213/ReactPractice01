import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({ title, min, max, defaultValue, step }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        marks
        step={step}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderComponent;
