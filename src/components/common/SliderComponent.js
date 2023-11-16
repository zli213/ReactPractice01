import React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({
  title,
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
}) => {
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
        onChange={onChange}
        value={value}
      />
      <div className="sliderRange">
        <div className="sliderRangeL">
          <h3>$1000</h3>
        </div>
        <div className="sliderRangeR">
          <h3>$10000</h3>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
