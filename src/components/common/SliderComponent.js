import React from "react";
import Slider from "@mui/material/Slider";
import "./SliderComponent.css";

const SliderComponent = ({
  title,
  min,
  max,
  defaultValue,
  step,
  onChange,
  amount,
  unit,
}) => {
  return (
    <div className="SliderComponent">
      {title && <h3>{title}</h3>}
      <h3>
        {unit}
        {amount}
      </h3>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        marks
        step={step}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
      />
      <div className="sliderRange">
        <div className="sliderRangeL">
          <h3>
            {unit}
            {min}
          </h3>
        </div>
        <div className="sliderRangeR">
          <h3>
            {unit}
            {max}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
