import React from "react";
import SliderComponent from "./common/SliderComponent";

const SlideSelect = () => {
  return (
    <div>
      <SliderComponent
        title={1}
        defaultValue={25}
        min={0}
        max={1000}
        step={100}
        onChange={(e, value) => console.log(value)}
      />
      {/* <SliderComponent title="2" />
      <SliderComponent title="3" /> */}
    </div>
  );
};

export default SlideSelect;
